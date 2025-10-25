import React from 'react';

const Toolkit: React.FC = () => {
  const tools = [
    { name: 'ChatGPT', icon: '🤖', category: 'AI Assistant' },
    { name: 'Midjourney', icon: '🎨', category: 'Image Generation' },
    { name: 'Runway', icon: '🎬', category: 'Video AI' },
    { name: 'Pika', icon: '⚡', category: 'Video Generation' },
    { name: 'ElevenLabs', icon: '🎤', category: 'Voice AI' },
    { name: 'Figma', icon: '✏️', category: 'Design' },
    { name: 'After Effects', icon: '🎭', category: 'Motion Graphics' },
    { name: 'Notion', icon: '📝', category: 'Workflow' },
    { name: 'Make', icon: '🔧', category: 'Automation' },
    { name: 'Lightroom', icon: '📸', category: 'Photo Editing' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="mb-3">
            Toolkit
          </h2>
          <p className="text-large opacity-80 max-w-2xl mx-auto">
            The tools I use daily to transform ideas into extraordinary visual realities.
          </p>
        </div>

        <div className="toolkit-grid">
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className="tool-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tool-icon">
                {tool.icon}
              </div>
              <div className="tool-info">
                <h3 className="tool-name">
                  {tool.name}
                </h3>
                <p className="tool-category">
                  {tool.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .toolkit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
          max-width: 1200px;
          margin: 0 auto;
        }

        .tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-xl) var(--space-lg);
          background: var(--color-white);
          border: 1px solid var(--color-gray-200);
          transition: all var(--transition-base);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          cursor: default;
        }

        .tool-item:hover {
          border-color: var(--color-gray-300);
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .tool-icon {
          width: 60px;
          height: 60px;
          background: var(--color-gray-100);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: var(--space-sm);
          transition: transform var(--transition-base);
        }

        .tool-item:hover .tool-icon {
          transform: scale(1.1);
          background: var(--color-black);
        }

        .tool-info {
          text-align: center;
        }

        .tool-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-black);
          margin-bottom: var(--space-xs);
        }

        .tool-category {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--color-gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .toolkit-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: var(--space-md);
          }

          .tool-item {
            padding: var(--space-lg) var(--space-md);
          }

          .tool-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .tool-name {
            font-size: 0.9rem;
          }

          .tool-category {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .toolkit-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: var(--space-sm);
          }

          .tool-item {
            padding: var(--space-md) var(--space-sm);
          }

          .tool-icon {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }

          .tool-name {
            font-size: 0.8rem;
          }

          .tool-category {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Toolkit;