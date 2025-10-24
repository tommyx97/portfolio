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
            />

            {/* Menu content */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mobile-menu-content"
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
                >
                  <div className="flex items-center gap-6">
                    <a
                      href="mailto:tpiccioli97@gmail.com"
                      className="mobile-social-link"
                      aria-label="Email"
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
