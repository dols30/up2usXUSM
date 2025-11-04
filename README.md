# Up to Us Website - USM Campaign

A modern, responsive website for the Up to Us campaign at the University of Southern Mississippi (USM).

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with React and Tailwind CSS for a beautiful, professional look
- **Interactive Navigation**: Single-page application with smooth section transitions
- **Multiple Sections**: Home, About, Events, Resources, and Get Involved pages
- **Interactive Quiz**: Fiscal trivia quiz with 10 questions
- **Social Media Integration**: LinkedIn integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub (see GitHub Setup below)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure the build settings
6. Click "Deploy"

The website will be live at a Vercel URL (e.g., `your-project.vercel.app`)

### GitHub Setup

1. Create a new repository on GitHub
2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit: Up to Us website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Project Structure

```
├── public/
│   └── images/          # Static images (logo, team photos)
├── src/
│   ├── App.jsx          # Main React component
│   ├── UpToUsLogo.jsx   # Logo component
│   ├── index.jsx        # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── vercel.json          # Vercel deployment configuration
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## License

This project is part of the Up to Us campaign at USM.

