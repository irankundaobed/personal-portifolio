# IRANKUNDA Obed - Portfolio Website

A modern, responsive portfolio website built with React and JavaScript, featuring local storage for data persistence.

## 🚀 Features

- **Home Page**: Introduction and quick overview
- **About Page**: Detailed information, experience, and education
- **Skills Page**: Showcase of technical skills with progress bars
- **Projects Page**: Portfolio projects with filtering and detailed views
- **Blogs Page**: Technical blog posts with search functionality
- **Contact Page**: Contact form with local storage (messages saved locally)
- **Dark/Light Theme**: Toggle between themes (preference saved in local storage)
- **Responsive Design**: Works seamlessly on all devices
- **Local Storage**: All data persists in browser's local storage

## 🛠️ Technologies Used

- React 18
- React Router DOM (for navigation)
- JavaScript (ES6+)
- CSS3 (Custom styling)
- Local Storage API

## 📦 Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🏗️ Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── ProjectDetail.js
│   │   ├── ProjectDetail.css
│   │   ├── Blogs.js
│   │   ├── Blogs.css
│   │   ├── BlogDetail.js
│   │   ├── BlogDetail.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 💾 Local Storage Features

The portfolio uses browser's local storage to persist:

- **Theme Preference**: Dark/Light mode selection
- **Projects Data**: All project information
- **Blog Posts**: Blog articles and content
- **Contact Messages**: Form submissions (stored locally)

## 🎨 Customization

### Update Personal Information

1. **Name and Title**: Edit `src/pages/Home.js`
2. **Skills**: Modify skill categories in `src/pages/Skills.js`
3. **Projects**: Update the `defaultProjects` array in `src/pages/Projects.js`
4. **Blogs**: Modify the `defaultBlogs` array in `src/pages/Blogs.js`
5. **Contact Info**: Update contact details in `src/pages/Contact.js`

### Color Scheme

Colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  /* ... other colors */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be in the `build/` directory, ready for deployment.

## 📄 License

MIT License - feel free to use this portfolio template for your own projects.

## 👨‍💻 Developer

**IRANKUNDA Obed**
- Full Stack Developer
- Skills: React, JavaScript, Node.js, Express, TailwindCSS, HTML, CSS, Figma, PHP, SQL, Git

---

Built with ❤️ using React
