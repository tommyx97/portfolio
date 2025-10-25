import React from 'react';

interface VortexEnergyProjectProps {
  onBack: () => void;
}

const VortexEnergyProject: React.FC<VortexEnergyProjectProps> = ({ onBack }) => {
  return (
    <div className="project-page" data-theme="dark">
      {/* Project Navigation */}
      <nav className="project-nav">
        <div className="container">
          <div className="project-nav-content">
            <button className="back-button" onClick={onBack}>
              ← Torna alla Home
            </button>
            
            <div className="project-nav-title">
              <span className="project-category">Energy Drink</span>
              <h1 className="project-title">Vortex Energy</h1>
            </div>
            
            <div className="project-nav-actions">
              <button className="btn-secondary">
                Condividi
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Loop */}
      <section className="project-hero">
        <div className="hero-loop-container">
          <video 
            className="project-hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/api/placeholder/1920/1080"
          >
            <source src="/api/placeholder/video.mp4" type="video/mp4" />
          </video>
          
          <div className="neon-glow-overlay"></div>
        </div>
        
        <div className="project-hero-content">
          <div className="container">
            <h2 className="project-hero-title">
              Energia, ritmo, tecnologia.
            </h2>
            <p className="project-hero-subtitle">
              Visual storytelling e motion design per un brand energetico tech-forward che cattura l'essenza dell'energia pura e dell'innovazione.
            </p>
          </div>
        </div>
      </section>

      {/* Brief */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <div className="project-content-grid">
            <div className="project-content-text">
              <h3 className="section-title">Brief</h3>
              <p className="section-description">
                Creare una campagna visiva che unisse l'energia pura del prodotto con l'estetica tech-forward del brand. 
                L'obiettivo era sviluppare contenuti che trasmettessero energia, ritmo e innovazione attraverso visual storytelling dinamico.
              </p>
              
              <div className="brief-points">
                <div className="brief-point">
                  <span className="brief-icon">⚡</span>
                  <div className="brief-content">
                    <h4>Energia</h4>
                    <p>Trasmettere la potenza energetica del prodotto</p>
                  </div>
                </div>
                
                <div className="brief-point">
                  <span className="brief-icon">🎵</span>
                  <div className="brief-content">
                    <h4>Ritmo</h4>
                    <p>Creare contenuti che seguono il beat dell'energia</p>
                  </div>
                </div>
                
                <div className="brief-point">
                  <span className="brief-icon">🔬</span>
                  <div className="brief-content">
                    <h4>Tecnologia</h4>
                    <p>Integrare elementi tech-forward nel design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-content-visual">
              <img 
                src="/api/placeholder/600/400" 
                alt="Vortex Energy Project Visual"
                className="project-visual-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role & Competencies */}
      <section className="project-section">
        <div className="container">
          <h3 className="section-title text-center mb-12">Ruolo & Competenze</h3>
          
          <div className="role-grid">
            <div className="role-card">
              <h4 className="role-title">Visual Storytelling</h4>
              <p className="role-description">
                Sviluppo di narrative visive che catturano l'essenza energetica del brand, 
                coordinamento tra estetica dinamica e messaggio comunicativo.
              </p>
            </div>
            
            <div className="role-card">
              <h4 className="role-title">Motion Design</h4>
              <p className="role-description">
                Creazione di animazioni fluide e dinamiche che seguono il ritmo dell'energia, 
                ottimizzazione per diversi formati e piattaforme.
              </p>
            </div>
            
            <div className="role-card">
              <h4 className="role-title">AI Integration</h4>
              <p className="role-description">
                Utilizzo avanzato di Runway, Pika ed ElevenLabs per creare contenuti 
                che combinano energia visiva e audio sincronizzato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <h3 className="section-title text-center mb-12">Toolset AI</h3>
          
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">🎬</div>
              <h4 className="tool-name">Runway</h4>
              <p className="tool-description">Generazione video cinematici dinamici</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">⚡</div>
              <h4 className="tool-name">Pika</h4>
              <p className="tool-description">Creazione motion graphics energetici</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">🎤</div>
              <h4 className="tool-name">ElevenLabs</h4>
              <p className="tool-description">Sincronizzazione audio e voice-over</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">🎭</div>
              <h4 className="tool-name">After Effects</h4>
              <p className="tool-description">Post-production e compositing finale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="project-section">
        <div className="container">
          <h3 className="section-title text-center mb-12">Processo Creativo</h3>
          
          <div className="process-flow">
            <div className="process-phase">
              <div className="phase-number">01</div>
              <div className="phase-content">
                <h4 className="phase-title">Concept & Mood</h4>
                <p className="phase-description">Definizione del mood energetico e della palette visiva</p>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-phase">
              <div className="phase-number">02</div>
              <div className="phase-content">
                <h4 className="phase-title">Loop Creation</h4>
                <p className="phase-description">Sviluppo di loop infiniti con Runway e Pika</p>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-phase">
              <div className="phase-number">03</div>
              <div className="phase-content">
                <h4 className="phase-title">Audio Sync</h4>
                <p className="phase-description">Sincronizzazione audio con ElevenLabs</p>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-phase">
              <div className="phase-number">04</div>
              <div className="phase-content">
                <h4 className="phase-title">Final Assembly</h4>
                <p className="phase-description">Compositing finale con After Effects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <h3 className="section-title text-center mb-12">Galleria Contenuti</h3>
          
          <div className="gallery-grid">
            <div className="gallery-item gallery-item-large">
              <video 
                className="gallery-video"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/api/placeholder/video.mp4" type="video/mp4" />
              </video>
              <div className="gallery-overlay">
                <span className="gallery-label">Hero Loop</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="Vortex Energy Detail 1"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Energy Burst</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="Vortex Energy Detail 2"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Tech Elements</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <video 
                className="gallery-video"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/api/placeholder/video.mp4" type="video/mp4" />
              </video>
              <div className="gallery-overlay">
                <span className="gallery-label">Motion Study</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Recipe */}
      <section className="project-section">
        <div className="container">
          <h3 className="section-title text-center mb-12">Prompt Recipe</h3>
          
          <div className="prompt-recipe">
            <div className="prompt-code">
              <pre className="prompt-text">
{`Energy drink can, neon glow effects, 
electric blue and cyan colors, 
dynamic motion blur, particle effects, 
futuristic tech aesthetic, 
high energy commercial style, 
cinematic lighting, dramatic shadows, 
professional product photography, 
metallic surface reflections, 
urban night environment --ar 16:9 --v 6`}
              </pre>
            </div>
            
            <div className="prompt-breakdown">
              <h4 className="breakdown-title">Breakdown del Prompt</h4>
              <ul className="breakdown-list">
                <li><strong>Energy drink can:</strong> Identificazione del prodotto</li>
                <li><strong>neon glow effects:</strong> Effetti luminosi neon</li>
                <li><strong>electric blue and cyan:</strong> Palette colori energetica</li>
                <li><strong>dynamic motion blur:</strong> Effetto movimento dinamico</li>
                <li><strong>particle effects:</strong> Effetti particellari</li>
                <li><strong>futuristic tech aesthetic:</strong> Estetica tech futuristica</li>
                <li><strong>high energy commercial:</strong> Stile commerciale energetico</li>
                <li><strong>cinematic lighting:</strong> Illuminazione cinematografica</li>
                <li><strong>metallic surface:</strong> Superficie metallica</li>
                <li><strong>urban night:</strong> Ambiente urbano notturno</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <div className="results-content">
            <div className="results-text">
              <h3 className="section-title">Risultati</h3>
              
              <div className="results-stats">
                <div className="result-stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Loop Creati</span>
                </div>
                <div className="result-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Audio Sync</span>
                </div>
                <div className="result-stat">
                  <span className="stat-number">48h</span>
                  <span className="stat-label">Tempo Produzione</span>
                </div>
              </div>
              
              <div className="key-achievements">
                <h4 className="achievements-title">Risultati Chiave</h4>
                <ul className="achievements-list">
                  <li>Creazione di loop infiniti perfettamente sincronizzati</li>
                  <li>Integrazione seamless tra video AI e audio generato</li>
                  <li>Palette colori coerente e riconoscibile</li>
                  <li>Ottimizzazione per diverse piattaforme social</li>
                </ul>
              </div>
            </div>
            
            <div className="results-visual">
              <img 
                src="/api/placeholder/600/400" 
                alt="Vortex Energy Results"
                className="results-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">
              Vuoi energia per il tuo brand?
            </h3>
            <p className="cta-description">
              Trasformiamo la tua visione in contenuti dinamici che catturano l'attenzione.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Prenota una call →
              </button>
              <button className="btn-secondary" onClick={onBack}>
                Vedi altri progetti
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .project-page {
          min-height: 100vh;
          background: var(--color-black);
          color: var(--color-white);
        }

        .project-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(14, 14, 14, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }

        .project-nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .back-button {
          font-family: var(--font-inter);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-gold);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-smooth);
        }

        .back-button:hover {
          color: var(--color-white);
          transform: translateX(-4px);
        }

        .project-nav-title {
          text-align: center;
        }

        .project-category {
          font-family: var(--font-inter);
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-gold);
          display: block;
          margin-bottom: 0.25rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 300;
          margin: 0;
        }

        .project-hero {
          position: relative;
          height: 70vh;
          overflow: hidden;
        }

        .hero-loop-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .project-hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }

        .neon-glow-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(0, 255, 255, 0.1) 0%,
            rgba(0, 150, 255, 0.1) 50%,
            rgba(255, 0, 255, 0.1) 100%
          );
          animation: neonPulse 3s ease-in-out infinite;
        }

        @keyframes neonPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .project-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .project-hero-title {
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 100;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          background: linear-gradient(45deg, #00ffff, #0096ff, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.5rem);
          font-weight: 300;
          opacity: 0.9;
          max-width: 800px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .project-section {
          padding: 4rem 0;
        }

        .project-section[data-theme="light"] {
          background: var(--color-white);
          color: var(--color-black);
        }

        .section-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .section-description {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .project-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .brief-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .brief-point {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .brief-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .brief-content h4 {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .brief-content p {
          font-size: 1rem;
          opacity: 0.8;
        }

        .project-visual-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 0;
        }

        .role-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .role-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-smooth);
        }

        .role-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        .role-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: var(--color-gold);
        }

        .role-description {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .tool-item {
          text-align: center;
          padding: 2rem 1rem;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all var(--transition-smooth);
        }

        .tool-item:hover {
          background: rgba(0, 150, 255, 0.05);
          border-color: rgba(0, 150, 255, 0.2);
          transform: translateY(-4px);
        }

        .tool-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .tool-name {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .tool-description {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .process-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .process-phase {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 200px;
        }

        .phase-number {
          font-family: var(--font-urbanist);
          font-size: 2rem;
          font-weight: 100;
          color: var(--color-gold);
          margin-bottom: 1rem;
        }

        .phase-title {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .phase-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
        }

        .process-arrow {
          font-size: 1.5rem;
          color: var(--color-gold);
          font-weight: 300;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .gallery-item-large {
          grid-column: span 2;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .gallery-image,
        .gallery-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-cinematic);
        }

        .gallery-item:hover .gallery-image,
        .gallery-item:hover .gallery-video {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 1rem;
          opacity: 0;
          transition: opacity var(--transition-smooth);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-label {
          font-family: var(--font-inter);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-white);
        }

        .prompt-recipe {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .prompt-code {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 150, 255, 0.3);
          padding: 2rem;
        }

        .prompt-text {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          color: #00ffff;
          white-space: pre-wrap;
          margin: 0;
        }

        .breakdown-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .breakdown-list {
          list-style: none;
          padding: 0;
        }

        .breakdown-list li {
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .results-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .results-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .result-stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-family: var(--font-urbanist);
          font-size: 2rem;
          font-weight: 100;
          color: #00ffff;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-family: var(--font-inter);
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }

        .key-achievements {
          margin-top: 2rem;
        }

        .achievements-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievements-list li {
          margin-bottom: 0.75rem;
          padding-left: 1rem;
          position: relative;
        }

        .achievements-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #00ffff;
        }

        .results-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 0;
        }

        .project-cta {
          background: linear-gradient(135deg, #001a2e, var(--color-black));
          padding: 4rem 0;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 300;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .project-nav-content {
            flex-direction: column;
            gap: 1rem;
          }

          .project-title {
            font-size: 1.25rem;
          }

          .project-hero {
            height: 50vh;
          }

          .project-content-grid,
          .results-content,
          .prompt-recipe {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .role-grid,
          .tools-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-item-large {
            grid-column: span 1;
          }

          .process-flow {
            flex-direction: column;
            gap: 1rem;
          }

          .process-arrow {
            transform: rotate(90deg);
          }

          .results-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .project-section {
            padding: 2rem 0;
          }

          .project-hero {
            height: 40vh;
          }

          .role-card,
          .tool-item {
            padding: 1.5rem 1rem;
          }

          .process-phase {
            max-width: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default VortexEnergyProject;
