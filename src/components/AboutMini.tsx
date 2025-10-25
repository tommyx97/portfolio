import React from 'react';

const AboutMini: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="mb-4">
              About
            </h2>
            <p className="text-large mb-5 max-w-3xl">
              I'm an AI Content Creator & Director. I design visual systems that unite aesthetics, 
              methodology, and technology. My mission is to transform the boldest ideas into 
              cinematic experiences that resonate emotionally and generate lasting impact.
            </p>
            <p className="text-small mb-5 max-w-3xl">
              With a background in cinematic direction and a passion for AI innovation, 
              I create content that challenges conventions and sets new industry standards.
            </p>
            <button className="btn-primary">
              Learn More →
            </button>
          </div>
          
          <div className="about-visual">
            <div className="about-image-container">
              <img 
                src="/api/placeholder/500/600" 
                alt="Tommaso Piccioli"
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          align-items: center;
        }

        .about-text {
          animation: slideInLeft 0.6s ease-out;
        }

        .about-visual {
          animation: slideInRight 0.6s ease-out;
        }

        .about-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          aspect-ratio: 5/6;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .about-image-container:hover .about-image {
          transform: scale(1.02);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .about-image-container {
            aspect-ratio: 4/5;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            gap: var(--space-lg);
          }

          .about-image-container {
            aspect-ratio: 3/4;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMini;