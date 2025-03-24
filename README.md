# Recep Erdogan Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Live Demo

Visit the portfolio at [receperdogan.github.io](https://receperdogan.github.io)

## Features

- Modern, responsive design using Tailwind CSS
- Dark/Light theme toggle with user preference detection
- Smooth scrolling sections
- Project showcase
- Contact form
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
   git clone https://github.com/receperdogan/receperdogan.github.io.git
   cd receperdogan.github.io
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

The portfolio is configured for GitHub Pages deployment.

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Customization

- Update personal information in the component files
- Replace placeholder images with your own
- Modify project data in the `src/pages/projects/Projects.tsx` file
- Update contact information in the `src/pages/contact/Contact.tsx` file

## Folder Structure

```
receperdogan.github.io/
├─ src/
│  ├─ pages/              # Page components
│  │  ├─ home/
│  │  ├─ about/
│  │  ├─ projects/
│  │  └─ contact/
│  ├─ components/         # Reusable components
│  │  ├─ nav-bar/
│  │  ├─ footer/
│  │  └─ ui/
│  ├─ hooks/              # Custom React hooks
│  ├─ services/           # Data fetching or domain logic
│  ├─ App.tsx             # Root App component
│  └─ main.tsx            # ReactDOM render root
├─ public/                # Static assets
├─ index.html             # Vite entry
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## License

MIT

## Author

Recep Erdogan
