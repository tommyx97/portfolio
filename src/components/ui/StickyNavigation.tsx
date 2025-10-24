"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
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

const socialLinks = [{
  id: 'social-email',
  icon: Mail,
  href: 'mailto:tpiccioli97@gmail.com',
  label: 'Email'
}, {
  id: 'social-instagram',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram'
}, {
  id: 'social-linkedin',
  icon: Linkedin,
  href: 'https://www.linkedin.com/feed/',
  label: 'LinkedIn'
}] as const;

export const StickyNavigation = () => {
  const { activeSection, scrollToSection } = useNavigation();
  const navRef = React.useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = React.useState(0);

  // Enhanced scroll handling for smoother, more minimal experience
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (navRef.current) {
        // More gradual background changes for immersive experience
        if (currentScrollY > 100) {
          navRef.current.classList.add('scrolled');
          navRef.current.classList.remove('minimal');
        } else if (currentScrollY > 20) {
          navRef.current.classList.add('minimal');
          navRef.current.classList.remove('scrolled');
        } else {
          navRef.current.classList.remove('scrolled', 'minimal');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="sticky-nav fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6 backdrop-blur-xl border-b border-white/10 shadow-lg hidden lg:block"
    >
      {/* Background with dynamic opacity */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl transition-all duration-300" />
      
      {/* Navigation content */}
      <div className="relative z-10 max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Navigation Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, idx) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={e => {
                e.preventDefault();
                scrollToSection(link.href);
              }} 
              className={`nav-link relative text-sm lg:text-base font-light tracking-[0.2em] transition-all duration-300 uppercase ${
                activeSection === link.href 
                  ? 'active text-[#aec7e9] drop-shadow-[0_0_8px_rgba(174,199,233,0.8)]' 
                  : 'text-white/90'
              }`} 
              style={{ fontFamily: "Inter" }}
            >
              <span style={{
                fontFamily: "Inter",
                letterSpacing: "0.5em",
                fontSize: "15px"
              }}>
                {link.label}
              </span>
              
              {/* Active underline */}
              {activeSection === link.href && (
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#aec7e9] to-transparent shadow-[0_0_10px_rgba(174,199,233,0.8)]" 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            const isEmail = social.href.startsWith('mailto:');
            return (
              <a 
                key={social.id} 
                href={social.href} 
                {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="nav-link text-white/80 transition-all duration-300" 
                aria-label={social.label}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
