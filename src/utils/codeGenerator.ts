import { StyleProp, ViewStyle, TextStyle } from 'react-native';

interface CodeGeneratorOptions {
  componentName: string;
  props: Record<string, any>;
  imports?: string[];
}

// Define the order of common props
const PROP_ORDER = [
  'children',
  'title',
  'content',
  'variant',
  'size',
  'elevation',
  'header',
  'footer',
  'disabled',
  'loading',
  'onPress',
  'onChange',
  'onChangeText',
  'value',
  'placeholder',
  'style',
  'textStyle',
];

const formatValue = (value: any): string => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (typeof value === 'function') {
    const fnBody = value.toString();
    // Format event handlers to be more readable
    if (fnBody.includes('console.log')) {
      return `() => console.log('${fnBody.match(/['"]([^'"]*)['"]/)?.[1] || 'clicked'}')`; 
    }
    // If it's an arrow function or regular function, keep it clean
    if (fnBody.includes('=>')) {
      return fnBody.replace(/^\(\) =>/, '() =>');
    }
    return fnBody;
  }
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return `[${value.map(formatValue).join(', ')}]`;
    }
    // Handle style objects
    if ('__typeName' in value && value.__typeName === 'StyleProp') {
      return JSON.stringify(value, null, 2);
    }
    return JSON.stringify(value, null, 2);
  }
  if (typeof value === 'boolean') {
    return String(value);
  }
  if (typeof value === 'number') {
    return String(value);
  }
  return String(value);
};

export const generateComponentCode = ({ componentName, props }: CodeGeneratorOptions): string => {
  // Filter out undefined props
  const validProps = Object.entries(props).filter(([_, value]) => value !== undefined);
  
  // Sort props based on the defined order
  const sortedProps = validProps.sort(([a], [b]) => {
    const aIndex = PROP_ORDER.indexOf(a);
    const bIndex = PROP_ORDER.indexOf(b);
    
    // If both props are in the order list, sort by their index
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    // If only one prop is in the order list, it should come first
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    // For props not in the order list, sort alphabetically
    return a.localeCompare(b);
  });

  // Special handling for Card component
  if (componentName === 'Card') {
    const hasTitle = props.title || typeof props.children === 'string';
    const hasContent = props.content || (typeof props.children === 'string' && !props.title);
    
    return `import { Card } from '@productshiv/baapuibeta';

export const Example = () => {
  return (
    <Card
      ${sortedProps
        .filter(([key]) => key !== 'children' && key !== 'content')
        .map(([key, value]) => `${key}={${formatValue(value)}}`)
        .join('\n      ')}
    >
      ${hasTitle ? `<Card.Title>${formatValue(props.title || props.children)}</Card.Title>` : ''}
      ${hasContent ? `<Card.Content>${formatValue(props.content || (!props.title ? props.children : ''))}</Card.Content>` : ''}
    </Card>
  );
};`;
  }

  const formattedProps = sortedProps
    .map(([key, value]) => {
      const formattedValue = formatValue(value);
      return `      ${key}={${formattedValue}}`;
    })
    .join('\n');

  return `import { ${componentName} } from '@productshiv/baapuibeta';

export const Example = () => {
  return (
    <${componentName}
${formattedProps}
    />
  );
};`;
};

export const formatCode = (code: string): string => {
  return code
    .replace(/\n\s*\n/g, '\n') // Remove multiple empty lines
    .replace(/;\s*$/, '') // Remove trailing semicolon
    .replace(/>\s+</g, '>\n      <'); // Format nested JSX
}; 