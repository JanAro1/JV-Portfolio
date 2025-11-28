# Portfolio Website

A modern, responsive portfolio website built with React.js featuring dark/light mode toggle, smooth animations, and separate pages for each section.

## Features

- 🌓 **Dark/Light Mode Toggle** - Switch between themes with a single click
- 📱 **Fully Responsive** - Works seamlessly on all device sizes
- 🎨 **Smooth Animations** - Beautiful page transitions and hover effects
- 🧭 **Navigation** - Separate pages for Home, About, Skills, Projects, Scheduling, and Contact
- 🎯 **Clean Structure** - Organized components and pages for easy maintenance

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile image:
   - Place your profile image in the `public` folder
   - Name it `profile.jpg` (or update the image path in `src/pages/Home.js`)

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar with theme toggle
│   ├── Navbar.css
│   ├── Footer.js       # Footer component
│   └── Footer.css
├── context/            # React context
│   └── ThemeContext.js # Theme management
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Home.css
│   ├── About.js        # About page
│   ├── Skills.js       # Skills page
│   ├── Projects.js     # Projects page
│   ├── Scheduling.js   # Scheduling page
│   ├── Contact.js      # Contact page
│   └── Page.css        # Shared page styles
├── App.js              # Main app component with routing
├── App.css             # Global styles and theme variables
└── index.js            # Entry point
```

## Customization

### Colors
Edit the CSS variables in `src/App.css` to customize the color scheme:
- `--accent-color`: Primary accent color (buttons, links)
- `--bg-primary`: Main background color
- `--text-primary`: Primary text color

### Profile Image
Replace `public/profile.jpg` with your own image, or update the path in `src/pages/Home.js`.

### Social Links
Update social media links in `src/components/Footer.js`.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18
- React Router DOM
- CSS3 (with CSS Variables for theming)
- Modern ES6+ JavaScript

## License

This project is open source and available under the MIT License.

