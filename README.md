# Template Docs Builder

**Template Docs Builder** is a powerful and flexible tool for creating, managing, and distributing documentation templates. Designed for teams and individuals who need to maintain clear, multi-language documentation, it streamlines the process of editing, extending, and localizing docs through a structured JSON configuration.


## Preview
![template-docs-builder-3](https://github.com/user-attachments/assets/5088e54f-4be9-4319-bf95-577850c94494)


## Features

- **Multi-Language Documentation**  
  Effortlessly manage documentation in multiple languages. Add or update sections, blocks, and steps for each language by editing a single configuration file.

- **Dynamic Variable Substitution**  
  Use template variables (e.g., `{username}`, `{server_ip}`) in commands and descriptions. These placeholders are automatically replaced with user-defined values, making your documentation interactive and reusable.

- **Seamless Development & Production Workflow**  
  Instantly preview changes with a development server (`npm run dev`) and generate a production-ready, single-file HTML output (`npm run build`) for easy sharing or deployment.

- **User Progress Persistence**  
  The app tracks which steps users have completed and saves progress locally, so users can pick up right where they left off—even after closing the browser.

- **Customizable & Extensible**  
  Add new variables, languages, or documentation sections with minimal effort. The interface language can be switched on the fly, and new languages are easy to integrate.

## Quick Start

1. **Install dependencies:**
   ```sh
   npm install
2. **Run project:**
   ```sh
   npm run dev
3. **Build:**
   ```sh
   npm build
