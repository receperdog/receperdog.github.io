# Recep Erdogan Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Live Demo

Visit the portfolio at [receperdog.github.io](https://receperdog.github.io)

## Features

- Modern, responsive design using Tailwind CSS
- Dark/Light theme toggle with user preference detection
- Smooth scrolling sections
- Project showcase with filterable tags
- Professional CV download option
- GitHub Pages deployment

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/receperdog/receperdog.github.io.git
   cd receperdog.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 to view it in the browser.

## Deployment

The portfolio is configured for GitHub Pages deployment using the `docs` folder method.

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the build files to the docs folder:
   ```bash
   cp -r dist/* docs/
   ```

3. Commit and push changes to GitHub:
   ```bash
   git add docs
   git commit -m "Update deployment files"
   git push
   ```

GitHub Pages will automatically deploy from the `/docs` folder in the main branch.

## Handling 404 Errors

Since this is a single-page application (SPA), a custom 404.html file is included to handle client-side routing on GitHub Pages. This ensures that direct navigation to routes like `/projects` works correctly without showing 404 errors.

## Customization

- Update personal information in the component files
- Replace placeholder images with your own
- Modify project data in the `src/pages/projects/Projects.tsx` file
- Update contact information in the `src/pages/contact/Contact.tsx` file

## Folder Structure

```
receperdog.github.io/
├─ src/
│  ├─ pages/              # Page components
│  │  ├─ home/
│  │  ├─ about/
│  │  ├─ projects/
│  │  └─ contact/
│  ├─ components/         # Reusable components
│  │  ├─ nav-bar/
│  │  ├─ footer/
│  ├─ App.tsx             # Root App component
│  └─ main.tsx            # ReactDOM render root
├─ public/                # Static assets
│  ├─ images/             # Images including profile photo
│  ├─ files/              # PDF files (CV)
├─ docs/                  # Build output for GitHub Pages deployment
├─ index.html             # Vite entry
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## License

MIT

## Author

Recep Erdogan
