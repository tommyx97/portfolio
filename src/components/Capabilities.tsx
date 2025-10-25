import React from 'react';

const Capabilities: React.FC = () => {
  const capabilities = [
    'Art Direction',
    'Prompt Design',
    'Video Storytelling',
    'Visual Design',
    'Sound Sync',
    'Workflow Automation'
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="mb-3">
            Capabilities
          </h2>
          <p className="text-large opacity-80 max-w-2xl mx-auto">
            A unique blend of cinematic creativity and AI technical skills for projects that stand out.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div 
              key={capability}
              className="badge"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {capability}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
          max-width: 1000px;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-lg) var(--space-xl);
          background: var(--color-white);
          border: 1px solid var(--color-gray-200);
          border-radius: 0;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--color-gray-700);
          transition: all var(--transition-base);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          cursor: default;
        }

        .badge:hover {
          background: var(--color-black);
          color: var(--color-white);
          border-color: var(--color-black);
          transform: translateY(-2px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: var(--space-sm);
          }

          .badge {
            padding: var(--space-md) var(--space-lg);
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xs);
          }

          .badge {
            padding: var(--space-sm) var(--space-md);
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Capabilities;