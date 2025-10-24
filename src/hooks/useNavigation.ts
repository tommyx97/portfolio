// Navigation utilities and hooks
import { useEffect, useRef, useState } from 'react';

export interface NavigationState {
  activeSection: string;
  isScrolling: boolean;
}

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isScrolling) {
          const sectionId = `#${entry.target.id}`;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.querySelector(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

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
