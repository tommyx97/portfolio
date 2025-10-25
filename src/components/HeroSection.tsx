import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero">
      {/* Background Gradient */}
      <div className="hero-background"></div>
      
      {/* Central Portrait */}
      <div className="hero-portrait">
        <img 
          src="/api/placeholder/400/600" 
          alt="Tommaso Piccioli"
          className="portrait-image"
          loading="eager"
        />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Navigation Bar */}
        <nav className="hero-nav">
          <div className="hero-nav-left">
            <div className="nav-brand-circle"></div>
            <span className="nav-brand-text">Tommaso Piccioli</span>
          </div>
          
          <div className="hero-nav-center">
            <a href="#projects" className="nav-link">Index</a>
            <a href="#projects" className="nav-link">Works</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          <div className="hero-nav-right">
            <button className="nav-cta-btn">
              Get in touch
            </button>
          </div>
        </nav>

        {/* Value Proposition */}
        <div className="hero-value-prop">
          <p className="value-text">
            An AI Content Creator & Director based in Italy, crafting cinematic experiences 
            that blend creativity, technology, and visual impact.
          </p>
        </div>

        {/* Main Name */}
        <div className="hero-name">
          <h1 className="main-name">Tommaso Piccioli</h1>
        </div>

        {/* Bottom Info */}
        <div className="hero-bottom-info">
          <div className="bottom-left">
            <span className="scroll-indicator">Scroll to explore</span>
          </div>
          
          <div className="bottom-center">
            <span className="time-location">IT 19:30</span>
          </div>
          
          <div className="bottom-right">
            <span className="year">2025</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(180deg, #1a365d 0%, #2d5a87 50%, #4a90a4 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #1a365d 0%, #2d5a87 50%, #4a90a4 100%);
          z-index: 1;
        }

        .hero-portrait {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 300px;
          height: 400px;
          border-radius: 0;
          overflow: hidden;
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.9) contrast(1.1);
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
          color: white;
        }

        /* Navigation */
        .hero-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: auto;
        }

        .hero-nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-brand-circle {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
        }

        .nav-brand-text {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .hero-nav-center {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.875rem;
          font-weight: 400;
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .nav-cta-btn {
          background: white;
          color: #1a365d;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-cta-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }

        /* Value Proposition */
        .hero-value-prop {
          position: absolute;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          max-width: 300px;
          z-index: 4;
        }

        .value-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        /* Main Name */
        .hero-name {
          position: absolute;
          bottom: 8rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
        }

        .main-name {
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: white;
          text-align: center;
          margin: 0;
        }

        /* Bottom Info */
        .hero-bottom-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
        }

        .scroll-indicator {
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        .time-location {
          font-weight: 500;
        }

        .year {
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 1.5rem;
          }

          .hero-nav-center {
            display: none;
          }

          .hero-portrait {
            width: 250px;
            height: 320px;
          }

          .hero-value-prop {
            position: static;
            transform: none;
            max-width: 100%;
            margin: 2rem 0;
            text-align: center;
          }

          .hero-name {
            bottom: 6rem;
          }

          .main-name {
            font-size: clamp(3rem, 15vw, 5rem);
          }

          .hero-bottom-info {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 1rem;
          }

          .hero-portrait {
            width: 200px;
            height: 260px;
          }

          .hero-value-prop {
            margin: 1.5rem 0;
          }

          .value-text {
            font-size: 0.8rem;
          }

          .hero-name {
            bottom: 4rem;
          }

          .main-name {
            font-size: clamp(2.5rem, 18vw, 4rem);
          }

          .hero-bottom-info {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-nav {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-value-prop {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-name {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .hero-bottom-info {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;