import React, { useState, useEffect } from 'react';
import './index.css';

// Import components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import FeaturedProjects from './components/FeaturedProjects';
import Capabilities from './components/Capabilities';
import Toolkit from './components/Toolkit';
import AboutMini from './components/AboutMini';
import ProofMetrics from './components/ProofMetrics';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

// Import project pages
import BMWX3Project from './pages/BMWX3Project';
import VortexEnergyProject from './pages/VortexEnergyProject';
import RiparCaviarProject from './pages/RiparCaviarProject';

type ProjectPage = 'bmw-x3' | 'vortex-energy' | 'ripar-caviar' | null;

function App() {
  const [currentProject, setCurrentProject] = useState<ProjectPage>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  // Set theme on document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle project navigation
  const handleProjectClick = (projectId: ProjectPage) => {
    setCurrentProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render project page if selected
  if (currentProject === 'bmw-x3') {
    return <BMWX3Project onBack={handleBackToHome} />;
  }

  if (currentProject === 'vortex-energy') {
    return <VortexEnergyProject onBack={handleBackToHome} />;
  }

  if (currentProject === 'ripar-caviar') {
    return <RiparCaviarProject onBack={handleBackToHome} />;
  }

  // Render homepage
  return (
    <div className="App">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation theme={theme} onThemeChange={setTheme} />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Value Proposition */}
        <ValueProposition />

        {/* Featured Projects */}
        <FeaturedProjects onProjectClick={handleProjectClick} />

        {/* Capabilities */}
        <Capabilities />

        {/* Toolkit */}
        <Toolkit />

        {/* About Mini */}
        <AboutMini />

        {/* Proof Metrics */}
        <ProofMetrics />

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;