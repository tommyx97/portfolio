import React, { useState, useEffect } from 'react';

interface NavigationProps {
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, onThemeChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle theme toggle
  const toggleTheme = () => {
    onThemeChange(theme === 'dark' ? 'light' : 'dark');
  };

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Only show when scrolled */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : 'nav-hidden'}`}>
        <div className="container">
          <div className="nav-content">
            {/* Brand */}
            <a href="#" className="nav-brand">
              Tommaso Piccioli
            </a>

            {/* Desktop Navigation Links */}
            <div className="nav-links hidden md:flex">
              <button 
                className="nav-link"
                onClick={() => handleNavClick('hero')}
              >
                Index
              </button>
              <button 
                className="nav-link"
                onClick={() => handleNavClick('projects')}
              >
                Works
              </button>
              <button 
                className="nav-link"
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
              <button 
                className="nav-link"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
              
              {/* Theme Toggle */}
              <button 
                className="btn-ghost"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="nav-brand">
                Tommaso Piccioli
              </span>
              <button 
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-menu-nav">
              <button 
                className="mobile-menu-link"
                onClick={() => handleNavClick('hero')}
              >
                Home
              </button>
              <button 
                className="mobile-menu-link"
                onClick={() => handleNavClick('projects')}
              >
                Work
              </button>
              <button 
                className="mobile-menu-link"
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
              <button 
                className="mobile-menu-link"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
              
              {/* Theme Toggle */}
              <button 
                className="mobile-menu-link"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-100%);
        }

        .nav-scrolled {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: var(--color-black);
          border-radius: 1px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 8px;
        }

        .hamburger span:nth-child(3) {
          top: 16px;
        }

        .hamburger.open span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.open span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }

        .mobile-menu-button {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 1001;
          width: 48px;
          height: 48px;
          background: var(--color-white);
          backdrop-filter: blur(20px);
          border: 1px solid var(--color-gray-200);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .mobile-menu-button:hover {
          background: var(--color-gray-50);
          border-color: var(--color-gray-300);
        }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          z-index: 1000;
        }

        .mobile-menu-content {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--color-white);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-gray-200);
          z-index: 1001;
          padding: 5rem 2rem 2rem;
          min-height: 100vh;
          overflow-y: auto;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .mobile-menu-close {
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          color: var(--color-black);
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .mobile-menu-link {
          display: block;
          width: 100%;
          padding: 1rem 0;
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--color-gray-600);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid var(--color-gray-200);
          text-align: left;
        }

        .mobile-menu-link:hover {
          color: var(--color-black);
        }

        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;