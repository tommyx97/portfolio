/**
 * OPTIMIZED APP COMPONENT
 * 
 * Clean, semantic, and accessible main application component
 * Optimized for performance and WCAG 2.1 compliance
 */

import React from 'react';
import { ResponsiveNavigation } from './components/optimized/ResponsiveNavigation';
import { ResponsiveHero } from './components/optimized/ResponsiveHero';
import { ResponsiveAbout } from './components/optimized/ResponsiveAbout';
import { ResponsiveProjects } from './components/optimized/ResponsiveProjects';
import { ResponsiveContact } from './components/optimized/ResponsiveContact';

// Import optimized CSS
import './styles/clean.css';
import './styles/accessibility.css';

function App() {
  return (
    <div className="App" role="application" aria-label="Tommaso Piccioli Portfolio">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <ResponsiveNavigation />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <ResponsiveHero />

        {/* About Section */}
        <ResponsiveAbout />

        {/* Projects Section */}
        <ResponsiveProjects />

        {/* Contact Section */}
        <ResponsiveContact />
      </main>

      {/* Footer */}
      <footer 
        role="contentinfo" 
        aria-label="Site footer"
        style={{
          background: '#000000',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem 0',
          textAlign: 'center'
        }}
      >
        <div 
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          <p 
            style={{
              fontSize: '0.875rem',
              fontWeight: 300,
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            © 2025 Tommaso Piccioli — AI Creator & Creative Director
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
