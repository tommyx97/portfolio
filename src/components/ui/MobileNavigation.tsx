"use client";

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

const navLinks = [{
  id: 'nav-home',
  label: 'Home',
  href: '#home'
}, {
  id: 'nav-chi-sono',
  label: 'Chi Sono',
  href: '#chi-sono'
}, {
  id: 'nav-progetti',
  label: 'Progetti',
  href: '#progetti'
}, {
  id: 'nav-contattami',
  label: 'Contattami',
  href: '#contatti'
}] as const;

export const MobileNavigation = () => {
  const { activeSection, scrollToSection } = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="mobile-menu-button lg:hidden"
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
          transition: 'all 0.3s ease',
          visibility: 'visible',
          opacity: 1,
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </motion.div>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu-overlay"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(20px)',
                zIndex: 9999,
                visibility: 'visible',
                opacity: 1
              }}
            />

            {/* Menu content */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mobile-menu-content"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.98)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 10001,
                padding: '5rem 1rem 2rem',
                visibility: 'visible',
                opacity: 1,
                minHeight: '100vh'
              }}
            >
              <div className="px-6 py-20">
                <div className="space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className={`mobile-menu-link ${
                          activeSection === link.href ? 'active' : ''
                        }`}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '1rem 0',
                          fontSize: '1.5rem',
                          fontWeight: '300',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: activeSection === link.href ? '#aec7e9' : 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                          fontFamily: 'Inter',
                          textAlign: 'left'
                        }}
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="mobile-social-links"
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center'
                  }}
                >
                  <div className="flex items-center gap-6">
                    <a
                      href="mailto:tpiccioli97@gmail.com"
                      className="mobile-social-link"
                      aria-label="Email"
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
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-link"
                      aria-label="Instagram"
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
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-link"
                      aria-label="LinkedIn"
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
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
