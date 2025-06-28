#!/bin/bash

# BaapUI Build and Cache Invalidation Script
# For use with Coolify deployment

set -e  # Exit on any error

echo "🚀 Starting BaapUI build process..."

# Note: Dependencies already installed in Docker build step
echo "📦 Dependencies already installed, proceeding with build..."

# Generate metadata
echo "📊 Generating component metadata..."
npm run generate-metadata

# Build storybook
echo "🔨 Building storybook..."
npm run build-storybook

# Copy metadata to public for hosting
echo "📋 Copying metadata to public directory..."
cp components-metadata.json public/components.json

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully!"
  
  # Invalidate MCP cache
  echo "🗑️ Invalidating MCP cache..."
  echo "🔍 Debug: Environment variables containing 'CACHE': $(env | grep -i cache || echo 'none found')"
  
  if [ -z "$CACHE_INVALIDATION_KEY" ]; then
    echo "⚠️ CACHE_INVALIDATION_KEY not set, skipping cache invalidation"
  else
    curl -X POST https://mcp.baapui.com/invalidate-cache \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $CACHE_INVALIDATION_KEY" \
      -d "{\"source\": \"coolify-build\", \"trigger\": \"build-complete\", \"project\": \"baapui\", \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" \
      -w "HTTP Status: %{http_code}\n" \
      || echo "⚠️ Cache invalidation failed (non-critical)"
    
    echo "✅ Cache invalidation completed"
  fi
  
  echo "🎉 Build and deployment process completed successfully!"
else
  echo "❌ Build failed, skipping cache invalidation"
  exit 1
fi 