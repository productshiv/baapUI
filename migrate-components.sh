#!/bin/bash

# Script to migrate all components from react-native imports to platform abstraction

echo "🚀 Starting BaapUI Cross-Platform Migration..."

# Find all component files that import from react-native
files=$(find src/components -name "*.tsx" -exec grep -l "from 'react-native'" {} \;)

count=0
for file in $files; do
    echo "📦 Migrating: $file"
    
    # Replace react-native import with platform import
    sed -i '' "s|from 'react-native'|from '../../platform'|g" "$file"
    
    count=$((count + 1))
done

echo "✅ Migration complete! Migrated $count files."
echo "🔧 Next: npm run build:lib && npm publish" 