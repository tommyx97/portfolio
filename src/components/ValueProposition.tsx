import React from 'react';

const ValueProposition: React.FC = () => {
  const valueCards = [
    {
      title: "Vision",
      description: "I transform abstract concepts into engaging visual narratives through generative AI.",
      icon: "👁️"
    },
    {
      title: "Method",
      description: "I develop systematic workflows that optimize creativity and production efficiency.",
      icon: "⚙️"
    },
    {
      title: "Impact",
      description: "I create content that resonates emotionally and generates authentic engagement.",
      icon: "🎯"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="mb-3">
            How I Transform Ideas Into Vision
          </h2>
          <p className="text-large opacity-80 max-w-2xl mx-auto">
            My approach combines cinematic creativity with advanced AI technology to create 
            visual experiences that capture the essence of the brand.
          </p>
        </div>

        <div className="grid-responsive">
          {valueCards.map((card, index) => (
            <div 
              key={index}
              className="value-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="value-icon">
                {card.icon}
              </div>
              <h3 className="value-title">
                {card.title}
              </h3>
              <p className="value-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="btn-primary">
            Learn More →
          </button>
        </div>
      </div>

      <style jsx>{`
        .value-card {
          padding: var(--space-3xl) var(--space-xl);
          background: var(--color-white);
          border: 1px solid var(--color-gray-200);
          transition: all var(--transition-base);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-gray-300);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: var(--space-lg);
          display: block;
        }

        .value-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--color-black);
        }

        .value-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-gray-600);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .value-card {
            padding: var(--space-xl) var(--space-lg);
          }

          .value-icon {
            font-size: 2.5rem;
            margin-bottom: var(--space-md);
          }

          .value-title {
            font-size: 1.25rem;
          }

          .value-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueProposition;