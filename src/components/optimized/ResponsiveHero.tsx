/**
 * RESPONSIVE HERO COMPONENT
 * 
 * Fully responsive hero section optimized for:
 * - Mobile (320px, 375px, 414px)
 * - Tablet (768px, 1024px)
 * - Desktop (HD, 2K, 4K, ultrawide)
 * - Accessibility (WCAG 2.1)
 */

import React from 'react';

export const ResponsiveHero = () => {
  return (
    <header 
      id="hero" 
      className="hero-section"
      role="banner"
      aria-label="Hero section with name and title"
    >
      {/* Background Image */}
      <div 
        className="hero-background"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2a529ca7-9941-4325-b7ac-0869b90895df.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
        aria-hidden="true"
      />
      
      {/* Background Gradient Overlay */}
      <div 
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
          zIndex: 2
        }}
        aria-hidden="true"
      />
      
      {/* Content Container */}
      <div 
        className="hero-content" 
        style={{ zIndex: 10 }}
        role="main"
        aria-label="Main hero content"
      >
        {/* Name */}
        <h1 
          className="hero-name"
          style={{
            fontSize: 'clamp(1.5rem, 8vw, 4rem)',
            fontWeight: 300,
            letterSpacing: 'clamp(0.2em, 1.5vw, 0.4em)',
            color: '#ffffff',
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1
          }}
        >
          TOMMASO PICCIOLI
        </h1>
        
        {/* Professional Title */}
        <p 
          className="hero-title"
          style={{
            fontSize: 'clamp(0.8rem, 3.5vw, 1.4rem)',
            fontWeight: 300,
            letterSpacing: 'clamp(0.15em, 1vw, 0.25em)',
            color: '#ffffff',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            margin: 0,
            lineHeight: 1.2
          }}
        >
          AI CREATOR & CREATIVE DIRECTOR
        </p>
      </div>
      
      {/* Ambient Glow Effect */}
      <div 
        className="hero-glow"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(400px, 80vw, 800px)',
          height: 'clamp(400px, 80vw, 800px)',
          background: 'radial-gradient(circle, rgba(174, 199, 233, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 1
        }}
        aria-hidden="true"
      />
    </header>
  );
};
