"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Instagram, Linkedin } from 'lucide-react';
type TommasoPortfolioProps = Record<string, never>;
const socialLinks = [{
  id: 'instagram-link',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram',
  mpid: "c8ee6816-8e54-40fb-a733-efdc72e9db49"
}, {
  id: 'linkedin-link',
  icon: Linkedin,
  href: 'https://linkedin.com',
  label: 'LinkedIn',
  mpid: "c497eb39-bcd9-4cab-a484-7d12ceed2620"
}] as const;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // @return
  return <SortableContainer dndKitId="53821ff1-595e-4ef9-8858-59a53fdad5e1" containerType="regular" prevTag="div" className="w-full min-h-screen bg-[#0A0A0A] text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="TommasoPortfolio.tsx">
      <SortableContainer dndKitId="b3949552-f4ae-4050-82dc-70f4ea280395" containerType="regular" prevTag="motion.nav" initial={{
      y: 0
    }} animate={{
      y: isNavVisible ? 0 : -100
    }} transition={{
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1]
    }} className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6 lg:py-8" data-magicpath-id="1" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="5f4daa68-7dc9-4f06-ad97-990612d86366" containerType="regular" prevTag="div" className="max-w-[1800px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="509269f0-b78e-4288-a72c-82988a363a33" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 1,
          delay: 0.2
        }} className="flex items-center gap-3" data-magicpath-id="3" data-magicpath-path="TommasoPortfolio.tsx">
            <div className="w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" data-magicpath-id="4" data-magicpath-path="TommasoPortfolio.tsx" />
            <SortableContainer dndKitId="f53e1f27-a733-4d4d-9363-e2796e84f855" containerType="regular" prevTag="div" className="flex flex-col" data-magicpath-id="5" data-magicpath-path="TommasoPortfolio.tsx">
              <h2 className="text-xs sm:text-sm font-light tracking-[0.25em] text-white/90 uppercase" data-magicpath-id="6" data-magicpath-path="TommasoPortfolio.tsx">
                Tommaso
              </h2>
              <span className="text-[10px] sm:text-xs font-extralight tracking-[0.3em] text-white/40 uppercase" data-magicpath-id="7" data-magicpath-path="TommasoPortfolio.tsx">
                Piccioli Studio
              </span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b4d7725f-8e9a-453a-9180-daaa21f422b5" containerType="collection" prevTag="motion.div" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 1,
          delay: 0.2
        }} className="hidden sm:flex items-center gap-8 lg:gap-12" data-magicpath-id="8" data-magicpath-path="TommasoPortfolio.tsx">
            {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="group relative" aria-label={social.label} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="TommasoPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4 + idx * 0.1
              }} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="TommasoPortfolio.tsx">
                    <Icon size={18} strokeWidth={1.5} className="text-white/50 group-hover:text-[#D4AF37] transition-colors duration-500" data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="TommasoPortfolio.tsx" />
                  </motion.div>
                </a>;
          })}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="3b53efb7-d508-4a71-b956-733b428f95a6" containerType="regular" prevTag="section" ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center px-6 sm:px-8 lg:px-12" data-magicpath-id="12" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="05174c17-8911-4537-8841-5c40bc372b4a" containerType="regular" prevTag="motion.div" style={{
        scale: backgroundScale
      }} className="absolute inset-0 z-0" data-magicpath-id="13" data-magicpath-path="TommasoPortfolio.tsx">
          <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/8 via-[#0A0A0A] to-[#0A0A0A]" data-magicpath-id="14" data-magicpath-path="TommasoPortfolio.tsx" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse" data-magicpath-id="15" data-magicpath-path="TommasoPortfolio.tsx" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[100px] animate-pulse" style={{
          animationDelay: '1s'
        }} data-magicpath-id="16" data-magicpath-path="TommasoPortfolio.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="236d1a34-a7da-473e-9079-09f738a3120b" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        y: heroY
      }} className="relative z-10 w-full max-w-[1400px] mx-auto" data-magicpath-id="17" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="39446455-1d6f-4402-ad82-b09747936c52" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center" data-magicpath-id="18" data-magicpath-path="TommasoPortfolio.tsx">
            <SortableContainer dndKitId="6e00852d-3e36-4ab5-8250-d730e4f36c51" containerType="regular" prevTag="div" className="lg:col-span-7 space-y-8 lg:space-y-12" data-magicpath-id="19" data-magicpath-path="TommasoPortfolio.tsx">
              <SortableContainer dndKitId="d3cae225-4fec-4365-8f56-9c0f61896bf3" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }} className="space-y-4 lg:space-y-6" data-magicpath-id="20" data-magicpath-path="TommasoPortfolio.tsx">
                <SortableContainer dndKitId="2107f15f-2b55-4472-8418-ce3842098f97" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="21" data-magicpath-path="TommasoPortfolio.tsx">
                  <div className="h-[1px] w-12 lg:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" data-magicpath-id="22" data-magicpath-path="TommasoPortfolio.tsx" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-light tracking-[0.35em] text-[#D4AF37] uppercase" data-magicpath-id="23" data-magicpath-path="TommasoPortfolio.tsx">
                    AI Creative Director
                  </span>
                </SortableContainer>

                <h1 className="relative" data-magicpath-id="24" data-magicpath-path="TommasoPortfolio.tsx">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.95] tracking-tight text-white" data-magicpath-id="25" data-magicpath-path="TommasoPortfolio.tsx">
                    Visual
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.95] tracking-tight mt-2 lg:mt-3" data-magicpath-id="26" data-magicpath-path="TommasoPortfolio.tsx">
                    <span className="text-white" data-magicpath-id="27" data-magicpath-path="TommasoPortfolio.tsx">Story</span>
                    <span className="text-[#D4AF37]" data-magicpath-id="28" data-magicpath-path="TommasoPortfolio.tsx">telling</span>
                  </span>
                </h1>
              </SortableContainer>

              <SortableContainer dndKitId="7aa3428d-61a2-4313-b078-8f4d53b8c80a" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1.2,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }} className="space-y-6 lg:space-y-8" data-magicpath-id="29" data-magicpath-path="TommasoPortfolio.tsx">
                <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-white/70 max-w-2xl" data-magicpath-id="30" data-magicpath-path="TommasoPortfolio.tsx">
                  Creo campagne visive cinematografiche attraverso l'intelligenza artificiale. 
                  Ogni progetto è un viaggio tra <span className="text-white/90 italic" data-magicpath-id="31" data-magicpath-path="TommasoPortfolio.tsx">design</span>, 
                  <span className="text-white/90 italic" data-magicpath-id="32" data-magicpath-path="TommasoPortfolio.tsx"> tecnologia</span> e 
                  <span className="text-white/90 italic" data-magicpath-id="33" data-magicpath-path="TommasoPortfolio.tsx"> narrazione</span>.
                </p>

                <SortableContainer dndKitId="dfad27e1-7c94-4154-9138-d36075484f5d" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4" data-magicpath-id="34" data-magicpath-path="TommasoPortfolio.tsx">
                  <SortableContainer dndKitId="ea6ac6bd-a728-4c2f-9ab1-1dc1a070fed9" containerType="regular" prevTag="motion.button" whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} className="group relative px-8 lg:px-10 py-4 lg:py-5 bg-white text-black text-xs lg:text-sm font-light tracking-[0.25em] uppercase overflow-hidden transition-all duration-500" data-magicpath-id="35" data-magicpath-path="TommasoPortfolio.tsx">
                    <span className="relative z-10" data-magicpath-id="36" data-magicpath-path="TommasoPortfolio.tsx">Esplora i Progetti</span>
                    <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" data-magicpath-id="37" data-magicpath-path="TommasoPortfolio.tsx" />
                  </SortableContainer>

                  <motion.a data-magicpath-motion-tag="motion.a" href="#contatto" whileHover={{
                  x: 4
                }} className="text-xs lg:text-sm font-light tracking-[0.25em] text-white/60 hover:text-white uppercase transition-colors duration-500 flex items-center gap-3" data-magicpath-id="38" data-magicpath-path="TommasoPortfolio.tsx">
                    <span data-magicpath-id="39" data-magicpath-path="TommasoPortfolio.tsx">Contattami</span>
                    <div className="w-12 h-[1px] bg-white/30" data-magicpath-id="40" data-magicpath-path="TommasoPortfolio.tsx" />
                  </motion.a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="e0bd4da4-85b6-4cae-b5d3-83970803b8e3" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1.4,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }} className="lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[600px]" data-magicpath-id="41" data-magicpath-path="TommasoPortfolio.tsx">
              <SortableContainer dndKitId="fb5d8746-b239-437c-9906-da8685415955" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="42" data-magicpath-path="TommasoPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent rounded-sm" data-magicpath-id="43" data-magicpath-path="TommasoPortfolio.tsx" />
                <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-sm" data-magicpath-id="44" data-magicpath-path="TommasoPortfolio.tsx" />
                
                <SortableContainer dndKitId="1c90f578-091b-4d1f-b058-10173436a81e" containerType="regular" prevTag="div" className="absolute inset-8 lg:inset-12 flex items-center justify-center" data-magicpath-id="45" data-magicpath-path="TommasoPortfolio.tsx">
                  <SortableContainer dndKitId="04c51237-866b-4d10-bf0e-f1dd23e6142b" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="46" data-magicpath-path="TommasoPortfolio.tsx">
                    <SortableContainer dndKitId="9a521cdd-a65f-4486-871d-0831481bb51f" containerType="regular" prevTag="motion.div" animate={{
                    rotate: [0, 360]
                  }} transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute inset-0" data-magicpath-id="47" data-magicpath-path="TommasoPortfolio.tsx">
                      <div className="absolute top-0 left-1/2 w-[1px] h-20 bg-gradient-to-b from-[#D4AF37]/40 to-transparent -translate-x-1/2" data-magicpath-id="48" data-magicpath-path="TommasoPortfolio.tsx" />
                      <div className="absolute bottom-0 left-1/2 w-[1px] h-20 bg-gradient-to-t from-[#D4AF37]/40 to-transparent -translate-x-1/2" data-magicpath-id="49" data-magicpath-path="TommasoPortfolio.tsx" />
                      <div className="absolute left-0 top-1/2 h-[1px] w-20 bg-gradient-to-r from-[#D4AF37]/40 to-transparent -translate-y-1/2" data-magicpath-id="50" data-magicpath-path="TommasoPortfolio.tsx" />
                      <div className="absolute right-0 top-1/2 h-[1px] w-20 bg-gradient-to-l from-[#D4AF37]/40 to-transparent -translate-y-1/2" data-magicpath-id="51" data-magicpath-path="TommasoPortfolio.tsx" />
                    </SortableContainer>

                    <SortableContainer dndKitId="49e354f8-dbf7-449d-904f-be097a2791da" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" data-magicpath-id="52" data-magicpath-path="TommasoPortfolio.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }} transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-radial from-[#D4AF37]/30 to-transparent blur-2xl" data-magicpath-id="53" data-magicpath-path="TommasoPortfolio.tsx" />
                    </SortableContainer>

                    <SortableContainer dndKitId="26a5a545-390c-4968-94f9-be270cbe1755" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" data-magicpath-id="54" data-magicpath-path="TommasoPortfolio.tsx">
                      <SortableContainer dndKitId="20dca96e-3697-43da-814b-e1203f198dfe" containerType="regular" prevTag="div" className="text-center space-y-2" data-magicpath-id="55" data-magicpath-path="TommasoPortfolio.tsx">
                        <div className="text-6xl lg:text-7xl font-extralight text-[#D4AF37] tracking-wider" data-magicpath-id="56" data-magicpath-path="TommasoPortfolio.tsx">
                          TP
                        </div>
                        <div className="text-[10px] lg:text-xs font-light tracking-[0.4em] text-white/40 uppercase" data-magicpath-id="57" data-magicpath-path="TommasoPortfolio.tsx">
                          Studio
                        </div>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>

                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 border border-[#D4AF37]/20 rounded-sm bg-[#0A0A0A]" data-magicpath-id="58" data-magicpath-path="TommasoPortfolio.tsx" />
                <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 border border-[#D4AF37]/20 rounded-sm bg-[#0A0A0A]" data-magicpath-id="59" data-magicpath-path="TommasoPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="35a16cff-0103-418a-b2fd-8d84bbddd876" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }} className="absolute bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" data-magicpath-id="60" data-magicpath-path="TommasoPortfolio.tsx">
            <span className="text-[10px] font-light tracking-[0.3em] text-white/30 uppercase" data-magicpath-id="61" data-magicpath-path="TommasoPortfolio.tsx">
              Scorri
            </span>
            <ChevronDown className="text-white/30" size={24} strokeWidth={1} data-magicpath-id="62" data-magicpath-path="TommasoPortfolio.tsx" />
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="ac7255bc-864e-430d-8a95-971252e42c71" containerType="collection" prevTag="div" className="absolute left-6 lg:left-8 bottom-12 lg:bottom-16 flex sm:hidden flex-col gap-6 z-20" data-magicpath-id="63" data-magicpath-path="TommasoPortfolio.tsx">
          {socialLinks.map(social => {
          const Icon = social.icon;
          return <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-500" aria-label={social.label} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="TommasoPortfolio.tsx">
                <Icon size={18} strokeWidth={1.5} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="TommasoPortfolio.tsx" />
              </a>;
        })}
        </SortableContainer>

        <SortableContainer dndKitId="abcb1f89-9651-4441-9425-cbeaddc74022" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1.2,
        delay: 1
      }} className="hidden lg:block absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 space-y-6" data-magicpath-id="66" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="561d9f56-5de0-4198-b055-f3d86364ba0d" containerType="regular" prevTag="div" className="flex flex-col items-center gap-4" data-magicpath-id="67" data-magicpath-path="TommasoPortfolio.tsx">
            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" data-magicpath-id="68" data-magicpath-path="TommasoPortfolio.tsx" />
            <span className="text-[10px] font-light tracking-[0.3em] text-white/30 uppercase [writing-mode:vertical-lr] rotate-180" data-magicpath-id="69" data-magicpath-path="TommasoPortfolio.tsx">
              Portfolio 2025
            </span>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="b427a562-e99f-4e01-9161-3e550ae73923" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1.2,
        delay: 1
      }} className="hidden lg:block absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 space-y-6" data-magicpath-id="70" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="fbceefd1-b7e9-4d27-b486-6f2148d92ebf" containerType="regular" prevTag="div" className="flex flex-col items-center gap-4" data-magicpath-id="71" data-magicpath-path="TommasoPortfolio.tsx">
            <span className="text-[10px] font-light tracking-[0.3em] text-white/30 uppercase [writing-mode:vertical-lr] rotate-180" data-magicpath-id="72" data-magicpath-path="TommasoPortfolio.tsx">
              AI · Design · Motion
            </span>
            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" data-magicpath-id="73" data-magicpath-path="TommasoPortfolio.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};