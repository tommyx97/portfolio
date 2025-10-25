import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-name">
                Tommaso Piccioli
              </h3>
              <p className="footer-tagline">
                AI Content Creator & Director
              </p>
            </div>

            <div className="footer-manifesto">
              <p className="manifesto-text">
                "Less chaos, more vision."
              </p>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">
                Work
              </h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">BMW X3</a></li>
                <li><a href="#" className="footer-link">Vortex Energy</a></li>
                <li><a href="#" className="footer-link">Ripar Caviar</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">
                Services
              </h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Art Direction</a></li>
                <li><a href="#" className="footer-link">Prompt Engineering</a></li>
                <li><a href="#" className="footer-link">Video Storytelling</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">
                Contact
              </h4>
              <ul className="footer-links-list">
                <li><a href="mailto:tommaso@example.com" className="footer-link">Email</a></li>
                <li><a href="#" className="footer-link">LinkedIn</a></li>
                <li><a href="#" className="footer-link">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="text-micro">
              © 2025 Tommaso Piccioli. All rights reserved.
            </p>
          </div>

          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="footer-social-link" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="footer-social-link" aria-label="Behance">
              Behance
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--color-white);
          border-top: 1px solid var(--color-gray-200);
          padding: var(--space-3xl) 0 var(--space-xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-4xl);
          margin-bottom: var(--space-2xl);
        }

        .footer-main {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .footer-brand {
          animation: fadeInUp 0.6s ease-out;
        }

        .footer-name {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--color-black);
          margin-bottom: var(--space-sm);
        }

        .footer-tagline {
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--color-gray-600);
        }

        .footer-manifesto {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .manifesto-text {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--color-gray-600);
          line-height: 1.4;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-xl);
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .footer-section-title {
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--color-black);
          margin-bottom: var(--space-md);
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links-list li {
          margin-bottom: var(--space-sm);
        }

        .footer-link {
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--color-gray-600);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--color-black);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-xl);
          border-top: 1px solid var(--color-gray-200);
        }

        .footer-copyright {
          animation: fadeInUp 0.6s ease-out 0.6s both;
        }

        .footer-social {
          display: flex;
          gap: var(--space-lg);
          animation: fadeInUp 0.6s ease-out 0.8s both;
        }

        .footer-social-link {
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--color-gray-600);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-social-link:hover {
          color: var(--color-black);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: var(--space-2xl) 0 var(--space-lg);
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .footer-bottom {
            flex-direction: column;
            gap: var(--space-md);
            text-align: center;
          }

          .footer-social {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: var(--space-xl) 0 var(--space-md);
          }

          .footer-content {
            gap: var(--space-lg);
          }

          .footer-main {
            gap: var(--space-lg);
          }

          .footer-name {
            font-size: 1.25rem;
          }

          .manifesto-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;