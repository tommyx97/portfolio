"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export interface AboutSectionProps {
  onScrollToNext?: () => void;
  mpid?: string;
}
const manifestoValues = [{
  id: 'value-1',
  text: 'Visione',
  mpid: "d47fe55a-300c-4b4e-95b9-0f27557b9754"
}, {
  id: 'value-2',
  text: 'Precisione',
  mpid: "7d644bd0-3a08-4801-a737-dd367b40e6b1"
}, {
  id: 'value-3',
  text: 'Realismo',
  mpid: "887bbd2a-9117-42b5-b40d-010dbafcdd42"
}] as const;
export const AboutSection = ({
  onScrollToNext
}: AboutSectionProps) => {
  return <SortableContainer dndKitId="48c8e283-69a6-42be-a4a9-c7f697978f29" containerType="regular" prevTag="section" id="about" className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden flex items-center" data-magicpath-id="0" data-magicpath-path="AboutSection.tsx">
      {/* Content container - Two column layout */}
      <SortableContainer dndKitId="ec6b84e6-e16f-4303-8c5d-54317cd9cd17" containerType="regular" prevTag="div" className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 py-20 lg:py-24" style={{
      background: "#000000"
    }} data-magicpath-id="1" data-magicpath-path="AboutSection.tsx">
        <SortableContainer dndKitId="08d68a9e-b0b4-4fdf-bdcd-f21f6b0b4f54" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 xl:gap-20 items-center" data-magicpath-id="2" data-magicpath-path="AboutSection.tsx">
          
          {/* LEFT COLUMN - Text Content */}
          <SortableContainer dndKitId="08423472-d9a4-4b96-aa16-ac022af97a4c" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="space-y-8 lg:space-y-10" data-magicpath-id="3" data-magicpath-path="AboutSection.tsx">
            {/* Title Section */}
            <SortableContainer dndKitId="64da4c59-4b19-4445-80da-8c074388660d" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="4" data-magicpath-path="AboutSection.tsx">
              <motion.h2 data-magicpath-motion-tag="motion.h2" initial={{
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
            }} className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[0.02em] text-white" style={{
              fontFamily: 'Urbanist, sans-serif',
              letterSpacing: '0.05em',
              color: "#aec7e9"
            }} data-magicpath-id="5" data-magicpath-path="AboutSection.tsx">CHI SONO</motion.h2>
              
              <motion.p data-magicpath-motion-tag="motion.p" initial={{
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
            }} data-magicpath-id="6" data-magicpath-path="AboutSection.tsx">
                tommaso.piccioli@email.com
              </motion.p>
            </SortableContainer>

            {/* Main Bio Text */}
            <SortableContainer dndKitId="6c51a1ee-c2de-48c6-b046-d0ae48d51915" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-6" data-magicpath-id="7" data-magicpath-path="AboutSection.tsx">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 font-light" style={{
              fontFamily: 'Urbanist, sans-serif',
              lineHeight: '1.8',
              letterSpacing: '0.01em'
            }} data-magicpath-id="8" data-magicpath-path="AboutSection.tsx">
                Unisco creatività e intelligenza artificiale per creare campagne visive con identità forte e riconoscibile.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/80 font-light" style={{
              fontFamily: 'Urbanist, sans-serif',
              lineHeight: '1.8',
              letterSpacing: '0.01em'
            }} data-magicpath-id="9" data-magicpath-path="AboutSection.tsx">
                Credo nel potere delle immagini come linguaggio universale capace di connettere emozione e metodo.
              </p>
            </SortableContainer>

            {/* Decorative line */}
            <motion.div data-magicpath-motion-tag="motion.div" initial={{
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
          }} className="w-24 h-px bg-gradient-to-r from-[#aec7e9] to-transparent origin-left" data-magicpath-id="10" data-magicpath-path="AboutSection.tsx" />

            {/* Mini Manifesto */}
            <SortableContainer dndKitId="bb862e7f-d323-4dab-9e17-1783d9762490" containerType="collection" prevTag="motion.div" initial={{
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
          }} data-magicpath-id="11" data-magicpath-path="AboutSection.tsx">
              {manifestoValues.map((value, index) => <div key={value.id} className="flex items-center gap-4 sm:gap-6" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="AboutSection.tsx">
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#aec7e9] tracking-wide" style={{
                fontFamily: 'Literata, serif'
              }} data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="13" data-magicpath-path="AboutSection.tsx">
                    {value.text}
                  </span>
                  
                  {/* Dot separator - not after last item */}
                  {index < manifestoValues.length - 1 && <span className="w-1 h-1 rounded-full bg-[#aec7e9]/50" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutSection.tsx" />}
                </div>)}
            </SortableContainer>

            {/* CTA Button */}
            <SortableContainer dndKitId="f8fadfa4-e8dd-4abf-8830-29d75a52135e" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="pt-6" data-magicpath-id="15" data-magicpath-path="AboutSection.tsx">
              <SortableContainer dndKitId="737a7b47-9e70-4852-bf1b-6be2a016bfd4" containerType="regular" prevTag="button" onClick={onScrollToNext} className="group relative inline-flex items-center gap-3 text-white/80 font-light tracking-[0.1em] uppercase transition-all duration-500 hover:text-white" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.15em'
            }} data-magicpath-id="16" data-magicpath-path="AboutSection.tsx">
                <span className="relative z-10" style={{
                color: "#b3d7ff"
              }} data-magicpath-id="17" data-magicpath-path="AboutSection.tsx">SCOPRI I MIEI PROGETTI</span>
                
                <motion.span data-magicpath-motion-tag="motion.span" className="relative z-10" animate={{
                x: [0, 6, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} data-magicpath-id="18" data-magicpath-path="AboutSection.tsx">
                  <ArrowRight size={18} strokeWidth={1.5} className="text-[#aec7e9] group-hover:text-[#b3d7ff] transition-colors duration-300" data-magicpath-id="19" data-magicpath-path="AboutSection.tsx" />
                </motion.span>
                
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#aec7e9] group-hover:w-[calc(100%-30px)] transition-all duration-500" data-magicpath-id="20" data-magicpath-path="AboutSection.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* RIGHT COLUMN - Portrait Image */}
          <SortableContainer dndKitId="bdcbfbc2-e5b6-4e63-ab5c-42fa4a36e59d" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="relative w-full aspect-[3/4] lg:aspect-[4/5] max-w-[600px] mx-auto lg:mx-0 lg:ml-auto" data-magicpath-id="21" data-magicpath-path="AboutSection.tsx">
            {/* Main portrait image with cinematic backlight */}
            <SortableContainer dndKitId="84d3071a-1331-4dfa-a22b-c00e4c779981" containerType="regular" prevTag="div" className="relative w-full h-full overflow-hidden" data-magicpath-id="22" data-magicpath-path="AboutSection.tsx">
              {/* Portrait image */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Tommaso Piccioli - AI Creative Director" className="w-full h-full object-cover object-center grayscale" style={{
              filter: 'grayscale(100%) contrast(1.1) brightness(0.85)'
            }} data-magicpath-id="23" data-magicpath-path="AboutSection.tsx" />
              
              {/* Dark gradient overlay for cinematic mood */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" data-magicpath-id="24" data-magicpath-path="AboutSection.tsx" />
              
              {/* Warm backlight glow from right side */}
              <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#aec7e9]/40 via-[#aec7e9]/10 to-transparent mix-blend-screen" data-magicpath-id="25" data-magicpath-path="AboutSection.tsx" />
              
              {/* Subtle vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/d7d199f4-1be5-410e-a4b1-61ea28564e28.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1"
            }} data-magicpath-id="26" data-magicpath-path="AboutSection.tsx" />
            </SortableContainer>

            {/* Decorative golden glow behind the image */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-radial from-[#aec7e9]/20 via-[#aec7e9]/5 to-transparent blur-[100px] -z-10" data-magicpath-id="27" data-magicpath-path="AboutSection.tsx" />
            
            {/* Subtle frame effect */}
            <div className="absolute inset-0 border border-white/5 pointer-events-none" data-magicpath-id="28" data-magicpath-path="AboutSection.tsx" />
          </SortableContainer>

        </SortableContainer>
      </SortableContainer>

      {/* Background ambient light - left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-[#aec7e9]/10 via-[#aec7e9]/5 to-transparent blur-[120px] opacity-40" data-magicpath-id="29" data-magicpath-path="AboutSection.tsx" />
      
      {/* Bottom fade for smooth section transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" data-magicpath-id="30" data-magicpath-path="AboutSection.tsx" />
    </SortableContainer>;
};