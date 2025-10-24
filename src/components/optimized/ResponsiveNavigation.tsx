/**
 * RESPONSIVE NAVIGATION COMPONENT
 * 
 * Fully responsive navigation optimized for:
 * - Mobile (320px, 375px, 414px)
 * - Tablet (768px, 1024px)
 * - Desktop (HD, 2K, 4K, ultrawide)
 * - Accessibility (WCAG 2.1)
 */

import React, { useState, useEffect } from 'react';

export const ResponsiveNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/feed/',
      label: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/tommaso_piccioli/',
      label: 'Instagram',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    }
  ];

  // Handle scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div 
        className="nav-desktop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: 'clamp(1rem, 3vw, 2rem) clamp(1.5rem, 4vw, 3rem)',
          backdropFilter: 'blur(20px)',
          background: 'rgba(0, 0, 0, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'none'
        }}
      >
        <div 
          style={{
            maxWidth: '1800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <div 
            style={{
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 300,
              letterSpacing: '0.2em',
              color: '#ffffff',
              textTransform: 'uppercase'
            }}
          >
            Tommaso Piccioli
          </div>

          {/* Navigation Links */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  color: activeSection === link.id ? '#aec7e9' : 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0',
                  position: 'relative',
                  fontFamily: 'Inter, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = '#aec7e9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  }
                }}
                aria-current={activeSection === link.id ? 'page' : undefined}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
                {activeSection === link.id && (
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(to right, transparent, #aec7e9, transparent)',
                      boxShadow: '0 0 10px #aec7e9'
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 3vw, 1.5rem)'
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#aec7e9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }}
                aria-label={`Visit ${social.label} profile`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className="nav-mobile"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1001,
          display: 'block'
        }}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            width: '48px',
            height: '48px',
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            outline: 'none',
            margin: '1rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.95)';
            e.currentTarget.style.borderColor = '#aec7e9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 1000,
              padding: '5rem clamp(1rem, 4vw, 2rem) clamp(2rem, 6vw, 4rem)',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Navigation Links */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(1.5rem, 4vw, 2rem)',
                alignItems: 'center',
                marginBottom: 'clamp(3rem, 8vw, 4rem)'
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 'clamp(1.25rem, 5vw, 2rem)',
                    fontWeight: 300,
                    letterSpacing: '0.1em',
                    color: activeSection === link.id ? '#aec7e9' : 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    padding: 'clamp(0.75rem, 2vw, 1rem) 0',
                    fontFamily: 'Inter, sans-serif',
                    minHeight: '44px',
                    minWidth: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== link.id) {
                      e.currentTarget.style.color = '#aec7e9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.id) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }
                  }}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div 
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 3vw, 1.5rem)',
                justifyContent: 'center'
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    minHeight: '48px',
                    minWidth: '48px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#aec7e9';
                    e.currentTarget.style.borderColor = '#aec7e9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  aria-label={`Visit ${social.label} profile`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: '#aec7e9',
          color: '#000000',
          padding: '8px 16px',
          textDecoration: 'none',
          borderRadius: '4px',
          zIndex: 2000,
          transition: 'top 0.2s ease',
          fontWeight: 500,
          fontSize: '0.875rem'
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '6px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-40px';
        }}
      >
        Skip to main content
      </a>
    </nav>
  );
};
