"use client";

import * as React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowLeft, Play, Camera, Palette, Eye, Zap, Film, Sparkles } from 'lucide-react';
export interface BMWX3ProjectDetailProps {
  onBack?: () => void;
}
const projectMeta = {
  title: 'BMW X3',
  subtitle: 'Premium Automotive Excellence',
  client: 'Concept by Tommaso Piccioli',
  year: '2025',
  role: 'AI Models | Mid Journey | Runway',
  categories: ['Automotive', 'Luxury', 'Editorial'],
  duration: '4 Weeks'
} as const;
const creativeProcess = [{
  id: 'vision-phase',
  icon: Eye,
  title: 'Visione Creativa',
  description: 'Definizione del concept visivo che esalta le linee scultoree e l\'eleganza senza tempo della BMW X3',
  tools: ['Mid Journey', 'Mood Boards', 'Art Direction']
}, {
  id: 'generation-phase',
  icon: Camera,
  title: 'AI Generation',
  description: 'Creazione di ambienti fotografici cinematografici attraverso prompt engineering avanzato',
  tools: ['Mid Journey V6', 'Runway Gen-2', 'Leonardo AI']
}, {
  id: 'refinement-phase',
  icon: Palette,
  title: 'Raffinamento',
  description: 'Post-produzione meticolosa per raggiungere un equilibrio perfetto tra realismo e identità visiva',
  tools: ['Lightroom', 'Photoshop', 'Color Grading']
}] as const;
const technicalAspects = [{
  id: 'tech-1',
  icon: Zap,
  title: 'AI Prompt Engineering',
  description: 'Sviluppo di prompt complessi per ottenere il massimo controllo sulla composizione, illuminazione e atmosfera'
}, {
  id: 'tech-2',
  icon: Film,
  title: 'Motion Generation',
  description: 'Utilizzo di Runway per creare variazioni dinamiche e animazioni fluide delle scene statiche'
}, {
  id: 'tech-3',
  icon: Sparkles,
  title: 'Post-Processing',
  description: 'Raffinamento professionale per garantire coerenza visiva e qualità da campagna premium'
}] as const;

