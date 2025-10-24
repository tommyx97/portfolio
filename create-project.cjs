#!/usr/bin/env node

/**
 * Portfolio Project Automation Script
 * Automatically creates new project folders, templates, and updates homepage
 * 
 * Usage: node create-project.js "Project Name" "Description"
 * Example: node create-project.js "BMW X3 Campaign" "A cinematic campaign for BMW X3"
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PROJECTS_DIR = './projects';
const HOMEPAGE_PATH = './index.html';
const TEMPLATE_DIR = './project-template';

// Utility functions
function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

function createProjectFolder(projectName) {
  const normalizedName = normalizeName(projectName);
  const projectDir = path.join(PROJECTS_DIR, `progetto-${normalizedName}`);
  
  if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  }
  
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
    fs.mkdirSync(path.join(projectDir, 'assets'), { recursive: true });
    console.log(`✅ Created project folder: ${projectDir}`);
  } else {
    console.log(`⚠️  Project folder already exists: ${projectDir}`);
  }
  
  return { projectDir, normalizedName };
}

function createProjectTemplate(projectDir, projectName, description) {
  const templateHTML = `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName} - Tommaso Piccioli Portfolio</title>
    <meta name="description" content="${description}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../favicon.ico">
    
    <!-- Styles -->
    <link rel="stylesheet" href="../src/index.css">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Project Header -->
    <header class="project-header">
        <nav class="project-nav">
            <div class="nav-left">
                <a href="../index.html" class="back-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Torna al Portfolio</span>
                </a>
            </div>
            <div class="nav-center">
                <h1 class="project-title">${projectName}</h1>
            </div>
            <div class="nav-right">
                <button onclick="scrollToContact()" class="contact-button">
                    <span>Contattami</span>
                </button>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="project-hero">
        <div class="hero-image">
            <img src="assets/cover.jpg" alt="${projectName} - Hero Image" loading="eager">
            <div class="hero-overlay">
                <div class="hero-content">
                    <h2 class="hero-title">${projectName}</h2>
                    <p class="hero-subtitle">${description}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Project Description -->
    <section class="project-description">
        <div class="container">
            <div class="description-content">
                <h3>Descrizione del Progetto</h3>
                <p>
                    <!-- TODO: Replace with actual project description -->
                    Questo è un progetto di esempio. Sostituisci questo testo con la descrizione dettagliata del tuo progetto.
                    Includi informazioni su:
                    - Obiettivo del progetto
                    - Processo creativo
                    - Tecnologie utilizzate
                    - Risultati ottenuti
                </p>
                
                <div class="project-details">
                    <div class="detail-item">
                        <span class="detail-label">Cliente:</span>
                        <span class="detail-value"><!-- TODO: Add client name --></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Anno:</span>
                        <span class="detail-value"><!-- TODO: Add year --></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Categoria:</span>
                        <span class="detail-value"><!-- TODO: Add category --></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Image Gallery -->
    <section class="project-gallery">
        <div class="container">
            <h3>Galleria Immagini</h3>
            <div class="gallery-grid">
                <!-- TODO: Add gallery images -->
                <!-- Copy this block for each image and update the src -->
                <div class="gallery-item">
                    <img src="assets/img-01.jpg" alt="${projectName} - Image 1" loading="lazy">
                </div>
                <div class="gallery-item">
                    <img src="assets/img-02.jpg" alt="${projectName} - Image 2" loading="lazy">
                </div>
                <div class="gallery-item">
                    <img src="assets/img-03.jpg" alt="${projectName} - Image 3" loading="lazy">
                </div>
                <!-- Add more images as needed -->
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="project-cta">
        <div class="container">
            <div class="cta-content">
                <h3>Interessato a un progetto simile?</h3>
                <p>Contattami per discutere delle tue esigenze creative.</p>
                <button onclick="scrollToContact()" class="cta-button">
                    <span>Inizia un progetto</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>

    <!-- Scripts -->
    <script>
        function scrollToContact() {
            // Navigate to homepage contact section
            window.location.href = '../index.html#contatti';
        }
        
        // Smooth scrolling for internal links
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>`;

  const indexPath = path.join(projectDir, 'index.html');
  fs.writeFileSync(indexPath, templateHTML);
  console.log(`✅ Created project template: ${indexPath}`);
}

function createAssetPlaceholders(projectDir) {
  const assetsDir = path.join(projectDir, 'assets');
  const placeholderFiles = [
    'cover.jpg',
    'thumb.jpg',
    'img-01.jpg',
    'img-02.jpg',
    'img-03.jpg'
  ];

  placeholderFiles.forEach(file => {
    const filePath = path.join(assetsDir, file);
    if (!fs.existsSync(filePath)) {
      // Create a placeholder text file with instructions
      const placeholderContent = `# Placeholder for ${file}

This is a placeholder file for ${file}.

Instructions:
1. Replace this file with your actual image
2. Ensure the image is optimized for web (JPG or WebP)
3. Recommended dimensions:
   - cover.jpg: 1920x1080px (16:9 ratio)
   - thumb.jpg: 400x300px (4:3 ratio)
   - img-XX.jpg: 1200x800px (3:2 ratio)
4. Keep file size under 500KB for optimal loading

File naming rules:
- Use lowercase letters only
- Use hyphens instead of spaces
- Use .jpg or .webp extension
- Number gallery images with two digits (01, 02, 03, etc.)
`;
      fs.writeFileSync(filePath.replace(/\.(jpg|webp)$/, '.txt'), placeholderContent);
      console.log(`📝 Created placeholder instructions for: ${file}`);
    }
  });
}

function updateHomepage(projectName, normalizedName) {
  const homepagePath = HOMEPAGE_PATH;
  
  if (!fs.existsSync(homepagePath)) {
    console.log(`⚠️  Homepage not found at: ${homepagePath}`);
    return;
  }

  let homepageContent = fs.readFileSync(homepagePath, 'utf8');
  
  // Create new project card HTML
  const projectCardHTML = `
    <!-- Project Card: ${projectName} -->
    <div class="project-card" data-project="${normalizedName}">
      <a href="projects/progetto-${normalizedName}/index.html" class="project-link">
        <div class="project-image">
          <img src="projects/progetto-${normalizedName}/assets/thumb.jpg" 
               alt="${projectName}" 
               loading="lazy"
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+'">
        </div>
        <div class="project-info">
          <h3 class="project-title">${projectName}</h3>
          <p class="project-description"><!-- TODO: Add project description --></p>
          <div class="project-tags">
            <span class="tag"><!-- TODO: Add category --></span>
            <span class="tag"><!-- TODO: Add year --></span>
          </div>
        </div>
      </a>
    </div>`;

  // Find the projects section and add the new project card
  const projectsSectionRegex = /(<section[^>]*id="progetti"[^>]*>[\s\S]*?<div[^>]*class="[^"]*projects-grid[^"]*"[^>]*>)/;
  const match = homepageContent.match(projectsSectionRegex);
  
  if (match) {
    const insertPoint = match[0];
    const updatedContent = homepageContent.replace(
      insertPoint,
      insertPoint + projectCardHTML
    );
    
    fs.writeFileSync(homepagePath, updatedContent);
    console.log(`✅ Updated homepage with new project card`);
  } else {
    console.log(`⚠️  Could not find projects section in homepage`);
  }
}

function createProjectCSS() {
  const cssContent = `
/* Project Page Styles */
.project-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.project-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: #aec7e9;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  margin: 0;
}

