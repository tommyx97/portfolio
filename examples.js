#!/usr/bin/env node

/**
 * Example script showing how to use the project automation system
 * This demonstrates creating multiple projects with different configurations
 */

const { execSync } = require('child_process');

console.log('🚀 Portfolio Project Automation - Examples\n');

// Example projects to create
const exampleProjects = [
  {
    name: "BMW X3 Campaign",
    description: "A cinematic campaign for BMW X3 featuring brutalist architecture and dramatic lighting"
  },
  {
    name: "Nike Air Max Collection",
    description: "Product photography and digital campaign for Nike Air Max collection with urban lifestyle"
  },
  {
    name: "Apple Watch Series",
    description: "Lifestyle photography and social media campaign showcasing Apple Watch in daily activities"
  },
  {
    name: "Tesla Model S",
    description: "Automotive photography highlighting Tesla Model S electric luxury and performance"
  },
  {
    name: "Samsung Galaxy",
    description: "Tech product photography and digital marketing campaign for Samsung Galaxy series"
  }
];

console.log('📋 Available example projects:\n');

exampleProjects.forEach((project, index) => {
  console.log(`${index + 1}. ${project.name}`);
  console.log(`   Description: ${project.description}`);
  console.log(`   Command: node create-project.cjs "${project.name}" "${project.description}"`);
  console.log('');
});

console.log('🎯 To create any of these projects, run:');
console.log('node create-project.cjs "Project Name" "Project Description"\n');

console.log('📁 Generated structure:');
console.log('projects/');
console.log('└── progetto-[normalized-name]/');
console.log('    ├── index.html              # Project page template');
console.log('    └── assets/                 # Images folder');
console.log('        ├── cover.jpg           # Hero image (1920x1080px)');
console.log('        ├── thumb.jpg           # Homepage thumbnail (400x300px)');
console.log('        ├── img-01.jpg          # Gallery image 1 (1200x800px)');
console.log('        ├── img-02.jpg          # Gallery image 2 (1200x800px)');
console.log('        └── img-03.jpg          # Gallery image 3 (1200x800px)');
console.log('');

console.log('✨ Features:');
console.log('- Automatic folder creation with normalized naming');
console.log('- Complete HTML template with placeholders');
console.log('- Image placeholder files with instructions');
console.log('- Homepage integration (when projects section exists)');
console.log('- Responsive CSS styles for project pages');
console.log('- SEO-friendly meta tags and structure');
console.log('');

console.log('🔧 Next steps after creating a project:');
console.log('1. Add your images to the assets/ folder');
console.log('2. Update the HTML template with your content');
console.log('3. Replace placeholder images with actual project images');
console.log('4. Test the project page and homepage integration');
console.log('5. Customize the design and add any specific features');
