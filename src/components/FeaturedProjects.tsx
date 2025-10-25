import React from 'react';

interface FeaturedProjectsProps {
  onProjectClick: (projectId: 'bmw-x3' | 'vortex-energy' | 'ripar-caviar') => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onProjectClick }) => {
  const projects = [
    {
      id: 'bmw-x3' as const,
      title: 'BMW X3 Vision Motion',
      category: 'Automotive',
      description: 'Creative direction and prompt engineering for AI-generated automotive campaigns',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'vortex-energy' as const,
      title: 'Vortex Energy',
      category: 'Energy Drink',
      description: 'Visual storytelling and motion design for tech-forward energy brand',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'ripar-caviar' as const,
      title: 'Ripar Caviar',
      category: 'Luxury',
      description: 'Art direction and visual design for luxury feminine brand',
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="mb-3">
            Selected Work
          </h2>
          <p className="text-large opacity-80 max-w-2xl mx-auto">
            A collection of projects where creativity and AI technology merge to create unique visual experiences.
          </p>
        </div>

        <div className="grid-responsive">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              onClick={() => onProjectClick(project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              
              <div className="project-content">
                <div className="project-category">
                  {project.category}
                </div>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                <button className="btn-ghost">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-image-container {
          position: relative;
          overflow: hidden;
          height: 300px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .project-card:hover .project-image {
          transform: scale(1.02);
        }

        .project-content {
          padding: var(--space-lg);
        }

        .project-category {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-gray-500);
          margin-bottom: var(--space-sm);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: var(--space-sm);
          color: var(--color-black);
        }

        .project-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-gray-600);
          margin-bottom: var(--space-md);
        }

        @media (max-width: 768px) {
          .project-image-container {
            height: 250px;
          }

          .project-content {
            padding: var(--space-md);
          }

          .project-title {
            font-size: 1.125rem;
          }

          .project-description {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .project-image-container {
            height: 200px;
          }

          .project-content {
            padding: var(--space-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;