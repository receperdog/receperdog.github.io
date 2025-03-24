# Recep Erdogan Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Live Demo

Visit the portfolio at [receperdog.github.io/receperdogan.github.io](https://receperdog.github.io/receperdogan.github.io)

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
   git clone https://github.com/receperdog/receperdogan.github.io.git
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

Since this is a single-page application (SPA), you might experience 404 errors when directly accessing routes or refreshing pages. To fix this:

1. Create a custom 404.html file in the docs directory:
   ```bash
   touch docs/404.html
   ```

2. Add a script to redirect back to the index page with the correct route:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="utf-8">
     <title>Recep Erdogan | Software Engineer</title>
     <script>
       // Single Page Apps for GitHub Pages
       // https://github.com/rafgraph/spa-github-pages
       var pathSegmentsToKeep = 1;
       var l = window.location;
       l.replace(
         l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
         l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
         l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
         (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
         l.hash
       );
     </script>
   </head>
   <body>
     <p>Redirecting to portfolio...</p>
   </body>
   </html>
   ```

3. Add a script to your index.html to handle the redirect:
   ```html
   <!-- In the <head> section of your index.html -->
   <script type="text/javascript">
     // Single Page Apps for GitHub Pages
     // https://github.com/rafgraph/spa-github-pages
     (function(l) {
       if (l.search[1] === '/' ) {
         var decoded = l.search.slice(1).split('&').map(function(s) { 
           return s.replace(/~and~/g, '&')
         }).join('?');
         window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
         );
       }
     }(window.location))
   </script>
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
