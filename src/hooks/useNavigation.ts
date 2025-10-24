// Navigation utilities and hooks
import { useEffect, useRef, useState } from 'react';

export interface NavigationState {
  activeSection: string;
  isScrolling: boolean;
}

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Clear timeout and reset scrolling state
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = ['#home', '#chi-sono', '#progetti', '#contattami'];
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      // Clear previous debounce timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      // Debounce the section change to prevent flickering
      debounceTimeoutRef.current = setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            const sectionId = `#${entry.target.id}`;
            if (sections.includes(sectionId)) {
              // Special handling for home section
              if (sectionId === '#home') {
                // Only activate home if user is at the very top or has scrolled up significantly
                if (window.scrollY < 100) {
                  setActiveSection(sectionId);
                }
              } else {
                setActiveSection(sectionId);
              }
              
              // Mark that user has scrolled and sections are being observed
              if (!hasScrolled) {
                setHasScrolled(true);
              }
            }
          }
        });
      }, 100); // 100ms debounce
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.querySelector(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Initial check: if user is at the very top, don't set any active section
    const checkInitialPosition = () => {
      if (window.scrollY === 0) {
        setActiveSection(null);
        setHasScrolled(false);
      } else {
        setHasScrolled(true);
      }
    };

    // Check initial position after a short delay to ensure DOM is ready
    const initialCheckTimeout = setTimeout(checkInitialPosition, 100);

    return () => {
      observer.disconnect();
      clearTimeout(initialCheckTimeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [isScrolling, hasScrolled]);

  // Scroll listener to detect when user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
      
      // Special handling for home section - deactivate if scrolled down
      if (window.scrollY > 100 && activeSection === '#home') {
        setActiveSection(null);
      }
      
      // Activate home if user scrolls back to top
      if (window.scrollY < 50 && hasScrolled) {
        setActiveSection('#home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled, activeSection]);

  return {
    activeSection,
    isScrolling,
    scrollToSection,
    setActiveSection,
  };
};

// Local storage utilities for project navigation
export const useProjectNavigation = () => {
  const saveProjectIntent = (sectionId: string) => {
    localStorage.setItem('projectReturnSection', sectionId);
  };

  const getProjectIntent = (): string | null => {
    return localStorage.getItem('projectReturnSection');
  };

  const clearProjectIntent = () => {
    localStorage.removeItem('projectReturnSection');
  };

  const scrollToProjectSection = () => {
    const savedSection = getProjectIntent();
    if (savedSection) {
      setTimeout(() => {
        const element = document.querySelector(savedSection);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        clearProjectIntent();
      }, 100);
    }
  };

  return {
    saveProjectIntent,
    getProjectIntent,
    clearProjectIntent,
    scrollToProjectSection,
  };
};
