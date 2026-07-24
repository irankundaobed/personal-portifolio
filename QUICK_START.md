# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Open Command Prompt
- Press `Win + R`
- Type `cmd`
- Press Enter

### Step 2: Navigate and Install
```cmd
cd "z:\projects\new portifolio\portfolio"
npm install
```

### Step 3: Run the App
```cmd
npm start
```

Your portfolio will open automatically at `http://localhost:3000` 🎉

## 📝 Customize Your Portfolio

### 1. Update Personal Information
Edit `src/pages/Contact.js`:
- Change email, phone, location
- Update social media links

### 2. Add Your Projects
Edit `src/data/initialData.js`:
- Modify the `initialProjects` array
- Add your GitHub and live demo links

### 3. Write Blog Posts
Edit `src/data/initialData.js`:
- Update the `initialBlogs` array
- Add your own articles

### 4. Customize Skills
Edit `src/pages/Skills.js`:
- Update skill levels (0-100)
- Add or remove skills

### 5. Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-color: #3b82f6;    /* Your primary color */
  --secondary-color: #1e40af;  /* Your secondary color */
  --accent-color: #f59e0b;     /* Your accent color */
}
```

## 🎨 Features

✅ **Home** - Hero section with introduction
✅ **About** - Experience and education timeline
✅ **Skills** - Interactive skill bars
✅ **Projects** - Filterable project showcase
✅ **Blogs** - Searchable blog posts
✅ **Contact** - Working contact form
✅ **Dark Mode** - Theme toggle
✅ **Local Storage** - Data persistence
✅ **Responsive** - Mobile-friendly

## 📦 Build for Production

```cmd
npm run build
```

Deploy the `build/` folder to your hosting platform.

## 🆘 Need Help?

If you encounter issues:
1. Check `INSTALLATION.md` for detailed troubleshooting
2. Make sure Node.js is installed: `node --version`
3. Clear npm cache: `npm cache clean --force`

---

**Ready to showcase your work! 🚀**
