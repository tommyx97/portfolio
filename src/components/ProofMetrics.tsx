import React from 'react';

const ProofMetrics: React.FC = () => {
  const metrics = [
    {
      number: '300+',
      label: 'AI Outputs Generated',
      description: 'Visual content created through AI generation'
    },
    {
      number: '3',
      label: 'Optimized Workflows',
      description: 'Systematic processes for maximum efficiency'
    },
    {
      number: '70%',
      label: 'Time Saved',
      description: 'Reduction in production time while maintaining quality'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="mb-3">
            Results
          </h2>
          <p className="text-large opacity-80 max-w-2xl mx-auto">
            The numbers speak clearly: efficiency, quality, and innovation are the pillars of my approach.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="metric-number">
                {metric.number}
              </div>
              <h3 className="metric-label">
                {metric.label}
              </h3>
              <p className="metric-description">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-micro opacity-60">
            Data updated 2025
          </p>
        </div>
      </div>

      <style jsx>{`
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
          max-width: 1000px;
          margin: 0 auto;
        }

        .metric-card {
          text-align: center;
          padding: var(--space-3xl) var(--space-xl);
          background: var(--color-white);
          border: 1px solid var(--color-gray-200);
          transition: all var(--transition-base);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .metric-card:hover {
          border-color: var(--color-gray-300);
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .metric-number {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          color: var(--color-black);
          line-height: 1;
          margin-bottom: var(--space-md);
        }

        .metric-label {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-black);
          margin-bottom: var(--space-md);
        }

        .metric-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-gray-600);
          max-width: 250px;
          margin: 0 auto;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .metric-card {
            padding: var(--space-xl) var(--space-lg);
          }

          .metric-number {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }

          .metric-label {
            font-size: 1.1rem;
          }

          .metric-description {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .metric-card {
            padding: var(--space-lg) var(--space-md);
          }

          .metric-number {
            font-size: clamp(2rem, 12vw, 3rem);
          }

          .metric-label {
            font-size: 1rem;
          }

          .metric-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProofMetrics;