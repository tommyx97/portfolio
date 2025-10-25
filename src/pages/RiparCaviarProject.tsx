import React from 'react';

interface RiparCaviarProjectProps {
  onBack: () => void;
}

const RiparCaviarProject: React.FC<RiparCaviarProjectProps> = ({ onBack }) => {
  return (
    <div className="project-page" data-theme="light">
      {/* Project Navigation */}
      <nav className="project-nav">
        <div className="container">
          <div className="project-nav-content">
            <button className="back-button" onClick={onBack}>
              ← Torna alla Home
            </button>
            
            <div className="project-nav-title">
              <span className="project-category">Luxury</span>
              <h1 className="project-title">Ripar Caviar</h1>
            </div>
            
            <div className="project-nav-actions">
              <button className="btn-secondary">
                Condividi
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Still */}
      <section className="project-hero">
        <div className="hero-image-container">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Ripar Caviar Hero"
            className="project-hero-image"
            loading="lazy"
          />
          <div className="luxury-overlay"></div>
        </div>
        
        <div className="project-hero-content">
          <div className="container">
            <h2 className="project-hero-title">
              Eleganza, raffinatezza, lusso.
            </h2>
            <p className="project-hero-subtitle">
              Art direction e visual design per un brand luxury femminile che celebra la bellezza e l'esclusività attraverso contenuti AI-generated di altissima qualità.
            </p>
          </div>
        </div>
      </section>

      {/* Brief & Target */}
      <section className="project-section">
        <div className="container">
          <div className="project-content-grid">
            <div className="project-content-text">
              <h3 className="section-title">Brief & Target</h3>
              <p className="section-description">
                Creare una campagna visiva che catturasse l'essenza del lusso femminile attraverso macro texture e dettagli raffinati. 
                L'obiettivo era sviluppare contenuti che trasmettessero eleganza, raffinatezza e esclusività per un target luxury femminile.
              </p>
              
              <div className="target-insights">
                <div className="target-insight">
                  <span className="insight-icon">👑</span>
                  <div className="insight-content">
                    <h4>Luxury Femminile</h4>
                    <p>Target: donne 25-45 anni, alto potere d'acquisto</p>
                  </div>
                </div>
                
                <div className="target-insight">
                  <span className="insight-icon">✨</span>
                  <div className="insight-content">
                    <h4>Estetica Raffinata</h4>
                    <p>Palette colori sofisticata e texture premium</p>
                  </div>
                </div>
                
                <div className="target-insight">
                  <span className="insight-icon">🎭</span>
                  <div className="insight-content">
                    <h4>Esclusività</h4>
                    <p>Contenuti che comunicano rarità e unicità</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-content-visual">
              <img 
                src="/api/placeholder/600/400" 
                alt="Ripar Caviar Project Visual"
                className="project-visual-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role & Competencies */}
      <section className="project-section" data-theme="dark">
        <div className="container">
          <h3 className="section-title text-center mb-12">Ruolo & Competenze</h3>
          
          <div className="role-grid">
            <div className="role-card">
              <h4 className="role-title">Art Direction</h4>
              <p className="role-description">
                Definizione del concept visivo luxury e coordinamento tra estetica raffinata 
                e messaggio comunicativo per target femminile esigente.
              </p>
            </div>
            
            <div className="role-card">
              <h4 className="role-title">Visual Design</h4>
              <p className="role-description">
                Creazione di composizioni visive che celebrano la bellezza attraverso 
                macro texture e dettagli raffinati, ottimizzazione per diversi touchpoint.
              </p>
            </div>
            
            <div className="role-card">
              <h4 className="role-title">AI Curation</h4>
              <p className="role-description">
                Selezione e curatela di contenuti AI-generated per garantire coerenza 
                stilistica e qualità luxury, post-production con Lightroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="project-section">
        <div className="container">
          <h3 className="section-title text-center mb-12">Toolset AI</h3>
          
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">🎨</div>
              <h4 className="tool-name">Midjourney</h4>
              <p className="tool-description">Generazione immagini luxury macro</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">🎬</div>
              <h4 className="tool-name">Runway</h4>
              <p className="tool-description">Creazione video eleganti</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">📸</div>
              <h4 className="tool-name">Lightroom</h4>
              <p className="tool-description">Post-production e color grading</p>
            </div>
            
            <div className="tool-item">
              <div className="tool-icon">🎭</div>
              <h4 className="tool-name">After Effects</h4>
              <p className="tool-description">Motion graphics raffinati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="project-section" data-theme="dark">
        <div className="container">
          <h3 className="section-title text-center mb-12">Processo in 6 Step</h3>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4 className="step-title">Brand Analysis</h4>
                <p className="step-description">Studio approfondito del brand e del target luxury femminile</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4 className="step-title">Visual Concept</h4>
                <p className="step-description">Definizione del concept visivo e della palette colori</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4 className="step-title">Prompt Development</h4>
                <p className="step-description">Creazione di prompt specifici per macro texture luxury</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4 className="step-title">Content Generation</h4>
                <p className="step-description">Produzione di centinaia di varianti con Midjourney</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h4 className="step-title">Curation & Selection</h4>
                <p className="step-description">Selezione e curatela dei contenuti migliori</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-content">
                <h4 className="step-title">Post-Production</h4>
                <p className="step-description">Refinamento finale con Lightroom e After Effects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-section">
        <div className="container">
          <h3 className="section-title text-center mb-12">Galleria Macro + Short Video</h3>
          
          <div className="gallery-grid">
            <div className="gallery-item gallery-item-large">
              <img 
                src="/api/placeholder/800/600" 
                alt="Ripar Caviar Macro Detail"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Macro Texture</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="Ripar Caviar Detail 1"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Luxury Detail</span>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="Ripar Caviar Detail 2"
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Premium Finish</span>
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
                <span className="gallery-label">Elegant Motion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Recipe */}
      <section className="project-section" data-theme="dark">
        <div className="container">
          <h3 className="section-title text-center mb-12">Prompt Recipe</h3>
          
          <div className="prompt-recipe">
            <div className="prompt-code">
              <pre className="prompt-text">
{`Luxury caviar texture macro photography, 
pearl-like surface, elegant lighting, 
soft shadows, premium product photography, 
feminine aesthetic, sophisticated color palette, 
golden hour lighting, high-end commercial style, 
minimalist composition, refined details, 
professional studio quality --ar 4:5 --v 6`}
              </pre>
            </div>
            
            <div className="prompt-breakdown">
              <h4 className="breakdown-title">Breakdown del Prompt</h4>
              <ul className="breakdown-list">
                <li><strong>Luxury caviar texture:</strong> Identificazione del prodotto luxury</li>
                <li><strong>macro photography:</strong> Tecnica fotografica macro</li>
                <li><strong>pearl-like surface:</strong> Superficie perlata</li>
                <li><strong>elegant lighting:</strong> Illuminazione elegante</li>
                <li><strong>soft shadows:</strong> Ombre morbide</li>
                <li><strong>premium product:</strong> Fotografia prodotto premium</li>
                <li><strong>feminine aesthetic:</strong> Estetica femminile</li>
                <li><strong>sophisticated palette:</strong> Palette colori sofisticata</li>
                <li><strong>golden hour:</strong> Illuminazione golden hour</li>
                <li><strong>minimalist composition:</strong> Composizione minimalista</li>
                <li><strong>--ar 4:5:</strong> Aspect ratio verticale</li>
                <li><strong>--v 6:</strong> Versione Midjourney ottimizzata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="project-section">
        <div className="container">
          <div className="results-content">
            <div className="results-text">
              <h3 className="section-title">Risultati</h3>
              
              <div className="results-stats">
                <div className="result-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Qualità Luxury</span>
                </div>
                <div className="result-stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Varianti Macro</span>
                </div>
                <div className="result-stat">
                  <span className="stat-number">72h</span>
                  <span className="stat-label">Tempo Produzione</span>
                </div>
              </div>
              
              <div className="key-achievements">
                <h4 className="achievements-title">Risultati Chiave</h4>
                <ul className="achievements-list">
                  <li>Creazione di macro texture indistinguibili dalla fotografia professionale</li>
                  <li>Palette colori coerente con l'identità luxury del brand</li>
                  <li>Ottimizzazione per diversi formati e touchpoint</li>
                  <li>Contenuti che comunicano esclusività e raffinatezza</li>
                </ul>
              </div>
            </div>
            
            <div className="results-visual">
              <img 
                src="/api/placeholder/600/400" 
                alt="Ripar Caviar Results"
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
              Vuoi eleganza per il tuo brand?
            </h3>
            <p className="cta-description">
              Trasformiamo la tua visione in contenuti luxury che comunicano raffinatezza e esclusività.
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
          background: var(--color-white);
          color: var(--color-black);
        }

        .project-page[data-theme="dark"] {
          background: var(--color-black);
          color: var(--color-white);
        }

        .project-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
        }

        .project-page[data-theme="dark"] .project-nav {
          background: rgba(14, 14, 14, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
          color: var(--color-navy);
          transform: translateX(-4px);
        }

        .project-page[data-theme="dark"] .back-button:hover {
          color: var(--color-white);
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
          color: var(--color-black);
        }

        .project-page[data-theme="dark"] .project-title {
          color: var(--color-white);
        }

        .project-hero {
          position: relative;
          height: 70vh;
          overflow: hidden;
        }

        .hero-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .project-hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .luxury-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(231, 185, 121, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(231, 185, 121, 0.1) 100%
          );
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
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          color: var(--color-black);
        }

        .project-page[data-theme="dark"] .project-hero-title {
          color: var(--color-white);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .project-hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.5rem);
          font-weight: 300;
          opacity: 0.9;
          max-width: 800px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          color: var(--color-black);
        }

        .project-page[data-theme="dark"] .project-hero-subtitle {
          color: var(--color-white);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .project-section {
          padding: 4rem 0;
        }

        .project-section[data-theme="dark"] {
          background: var(--color-black);
          color: var(--color-white);
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

        .target-insights {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .target-insight {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .insight-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .insight-content h4 {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .insight-content p {
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

        .project-section:not([data-theme="dark"]) .role-card {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .role-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        .project-section:not([data-theme="dark"]) .role-card:hover {
          background: rgba(231, 185, 121, 0.05);
          border-color: rgba(231, 185, 121, 0.2);
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

        .project-section[data-theme="dark"] .tool-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          border: 1px solid rgba(231, 185, 121, 0.3);
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
          color: var(--color-gold);
        }

        .results-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 0;
        }

        .project-cta {
          background: linear-gradient(135deg, var(--color-gold), #D4A574);
          padding: 4rem 0;
          text-align: center;
          color: var(--color-black);
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

export default RiparCaviarProject;
