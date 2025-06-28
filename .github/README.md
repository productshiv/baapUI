# GitHub Workflows

This directory contains GitHub Actions workflows for the BaapUI repository.

## Workflows

### `invalidate-mcp-cache.yml`

**Purpose**: Automatically invalidates the BaapMCP cache when components or metadata change.

**Triggers**:
- Push to `main` branch when these files change:
  - `components-metadata.json`
  - `src/components/**`
  - `package.json`
- Manual trigger via GitHub UI

**Requirements**:
- Repository secret: `CACHE_INVALIDATION_KEY`
- MCP server running at: `https://mcp.baapui.com`

**Setup**:
1. Go to Repository Settings → Secrets and variables → Actions
2. Add new repository secret:
   - Name: `CACHE_INVALIDATION_KEY`
   - Value: Your secure API key for cache invalidation

**What it does**:
- Sends a secure API request to the MCP server
- Clears the component metadata cache
- Ensures users get fresh component data immediately
- Falls back gracefully if the request fails

This ensures that when you update components or metadata, all MCP tools immediately reflect the latest changes instead of serving stale cached data. 