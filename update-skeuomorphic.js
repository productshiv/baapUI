// Script to update all components with skeuomorphic design support
const fs = require('fs');
const path = require('path');

// List of components that need skeuomorphic support
const componentsToUpdate = [
  'Accordion', 'Avatar', 'Badge', 'BaapSafeArea', 'Breadcrumbs', 
  'Carousel', 'Chip', 'Divider', 'Drawer', 'Dropdown', 
  'Grid', 'Label', 'List', 'Pagination', 'SkeletonLoader', 
  'Slider', 'Spinner', 'Stepper', 'Table', 'Tabs', 'TextArea', 'Tooltip'
];

// Function to update component files
function updateComponent(componentName) {
  const componentPath = path.join(__dirname, 'src', 'components', componentName, `${componentName}.tsx`);
  
  if (!fs.existsSync(componentPath)) {
    console.log(`Component ${componentName} not found at ${componentPath}`);
    return;
  }
  
  let content = fs.readFileSync(componentPath, 'utf8');
  
  // Add skeuomorphic import if not present
  if (!content.includes('skeuomorphic')) {
    const importLine = content.match(/import.*from.*neumorphic.*/);
    if (importLine) {
      const newImport = importLine[0].replace(
        /from '(.*)neumorphic';/,
        "from '$1neumorphic';\nimport { SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';"
      );
      content = content.replace(importLine[0], newImport);
    }
  }
  
  // Update design prop type
  content = content.replace(
    /design\?:\s*'flat'\s*\|\s*'neumorphic';/g,
    "design?: 'flat' | 'neumorphic' | 'skeuomorphic';"
  );
  
  // Add basic skeuomorphic styling
  const neumorphicPattern = /design === 'neumorphic'[\s\S]*?}/g;
  const matches = content.match(neumorphicPattern);
  
  if (matches) {
    matches.forEach(match => {
      const skeuomorphicBlock = match.replace(
        /design === 'neumorphic'/g,
        "design === 'skeuomorphic'"
      ).replace(
        /NEUMORPHIC_COLORS/g,
        'SKEUOMORPHIC_COLORS'
      );
      
      content = content.replace(
        match,
        match + '\n\n    if (' + skeuomorphicBlock
      );
    });
  }
  
  fs.writeFileSync(componentPath, content);
  console.log(`Updated ${componentName} component`);
}

// Update all components
componentsToUpdate.forEach(updateComponent);

console.log('Skeuomorphic update complete!');