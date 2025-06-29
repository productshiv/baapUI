# Changelog 

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.7] - 2025-06-29

### Added

- New structural components for web development:
  - **Section**: Generic section wrapper with padding options and design system support
  - **Container**: Max-width container with responsive breakpoints (sm:640px, md:768px, lg:1024px, xl:1280px)
  - **TwoColumn**: Side-by-side layout with flexible ratios, gap control, mobile stacking
  - **Hero**: Main hero section with title/subtitle/description, multiple CTA actions, background support
  - **Navbar**: Navigation bar with logo, menu items, mobile hamburger, responsive behavior
  - **Footer**: Site footer with sections, links, social links, copyright, responsive layout
- Card component responsive props:
  - `centered` prop for horizontal centering (default: true)
  - `maxWidth` prop for responsive max-width (default: 400)
  - `responsive` prop to enable/disable responsive behavior
- Enhanced Typography component to support all ThemeDesign types (flat, neumorphic, skeuomorphic, material, simplistic)

### Fixed

- **Storybook Build Issues**: 
  - Added missing `@storybook/test` dependency to resolve module not found errors
  - Fixed TypeScript import issues in story files
- **TypeScript Build Errors**: 
  - Updated Typography component to accept full `ThemeDesign` type instead of limited 'flat' | 'neumorphic'
  - Added graceful fallback for unsupported design systems
  - Resolved all 9 TypeScript warnings for clean builds
- **Card Component Responsive Issues**:
  - Cards now center horizontally by default instead of left-aligning
  - Removed broken CSS @media queries that don't work in React Native
  - Improved responsive behavior with proper max-width handling
  - Enhanced out-of-box UX for forms and modal content

### Changed

- Card component now defaults to centered and responsive behavior
- Typography component design prop now accepts all theme designs with backward compatibility
- Enhanced Storybook stories with comprehensive examples for all new structural components
- Improved developer experience with minimal code requirements for responsive layouts

## [1.0.2] - 2024-04-03

### Fixed

- Updated build and test configurations
- Fixed package publishing issues

## [1.0.1] - 2024-04-03

### Changed

- Updated build configuration and dependencies
- Improved TypeScript configuration
- Enhanced Storybook setup
- Added proper documentation files

## [1.0.0] - 2024-04-03

### Added

- Initial release of the UI component library
- Core components: Card, Button, Text, etc.
- Storybook integration for component documentation
- TypeScript support
- ESLint and Prettier configurations
- MIT License
- Basic project documentation
