/**
 * CONTACT SECTION - FRAMER READY COMPONENT
 * 
 * This component is optimized for Framer import with:
 * - Clean semantic HTML structure
 * - Self-contained styling
 * - No external dependencies
 * - Easy to copy/paste into Framer
 */

export const ContactSection = () => {
  const contactInfo = [
    {
      id: 'contact-email',
      label: 'Email',
      value: 'tpiccioli97@gmail.com',
      href: 'mailto:tpiccioli97@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      id: 'contact-linkedin',
      label: 'LinkedIn',
      value: 'Tommaso Piccioli',
      href: 'https://www.linkedin.com/feed/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Background Ambient Gradient */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '1000px',
            background: 'radial-gradient(circle, rgba(174, 199, 233, 0.15), rgba(174, 199, 233, 0.05), transparent)',
            filter: 'blur(96px)'
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="contact-content"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Header */}
        <div 
          className="contact-header"
          style={{
            marginBottom: '6rem'
          }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
              fontWeight: 100,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              color: '#ffffff',
              margin: '0 0 1.5rem 0'
            }}
          >
            Contattami
          </h2>
          <div 
            style={{
              width: '5rem',
              height: '1px',
              background: 'linear-gradient(to right, #aec7e9, transparent)'
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Message */}
          <div 
            className="contact-info"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p 
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0
                }}
              >
                Hai un progetto in mente?
              </p>
              <p 
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0
                }}
              >
                Sono sempre aperto a nuove collaborazioni e sfide creative. 
                Lavoriamo insieme per dare vita alla tua visione.
              </p>
            </div>

            {/* Decorative Element */}
            <div 
              style={{
                width: '8rem',
                height: '1px',
                background: 'linear-gradient(to right, rgba(174, 199, 233, 0.6), transparent)',
                transformOrigin: 'left'
              }}
            />

            {/* Additional Info */}
            <div style={{ paddingTop: '1rem' }}>
              <p 
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.5)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  margin: 0
                }}
              >
                Rispondo entro 24 ore
              </p>
            </div>
          </div>

          {/* Right: Contact Methods */}
          <div 
            className="contact-methods"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {contactInfo.map((contact, index) => (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.id !== 'contact-email' ? '_blank' : undefined}
                rel={contact.id !== 'contact-email' ? 'noopener noreferrer' : undefined}
                className="contact-method"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(174, 199, 233, 0.4)',
                  borderRadius: '0px',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(174, 199, 233, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(174, 199, 233, 0.4)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flex: 1 }}>
                  {/* Icon */}
                  <div 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(174, 199, 233, 0.1)',
                      border: '1px solid rgba(174, 199, 233, 0.5)',
                      borderRadius: '50%',
                      color: '#aec7e9',
                      transition: 'all 0.5s ease'
                    }}
                  >
                    {contact.icon}
                  </div>

                  {/* Text Content */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <p 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.5)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: 0
                      }}
                    >
                      {contact.label}
                    </p>
                    <p 
                      style={{
                        fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.9)',
                        margin: 0,
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Right: Arrow Icon */}
                <div 
                  style={{
                    color: '#aec7e9',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>

                {/* Bottom Accent Line */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '1px',
                    background: 'linear-gradient(to right, #aec7e9, transparent)',
                    width: '0%',
                    transition: 'width 0.5s ease'
                  }}
                />

                {/* Glow Effect on Hover */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom right, rgba(174, 199, 233, 0.05), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div 
          style={{
            marginTop: '8rem'
          }}
        >
          <div 
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(174, 199, 233, 0.3), transparent)'
            }}
          />
        </div>

        {/* Footer Text */}
        <div 
          style={{
            marginTop: '3rem',
            textAlign: 'center'
          }}
        >
          <p 
            style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              fontWeight: 300,
              color: 'rgba(255, 255, 255, 0.4)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            © 2025 Tommaso Piccioli — AI Creator & Creative Director
          </p>
        </div>
      </div>
    </section>
  );
};
