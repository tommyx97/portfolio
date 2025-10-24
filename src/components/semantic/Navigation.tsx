/**
 * NAVIGATION COMPONENTS - FRAMER READY
 * 
 * These components are optimized for Framer import with:
 * - Clean semantic HTML structure
 * - Self-contained styling
 * - No external dependencies
 * - Easy to copy/paste into Framer
 */

export const DesktopNavigation = () => {
  const navLinks = [
    { id: 'nav-home', label: 'Home', href: '#hero' },
    { id: 'nav-about', label: 'About', href: '#about' },
    { id: 'nav-projects', label: 'Projects', href: '#projects' },
    { id: 'nav-contact', label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { id: 'social-email', href: 'mailto:tpiccioli97@gmail.com', label: 'Email' },
    { id: 'social-instagram', href: 'https://instagram.com', label: 'Instagram' },
    { id: 'social-linkedin', href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="nav-desktop"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.5rem 2rem',
        backdropFilter: 'blur(20px)',
        background: 'rgba(0, 0, 0, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Background with dynamic opacity */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.3s ease'
        }}
      />
      
      {/* Navigation content */}
      <div 
        className="nav-content"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1800px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Navigation Links */}
        <div 
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="nav-link"
              style={{
                fontSize: '0.875rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                position: 'relative',
                fontFamily: 'Inter, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#aec7e9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.5em',
                  fontSize: '15px'
                }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div 
          className="nav-social"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="nav-social-link"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                transition: 'color 0.3s ease',
                textDecoration: 'none'
              }}
              aria-label={social.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#aec7e9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
            >
              {social.id === 'social-email' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              )}
              {social.id === 'social-instagram' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              )}
              {social.id === 'social-linkedin' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navLinks = [
    { id: 'nav-home', label: 'Home', href: '#hero' },
    { id: 'nav-about', label: 'About', href: '#about' },
    { id: 'nav-projects', label: 'Projects', href: '#projects' },
    { id: 'nav-contact', label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { id: 'social-email', href: 'mailto:tpiccioli97@gmail.com', label: 'Email' },
    { id: 'social-instagram', href: 'https://instagram.com', label: 'Instagram' },
    { id: 'social-linkedin', href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="nav-mobile-button"
        aria-label="Toggle menu"
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 10000,
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
          outline: 'none'
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 9999
            }}
          />

          {/* Menu content */}
          <nav
            className="nav-mobile-menu"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 10001,
              padding: '5rem 1rem 2rem',
              minHeight: '100vh'
            }}
          >
            <div style={{ padding: '0 1.5rem 5rem' }}>
              <div 
                className="nav-mobile-links"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}
              >
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.href)}
                    className="nav-mobile-link"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1rem 0',
                      fontSize: '1.5rem',
                      fontWeight: 300,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      fontFamily: 'Inter, sans-serif',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#aec7e9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Social links */}
              <div
                className="nav-mobile-social"
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  gap: '1.5rem',
                  justifyContent: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="nav-mobile-social-link"
                      aria-label={social.label}
                      style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = '#aec7e9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      {social.id === 'social-email' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      )}
                      {social.id === 'social-instagram' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      )}
                      {social.id === 'social-linkedin' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

// Add React import for useState
import * as React from 'react';