.contact-button {
  background: #aec7e9;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-button:hover {
  background: #8ba8d4;
}

.project-hero {
  margin-top: 80px;
  position: relative;
  height: 60vh;
  overflow: hidden;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.project-description {
  padding: 4rem 2rem;
  background: white;
  color: black;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.description-content h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.description-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  font-weight: 600;
  color: #666;
}

.detail-value {
  color: #333;
}

.project-gallery {
  padding: 4rem 2rem;
  background: #f8f8f8;
}

.project-gallery h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.project-cta {
  padding: 4rem 2rem;
  background: black;
  color: white;
  text-align: center;
}

.cta-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #aec7e9;
  color: black;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #8ba8d4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-nav {
    padding: 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .project-description,
  .project-gallery,
  .project-cta {
    padding: 2rem 1rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
`;

  const cssPath = path.join(__dirname, 'project-styles.css');
  fs.writeFileSync(cssPath, cssContent);
  console.log(`✅ Created project styles: ${cssPath}`);
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
🚀 Portfolio Project Automation Script

Usage: node create-project.js "Project Name" "Description"

Example:
  node create-project.js "BMW X3 Campaign" "A cinematic campaign for BMW X3"

This script will:
1. Create a new project folder with normalized name
2. Generate HTML template with placeholders
3. Create asset placeholders with instructions
4. Update homepage with new project card
5. Generate CSS styles for project pages
`);
    process.exit(1);
  }

  const projectName = args[0];
  const description = args[1];
  
  console.log(`\n🚀 Creating project: "${projectName}"`);
  console.log(`📝 Description: "${description}"`);
  
  try {
    // Step 1: Create project folder
    const { projectDir, normalizedName } = createProjectFolder(projectName);
    
    // Step 2: Create HTML template
    createProjectTemplate(projectDir, projectName, description);
    
    // Step 3: Create asset placeholders
    createAssetPlaceholders(projectDir);
    
    // Step 4: Update homepage
    updateHomepage(projectName, normalizedName);
    
    // Step 5: Create CSS styles
    createProjectCSS();
    
    console.log(`\n✅ Project "${projectName}" created successfully!`);
    console.log(`📁 Project folder: ${projectDir}`);
    console.log(`\n📋 Next steps:`);
    console.log(`1. Add your images to: ${path.join(projectDir, 'assets')}`);
    console.log(`2. Update the HTML template with your content`);
    console.log(`3. Replace placeholder images with actual project images`);
    console.log(`4. Test the project page and homepage integration`);
    
  } catch (error) {
    console.error(`❌ Error creating project:`, error.message);
    process.exit(1);
  }
}

// Run the script
main();
