/**
 * ABOUT SECTION - FRAMER READY COMPONENT
 * 
 * This component is optimized for Framer import with:
 * - Clean semantic HTML structure
 * - Self-contained styling
 * - No external dependencies
 * - Easy to copy/paste into Framer
 */

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      {/* Content Container */}
      <div className="about-content" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        
        {/* Left Column - Text Content */}
        <div className="about-text">
          {/* Title */}
          <h2 
            className="about-title"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#aec7e9',
              marginBottom: '1rem',
              fontFamily: 'Urbanist, sans-serif'
            }}
          >
            CHI SONO
          </h2>
          
          {/* Description */}
          <div className="about-description" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
            className="about-line"
            style={{
              width: '6rem',
              height: '1px',
              background: 'linear-gradient(to right, #aec7e9, transparent)',
              marginTop: '2rem'
            }}
          />
          
          {/* CTA Button */}
          <button 
            className="about-cta"
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              marginTop: '2rem',
              padding: '0.5rem 0',
              background: 'none',
              border: 'none',
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
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#aec7e9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b3d7ff';
            }}
          >
            <span>SCOPRI I MIEI PROGETTI</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
            marginLeft: 'auto'
          }}
        >
          {/* Main Portrait Image */}
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Tommaso Piccioli - AI Creative Director"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.85)'
              }}
            />
            
            {/* Dark Gradient Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)'
              }}
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
            />
            
            {/* Subtle Vignette */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)'
              }}
            />
          </div>
          
          {/* Decorative Glow Behind Image */}
          <div 
            style={{
              position: 'absolute',
              right: '-3rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '400px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(174, 199, 233, 0.2), rgba(174, 199, 233, 0.05), transparent)',
              filter: 'blur(100px)',
              zIndex: -1
            }}
          />
          
          {/* Frame Effect */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              pointerEvents: 'none'
            }}
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
          width: '500px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(174, 199, 233, 0.1), rgba(174, 199, 233, 0.05), transparent)',
          filter: 'blur(120px)',
          opacity: 0.4,
          zIndex: 0
        }}
      />
      
      {/* Bottom Fade */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8rem',
          background: 'linear-gradient(to top, #000000, transparent)',
          zIndex: 1
        }}
      />
    </section>
  );
};
