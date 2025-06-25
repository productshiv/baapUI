import * as fs from 'fs';
import * as path from 'path';
import { ComponentScanner, ComponentInfo } from './component-scanner';

export interface ComponentsMetadata {
  version: string;
  generatedAt: string;
  totalComponents: number;
  categories: Record<string, string[]>;
  designSystems: string[];
  components: ComponentInfo[];
}

export class MetadataGenerator {
  private scanner: ComponentScanner;
  private outputPath: string;

  constructor(componentsDir?: string, outputPath?: string) {
    this.scanner = new ComponentScanner(componentsDir);
    this.outputPath = outputPath || path.resolve(__dirname, '../components-metadata.json');
  }

  /**
   * Generate complete metadata for all components
   */
  async generateMetadata(): Promise<ComponentsMetadata> {
    console.log('🔍 Scanning components...');
    const components = await this.scanner.scanComponents();

    console.log(`📊 Found ${components.length} components`);

    const metadata: ComponentsMetadata = {
      version: this.getPackageVersion(),
      generatedAt: new Date().toISOString(),
      totalComponents: components.length,
      categories: this.groupByCategory(components),
      designSystems: this.extractAllDesignSystems(components),
      components,
    };

    return metadata;
  }

  /**
   * Generate and save metadata to file
   */
  async generateAndSave(): Promise<void> {
    try {
      const metadata = await this.generateMetadata();

      console.log('💾 Saving metadata to:', this.outputPath);
      fs.writeFileSync(this.outputPath, JSON.stringify(metadata, null, 2), 'utf-8');

      console.log('✅ Metadata generated successfully!');
      console.log(`📁 Output: ${this.outputPath}`);
      console.log(`📦 Components: ${metadata.totalComponents}`);
      console.log(`🎨 Categories: ${Object.keys(metadata.categories).length}`);
      console.log(`🎭 Design Systems: ${metadata.designSystems.length}`);

      // Also save a minified version for production
      const minifiedPath = this.outputPath.replace('.json', '.min.json');
      fs.writeFileSync(minifiedPath, JSON.stringify(metadata), 'utf-8');
      console.log(`🗜️  Minified: ${minifiedPath}`);
    } catch (error) {
      console.error('❌ Error generating metadata:', error);
      throw error;
    }
  }

  /**
   * Get package version from package.json
   */
  private getPackageVersion(): string {
    try {
      const packagePath = path.resolve(__dirname, '../package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
      return packageJson.version || '1.0.0';
    } catch (error) {
      console.warn('Warning: Could not read package version, using 1.0.0');
      return '1.0.0';
    }
  }

  /**
   * Group components by category
   */
  private groupByCategory(components: ComponentInfo[]): Record<string, string[]> {
    const categories: Record<string, string[]> = {};

    components.forEach(component => {
      if (!categories[component.category]) {
        categories[component.category] = [];
      }
      categories[component.category].push(component.name);
    });

    // Sort categories and component names
    const sortedCategories: Record<string, string[]> = {};
    Object.keys(categories)
      .sort()
      .forEach(category => {
        sortedCategories[category] = categories[category].sort();
      });

    return sortedCategories;
  }

  /**
   * Extract all unique design systems
   */
  private extractAllDesignSystems(components: ComponentInfo[]): string[] {
    const designSystems = new Set<string>();

    components.forEach(component => {
      component.designSystems.forEach(ds => designSystems.add(ds));
    });

    return Array.from(designSystems).sort();
  }

  /**
   * Generate summary report
   */
  generateSummaryReport(metadata: ComponentsMetadata): string {
    const report = [
      '# BaapUI Components Metadata Report',
      '',
      `**Generated:** ${new Date(metadata.generatedAt).toLocaleString()}`,
      `**Version:** ${metadata.version}`,
      `**Total Components:** ${metadata.totalComponents}`,
      '',
      '## Categories',
      '',
      ...Object.entries(metadata.categories).map(
        ([category, components]) =>
          `- **${category}** (${components.length}): ${components.join(', ')}`
      ),
      '',
      '## Design Systems',
      '',
      ...metadata.designSystems.map(ds => `- ${ds}`),
      '',
      '## Components Overview',
      '',
      ...metadata.components.map(
        component =>
          `### ${component.name}\n` +
          `- **Category:** ${component.category}\n` +
          `- **Description:** ${component.description}\n` +
          `- **Props:** ${component.props.length}\n` +
          `- **Examples:** ${component.examples.length}\n` +
          `- **Design Systems:** ${component.designSystems.join(', ')}\n`
      ),
    ];

    return report.join('\n');
  }

  /**
   * Save summary report
   */
  async saveSummaryReport(metadata: ComponentsMetadata): Promise<void> {
    const reportPath = this.outputPath.replace('.json', '-report.md');
    const report = this.generateSummaryReport(metadata);

    fs.writeFileSync(reportPath, report, 'utf-8');
    console.log(`📄 Summary report: ${reportPath}`);
  }
}

// CLI functionality
if (require.main === module) {
  async function main() {
    const args = process.argv.slice(2);
    const outputPath = args.find(arg => arg.startsWith('--output='))?.split('=')[1];
    const componentsDir = args.find(arg => arg.startsWith('--components='))?.split('=')[1];
    const includeReport = args.includes('--report');

    const generator = new MetadataGenerator(componentsDir, outputPath);

    try {
      await generator.generateAndSave();

      if (includeReport) {
        const metadata = await generator.generateMetadata();
        await generator.saveSummaryReport(metadata);
      }

      console.log('🎉 All done!');
    } catch (error) {
      console.error('💥 Generation failed:', error);
      process.exit(1);
    }
  }

  main();
}
