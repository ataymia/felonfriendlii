# Tech Stack Constraints

This document defines the **hard technology requirements** for the Felon Friendly Resources project. These constraints are enforced to maintain simplicity and ensure the project remains accessible and maintainable.

## Allowed Technologies

### Front-End
- **HTML** - All UI markup must use standard HTML5
- **CSS** - Styling via standard CSS (vanilla CSS only, no preprocessors like Sass/Less)

### Back-End (if needed)
- **Java** - Server-side code may use Java-based technologies including:
  - Servlets
  - JSP (JavaServer Pages)
  - Spring Framework (with explicit approval)
  - Other Java-based server frameworks (with explicit approval)

### Current Exception
- **Vanilla JavaScript** - Limited vanilla JavaScript is currently used for basic interactivity (menu toggle, resource filtering). This is acceptable as it requires no build tools or frameworks.

## Disallowed Technologies (Hard Requirements)

The following technologies and tools are **strictly prohibited** without explicit owner approval:

### Frameworks & Build Tools
- ❌ JavaScript frameworks: React, Vue, Angular, Svelte, Next.js, SvelteKit, etc.
- ❌ Build tools: Webpack, Vite, Rollup, Parcel, etc.
- ❌ Package managers: NPM, Yarn, PNPM (when used for build tooling)
- ❌ TypeScript
- ❌ Node.js (as a runtime or build tool)

### Other Languages
- ❌ Python
- ❌ Ruby
- ❌ PHP
- ❌ Go
- ❌ Rust
- ❌ Any other languages not explicitly listed in "Allowed Technologies"

### Services & Advanced Technologies
- ❌ AI/LLM services
- ❌ Serverless platforms (AWS Lambda, Cloudflare Workers, etc.)
- ❌ Any external services that require complex integration

## General Development Guidelines

### Front-End Development
1. **Keep it Simple**: Use vanilla HTML and CSS for all UI work
2. **Interactivity**: Prefer HTML/CSS techniques (`:hover`, `:focus`, `<details>`, etc.) or server-side Java rendering when feasible
3. **Progressive Enhancement**: Ensure the site works without JavaScript when possible

### Asset Management
1. **Directory Structure**: Keep image assets in a consistent directory (e.g., `/images` or `/assets/img`)
2. **File Naming**: Use lowercase, case-consistent file names for all assets
3. **Relative Paths**: Reference assets using correct relative paths
4. **Case Sensitivity**: Be mindful that web servers may be case-sensitive; maintain consistent casing

### Java Application Guidelines (if applicable)
1. **Static Assets**: Ensure static assets are served from the appropriate location:
   - For Spring Boot: `src/main/resources/static` or `src/main/resources/public`
   - For Servlets: Configure static resource serving in web.xml or via servlet mapping
2. **No Complex Dependencies**: Avoid adding heavy frameworks or libraries without discussion
3. **Documentation**: Document any Java setup requirements clearly

## Adding New Technologies

If you believe a new technology or tool is necessary:

1. **Stop**: Do not add it without explicit approval
2. **Document**: Clearly explain why it's needed and what problem it solves
3. **Discuss**: Open an issue or discussion with the project owner
4. **Wait**: Get explicit approval before proceeding

## Rationale

These constraints ensure:
- **Low Barrier to Entry**: Anyone with basic HTML/CSS knowledge can contribute
- **No Build Complexity**: No need for complex build pipelines or toolchains
- **Maintainability**: Simple, straightforward codebase that's easy to understand
- **Reliability**: Fewer dependencies means fewer breaking changes and security vulnerabilities
- **Focus**: Keep attention on the mission of helping people with felony records

## Questions?

If you're unsure whether something is allowed, **ask first**. It's better to check than to invest time in work that violates these constraints.