// TUTTE LE IMMAGINI SONO ORA SEPARATE - OGNI SLOT HA LA PROPRIA URL UNICA
const images = {
  // Hero Section - Immagine principale in alto
  heroBackground: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c7a920b4-7e44-4453-a217-081ad44e0cd3.jpg',
  // Visual Direction Section - 3 immagini
  visualDirectionHero: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c7a920b4-7e44-4453-a217-081ad44e0cd3.jpg',
  visualDirectionSupport1: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/eb5c2e18-61b3-4b08-a38d-ce851988f563.jpg',
  visualDirectionSupport2: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/505409a9-5617-401c-a322-268172bff794.png',
  // Design Philosophy Section - 3 immagini
  philosophyHighlight1: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/51df8553-abb2-4a21-84c5-fb722e0040c8.png',
  philosophyHighlight2: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/57eb32c2-0cff-4fe0-984c-c1bd16755715.jpg',
  philosophyHighlight3: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/505409a9-5617-401c-a322-268172bff794.png',
  // Gallery Grid Section - 4 immagini
  galleryHero: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/57eb32c2-0cff-4fe0-984c-c1bd16755715.jpg',
  galleryImage1: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/eb5c2e18-61b3-4b08-a38d-ce851988f563.jpg',
  galleryImage2: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/505409a9-5617-401c-a322-268172bff794.png',
  galleryImage3: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/51df8553-abb2-4a21-84c5-fb722e0040c8.png',
  // Social Grid Section - 9 immagini separate (griglia 3x3 Instagram)
  socialGrid1: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c7a920b4-7e44-4453-a217-081ad44e0cd3.jpg',
  socialGrid2: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/eb5c2e18-61b3-4b08-a38d-ce851988f563.jpg',
  socialGrid3: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/505409a9-5617-401c-a322-268172bff794.png',
  socialGrid4: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/51df8553-abb2-4a21-84c5-fb722e0040c8.png',
  socialGrid5: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/57eb32c2-0cff-4fe0-984c-c1bd16755715.jpg',
  socialGrid6: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c7a920b4-7e44-4453-a217-081ad44e0cd3.jpg',
  socialGrid7: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/eb5c2e18-61b3-4b08-a38d-ce851988f563.jpg',
  socialGrid8: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/51df8553-abb2-4a21-84c5-fb722e0040c8.png',
  socialGrid9: 'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/505409a9-5617-401c-a322-268172bff794.png'
} as const;
const designPhilosophy = {
  title: 'DESIGN PHILOSOPHY',
  subtitle: 'Form Meets Function',
  description: 'Ogni frame cattura l\'essenza del design BMW: potenza controllata, eleganza funzionale, e innovazione tecnologica. L\'architettura brutale fornisce il contesto perfetto per esaltare le linee contemporanee della X3, creando un dialogo visivo tra passato e futuro.'
} as const;
export default function BMWX3ProjectDetail({
  onBack
}: BMWX3ProjectDetailProps = {}) {
  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const processRef = React.useRef<HTMLDivElement>(null);
  const isProcessInView = useInView(processRef, {
    once: true,
    margin: "-150px"
  });
  const [activeProcess, setActiveProcess] = React.useState<number | null>(null);
  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  return <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden" style={{
    fontFamily: 'Montserrat, sans-serif'
  }}>
      {/* Sticky Header Navigation */}
      <motion.header initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.3
    }} className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 py-6 backdrop-blur-xl bg-black/60 border-b border-white/5">
        <nav className="max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h2 onClick={() => {
            if (onBack) {
              onBack();
              // Scroll to top after navigation
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }, 100);
            }
          }} className="text-xs sm:text-sm tracking-[0.3em] uppercase font-light text-white/80 flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300
          }}>
              <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>TORNA AI PROGETTI</span>
            </h2>
            <span className="text-white/30">
              <span>•</span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase font-light" style={{
            color: '#aec7e9',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300
          }}>
              <span>BMW X3 Project</span>
            </span>
          </div>

          <button onClick={handleContactClick} className="px-6 py-2.5 bg-white text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-all duration-300" style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400
        }}>
            <span>Contattami</span>
          </button>
        </nav>
      </motion.header>

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="absolute inset-0">
          <img src={images.heroBackground} alt="BMW X3 in brutalist architecture with dramatic lighting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end pb-20 lg:pb-32">
          <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 lg:px-16">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }} className="max-w-5xl">
              <motion.p initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.7
            }} className="text-sm tracking-[0.3em] uppercase mb-6" style={{
              color: '#aec7e9',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }}>
                <span>{projectMeta.subtitle}</span>
              </motion.p>

              <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-[0.02em] mb-8" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 200
            }}>
                <span className="text-white" style={{
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(200, 150, 107, 0.3)'
              }}>
                  {projectMeta.title}
                </span>
              </h1>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.9
            }} className="grid grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.2em] uppercase" style={{
                  color: '#aec7e9',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>Cliente</span>
                  </p>
                  <p className="text-sm text-white/90" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>{projectMeta.client}</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs tracking-[0.2em] uppercase" style={{
                  color: '#aec7e9',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>Anno</span>
                  </p>
                  <p className="text-sm text-white/90" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>{projectMeta.year}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.5
      }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-[1px] h-16 bg-gradient-to-b from-[#aec7e9] to-transparent" />
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="relative w-full bg-black py-24 lg:py-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#aec7e9]/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.9
        }} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            {/* Left: Title */}
            <div className="space-y-6" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
              <h2 className="text-4xl lg:text-5xl tracking-[0.1em] uppercase" style={{
              color: '#aec7e9',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 200
            }}>
                <span>Il Progetto</span>
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#aec7e9] to-transparent" />
            </div>

            {/* Right: Description */}
            <div className="space-y-8">
              <p className="text-[15px] leading-[2] text-white/90" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'left'
            }}>
                <span>
                  Questo è un progetto personale nato dalla volontà di esplorare il potenziale delle immagini generate con intelligenza artificiale nel contesto della comunicazione visiva per il mondo automotive.
                  L'idea era quella di immaginare una campagna creativa per la BMW X3, che unisse eleganza, architettura moderna e atmosfera cinematografica.
                  Tutto il concept è stato sviluppato attorno a una visione precisa, dove design e suggestione visiva si fondono per raccontare un'identità forte e contemporanea del veicolo.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Direction Section - 3 IMMAGINI SEPARATE */}
      <section className="relative w-full bg-black py-24 lg:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] uppercase mb-4" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }}>
              <span>VISUAL DIRECTION</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[15px] leading-[2] text-white/70" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'center'
            }}>
                <span>
                  Il tono visivo richiama uno stile moderno e minimale, con richiami all'architettura brutalista e un'atmosfera sospesa.
                  Ho scelto ambienti che esaltano la geometria e il profilo del veicolo, giocando con riflessi, spazi vuoti e contrasti tra luci e ombre.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-150px"
        }} transition={{
          duration: 1
        }} className="mb-8 lg:mb-12">
            <figure className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5">
              <div className="relative w-full" style={{
              paddingBottom: `${9 / 21 * 100}%`
            }}>
                <img src={images.visualDirectionHero} alt="BMW X3 visual direction and concept" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </figure>
          </motion.div>

          {/* Supporting Images Grid - 2 IMMAGINI SEPARATE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.figure initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer">
              <div className="relative w-full" style={{
              paddingBottom: `${3 / 4 * 100}%`
            }}>
                <img src={images.visualDirectionSupport1} alt="BMW X3 visual direction detail 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.15
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer">
              <div className="relative w-full" style={{
              paddingBottom: `${3 / 4 * 100}%`
            }}>
                <img src={images.visualDirectionSupport2} alt="BMW X3 visual direction detail 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c8f47fc9-b060-43ba-af8a-acd3161cb91c.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} />
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section - 3 IMMAGINI SEPARATE */}
      <section className="relative w-full bg-[#0D0D0D] text-white py-24 lg:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16" style={{
        display: "none"
      }}>
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] uppercase mb-8" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }}>
              <span>{designPhilosophy.title}</span>
            </h2>

            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="text-[15px] leading-[2] text-white/80" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'center'
            }}>
                <span>{designPhilosophy.description}</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Three Highlights Grid - 3 IMMAGINI SEPARATE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            <motion.figure initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer">
              <div className="relative w-full" style={{
              paddingBottom: `${4 / 3 * 100}%`
            }}>
                <img src={images.philosophyHighlight1} alt="Urban Context" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm tracking-[0.2em] uppercase text-white" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>Urban Context</span>
                  </p>
                </div>
              </div>
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.15
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer">
              <div className="relative w-full" style={{
              paddingBottom: `${4 / 3 * 100}%`
            }}>
                <img src={images.philosophyHighlight2} alt="Cinematic Lighting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm tracking-[0.2em] uppercase text-white" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>Cinematic Lighting</span>
                  </p>
                </div>
              </div>
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer">
              <div className="relative w-full" style={{
              paddingBottom: `${4 / 3 * 100}%`
            }}>
                <img src={images.philosophyHighlight3} alt="Material Details" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm tracking-[0.2em] uppercase text-white" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }}>
                    <span>Material Details</span>
                  </p>
                </div>
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Gallery Grid - 4 IMMAGINI SEPARATE */}
      <section className="relative w-full bg-black py-24 lg:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }} className="mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl tracking-[0.1em] uppercase mb-6" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }}>
              <span>Visual Gallery</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#aec7e9] to-transparent" />
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.9
        }} className="mb-8 lg:mb-12">
            <figure className="relative w-full overflow-hidden group">
              <div className="relative w-full" style={{
              paddingBottom: `${9 / 16 * 100}%`
            }}>
                <img src={images.galleryHero} alt="BMW X3 Full Body Cinematic Mood" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <figcaption className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }}>
                <span>Full Body — Cinematic Mood</span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Three Column Grid - 3 IMMAGINI SEPARATE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <motion.figure initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0
          }} className="relative group">
              <div className="relative w-full overflow-hidden" style={{
              paddingBottom: `${5 / 4 * 100}%`
            }}>
                <img src={images.galleryImage1} alt="Design Language — Frontal Perspective" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#aec7e9]/30 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/8eddbc34-631c-4493-b727-00646ede6ef4.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} />
              </div>
              <figcaption className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }}>
                <span>Design Language — Frontal Perspective</span>
              </figcaption>
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.15
          }} className="relative group">
              <div className="relative w-full overflow-hidden" style={{
              paddingBottom: `${5 / 4 * 100}%`
            }}>
                <img src={images.galleryImage2} alt="Dettaglio Ruota — Texture e Materiali" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#aec7e9]/30 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/3d84226b-1f47-4e20-b18d-cb8823012013.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} />
              </div>
              <figcaption className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }}>
                <span>Dettaglio Ruota — Texture e Materiali</span>
              </figcaption>
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="relative group">
              <div className="relative w-full overflow-hidden" style={{
              paddingBottom: `${5 / 4 * 100}%`
            }}>
                <img src={images.galleryImage3} alt="Contesto Urbano — Urban Minimalism" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#aec7e9]/30 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2b0dcd84-21b1-41d5-b563-d109b1fef673.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} />
              </div>
              <figcaption className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }}>
                <span>Contesto Urbano — Urban Minimalism</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Social Grid Preview - 9 IMMAGINI SEPARATE */}
      <section className="relative w-full bg-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] uppercase mb-6" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }}>
              <span>CAMPAIGN ASSETS</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[15px] leading-[2] text-white/70" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'center'
            }}>
                <span>
                  La griglia finale in stile feed Instagram è pensata proprio per mostrare come si può strutturare una comunicazione coerente, accattivante e professionale,
                  anche in ottica social media marketing.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Instagram 3x3 Grid - 9 IMMAGINI SEPARATE */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-150px"
        }} transition={{
          duration: 1
        }} className="grid grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto">
            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid1} alt="BMW X3 campaign asset 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/ab9a72cd-d65a-417b-80e0-4207ee5723a1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 1 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid2} alt="BMW X3 campaign asset 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 2 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid3} alt="BMW X3 campaign asset 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/4901a04b-70e2-4961-b6d5-58ebe695d592.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 3 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid4} alt="BMW X3 campaign asset 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 4 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid5} alt="BMW X3 campaign asset 5" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/ea90fe69-7282-4ca3-ab8c-f65428fc9575.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 5 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid6} alt="BMW X3 campaign asset 6" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 6 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid7} alt="BMW X3 campaign asset 7" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/f55836ef-b9df-46a3-a63a-e14e76bddda3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 7 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid8} alt="BMW X3 campaign asset 8" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/132ac735-a0a9-492a-b9c5-f9f1f4b3d8b7.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </motion.figure>

            <motion.figure initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 8 * 0.05
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square">
              <img src={images.socialGrid9} alt="BMW X3 campaign asset 9" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/d2a0d77a-1e30-47f1-b087-c0c04067eec8.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </motion.figure>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full bg-black py-32 lg:py-40 border-t border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-radial from-[#aec7e9]/20 via-[#aec7e9]/5 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.9
        }} className="space-y-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.1em] uppercase" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200
          }}>
              <span>Hai un progetto in mente?</span>
            </h2>

            <p className="text-[15px] leading-[2] text-white/70 max-w-3xl mx-auto" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300
          }}>
              <span>
                Creiamo insieme la tua prossima campagna visiva. Contattami per discutere come
                l'AI può trasformare la tua visione in realtà.
              </span>
            </p>

            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} className="inline-block">
              <button onClick={handleContactClick} className="inline-flex items-center gap-4 px-12 py-5 text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-[#aec7e9] to-[#8ba8d4] text-black font-medium hover:from-[#bdd5f0] hover:to-[#a0bbde] transition-all duration-300 shadow-lg shadow-[#aec7e9]/20" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400
            }}>
                <span>Inizia un progetto</span>
                <ArrowLeft size={18} strokeWidth={1.5} className="rotate-180" />
              </button>
            </motion.div>

            {/* Decorative line */}
            <motion.div initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1.2,
            delay: 0.3
          }} className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#aec7e9]/40 to-transparent" />
          </motion.div>
        </div>
      </section>
    </div>;
}
export { BMWX3ProjectDetail };