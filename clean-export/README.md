# Tommaso Piccioli Portfolio - Clean Export

This is a clean, semantic HTML/CSS/JS version of the Tommaso Piccioli portfolio, optimized for import into Framer.com.

## 📁 File Structure

```
clean-export/
├── index.html                 # Main portfolio page
├── bmw-x3-project.html       # BMW X3 project detail page
├── assets/
│   ├── styles/
│   │   ├── main.css          # Main stylesheet
│   │   └── project-detail.css # Project detail specific styles
│   ├── scripts/
│   │   ├── main.js           # Main JavaScript functionality
│   │   └── project-detail.js # Project detail specific scripts
│   ├── images/               # Image assets (currently using external URLs)
│   ├── icons/                # Icon assets
│   ├── fonts/                # Font assets
│   └── scripts/              # Additional scripts
└── README.md                 # This file
```

## 🎨 Design Features

### Clean Semantic Structure
- **Semantic HTML5**: Uses proper `<header>`, `<section>`, `<main>`, `<footer>` tags
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimized**: Proper meta tags, structured data ready

### Responsive Design
- **Mobile First**: Optimized for all device sizes
- **Flexible Grid**: CSS Grid and Flexbox for modern layouts
- **Touch Friendly**: Optimized for mobile interactions

### Performance Optimized
- **Minimal Dependencies**: Pure HTML/CSS/JS, no frameworks
- **Optimized Images**: Lazy loading and preloading strategies
- **Smooth Animations**: Hardware-accelerated CSS transitions

## 🚀 Framer Import Instructions

### 1. Prepare Assets
1. Download all images from external URLs and place them in `assets/images/`
2. Update image paths in HTML files to use local assets
3. Ensure all fonts are properly loaded

### 2. Import to Framer
1. **Create New Project**: Start a new Framer project
2. **Import HTML**: Use Framer's HTML import feature
3. **Upload Assets**: Upload the `assets` folder to Framer's asset manager
4. **Link Stylesheets**: Ensure CSS files are properly linked

### 3. Framer-Specific Adjustments

#### Component Structure
Each section is designed as a reusable component:
- **Hero Section**: Full-screen landing area
- **About Section**: Two-column layout with text and image
- **Projects Section**: Grid of project cards
- **Contact Section**: Contact methods with hover effects

#### Interactive Elements
- **Navigation**: Smooth scroll navigation
- **Project Cards**: Hover effects and click handlers
- **Contact Methods**: Interactive contact cards
- **Image Gallery**: Lightbox functionality

### 4. Customization Options

#### Colors
Update CSS variables in `main.css`:
```css
:root {
  --color-primary: #aec7e9;
  --color-secondary: #C8966B;
  --color-background: #000000;
  /* ... other variables */
}
```

#### Typography
Font families can be changed in CSS variables:
```css
:root {
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Montserrat', sans-serif;
  --font-accent: 'Urbanist', sans-serif;
}
```

#### Spacing
Adjust spacing using CSS variables:
```css
:root {
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  /* ... other spacing variables */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features for Framer

### 1. Modular Components
Each section is self-contained and can be easily moved or duplicated in Framer.

### 2. Clean Class Names
All CSS classes follow a clear naming convention:
- `.hero-section`, `.about-section`, `.projects-section`
- `.nav-link`, `.project-card`, `.contact-method`
- `.fade-in-up`, `.scale-in` (animation classes)

### 3. Interactive States
- Hover effects on all interactive elements
- Active states for navigation
- Focus states for accessibility

### 4. Animation Classes
Ready-to-use animation classes:
- `.fade-in-up`: Fade in from bottom
- `.fade-in-left`: Fade in from left
- `.fade-in-right`: Fade in from right
- `.scale-in`: Scale in animation

## 🔧 JavaScript Functionality

### Navigation
- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive navigation

### Interactions
- Project card hover effects
- Contact method animations
- Image gallery lightbox
- Scroll progress indicator

### Performance
- Throttled scroll events
- Lazy loading for images
- Preloading for critical assets

## 📊 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Features Used**: CSS Grid, Flexbox, CSS Variables, Intersection Observer

## 🎨 Design System

### Color Palette
- **Primary**: #aec7e9 (Light Blue)
- **Secondary**: #C8966B (Warm Gold)
- **Background**: #000000 (Black)
- **Text**: #ffffff (White)

### Typography Scale
- **Headings**: 2rem - 10rem (responsive)
- **Body**: 0.875rem - 1.25rem
- **Small**: 0.75rem - 0.875rem

### Spacing Scale
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **2XL**: 4rem
- **3XL**: 6rem

## 🚀 Performance Tips for Framer

1. **Optimize Images**: Compress images before uploading
2. **Use WebP**: Convert images to WebP format for better compression
3. **Lazy Load**: Implement lazy loading for below-the-fold images
4. **Minify CSS/JS**: Minify files for production
5. **CDN**: Use a CDN for faster asset delivery

## 📝 Notes

- All external image URLs should be replaced with local assets
- Font loading can be optimized with font-display: swap
- Consider implementing a service worker for offline functionality
- Analytics can be easily added to track user interactions

## 🔗 External Dependencies

- **Google Fonts**: Inter, Montserrat, Urbanist
- **External Images**: Currently using Unsplash and Google Storage URLs
- **No JavaScript Frameworks**: Pure vanilla JavaScript

## 📞 Support

For questions about this clean export or Framer integration, please contact:
- **Email**: tommaso.piccioli@email.com
- **Portfolio**: This portfolio itself!

---

**Ready for Framer Import** ✅
This clean export is optimized for seamless import into Framer.com with minimal adjustments needed.
