import React from 'react';

interface BMWX3ProjectProps {
  onBack: () => void;
}

const BMWX3Project: React.FC<BMWX3ProjectProps> = ({ onBack }) => {
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
              <span className="project-category">Automotive</span>
              <h1 className="project-title">BMW X3 "Vision Motion"</h1>
            </div>
            
            <div className="project-nav-actions">
              <button className="btn-secondary">
                Condividi
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Video */}
      <section className="project-hero">
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
        
        <div className="project-hero-content">
          <div className="container">
            <h2 className="project-hero-title">
              Precisione, potenza, realismo.
            </h2>
            <p className="project-hero-subtitle">
              Direzione creativa e prompt engineering per campagne automotive AI-generated che catturano l'essenza del movimento e dell'innovazione BMW.
            </p>
          </div>
        </div>
      </section>

      {/* Brief & Objectives */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <div className="project-content-grid">
            <div className="project-content-text">
              <h3 className="section-title">Brief & Obiettivi</h3>
              <p className="section-description">
                Creare una campagna visiva che unisse l'eleganza del design BMW con la potenza tecnologica dell'AI generativa. 
                L'obiettivo era sviluppare contenuti che trasmettessero precisione, potenza e realismo attraverso prompt engineering avanzato.
              </p>
              
              <div className="objectives-list">
                <div className="objective-item">
                  <span className="objective-icon">🎯</span>
                  <div className="objective-content">
                    <h4>Precisione</h4>
                    <p>Ogni dettaglio doveva riflettere la qualità artigianale BMW</p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <span className="objective-icon">⚡</span>
                  <div className="objective-content">
                    <h4>Potenza</h4>
                    <p>Trasmettere la forza e l'energia del motore attraverso il movimento</p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <span className="objective-icon">🔍</span>
                  <div className="objective-content">
                    <h4>Realismo</h4>
                    <p>Contenuti indistinguibili dalla fotografia tradizionale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-content-visual">
              <img 
                src="/api/placeholder/600/400" 
                alt="BMW X3 Project Visual"
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
              <h4 className="role-title">Direzione Creativa</h4>
              <p className="role-description">
                Definizione del concept visivo e della narrative emotiva della campagna, 
                coordinamento tra estetica brand e innovazione tecnologica.
              </p>
            </div>
            
            <div className="role-card">
              <h4 className="role-title">Prompt Engineering</h4>
              <p className="role-description">
                Sviluppo di prompt complessi per Midjourney e Runway, ottimizzazione per 
                consistenza stilistica e qualità fotorealistica.
              </p>
            </div>
            
            <div className="role-card">
              <h4 className="role-title">Post-Production</h4>
              <p className="role-description">
                Refinamento dei contenuti AI-generated attraverso After Effects e Lightroom 
                per raggiungere standard professionali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <h3 className="section-title text-center mb-12">Strumenti AI Utilizzati</h3>
          
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">🤖</div>
              <h4 className="tool-name">ChatGPT</h4>
              <p className="tool-description">Sviluppo narrative e ottimizzazione prompt</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">🎨</div>
              <h4 className="tool-name">Midjourney</h4>
              <p className="tool-description">Generazione immagini fotorealistiche</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">🎬</div>
              <h4 className="tool-name">Runway</h4>
              <p className="tool-description">Creazione video cinematici</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">⚡</div>
              <h4 className="tool-name">Pika</h4>
              <p className="tool-description">Generazione motion graphics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="project-section">
        <div className="container">
          <h3 className="section-title text-center mb-12">Processo in 6 Step</h3>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4 className="step-title">Research & Concept</h4>
                <p className="step-description">Analisi del brand BMW e definizione del concept visivo</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4 className="step-title">Prompt Development</h4>
                <p className="step-description">Creazione e test di prompt complessi per Midjourney</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4 className="step-title">Image Generation</h4>
                <p className="step-description">Produzione di centinaia di varianti per selezione finale</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4 className="step-title">Video Creation</h4>
                <p className="step-description">Sviluppo di contenuti video con Runway e Pika</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h4 className="step-title">Post-Production</h4>
                <p className="step-description">Refinamento e ottimizzazione con After Effects</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-content">
                <h4 className="step-title">Delivery</h4>
                <p className="step-description">Consegna dei deliverable finali ottimizzati</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <h3 className="section-title text-center mb-12">Galleria Deliverable</h3>
          
          <div className="gallery-grid">
            <div className="gallery-item gallery-item-large">
              <img 
                src="/api/placeholder/800/600" 
                alt="BMW X3 Hero Image"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Hero Image</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="BMW X3 Detail 1"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Detail Shot</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="BMW X3 Detail 2"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Motion Study</span>
              </div>
            </div>
            
            <div className="gallery-item gallery-item-video">
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
                <span className="gallery-label">Hero Video</span>
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
{`BMW X3 luxury SUV, cinematic lighting, 
professional automotive photography, 
dynamic motion blur, metallic paint finish, 
urban environment, golden hour lighting, 
high-end commercial photography style, 
premium car advertisement aesthetic, 
sharp focus, dramatic shadows, 
professional studio quality --ar 16:9 --v 6`}
              </pre>
            </div>
            
            <div className="prompt-breakdown">
              <h4 className="breakdown-title">Breakdown del Prompt</h4>
              <ul className="breakdown-list">
                <li><strong>BMW X3 luxury SUV:</strong> Identificazione specifica del veicolo</li>
                <li><strong>cinematic lighting:</strong> Illuminazione cinematografica</li>
                <li><strong>professional automotive photography:</strong> Stile fotografico professionale</li>
                <li><strong>dynamic motion blur:</strong> Effetto movimento dinamico</li>
                <li><strong>metallic paint finish:</strong> Finitura metallica</li>
                <li><strong>urban environment:</strong> Ambiente urbano</li>
                <li><strong>golden hour lighting:</strong> Illuminazione golden hour</li>
                <li><strong>--ar 16:9:</strong> Aspect ratio cinematografico</li>
                <li><strong>--v 6:</strong> Versione Midjourney ottimizzata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Lessons */}
      <section className="project-section" data-theme="light">
        <div className="container">
          <div className="results-content">
            <div className="results-text">
              <h3 className="section-title">Risultati & Lezioni</h3>
              
              <div className="results-stats">
                <div className="result-stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Qualità Fotorealistica</span>
                </div>
                <div className="result-stat">
                  <span className="stat-number">60%</span>
                  <span className="stat-label">Tempo Risparmiato</span>
                </div>
                <div className="result-stat">
                  <span className="stat-number">300+</span>
                  <span className="stat-label">Varianti Generate</span>
                </div>
              </div>
              
              <div className="lessons-learned">
                <h4 className="lessons-title">Lezioni Apprese</h4>
                <ul className="lessons-list">
                  <li>L'importanza della specificità nei prompt per risultati consistenti</li>
                  <li>La necessità di iterazioni multiple per raggiungere la qualità desiderata</li>
                  <li>Il valore della post-production per perfezionare i contenuti AI</li>
                  <li>L'efficacia della combinazione di più strumenti AI per risultati ottimali</li>
                </ul>
              </div>
            </div>
            
            <div className="results-visual">
              <img 
                src="/api/placeholder/600/400" 
                alt="BMW X3 Results"
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
              Interessato a collaborare?
            </h3>
            <p className="cta-description">
              Scopri come posso trasformare la tua visione in contenuti visivi straordinari.
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

        .project-hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
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

        .objectives-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .objective-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .objective-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .objective-content h4 {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .objective-content p {
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
          background: rgba(231, 185, 121, 0.05);
          border-color: rgba(231, 185, 121, 0.2);
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

        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .step-number {
          font-family: var(--font-urbanist);
          font-size: 2rem;
          font-weight: 100;
          color: var(--color-gold);
          flex-shrink: 0;
          width: 60px;
          text-align: center;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .step-description {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
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
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
        }

        .prompt-text {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-gold);
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
          color: var(--color-gold);
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

        .lessons-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .lessons-list {
          list-style: none;
          padding: 0;
        }

        .lessons-list li {
          margin-bottom: 0.75rem;
          padding-left: 1rem;
          position: relative;
        }

        .lessons-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-gold);
        }

        .results-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 0;
        }

        .project-cta {
          background: linear-gradient(135deg, var(--color-navy), var(--color-black));
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

          .process-step {
            flex-direction: column;
            gap: 1rem;
          }

          .step-number {
            width: auto;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default BMWX3Project;
