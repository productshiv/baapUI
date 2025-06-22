# BaapUI Project - AI Assistant Master Guide

## 🎯 Project Overview

**BaapUI** is a comprehensive multi-design UI library project consisting of two main applications:

1. **BaapUI Library** (`baapUI/`) - React Native/Expo UI component library
2. **BaapMCP Server** (`baapMCP/`) - AI assistance MCP server

## ⚠️ IMPORTANT: Read Specific AI Guides

**This project has TWO separate applications with different purposes:**

- 📚 **Working on UI Library?** → Read [`baapUI/ai.md`](./baapUI/ai.md)
- 🤖 **Working on MCP Server?** → Read [`baapMCP/ai.md`](./baapMCP/ai.md)

**DO NOT** work on either application without reading its specific AI guide first!

## 🏗️ Project Structure

```
BaapUI/
├── ai.md                    # This master guide
├── baapUI/                  # UI Component Library
│   ├── ai.md               # 📚 BaapUI Library AI Guide
│   ├── src/components/     # 30+ UI components
│   ├── src/themes/         # Design system implementations
│   ├── rules/              # Project rules and PRD
│   └── package.json        # Library dependencies
└── baapMCP/                # MCP Server for AI Assistance
    ├── ai.md               # 🤖 BaapMCP Server AI Guide
    ├── server.ts           # Main MCP server
    ├── tools/              # Modular MCP tools
    └── package.json        # Server dependencies
```

## 🎯 Combined Project Goals

### BaapUI Library Goals:
- Build comprehensive UI components for all user needs
- Support 5 design systems: **Flat**, **Neumorphic**, **Skeuomorphic**, **Glassmorphic**, **Retro**
- Enable global branding with customizable colors and themes
- Maintain high code quality with TypeScript, testing, and documentation
- Provide seamless cross-platform compatibility (iOS, Android, Web)

### BaapMCP Server Goals:
- Provide AI agents with comprehensive BaapUI library information
- Enable automated component discovery and usage examples
- Integrate with Plane project management for ticket creation
- Support multiple AI agents through standardized MCP protocol
- Maintain modular, scalable server architecture

## 🛠️ Unified Development Workflow

### 1. Plane Integration (CRITICAL)

**Every AI working on ANY part of this project MUST:**

1. **Create Plane ticket FIRST** before starting any work
2. **Get user approval** for the ticket scope and approach
3. **Document progress** in ticket comments as you work
4. **Update ticket status** when work is complete
5. **Link related tickets** for dependencies

#### Plane Project Details:
- **Project ID**: `6be3c1e0-eda3-4570-8ebc-855f74f300d8`
- **Project Name**: "BaapUI - Multi-Design UI Library"
- **Labels**: 
  - `AIFeatureRequest` (blue) - AI-generated feature requests
  - `AIBugReport` (red) - AI-generated bug reports

### 2. Application-Specific Workflows

- **UI Library Work**: Follow [`baapUI/ai.md`](./baapUI/ai.md) guidelines
- **MCP Server Work**: Follow [`baapMCP/ai.md`](./baapMCP/ai.md) guidelines

## 🚀 Quick Start Guide

### For BaapUI Library Development:
```bash
cd baapUI
npm install
npm run storybook  # Start component development
```

### For BaapMCP Server Development:
```bash
cd baapMCP
npm install
npm run build
npm start  # Start MCP server on port 3000
```

## 📋 Current Project Status

### Overall Progress: ~70% Complete

#### BaapUI Library (60% Complete):
- ✅ **30+ components** with flat design
- ✅ **Storybook** development environment
- ✅ **TypeScript** and testing infrastructure
- ❌ **Missing 3 design systems** (Skeuomorphic, Glassmorphic, Retro)
- ❌ **Global branding** system incomplete

#### BaapMCP Server (85% Complete):
- ✅ **MCP server** deployed and working
- ✅ **Modular architecture** with 6 tools
- ✅ **Plane integration** for ticket management
- 🔄 **Component discovery** needs metadata system
- 🔄 **Usage examples** need metadata system

## 🔄 Master AI Workflow Checklist

Before starting ANY work on this project, every AI must:

- [ ] Read this master `ai.md` guide
- [ ] Identify which application you'll be working on
- [ ] Read the specific application's `ai.md` guide
- [ ] Check MCP server status if needed (`curl localhost:3000/health`)
- [ ] Create Plane ticket for proposed work
- [ ] Get user approval before proceeding
- [ ] Follow application-specific development guidelines
- [ ] Document progress in ticket comments
- [ ] Update relevant `ai.md` files if structure changes

## 📝 Important Notes

### For AI Assistants:
- **NEVER** work on both applications simultaneously without clear separation
- **ALWAYS** read the specific application guide before starting
- **KEEP** the applications' concerns separate
- **COORDINATE** between applications when needed (e.g., component metadata)
- **FOLLOW** the established Plane workflow for all work

### For Users:
- Review and approve all AI-generated tickets
- Specify which application the work should target
- Monitor progress across both applications
- Validate completed work before closing tickets

## 🔗 Inter-Application Dependencies

The two applications work together but remain separate:

- **MCP Server** reads BaapUI library files for component information
- **MCP Server** helps generate BaapUI component code and documentation
- **Both** use the same Plane project for ticket management
- **Both** follow the same AI workflow requirements

---

*This master guide should be updated when either application's structure significantly changes.*

**Last Updated**: Initial creation - Separated application guides
**Next Update Needed**: When project architecture changes 