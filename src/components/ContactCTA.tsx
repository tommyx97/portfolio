import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="mb-4">
              Let's Work Together
            </h2>
            <p className="text-large mb-5 max-w-2xl">
              Have an idea or brand to enhance with AI? Let's collaborate to transform your vision 
              into extraordinary visual content. Every project is an opportunity to push the boundaries of creativity.
            </p>
            
            <div className="contact-cta-buttons">
              <button className="btn-primary">
                Get in Touch →
              </button>
              
              <a 
                href="mailto:tommaso@example.com"
                className="btn-secondary"
                style={{ 
                  background: 'transparent', 
                  color: 'var(--color-white)', 
                  borderColor: 'var(--color-white)' 
                }}
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="contact-visual">
            <div className="contact-image-container">
              <img 
                src="/api/placeholder/600/400" 
                alt="Contact Visual"
                className="contact-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p className="text-micro opacity-60">
            Every project is treated with maximum confidentiality and professionalism
          </p>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          align-items: center;
          margin-bottom: var(--space-3xl);
        }

        .contact-text {
          animation: slideInLeft 0.6s ease-out;
        }

        .contact-visual {
          animation: slideInRight 0.6s ease-out;
        }

        .contact-cta-buttons {
          display: flex;
          gap: var(--space-md);
          flex-wrap: wrap;
        }

        .contact-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          aspect-ratio: 3/2;
        }

        .contact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .contact-image-container:hover .contact-image {
          transform: scale(1.02);
        }

        .contact-footer {
          text-align: center;
          padding-top: var(--space-xl);
          border-top: 1px solid var(--color-gray-700);
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
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .contact-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .contact-image-container {
            aspect-ratio: 4/3;
          }
        }

        @media (max-width: 480px) {
          .contact-content {
            gap: var(--space-lg);
          }

          .contact-image-container {
            aspect-ratio: 3/2;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;