"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';
export interface AboutSectionProps {
  onScrollToNext?: () => void;
}
const manifestoValues = [{
  id: 'value-1',
  text: 'Visione'
}, {
  id: 'value-2',
  text: 'Precisione'
}, {
  id: 'value-3',
  text: 'Realismo'
}] as const;
export const AboutSection = ({
  onScrollToNext
}: AboutSectionProps) => {
  const { scrollToSection } = useNavigation();
  
  const handleScrollToProjects = () => {
    scrollToSection('#progetti');
  };

  return <section id="chi-sono" className="section-with-nav relative w-full min-h-screen bg-[#000000] text-white overflow-hidden flex items-center">
      {/* Content container - Two column layout */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto mobile-spacing">
        <div className="desktop-grid desktop-flex">
          
          {/* LEFT COLUMN - Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -60
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} className="space-y-8 lg:space-y-10">
            {/* Title Section */}
            <div className="space-y-3">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }} className="font-light tracking-[0.02em] text-white" style={{
              fontFamily: 'Urbanist, sans-serif',
              letterSpacing: '0.05em',
              color: "#aec7e9",
              fontSize: "clamp(2.5rem, 10vw, 5rem)"
            }}>CHI SONO</motion.h2>
              
              <motion.p initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }} className="text-sm text-[#aec7e9] font-light tracking-wide" style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              display: "none"
            }}>
                tommaso.piccioli@email.com
              </motion.p>
            </div>

            {/* Main Bio Text */}
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
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut"
          }} className="space-y-6">
              <p className="leading-relaxed text-white/90 font-light" style={{
              fontFamily: 'Urbanist, sans-serif',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
              fontSize: "clamp(0.875rem, 3vw, 1.25rem)"
            }}>
                Unisco creatività e intelligenza artificiale per creare campagne visive con identità forte e riconoscibile.
              </p>
              
              <p className="leading-relaxed text-white/80 font-light" style={{
              fontFamily: 'Urbanist, sans-serif',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
              fontSize: "clamp(0.875rem, 3vw, 1.25rem)"
            }}>
                Credo nel potere delle immagini come linguaggio universale capace di connettere emozione e metodo.
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div initial={{
            opacity: 0,
            scaleX: 0
          }} whileInView={{
            opacity: 1,
            scaleX: 1
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut"
          }} className="w-24 h-px bg-gradient-to-r from-[#aec7e9] to-transparent origin-left" />

            {/* Mini Manifesto */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.7,
            ease: "easeOut"
          }} className="flex flex-wrap items-center gap-4 sm:gap-6" style={{
            display: "none"
          }}>
              {manifestoValues.map((value, index) => <div key={value.id} className="flex items-center gap-4 sm:gap-6">
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#aec7e9] tracking-wide" style={{
                fontFamily: 'Literata, serif'
              }}>
                    {value.text}
                  </span>
                  
                  {/* Dot separator - not after last item */}
                  {index < manifestoValues.length - 1 && <span className="w-1 h-1 rounded-full bg-[#aec7e9]/50" />}
                </div>)}
            </motion.div>

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut"
          }} className="pt-6">
              <button onClick={handleScrollToProjects} className="nav-link group relative inline-flex items-center gap-2 sm:gap-3 text-white/80 font-light tracking-[0.1em] uppercase transition-all duration-500 min-h-[44px] px-2" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
              letterSpacing: 'clamp(0.1em, 0.5vw, 0.15em)'
            }}>
                <span className="relative z-10" style={{
                color: "#b3d7ff"
              }}>SCOPRI I MIEI PROGETTI</span>
                
                <motion.span className="relative z-10" animate={{
                x: [0, 6, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
                  <ArrowRight size={16} strokeWidth={1.5} className="text-[#aec7e9] group-hover:text-[#b3d7ff] transition-colors duration-300" />
                </motion.span>
                
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#aec7e9] group-hover:w-[calc(100%-30px)] transition-all duration-500" />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Portrait Image */}
          <motion.div initial={{
          opacity: 0,
          x: 60
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 1.2,
          delay: 0.4,
          ease: "easeOut"
        }} className="relative w-full aspect-[3/4] lg:aspect-[4/5] max-w-[600px] mx-auto lg:mx-0 lg:ml-auto">
            {/* Main portrait image with cinematic backlight */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Portrait image */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Tommaso Piccioli - AI Creative Director" className="w-full h-full object-cover object-center grayscale" style={{
              filter: 'grayscale(100%) contrast(1.1) brightness(0.85)'
            }} />
              
              {/* Dark gradient overlay for cinematic mood */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              
              {/* Warm backlight glow from right side */}
              <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#aec7e9]/40 via-[#aec7e9]/10 to-transparent mix-blend-screen" />
              
              {/* Subtle vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/d7d199f4-1be5-410e-a4b1-61ea28564e28.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} />
            </div>

            {/* Decorative golden glow behind the image */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-radial from-[#aec7e9]/20 via-[#aec7e9]/5 to-transparent blur-[100px] -z-10" />
            
            {/* Subtle frame effect */}
            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Background ambient light - left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-[#aec7e9]/10 via-[#aec7e9]/5 to-transparent blur-[120px] opacity-40" />
      
      {/* Bottom fade for smooth section transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>;
};