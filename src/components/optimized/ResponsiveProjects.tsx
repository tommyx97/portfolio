/**
 * RESPONSIVE PROJECTS COMPONENT
 * 
 * Fully responsive projects section optimized for:
 * - Mobile (320px, 375px, 414px)
 * - Tablet (768px, 1024px)
 * - Desktop (HD, 2K, 4K, ultrawide)
 * - Accessibility (WCAG 2.1)
 */

import React from 'react';

export const ResponsiveProjects = () => {
  const projects = [
    {
      id: 'bmw-x3',
      title: 'BMW X3',
      category: 'AUTOMOTIVE',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=1600&fit=crop&q=90',
      bgColor: 'from-slate-500/20 to-blue-900/30',
      accessible: true
    },
    {
      id: 'vision-air',
      title: 'Vision Air',
      category: 'INNOVATION',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=1600&fit=crop&q=90',
      bgColor: 'from-amber-500/30 to-yellow-600/40',
      accessible: false
    },
    {
      id: 'iphone-model-t',
      title: 'iPhone Model T',
      category: 'PRODUCT',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1592286927505-b0e2950e3900?w=1200&h=1600&fit=crop&q=90',
      bgColor: 'from-zinc-900/50 to-black/70',
      accessible: false
    }
  ];

  const handleProjectClick = (projectId: string) => {
    if (projectId === 'bmw-x3') {
      window.location.href = '/project/bmw-x3';
    }
  };

  return (
    <section 
      id="projects" 
      className="projects-section"
      role="region"
      aria-labelledby="projects-title"
    >
      {/* Background Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: '25%',
            width: 'clamp(400px, 60vw, 800px)',
            height: 'clamp(400px, 60vw, 800px)',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent, transparent)',
            filter: 'blur(120px)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            right: '25%',
            width: 'clamp(300px, 50vw, 600px)',
            height: 'clamp(300px, 50vw, 600px)',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08), transparent, transparent)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="projects-content"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1920px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)'
        }}
      >
        {/* Header Section */}
        <div 
          style={{
            marginBottom: 'clamp(3rem, 8vw, 6rem)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 3vw, 1.5rem)' }}>
            <p 
              style={{
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.5)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              Progetti Selezionati
            </p>
            <h1 
              id="projects-title"
              style={{
                fontSize: 'clamp(2.5rem, 12vw, 6rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                margin: 0,
                color: '#ffffff'
              }}
            >
              <span style={{ display: 'block' }}>Featured</span>
              <span style={{ display: 'block' }}>Projects</span>
            </h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            marginTop: 'clamp(2rem, 6vw, 4rem)'
          }}
          role="grid"
          aria-label="Progetti selezionati"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                backgroundColor: '#0a0a0a',
                cursor: project.accessible ? 'pointer' : 'default',
                transition: 'transform 0.3s ease',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                if (project.accessible) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              role="gridcell"
              tabIndex={project.accessible ? 0 : -1}
              onKeyDown={(e) => {
                if (project.accessible && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleProjectClick(project.id);
                }
              }}
              aria-label={`Progetto ${project.title} - ${project.category} ${project.year}`}
            >
              {/* Background Image */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <img 
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease'
                  }}
                  loading="lazy"
                />
              </div>

              {/* Cinematic Overlays */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: project.bgColor.includes('slate') 
                    ? 'linear-gradient(to bottom, rgba(100, 116, 139, 0.2), rgba(30, 58, 138, 0.3))'
                    : project.bgColor.includes('amber')
                    ? 'linear-gradient(to bottom, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.4))'
                    : 'linear-gradient(to bottom, rgba(24, 24, 27, 0.5), rgba(0, 0, 0, 0.7))',
                  mixBlendMode: 'multiply'
                }}
                aria-hidden="true"
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4), rgba(0,0,0,0.95))'
                }}
                aria-hidden="true"
              />
              
              {/* Cinematic Lighting Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(to left, rgba(174, 199, 233, 0.2), transparent, transparent)',
                  mixBlendMode: 'screen'
                }}
                aria-hidden="true"
              />
              
              {/* Subtle Vignette */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom right, rgba(0,0,0,0.6), transparent, transparent)'
                }}
                aria-hidden="true"
              />

              {/* Content Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  zIndex: 10
                }}
              >
                {/* Top: Category Badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div 
                    style={{
                      display: 'inline-flex',
                      padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)',
                      backdropFilter: 'blur(12px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '9999px'
                    }}
                  >
                    <span 
                      style={{
                        fontSize: 'clamp(0.5rem, 1.5vw, 0.625rem)',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.9)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Bottom: Project Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.25rem, 1vw, 0.5rem)' }}>
                    <p 
                      style={{
                        fontSize: 'clamp(0.5rem, 1.5vw, 0.625rem)',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.4)',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        margin: 0
                      }}
                    >
                      PROGETTO
                    </p>
                    <h2 
                      style={{
                        fontSize: 'clamp(1.25rem, 5vw, 2.5rem)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: '#ffffff',
                        lineHeight: 1.2,
                        margin: 0
                      }}
                    >
                      {project.title}
                    </h2>
                    <p 
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.3)',
                        letterSpacing: '0.05em',
                        margin: 0
                      }}
                    >
                      {project.year}
                    </p>
                  </div>

                  {/* Animated Underline */}
                  <div 
                    style={{
                      height: '1px',
                      background: 'linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.3), transparent)',
                      width: '40%',
                      transition: 'width 0.6s ease'
                    }}
                    aria-hidden="true"
                  />

                  {/* Hover reveal: View project (only for accessible projects) */}
                  {project.accessible && (
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        paddingTop: '0.25rem'
                      }}
                    >
                      <span 
                        style={{
                          fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
                          fontWeight: 300,
                          color: 'rgba(255, 255, 255, 0.7)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase'
                        }}
                      >
                        View project
                      </span>
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        aria-hidden="true"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0)',
                  transition: 'box-shadow 0.4s ease',
                  borderRadius: '8px'
                }}
                aria-hidden="true"
              />

              {/* Outer Glow */}
              <div 
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  filter: 'blur(8px)',
                  zIndex: -1,
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  borderRadius: '12px'
                }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div style={{ marginTop: 'clamp(4rem, 10vw, 8rem)' }} />
      </div>
    </section>
  );
};
