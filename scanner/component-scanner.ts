import * as fs from 'fs';
import * as path from 'path';

export interface ComponentInfo {
  name: string;
  path: string;
  description: string;
  props: PropInfo[];
  examples: ExampleInfo[];
  designSystems: string[];
  category: string;
}

export interface PropInfo {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
}

export interface ExampleInfo {
  title: string;
  description: string;
  code: string;
  designSystem?: string;
}

export class ComponentScanner {
  private componentsDir: string;
  
  constructor(componentsDir: string = '../src/components') {
    this.componentsDir = path.resolve(__dirname, componentsDir);
  }

  /**
   * Scan all components in the components directory
   */
  async scanComponents(): Promise<ComponentInfo[]> {
    const components: ComponentInfo[] = [];
    
    try {
      const componentDirs = fs.readdirSync(this.componentsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .filter(dirent => !dirent.name.startsWith('__')) // Skip __tests__ etc
        .map(dirent => dirent.name);

      for (const componentName of componentDirs) {
        const componentInfo = await this.scanComponent(componentName);
        if (componentInfo) {
          components.push(componentInfo);
        }
      }
    } catch (error) {
      console.error('Error scanning components directory:', error);
    }

    return components.sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Scan a single component directory
   */
  private async scanComponent(componentName: string): Promise<ComponentInfo | null> {
    const componentDir = path.join(this.componentsDir, componentName);
    const componentFile = path.join(componentDir, `${componentName}.tsx`);
    const storiesFile = path.join(componentDir, `${componentName}.stories.tsx`);

    if (!fs.existsSync(componentFile)) {
      console.warn(`Component file not found: ${componentFile}`);
      return null;
    }

    try {
      const componentContent = fs.readFileSync(componentFile, 'utf-8');
      const storiesContent = fs.existsSync(storiesFile) 
        ? fs.readFileSync(storiesFile, 'utf-8') 
        : '';

      return {
        name: componentName,
        path: `src/components/${componentName}/${componentName}.tsx`,
        description: this.extractDescription(componentContent, storiesContent),
        props: this.extractProps(componentContent),
        examples: this.extractExamples(storiesContent, componentName),
        designSystems: this.extractDesignSystems(componentContent),
        category: this.categorizeComponent(componentName)
      };
    } catch (error) {
      console.error(`Error scanning component ${componentName}:`, error);
      return null;
    }
  }

  /**
   * Extract component description from JSDoc or stories
   */
  private extractDescription(componentContent: string, storiesContent: string): string {
    // Try to find JSDoc comment above component
    const jsdocMatch = componentContent.match(/\/\*\*\s*\n\s*\*\s*(.+?)\s*\n\s*\*\//);
    if (jsdocMatch) {
      return jsdocMatch[1].trim();
    }

    // Try to find description in stories
    const storiesDescMatch = storiesContent.match(/description:\s*['"`](.+?)['"`]/);
    if (storiesDescMatch) {
      return storiesDescMatch[1].trim();
    }

    // Try to find meta description
    const metaDescMatch = storiesContent.match(/meta\s*=\s*{[\s\S]*?description:\s*['"`](.+?)['"`]/);
    if (metaDescMatch) {
      return metaDescMatch[1].trim();
    }

    return `A ${this.componentNameToWords(componentContent.match(/(?:export\s+(?:default\s+)?(?:const|function)\s+|interface\s+)(\w+)/)?.[1] || 'Component')} component`;
  }

  /**
   * Extract props interface from TypeScript
   */
  private extractProps(componentContent: string): PropInfo[] {
    const props: PropInfo[] = [];
    
    // Find interface definitions
    const interfaceMatches = componentContent.matchAll(/interface\s+(\w*Props?)\s*{([\s\S]*?)}/g);
    
    for (const match of interfaceMatches) {
      const interfaceBody = match[2];
      const propMatches = interfaceBody.matchAll(/(\w+)(\??):\s*([^;]+);?(?:\s*\/\/\s*(.+))?/g);
      
      for (const propMatch of propMatches) {
        const [, name, optional, type, comment] = propMatch;
        props.push({
          name,
          type: type.trim(),
          required: !optional,
          description: comment?.trim() || `${name} property`,
          defaultValue: this.extractDefaultValue(componentContent, name)
        });
      }
    }

    return props;
  }

  /**
   * Extract default value for a prop
   */
  private extractDefaultValue(componentContent: string, propName: string): string | undefined {
    // Look for default props or destructured defaults
    const defaultMatch = componentContent.match(
      new RegExp(`${propName}\\s*=\\s*([^,}]+)`, 'g')
    );
    
    if (defaultMatch) {
      return defaultMatch[0].split('=')[1].trim();
    }

    return undefined;
  }

  /**
   * Extract examples from Storybook stories
   */
  private extractExamples(storiesContent: string, componentName: string): ExampleInfo[] {
    const examples: ExampleInfo[] = [];
    
    if (!storiesContent) {
      // Create a basic example if no stories exist
      examples.push({
        title: 'Basic Usage',
        description: `Basic ${componentName} component usage`,
        code: `<${componentName} />`
      });
      return examples;
    }

    // Extract story exports
    const storyMatches = storiesContent.matchAll(/export\s+const\s+(\w+)\s*=\s*{([\s\S]*?)};/g);
    
    for (const match of storyMatches) {
      const [, storyName, storyBody] = match;
      
      if (storyName === 'default') continue;
      
      const args = this.extractStoryArgs(storyBody);
      const designSystem = this.extractDesignSystemFromStory(storyBody);
      
      examples.push({
        title: this.storyNameToTitle(storyName),
        description: `${this.storyNameToTitle(storyName)} example`,
        code: this.generateExampleCode(componentName, args),
        designSystem
      });
    }

    return examples;
  }

  /**
   * Extract args from story body
   */
  private extractStoryArgs(storyBody: string): Record<string, any> {
    const args: Record<string, any> = {};
    
    const argsMatch = storyBody.match(/args:\s*{([\s\S]*?)}/);
    if (argsMatch) {
      const argsContent = argsMatch[1];
      const argMatches = argsContent.matchAll(/(\w+):\s*(.+?)(?:,|\n|$)/g);
      
      for (const argMatch of argMatches) {
        const [, key, value] = argMatch;
        args[key] = value.trim().replace(/,$/, '');
      }
    }
    
    return args;
  }

  /**
   * Generate example code from component name and args
   */
  private generateExampleCode(componentName: string, args: Record<string, any>): string {
    if (Object.keys(args).length === 0) {
      return `<${componentName} />`;
    }

    const propsString = Object.entries(args)
      .map(([key, value]) => {
        if (value.startsWith('"') || value.startsWith("'")) {
          return `${key}=${value}`;
        }
        return `${key}={${value}}`;
      })
      .join(' ');

    return `<${componentName} ${propsString} />`;
  }

  /**
   * Extract design systems supported by component
   */
  private extractDesignSystems(componentContent: string): string[] {
    const designSystems = ['flat']; // Default
    
    if (componentContent.includes('neumorphic') || componentContent.includes('Neumorphic')) {
      designSystems.push('neumorphic');
    }
    if (componentContent.includes('glassmorphic') || componentContent.includes('Glassmorphic')) {
      designSystems.push('glassmorphic');
    }
    if (componentContent.includes('skeuomorphic') || componentContent.includes('Skeuomorphic')) {
      designSystems.push('skeuomorphic');
    }
    if (componentContent.includes('retro') || componentContent.includes('Retro')) {
      designSystems.push('retro');
    }
    
    return designSystems;
  }

  /**
   * Extract design system from story
   */
  private extractDesignSystemFromStory(storyBody: string): string | undefined {
    if (storyBody.includes('neumorphic')) return 'neumorphic';
    if (storyBody.includes('glassmorphic')) return 'glassmorphic';
    if (storyBody.includes('skeuomorphic')) return 'skeuomorphic';
    if (storyBody.includes('retro')) return 'retro';
    return 'flat';
  }

  /**
   * Categorize component based on its name and functionality
   */
  private categorizeComponent(componentName: string): string {
    const name = componentName.toLowerCase();
    
    if (['button', 'input', 'textarea', 'checkbox', 'radiobutton', 'toggleswitch', 'slider', 'dropdown'].includes(name)) {
      return 'Form Controls';
    }
    if (['modal', 'drawer', 'tooltip', 'toast'].includes(name)) {
      return 'Overlays';
    }
    if (['card', 'accordion', 'tabs', 'carousel'].includes(name)) {
      return 'Layout';
    }
    if (['spinner', 'progressbar', 'skeletonloader'].includes(name)) {
      return 'Feedback';
    }
    if (['avatar', 'badge', 'chip', 'divider', 'label'].includes(name)) {
      return 'Display';
    }
    if (['list', 'table', 'pagination', 'breadcrumbs'].includes(name)) {
      return 'Data Display';
    }
    if (['grid', 'baapsafearea'].includes(name)) {
      return 'Layout';
    }
    if (['stepper'].includes(name)) {
      return 'Navigation';
    }
    if (['typography'].includes(name)) {
      return 'Typography';
    }
    
    return 'Other';
  }

  /**
   * Convert component name to readable words
   */
  private componentNameToWords(name: string): string {
    return name.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  }

  /**
   * Convert story name to title
   */
  private storyNameToTitle(storyName: string): string {
    return storyName.replace(/([A-Z])/g, ' $1').trim();
  }
} 