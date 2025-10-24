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
  mpid: "80c19916-bea6-416a-8650-3172d0a5d8d3"
}, {
  id: 'value-2',
  text: 'Precisione',
  mpid: "786ecb23-de5c-4bad-a907-4d3b89c59e92"
}, {
  id: 'value-3',
  text: 'Realismo',
  mpid: "6be43b58-8e7a-4a54-b03f-d03dfe199115"
}] as const;
export const AboutSection = ({
  onScrollToNext
}: AboutSectionProps) => {
  return <SortableContainer dndKitId="5f31d9b1-9979-4c18-90a1-f51573e7e38d" containerType="regular" prevTag="section" id="about" className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden flex items-center" data-magicpath-id="0" data-magicpath-path="AboutSection.tsx">
      {/* Content container - Two column layout */}
      <SortableContainer dndKitId="e65a6b98-0461-4ec8-903a-a7bab73e8b07" containerType="regular" prevTag="div" className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 py-20 lg:py-24" style={{
      background: "#000000"
    }} data-magicpath-id="1" data-magicpath-path="AboutSection.tsx">
        <SortableContainer dndKitId="c97a7971-47a8-4dd8-a307-5dd6b9e8dae4" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 xl:gap-20 items-center" data-magicpath-id="2" data-magicpath-path="AboutSection.tsx">
          
          {/* LEFT COLUMN - Text Content */}
          <SortableContainer dndKitId="9e83acf5-7174-4899-a483-7e20a1900704" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="4cc5eba0-d90e-46fc-9a58-880f5a78e96a" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="4" data-magicpath-path="AboutSection.tsx">
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
            <SortableContainer dndKitId="da677b71-9596-4798-b708-580dca931022" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="bd894d7d-d291-45c5-b4b2-d87d21ef7aeb" containerType="collection" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="ef444344-7ccd-492b-ad10-4f5c3297b6ca" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="a51b9839-f781-4b10-a793-5e30eb805083" containerType="regular" prevTag="button" onClick={onScrollToNext} className="group relative inline-flex items-center gap-3 text-white/80 font-light tracking-[0.1em] uppercase transition-all duration-500 hover:text-white" style={{
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
          <SortableContainer dndKitId="d12320b9-9a0c-4a39-b6d5-def6c092d365" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="86df0a76-8da6-477e-947c-6b2561856d32" containerType="regular" prevTag="div" className="relative w-full h-full overflow-hidden" data-magicpath-id="22" data-magicpath-path="AboutSection.tsx">
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