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
  mpid: "b4947062-bdfa-47bb-b527-1fde88b405d6"
}, {
  id: 'value-2',
  text: 'Precisione',
  mpid: "0c0a469f-5a2f-473c-a000-ffbb02f33bef"
}, {
  id: 'value-3',
  text: 'Realismo',
  mpid: "841bd425-8d8d-4a12-b21b-a4792f57c105"
}] as const;
export const AboutSection = ({
  onScrollToNext
}: AboutSectionProps) => {
  return <SortableContainer dndKitId="8f75a08f-5986-4eab-a34c-7022be999b7e" containerType="regular" prevTag="section" id="about" className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden flex items-center" data-magicpath-id="0" data-magicpath-path="AboutSection.tsx">
      {/* Content container - Two column layout */}
      <SortableContainer dndKitId="383c38b2-368e-4e87-a4cc-59c098d7a678" containerType="regular" prevTag="div" className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 py-20 lg:py-24" style={{
      background: "#000000"
    }} data-magicpath-id="1" data-magicpath-path="AboutSection.tsx">
        <SortableContainer dndKitId="87a39b97-5e79-4ba1-9617-9ba309457d6e" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 xl:gap-20 items-center" data-magicpath-id="2" data-magicpath-path="AboutSection.tsx">
          
          {/* LEFT COLUMN - Text Content */}
          <SortableContainer dndKitId="9cbcef5b-20a8-4a52-b7b2-a58fcd2a8ee0" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="475136fb-72ae-4887-b544-de23018b3b29" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="4" data-magicpath-path="AboutSection.tsx">
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
              letterSpacing: '0.05em'
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
            }} className="text-sm text-[#E7B979] font-light tracking-wide" style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="AboutSection.tsx">
                tommaso.piccioli@email.com
              </motion.p>
            </SortableContainer>

            {/* Main Bio Text */}
            <SortableContainer dndKitId="f69c6362-71b2-4522-b8a5-d277eb91a687" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="w-24 h-px bg-gradient-to-r from-[#E7B979] to-transparent origin-left" data-magicpath-id="10" data-magicpath-path="AboutSection.tsx" />

            {/* Mini Manifesto */}
            <SortableContainer dndKitId="db826f95-c17c-4163-8969-39dd83230d97" containerType="collection" prevTag="motion.div" initial={{
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
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#E7B979] tracking-wide" style={{
                fontFamily: 'Literata, serif'
              }} data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="13" data-magicpath-path="AboutSection.tsx">
                    {value.text}
                  </span>
                  
                  {/* Dot separator - not after last item */}
                  {index < manifestoValues.length - 1 && <span className="w-1 h-1 rounded-full bg-[#E7B979]/50" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutSection.tsx" />}
                </div>)}
            </SortableContainer>

            {/* CTA Button */}
            <SortableContainer dndKitId="95b24655-7b5a-4600-b47e-ce58c4bef6df" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="00079adb-7fc7-43ce-b470-07f9504badae" containerType="regular" prevTag="button" onClick={onScrollToNext} className="group relative inline-flex items-center gap-3 text-white/80 font-light tracking-[0.1em] uppercase transition-all duration-500 hover:text-white" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.15em'
            }} data-magicpath-id="16" data-magicpath-path="AboutSection.tsx">
                <span className="relative z-10" data-magicpath-id="17" data-magicpath-path="AboutSection.tsx">SCOPRI I MIEI PROGETTI</span>
                
                <motion.span data-magicpath-motion-tag="motion.span" className="relative z-10" animate={{
                x: [0, 6, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} data-magicpath-id="18" data-magicpath-path="AboutSection.tsx">
                  <ArrowRight size={18} strokeWidth={1.5} className="text-[#E7B979] group-hover:text-[#F0C88A] transition-colors duration-300" data-magicpath-id="19" data-magicpath-path="AboutSection.tsx" />
                </motion.span>
                
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#E7B979] group-hover:w-[calc(100%-30px)] transition-all duration-500" data-magicpath-id="20" data-magicpath-path="AboutSection.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* RIGHT COLUMN - Portrait Image */}
          <SortableContainer dndKitId="f4f2d652-076b-4408-8068-02c2a371b9db" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="64c627a9-f133-4ec5-b789-34a2c6927623" containerType="regular" prevTag="div" className="relative w-full h-full overflow-hidden" data-magicpath-id="22" data-magicpath-path="AboutSection.tsx">
              {/* Portrait image */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Tommaso Piccioli - AI Creative Director" className="w-full h-full object-cover object-center grayscale" style={{
              filter: 'grayscale(100%) contrast(1.1) brightness(0.85)'
            }} data-magicpath-id="23" data-magicpath-path="AboutSection.tsx" />
              
              {/* Dark gradient overlay for cinematic mood */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" data-magicpath-id="24" data-magicpath-path="AboutSection.tsx" />
              
              {/* Warm backlight glow from right side */}
              <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#E7B979]/40 via-[#E7B979]/10 to-transparent mix-blend-screen" data-magicpath-id="25" data-magicpath-path="AboutSection.tsx" />
              
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
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-radial from-[#E7B979]/20 via-[#E7B979]/5 to-transparent blur-[100px] -z-10" data-magicpath-id="27" data-magicpath-path="AboutSection.tsx" />
            
            {/* Subtle frame effect */}
            <div className="absolute inset-0 border border-white/5 pointer-events-none" data-magicpath-id="28" data-magicpath-path="AboutSection.tsx" />
          </SortableContainer>

        </SortableContainer>
      </SortableContainer>

      {/* Background ambient light - left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-[#E7B979]/10 via-[#E7B979]/5 to-transparent blur-[120px] opacity-40" data-magicpath-id="29" data-magicpath-path="AboutSection.tsx" />
      
      {/* Bottom fade for smooth section transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" data-magicpath-id="30" data-magicpath-path="AboutSection.tsx" />
    </SortableContainer>;
};