/**
 * RESPONSIVE ABOUT COMPONENT
 * 
 * Fully responsive about section optimized for:
 * - Mobile (320px, 375px, 414px)
 * - Tablet (768px, 1024px)
 * - Desktop (HD, 2K, 4K, ultrawide)
 * - Accessibility (WCAG 2.1)
 */

import React from 'react';

export const ResponsiveAbout = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="about-section"
      role="region"
      aria-labelledby="about-title"
    >
      {/* Content Container */}
      <div 
        className="about-content"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 6vw, 4rem)',
          alignItems: 'center',
          padding: '0 1rem'
        }}
      >
        {/* Left Column - Text Content */}
        <div 
          className="about-text"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.5rem, 4vw, 2.5rem)',
            order: 1
          }}
        >
          {/* Title */}
          <h2 
            id="about-title"
            className="about-title"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#aec7e9',
              marginBottom: '1rem',
              fontFamily: 'Urbanist, sans-serif',
              lineHeight: 1.1
            }}
          >
            CHI SONO
          </h2>
          
          {/* Description */}
          <div 
            className="about-description"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 3vw, 1.5rem)'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(0.875rem, 3vw, 1.25rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'Urbanist, sans-serif',
                margin: 0
              }}
            >
              Sono Tommaso Piccioli, AI Creative Director & Content Designer.
            </p>
            
            <p 
              style={{
                fontSize: 'clamp(0.875rem, 3vw, 1.25rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Urbanist, sans-serif',
                margin: 0
              }}
            >
              Realizzo campagne e contenuti per brand che vogliono un'immagine pulita, distintiva e professionale.
            </p>
            
            <p 
              style={{
                fontSize: 'clamp(0.875rem, 3vw, 1.25rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Urbanist, sans-serif',
                margin: 0
              }}
            >
              Ogni progetto nasce da un processo preciso, dove estetica e strategia si incontrano.
            </p>
          </div>
          
          {/* Decorative Line */}
          <div 
            style={{
              width: 'clamp(4rem, 8vw, 6rem)',
              height: '1px',
              background: 'linear-gradient(to right, #aec7e9, transparent)',
              marginTop: '1rem'
            }}
            aria-hidden="true"
          />
          
          {/* CTA Button */}
          <button 
            onClick={scrollToProjects}
            style={{
              marginTop: '2rem',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
              background: 'rgba(174, 199, 233, 0.1)',
              border: '1px solid rgba(174, 199, 233, 0.3)',
              borderRadius: '8px',
              color: '#b3d7ff',
              fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
              fontWeight: 300,
              letterSpacing: 'clamp(0.1em, 0.5vw, 0.15em)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              outline: 'none',
              minHeight: '44px',
              minWidth: '44px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(174, 199, 233, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(174, 199, 233, 0.5)';
              e.currentTarget.style.color = '#aec7e9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(174, 199, 233, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(174, 199, 233, 0.3)';
              e.currentTarget.style.color = '#b3d7ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-label="Scopri i miei progetti"
          >
            <span>SCOPRI I MIEI PROGETTI</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
        </div>
        
        {/* Right Column - Portrait Image */}
        <div 
          className="about-image"
          style={{
            position: 'relative',
            aspectRatio: '3/4',
            maxWidth: '600px',
            margin: '0 auto',
            order: 2
          }}
        >
          {/* Main Portrait Image */}
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Tommaso Piccioli - AI Creative Director ritratto professionale"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.85)'
              }}
              loading="lazy"
            />
            
            {/* Dark Gradient Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)'
              }}
              aria-hidden="true"
            />
            
            {/* Warm Backlight Glow */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                background: 'linear-gradient(to left, rgba(174, 199, 233, 0.4), rgba(174, 199, 233, 0.1), transparent)',
                mixBlendMode: 'screen'
              }}
              aria-hidden="true"
            />
            
            {/* Subtle Vignette */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)'
              }}
              aria-hidden="true"
            />
          </div>
          
          {/* Decorative Glow Behind Image */}
          <div 
            style={{
              position: 'absolute',
              right: 'clamp(-2rem, -5vw, -3rem)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 'clamp(200px, 40vw, 400px)',
              height: 'clamp(250px, 50vw, 500px)',
              background: 'radial-gradient(circle, rgba(174, 199, 233, 0.2), rgba(174, 199, 233, 0.05), transparent)',
              filter: 'blur(100px)',
              zIndex: -1
            }}
            aria-hidden="true"
          />
          
          {/* Frame Effect */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
        </div>
      </div>
      
      {/* Background Ambient Light */}
      <div 
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(300px, 50vw, 500px)',
          height: 'clamp(400px, 60vw, 600px)',
          background: 'radial-gradient(circle, rgba(174, 199, 233, 0.1), rgba(174, 199, 233, 0.05), transparent)',
          filter: 'blur(120px)',
          opacity: 0.4,
          zIndex: 0
        }}
        aria-hidden="true"
      />
      
      {/* Bottom Fade */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 'clamp(4rem, 8vw, 8rem)',
          background: 'linear-gradient(to top, #000000, transparent)',
          zIndex: 1
        }}
        aria-hidden="true"
      />
    </section>
  );
};
