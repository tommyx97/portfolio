/**
 * HERO SECTION - FRAMER READY COMPONENT
 * 
 * This component is optimized for Framer import with:
 * - Clean semantic HTML structure
 * - Self-contained styling
 * - No external dependencies
 * - Easy to copy/paste into Framer
 */

export const HeroSection = () => {
  return (
    <header id="hero" className="hero-section">
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
      />
      
      {/* Content Container */}
      <div className="hero-content" style={{ zIndex: 10 }}>
        {/* Name */}
        <h1 
          className="hero-name"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: '#ffffff',
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          TOMMASO PICCIOLI
        </h1>
        
        {/* Professional Title */}
        <p 
          className="hero-title"
          style={{
            fontSize: 'clamp(0.9rem, 3vw, 1.4rem)',
            fontWeight: 300,
            letterSpacing: '0.2em',
            color: '#ffffff',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            margin: 0
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
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(174, 199, 233, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 1
        }}
      />
    </header>
  );
};
