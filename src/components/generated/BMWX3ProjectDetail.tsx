"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowLeft, Play, Camera, Palette, Eye, Zap, Film, Sparkles } from 'lucide-react';
export interface BMWX3ProjectDetailProps {
  onBack?: () => void;
  mpid?: string;
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
  tools: ['Mid Journey', 'Mood Boards', 'Art Direction'],
  mpid: "10f96105-24a6-408c-8be6-dd6c28bf0b8a"
}, {
  id: 'generation-phase',
  icon: Camera,
  title: 'AI Generation',
  description: 'Creazione di ambienti fotografici cinematografici attraverso prompt engineering avanzato',
  tools: ['Mid Journey V6', 'Runway Gen-2', 'Leonardo AI'],
  mpid: "7da079fc-adb0-4a43-a9e4-cb4f12026c45"
}, {
  id: 'refinement-phase',
  icon: Palette,
  title: 'Raffinamento',
  description: 'Post-produzione meticolosa per raggiungere un equilibrio perfetto tra realismo e identità visiva',
  tools: ['Lightroom', 'Photoshop', 'Color Grading'],
  mpid: "54d8e885-a610-4a19-b5e8-25d51c04ecb8"
}] as const;
const technicalAspects = [{
  id: 'tech-1',
  icon: Zap,
  title: 'AI Prompt Engineering',
  description: 'Sviluppo di prompt complessi per ottenere il massimo controllo sulla composizione, illuminazione e atmosfera',
  mpid: "f9315b52-18f1-490f-9370-ae5f34f85980"
}, {
  id: 'tech-2',
  icon: Film,
  title: 'Motion Generation',
  description: 'Utilizzo di Runway per creare variazioni dinamiche e animazioni fluide delle scene statiche',
  mpid: "d452ac9b-b629-4299-9271-ea49d5259dbe"
}, {
  id: 'tech-3',
  icon: Sparkles,
  title: 'Post-Processing',
  description: 'Raffinamento professionale per garantire coerenza visiva e qualità da campagna premium',
  mpid: "ad6157a4-96e8-42f6-aaf3-30745c02f89b"
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
  return <SortableContainer dndKitId="40d639cb-562a-4817-bf00-9f6ea49a93e9" containerType="regular" prevTag="div" className="relative w-full min-h-screen bg-black text-white overflow-x-hidden" style={{
    fontFamily: 'Montserrat, sans-serif'
  }} data-magicpath-id="0" data-magicpath-path="BMWX3ProjectDetail.tsx">
      {/* Sticky Header Navigation */}
      <SortableContainer dndKitId="71aab9df-1651-44bd-bfdc-46d0efde2c04" containerType="regular" prevTag="motion.header" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.3
    }} className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 py-6 backdrop-blur-xl bg-black/60 border-b border-white/5" data-magicpath-id="1" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="bb680d7c-eb82-488b-834b-e205006d805e" containerType="regular" prevTag="nav" className="max-w-[1800px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <SortableContainer dndKitId="31960687-7a69-4675-a787-82c5108652a8" containerType="regular" prevTag="div" className="flex items-center gap-6" data-magicpath-id="3" data-magicpath-path="BMWX3ProjectDetail.tsx">
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
          }} data-magicpath-id="4" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" data-magicpath-id="5" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <span data-magicpath-id="6" data-magicpath-path="BMWX3ProjectDetail.tsx">TORNA AI PROGETTI</span>
            </h2>
            <span className="text-white/30" data-magicpath-id="7" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="8" data-magicpath-path="BMWX3ProjectDetail.tsx">•</span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase font-light" style={{
            color: '#aec7e9',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300
          }} data-magicpath-id="9" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="10" data-magicpath-path="BMWX3ProjectDetail.tsx">BMW X3 Project</span>
            </span>
          </SortableContainer>

          <SortableContainer dndKitId="0b702593-88bc-46e8-aaf1-2d92ddb64939" containerType="regular" prevTag="button" onClick={handleContactClick} className="px-6 py-2.5 bg-white text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-all duration-300" style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400
        }} data-magicpath-id="11" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <span data-magicpath-id="12" data-magicpath-path="BMWX3ProjectDetail.tsx">Contattami</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section with Parallax */}
      <SortableContainer dndKitId="0bb942eb-0cb0-44ec-becd-2b8e3d4e71b2" containerType="regular" prevTag="section" className="relative w-full h-screen overflow-hidden" data-magicpath-id="13" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="84bb53e4-0dd3-43d9-90e7-f161978a55e0" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="absolute inset-0" data-magicpath-id="14" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <img src={images.heroBackground} alt="BMW X3 in brutalist architecture with dramatic lighting" className="w-full h-full object-cover" data-magicpath-id="15" data-magicpath-path="BMWX3ProjectDetail.tsx" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" data-magicpath-id="16" data-magicpath-path="BMWX3ProjectDetail.tsx" />
        </SortableContainer>

        {/* Hero Content */}
        <SortableContainer dndKitId="3365b366-c862-4743-97ca-75d98843f696" containerType="regular" prevTag="div" className="relative z-10 h-full flex items-end pb-20 lg:pb-32" data-magicpath-id="17" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <SortableContainer dndKitId="9e4d4ccc-d2e1-417f-9cf6-ee1119be1ff9" containerType="regular" prevTag="div" className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 lg:px-16" data-magicpath-id="18" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <SortableContainer dndKitId="26cdf7f3-5720-40cb-9140-1fa8ca753da9" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 60
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }} className="max-w-5xl" data-magicpath-id="19" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" initial={{
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
            }} data-magicpath-id="20" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="21" data-magicpath-path="BMWX3ProjectDetail.tsx">{projectMeta.subtitle}</span>
              </motion.p>

              <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-[0.02em] mb-8" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 200
            }} data-magicpath-id="22" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span className="text-white" style={{
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(200, 150, 107, 0.3)'
              }} data-magicpath-id="23" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  {projectMeta.title}
                </span>
              </h1>

              <SortableContainer dndKitId="b220334b-59de-4477-8fc9-82519648a465" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.9
            }} className="grid grid-cols-2 gap-6 lg:gap-8" data-magicpath-id="24" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <SortableContainer dndKitId="4073540b-94cd-4c22-88c7-7d418ab08acf" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="25" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  <p className="text-xs tracking-[0.2em] uppercase" style={{
                  color: '#aec7e9',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="26" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="27" data-magicpath-path="BMWX3ProjectDetail.tsx">Cliente</span>
                  </p>
                  <p className="text-sm text-white/90" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="28" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="29" data-magicpath-path="BMWX3ProjectDetail.tsx">{projectMeta.client}</span>
                  </p>
                </SortableContainer>

                <SortableContainer dndKitId="1a9cc353-d3c6-4898-ac59-2eda84e99c22" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="30" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  <p className="text-xs tracking-[0.2em] uppercase" style={{
                  color: '#aec7e9',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="31" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="32" data-magicpath-path="BMWX3ProjectDetail.tsx">Anno</span>
                  </p>
                  <p className="text-sm text-white/90" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="33" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="BMWX3ProjectDetail.tsx">{projectMeta.year}</span>
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator */}
        <SortableContainer dndKitId="2872a02f-1c32-4b4f-8977-c56240082632" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.5
      }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20" data-magicpath-id="35" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <motion.div data-magicpath-motion-tag="motion.div" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-[1px] h-16 bg-gradient-to-b from-[#aec7e9] to-transparent" data-magicpath-id="36" data-magicpath-path="BMWX3ProjectDetail.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Project Overview */}
      <SortableContainer dndKitId="19625413-7429-48ec-9238-36f381345974" containerType="regular" prevTag="section" className="relative w-full bg-black py-24 lg:py-32" data-magicpath-id="37" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="3b6e47a4-7047-410b-919b-0bbc2da5d54a" containerType="regular" prevTag="div" className="absolute inset-0 z-0 overflow-hidden" data-magicpath-id="38" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#aec7e9]/10 via-transparent to-transparent blur-3xl" data-magicpath-id="39" data-magicpath-path="BMWX3ProjectDetail.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="eb802c7f-9fa6-476a-abb5-a8808e570922" containerType="regular" prevTag="div" className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16" data-magicpath-id="40" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <SortableContainer dndKitId="1175b840-f013-4c9b-b186-9be3de70d32e" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20" data-magicpath-id="41" data-magicpath-path="BMWX3ProjectDetail.tsx">
            {/* Left: Title */}
            <SortableContainer dndKitId="6d4187ac-ebb5-40fb-89f0-fac6f20ae6cb" containerType="regular" prevTag="div" className="space-y-6" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }} data-magicpath-id="42" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <h2 className="text-4xl lg:text-5xl tracking-[0.1em] uppercase" style={{
              color: '#aec7e9',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 200
            }} data-magicpath-id="43" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="44" data-magicpath-path="BMWX3ProjectDetail.tsx">Il Progetto</span>
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#aec7e9] to-transparent" data-magicpath-id="45" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </SortableContainer>

            {/* Right: Description */}
            <SortableContainer dndKitId="fa4c23d8-6124-48eb-871e-71241536a7ca" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="46" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <p className="text-[15px] leading-[2] text-white/90" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'left'
            }} data-magicpath-id="47" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="48" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  Questo è un progetto personale nato dalla volontà di esplorare il potenziale delle immagini generate con intelligenza artificiale nel contesto della comunicazione visiva per il mondo automotive.
                  L'idea era quella di immaginare una campagna creativa per la BMW X3, che unisse eleganza, architettura moderna e atmosfera cinematografica.
                  Tutto il concept è stato sviluppato attorno a una visione precisa, dove design e suggestione visiva si fondono per raccontare un'identità forte e contemporanea del veicolo.
                </span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Visual Direction Section - 3 IMMAGINI SEPARATE */}
      <SortableContainer dndKitId="839dd699-8fb2-4f46-aca0-298d234c8799" containerType="regular" prevTag="section" className="relative w-full bg-black py-24 lg:py-32" data-magicpath-id="49" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="05f29452-3bb3-4a05-83ed-17b15262ad2a" containerType="regular" prevTag="div" className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16" data-magicpath-id="50" data-magicpath-path="BMWX3ProjectDetail.tsx">
          {/* Section Header */}
          <SortableContainer dndKitId="cd7be5f5-ce1c-44cc-a418-d18c40fa4fc6" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="text-center mb-16 lg:mb-20" data-magicpath-id="51" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] uppercase mb-4" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }} data-magicpath-id="52" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="53" data-magicpath-path="BMWX3ProjectDetail.tsx">VISUAL DIRECTION</span>
            </h2>
            <SortableContainer dndKitId="3b5cd3e0-1193-4e69-9e5b-2b9594a910d7" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="54" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <p className="text-[15px] leading-[2] text-white/70" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'center'
            }} data-magicpath-id="55" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="56" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  Il tono visivo richiama uno stile moderno e minimale, con richiami all'architettura brutalista e un'atmosfera sospesa.
                  Ho scelto ambienti che esaltano la geometria e il profilo del veicolo, giocando con riflessi, spazi vuoti e contrasti tra luci e ombre.
                </span>
              </p>
            </SortableContainer>
          </SortableContainer>

          {/* Hero Image */}
          <SortableContainer dndKitId="60502d21-be82-42ff-818f-4f0b7bdaeccf" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="mb-8 lg:mb-12" data-magicpath-id="57" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <SortableContainer dndKitId="3ddea54e-ce65-47fb-a669-8961885afe3f" containerType="regular" prevTag="figure" className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5" data-magicpath-id="58" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="a7a40d03-11de-4ce5-a57e-fdb481e3f2a6" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${9 / 21 * 100}%`
            }} data-magicpath-id="59" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.visualDirectionHero} alt="BMW X3 visual direction and concept" className="absolute inset-0 w-full h-full object-cover" data-magicpath-id="60" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" data-magicpath-id="61" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Supporting Images Grid - 2 IMMAGINI SEPARATE */}
          <SortableContainer dndKitId="9a99fb91-121d-4062-986f-e17009de916f" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-magicpath-id="62" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer" data-magicpath-id="63" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="e65eee5f-89ac-45a3-b80d-d471c1f0a9bf" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${3 / 4 * 100}%`
            }} data-magicpath-id="64" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.visualDirectionSupport1} alt="BMW X3 visual direction detail 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="65" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" data-magicpath-id="66" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer" data-magicpath-id="67" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="00c538f7-11ee-4c3f-813c-da7fa8a1c7f9" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${3 / 4 * 100}%`
            }} data-magicpath-id="68" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.visualDirectionSupport2} alt="BMW X3 visual direction detail 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="69" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c8f47fc9-b060-43ba-af8a-acd3161cb91c.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} data-magicpath-id="70" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
            </motion.figure>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Design Philosophy Section - 3 IMMAGINI SEPARATE */}
      <SortableContainer dndKitId="7f611092-6dc1-4cdb-98fe-145194cecf81" containerType="regular" prevTag="section" className="relative w-full bg-[#0D0D0D] text-white py-24 lg:py-32" data-magicpath-id="71" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="ab2eb87f-dad2-4f6b-8541-30e8630b181b" containerType="regular" prevTag="div" className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16" style={{
        display: "none"
      }} data-magicpath-id="72" data-magicpath-path="BMWX3ProjectDetail.tsx">
          {/* Section Header */}
          <SortableContainer dndKitId="f5c09356-0280-4195-8922-f90485a5f5ad" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="text-center mb-12 lg:mb-16" data-magicpath-id="73" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] uppercase mb-8" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }} data-magicpath-id="74" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="75" data-magicpath-path="BMWX3ProjectDetail.tsx">{designPhilosophy.title}</span>
            </h2>

            {/* Description */}
            <SortableContainer dndKitId="f863ba18-cfcc-4d84-b1c9-9815b71a669e" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="76" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" initial={{
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
            }} data-magicpath-id="77" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="78" data-magicpath-path="BMWX3ProjectDetail.tsx">{designPhilosophy.description}</span>
              </motion.p>
            </SortableContainer>
          </SortableContainer>

          {/* Three Highlights Grid - 3 IMMAGINI SEPARATE */}
          <SortableContainer dndKitId="72912d87-0e1b-4671-8820-fd554f60b804" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16" data-magicpath-id="79" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer" data-magicpath-id="80" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="169a9362-15de-47b2-9b3e-aaec7498eda4" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${4 / 3 * 100}%`
            }} data-magicpath-id="81" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.philosophyHighlight1} alt="Urban Context" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="82" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-magicpath-id="83" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                
                {/* Caption Overlay */}
                <SortableContainer dndKitId="30783312-7cf6-4609-b85e-b052af8767d1" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-6" data-magicpath-id="84" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  <p className="text-sm tracking-[0.2em] uppercase text-white" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="85" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="86" data-magicpath-path="BMWX3ProjectDetail.tsx">Urban Context</span>
                  </p>
                </SortableContainer>
              </SortableContainer>
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer" data-magicpath-id="87" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="71d0d714-6c37-403b-89a1-87aec25ad377" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${4 / 3 * 100}%`
            }} data-magicpath-id="88" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.philosophyHighlight2} alt="Cinematic Lighting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="89" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-magicpath-id="90" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                
                {/* Caption Overlay */}
                <SortableContainer dndKitId="e68e62b2-ac42-4b21-bdfd-1bf2abf8b191" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-6" data-magicpath-id="91" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  <p className="text-sm tracking-[0.2em] uppercase text-white" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="92" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="93" data-magicpath-path="BMWX3ProjectDetail.tsx">Cinematic Lighting</span>
                  </p>
                </SortableContainer>
              </SortableContainer>
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer" data-magicpath-id="94" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="0713fbab-79ab-42f0-80d1-2bc6502c0c2d" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${4 / 3 * 100}%`
            }} data-magicpath-id="95" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.philosophyHighlight3} alt="Material Details" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="96" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-magicpath-id="97" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                
                {/* Caption Overlay */}
                <SortableContainer dndKitId="d9ef1820-79c1-48b1-a33c-78bb04681da5" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-6" data-magicpath-id="98" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  <p className="text-sm tracking-[0.2em] uppercase text-white" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300
                }} data-magicpath-id="99" data-magicpath-path="BMWX3ProjectDetail.tsx">
                    <span data-magicpath-id="100" data-magicpath-path="BMWX3ProjectDetail.tsx">Material Details</span>
                  </p>
                </SortableContainer>
              </SortableContainer>
            </motion.figure>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gallery Grid - 4 IMMAGINI SEPARATE */}
      <SortableContainer dndKitId="7df1afd3-b4ff-4a7c-8623-1bae2712c5b0" containerType="regular" prevTag="section" className="relative w-full bg-black py-24 lg:py-32" data-magicpath-id="101" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="54464632-0f3c-474a-8fd8-8d7b1024b007" containerType="regular" prevTag="div" className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16" data-magicpath-id="102" data-magicpath-path="BMWX3ProjectDetail.tsx">
          {/* Section Header */}
          <SortableContainer dndKitId="908095e8-7160-41e9-accb-1930efc5ddc2" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="mb-16 lg:mb-20" data-magicpath-id="103" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <h2 className="text-4xl lg:text-5xl tracking-[0.1em] uppercase mb-6" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }} data-magicpath-id="104" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="105" data-magicpath-path="BMWX3ProjectDetail.tsx">Visual Gallery</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#aec7e9] to-transparent" data-magicpath-id="106" data-magicpath-path="BMWX3ProjectDetail.tsx" />
          </SortableContainer>

          {/* Hero Image */}
          <SortableContainer dndKitId="b753d90d-3376-4286-96d6-6a7b10b78431" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="mb-8 lg:mb-12" data-magicpath-id="107" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <SortableContainer dndKitId="294b2a22-5bec-4b89-b554-5b0dbc7ce311" containerType="regular" prevTag="figure" className="relative w-full overflow-hidden group" data-magicpath-id="108" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="7ea48099-2b8c-4064-868e-aa90f506ce41" containerType="regular" prevTag="div" className="relative w-full" style={{
              paddingBottom: `${9 / 16 * 100}%`
            }} data-magicpath-id="109" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.galleryHero} alt="BMW X3 Full Body Cinematic Mood" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="110" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" data-magicpath-id="111" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="217460c2-ae3e-4a12-9a4b-fe298cff071f" containerType="regular" prevTag="figcaption" className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }} data-magicpath-id="112" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="113" data-magicpath-path="BMWX3ProjectDetail.tsx">Full Body — Cinematic Mood</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Three Column Grid - 3 IMMAGINI SEPARATE */}
          <SortableContainer dndKitId="f87486a3-2159-4fbf-9d73-e68e057ac742" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12" data-magicpath-id="114" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative group" data-magicpath-id="115" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="09759e34-1a4f-48ae-b765-433a0b5f064b" containerType="regular" prevTag="div" className="relative w-full overflow-hidden" style={{
              paddingBottom: `${5 / 4 * 100}%`
            }} data-magicpath-id="116" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.galleryImage1} alt="Design Language — Frontal Perspective" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="117" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" data-magicpath-id="118" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#aec7e9]/30 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/8eddbc34-631c-4493-b727-00646ede6ef4.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} data-magicpath-id="119" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="a102076b-82f0-46de-b448-7c64b5d5a322" containerType="regular" prevTag="figcaption" className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }} data-magicpath-id="120" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="121" data-magicpath-path="BMWX3ProjectDetail.tsx">Design Language — Frontal Perspective</span>
              </SortableContainer>
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative group" data-magicpath-id="122" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="b2fbc1a7-2a4d-450e-8ecc-3d5bc8c68ae9" containerType="regular" prevTag="div" className="relative w-full overflow-hidden" style={{
              paddingBottom: `${5 / 4 * 100}%`
            }} data-magicpath-id="123" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.galleryImage2} alt="Dettaglio Ruota — Texture e Materiali" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="124" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" data-magicpath-id="125" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#aec7e9]/30 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/3d84226b-1f47-4e20-b18d-cb8823012013.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} data-magicpath-id="126" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="b5602b87-0bcf-4ed4-ac60-9166f54dd2f6" containerType="regular" prevTag="figcaption" className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }} data-magicpath-id="127" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="128" data-magicpath-path="BMWX3ProjectDetail.tsx">Dettaglio Ruota — Texture e Materiali</span>
              </SortableContainer>
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative group" data-magicpath-id="129" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="010fb650-ab12-4338-aa0e-0e87de5a23fc" containerType="regular" prevTag="div" className="relative w-full overflow-hidden" style={{
              paddingBottom: `${5 / 4 * 100}%`
            }} data-magicpath-id="130" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <img src={images.galleryImage3} alt="Contesto Urbano — Urban Minimalism" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-magicpath-id="131" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" data-magicpath-id="132" data-magicpath-path="BMWX3ProjectDetail.tsx" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#aec7e9]/30 transition-colors duration-500" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2b0dcd84-21b1-41d5-b563-d109b1fef673.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }} data-magicpath-id="133" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="5d30486a-6490-40d6-97e1-14cb4a7a1c3d" containerType="regular" prevTag="figcaption" className="mt-4 text-sm tracking-wide text-white/60" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300
            }} data-magicpath-id="134" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="135" data-magicpath-path="BMWX3ProjectDetail.tsx">Contesto Urbano — Urban Minimalism</span>
              </SortableContainer>
            </motion.figure>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Social Grid Preview - 9 IMMAGINI SEPARATE */}
      <SortableContainer dndKitId="41d97a80-e189-44e5-9dff-6862de3b6b72" containerType="regular" prevTag="section" className="relative w-full bg-black py-24 lg:py-32 border-t border-white/10" data-magicpath-id="136" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="ac0df5ec-053a-4092-ab4e-83f695a3f988" containerType="regular" prevTag="div" className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20" data-magicpath-id="137" data-magicpath-path="BMWX3ProjectDetail.tsx">
          {/* Section Header */}
          <SortableContainer dndKitId="fa2ce8bf-9624-4ab0-882b-df0c339b28b3" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="text-center mb-16 lg:mb-20" data-magicpath-id="138" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] uppercase mb-6" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: '#aec7e9'
          }} data-magicpath-id="139" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="140" data-magicpath-path="BMWX3ProjectDetail.tsx">CAMPAIGN ASSETS</span>
            </h2>
            <SortableContainer dndKitId="6641f96f-0437-4663-955e-7756ac1b45ea" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="141" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <p className="text-[15px] leading-[2] text-white/70" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              textAlign: 'center'
            }} data-magicpath-id="142" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="143" data-magicpath-path="BMWX3ProjectDetail.tsx">
                  La griglia finale in stile feed Instagram è pensata proprio per mostrare come si può strutturare una comunicazione coerente, accattivante e professionale,
                  anche in ottica social media marketing.
                </span>
              </p>
            </SortableContainer>
          </SortableContainer>

          {/* Instagram 3x3 Grid - 9 IMMAGINI SEPARATE */}
          <SortableContainer dndKitId="6eff9938-0c07-48b3-ac14-a0a55d099b13" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="grid grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto" data-magicpath-id="144" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="145" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid1} alt="BMW X3 campaign asset 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="146" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/ab9a72cd-d65a-417b-80e0-4207ee5723a1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="147" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="148" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid2} alt="BMW X3 campaign asset 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="149" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" data-magicpath-id="150" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="151" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid3} alt="BMW X3 campaign asset 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="152" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/4901a04b-70e2-4961-b6d5-58ebe695d592.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="153" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="154" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid4} alt="BMW X3 campaign asset 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="155" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" data-magicpath-id="156" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="157" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid5} alt="BMW X3 campaign asset 5" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="158" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/ea90fe69-7282-4ca3-ab8c-f65428fc9575.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="159" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="160" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid6} alt="BMW X3 campaign asset 6" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="161" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" data-magicpath-id="162" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="163" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid7} alt="BMW X3 campaign asset 7" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="164" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/f55836ef-b9df-46a3-a63a-e14e76bddda3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="165" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="166" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid8} alt="BMW X3 campaign asset 8" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="167" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/132ac735-a0a9-492a-b9c5-f9f1f4b3d8b7.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="168" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>

            <motion.figure data-magicpath-motion-tag="motion.figure" initial={{
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
          }} className="relative w-full overflow-hidden bg-zinc-900/30 border border-white/5 group cursor-pointer aspect-square" data-magicpath-id="169" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <img src={images.socialGrid9} alt="BMW X3 campaign asset 9" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-magicpath-id="170" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/d2a0d77a-1e30-47f1-b087-c0c04067eec8.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="171" data-magicpath-path="BMWX3ProjectDetail.tsx" />
            </motion.figure>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="d9116a5f-eb4a-4e18-80e8-e71f3afa695e" containerType="regular" prevTag="section" className="relative w-full bg-black py-32 lg:py-40 border-t border-white/10" data-magicpath-id="172" data-magicpath-path="BMWX3ProjectDetail.tsx">
        <SortableContainer dndKitId="fc58785f-624f-4dd7-9980-7fcdddea4fe7" containerType="regular" prevTag="div" className="absolute inset-0 z-0 overflow-hidden" data-magicpath-id="173" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-radial from-[#aec7e9]/20 via-[#aec7e9]/5 to-transparent blur-3xl" data-magicpath-id="174" data-magicpath-path="BMWX3ProjectDetail.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="4434d8c5-9759-43c3-92c9-6cd51692a251" containerType="regular" prevTag="div" className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 text-center" data-magicpath-id="175" data-magicpath-path="BMWX3ProjectDetail.tsx">
          <SortableContainer dndKitId="374ccae5-494f-4ac6-9a75-4ee1997d3583" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.9
        }} className="space-y-12" data-magicpath-id="176" data-magicpath-path="BMWX3ProjectDetail.tsx">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-[0.1em] uppercase" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200
          }} data-magicpath-id="177" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="178" data-magicpath-path="BMWX3ProjectDetail.tsx">Hai un progetto in mente?</span>
            </h2>

            <p className="text-[15px] leading-[2] text-white/70 max-w-3xl mx-auto" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300
          }} data-magicpath-id="179" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <span data-magicpath-id="180" data-magicpath-path="BMWX3ProjectDetail.tsx">
                Creiamo insieme la tua prossima campagna visiva. Contattami per discutere come
                l'AI può trasformare la tua visione in realtà.
              </span>
            </p>

            <SortableContainer dndKitId="e3519a98-b5a7-4d2d-be0a-2529bc1b13eb" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} className="inline-block" data-magicpath-id="181" data-magicpath-path="BMWX3ProjectDetail.tsx">
              <SortableContainer dndKitId="95aa7da4-838e-4f48-a097-a964c0ff950d" containerType="regular" prevTag="button" onClick={handleContactClick} className="inline-flex items-center gap-4 px-12 py-5 text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-[#aec7e9] to-[#8ba8d4] text-black font-medium hover:from-[#bdd5f0] hover:to-[#a0bbde] transition-all duration-300 shadow-lg shadow-[#aec7e9]/20" style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400
            }} data-magicpath-id="182" data-magicpath-path="BMWX3ProjectDetail.tsx">
                <span data-magicpath-id="183" data-magicpath-path="BMWX3ProjectDetail.tsx">Inizia un progetto</span>
                <ArrowLeft size={18} strokeWidth={1.5} className="rotate-180" data-magicpath-id="184" data-magicpath-path="BMWX3ProjectDetail.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Decorative line */}
            <motion.div data-magicpath-motion-tag="motion.div" initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1.2,
            delay: 0.3
          }} className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#aec7e9]/40 to-transparent" data-magicpath-id="185" data-magicpath-path="BMWX3ProjectDetail.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}
export { BMWX3ProjectDetail };