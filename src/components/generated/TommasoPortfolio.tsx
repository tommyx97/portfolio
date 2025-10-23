"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
type TommasoPortfolioProps = Record<string, never>;
const navLinks = [{
  id: 'nav-home',
  label: 'Home',
  href: '#home',
  mpid: "7b891f83-cf7c-465e-898b-de1d723303b0"
}, {
  id: 'nav-progetti',
  label: 'Progetti',
  href: '#progetti',
  mpid: "4e78a1c4-ae77-4da3-8723-50ebf86c39f2"
}, {
  id: 'nav-chi-sono',
  label: 'Chi Sono',
  href: '#chi-sono',
  mpid: "1f6fdbb3-8a4a-4b2b-bef6-34ec33937c0c"
}, {
  id: 'nav-contattami',
  label: 'Contattami',
  href: '#contattami',
  mpid: "111d27a2-7208-4a75-b052-6e6c813fc38c"
}] as const;
const socialLinks = [{
  id: 'social-instagram',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram',
  mpid: "ee72ebf4-1aa2-439e-9c66-62d9e3dac81e"
}, {
  id: 'social-linkedin',
  icon: Linkedin,
  href: 'https://linkedin.com',
  label: 'LinkedIn',
  mpid: "6ea75993-c0e5-4e09-a70d-b2813b4acff9"
}] as const;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  // @return
  return <SortableContainer dndKitId="72e8eb97-1ea5-44af-94ec-9098ae277af6" containerType="regular" prevTag="div" className="relative w-full h-screen bg-black text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="TommasoPortfolio.tsx">
      {/* Background gradient glow effect */}
      <SortableContainer dndKitId="73e1b682-1e76-4b9c-b6ca-20f3138619ba" containerType="regular" prevTag="div" className="absolute inset-0 z-0" data-magicpath-id="1" data-magicpath-path="TommasoPortfolio.tsx">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" data-magicpath-id="2" data-magicpath-path="TommasoPortfolio.tsx" />
      </SortableContainer>

      {/* Top Navigation */}
      <SortableContainer dndKitId="b66d3f48-769b-42ef-89d4-5e920c22ebee" containerType="regular" prevTag="nav" className="absolute top-0 left-0 right-0 z-50 px-8 lg:px-16 py-8" data-magicpath-id="3" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="31b57ec5-567d-47ae-97d9-d337d74ed329" containerType="collection" prevTag="motion.div" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-[1800px] mx-auto flex items-center justify-between" data-magicpath-id="4" data-magicpath-path="TommasoPortfolio.tsx">
          {navLinks.map((link, idx) => <a key={link.id} href={link.href} className="text-sm lg:text-base font-light tracking-[0.2em] text-white/90 hover:text-white transition-colors duration-300 uppercase" data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="TommasoPortfolio.tsx" style={{
          fontFamily: "Inter"
        }}>
              <motion.span data-magicpath-motion-tag="motion.span" initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3 + idx * 0.1
          }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="6" data-magicpath-path="TommasoPortfolio.tsx" style={{
            fontFamily: "Inter",
            fontSize: "30px",
            letterSpacing: "0.5em"
          }}>
                {link.label}
              </motion.span>
            </a>)}
        </SortableContainer>
      </SortableContainer>

      {/* Left social icons */}
      <SortableContainer dndKitId="53bfb869-8305-4c30-a356-173a75e8db53" containerType="collection" prevTag="motion.div" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.8,
      delay: 0.6
    }} className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8" data-magicpath-id="7" data-magicpath-path="TommasoPortfolio.tsx">
        {socialLinks.map((social, idx) => {
        const Icon = social.icon;
        return <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300" aria-label={social.label} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="TommasoPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7 + idx * 0.1
          }} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="TommasoPortfolio.tsx">
                <Icon size={24} strokeWidth={1.5} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="TommasoPortfolio.tsx" />
              </motion.div>
            </a>;
      })}
      </SortableContainer>

      {/* Main hero content */}
      <SortableContainer dndKitId="0e3feb75-66b0-43a1-95ee-4c866847863a" containerType="regular" prevTag="div" className="relative z-10 w-full h-full flex flex-col items-center justify-center" data-magicpath-id="11" data-magicpath-path="TommasoPortfolio.tsx" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/b079aa99-43af-4843-bba9-7cfabadbc051.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: "1"
    }}>
        {/* Subtitle text above */}
        <SortableContainer dndKitId="aafd41af-2f0b-4bbe-b101-43b8112952c5" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="absolute top-[38%] left-1/2 -translate-x-1/2 w-full text-center" data-magicpath-id="12" data-magicpath-path="TommasoPortfolio.tsx" style={{
        width: "fit-content",
        maxWidth: "fit-content",
        height: "fit-content",
        minHeight: "fit-content"
      }}>
          <p className="text-xs sm:text-sm lg:text-base font-light tracking-[0.3em] text-white/90 uppercase" data-magicpath-id="13" data-magicpath-path="TommasoPortfolio.tsx" style={{
          fontFamily: "Inter",
          letterSpacing: "0.05em",
          marginLeft: "0px",
          width: "100%",
          maxWidth: "100%",
          fontSize: "50px",
          textAlign: "left",
          justifyContent: "flex-start",
          marginRight: "3000px",
          marginTop: "400px"
        }}>
            Tommaso Piccioli - AI Creator & Creative Director
          </p>
        </SortableContainer>

        {/* Silhouette image placeholder with glow */}
        <SortableContainer dndKitId="1d39bec1-9d5d-4ce1-8d55-a7fea06a9be3" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.4
      }} className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center" data-magicpath-id="14" data-magicpath-path="TommasoPortfolio.tsx">
          {/* Background glow behind silhouette */}
          <SortableContainer dndKitId="f80b35f5-9942-4c6d-b85b-279790faf202" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" data-magicpath-id="15" data-magicpath-path="TommasoPortfolio.tsx" style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
            <div className="w-[400px] h-[500px] bg-gradient-radial from-[#C8966B]/60 via-[#C8966B]/30 to-transparent blur-[100px]" data-magicpath-id="16" data-magicpath-path="TommasoPortfolio.tsx" />
          </SortableContainer>

          {/* Silhouette - Using a gradient shape as placeholder */}
          <SortableContainer dndKitId="5234435c-7c60-4bf5-a8be-0f9ff9d8fa91" containerType="regular" prevTag="div" className="relative z-10 w-[280px] h-[420px]" data-magicpath-id="17" data-magicpath-path="TommasoPortfolio.tsx" style={{
          display: "none"
        }}>
            <svg viewBox="0 0 280 420" className="w-full h-full" aria-hidden="true" data-magicpath-id="18" data-magicpath-path="TommasoPortfolio.tsx" style={{
            display: "none"
          }}>
              <defs data-magicpath-id="19" data-magicpath-path="TommasoPortfolio.tsx">
                <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%" data-magicpath-id="20" data-magicpath-path="TommasoPortfolio.tsx">
                  <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Head and shoulders silhouette shape */}
              <ellipse cx="140" cy="80" rx="70" ry="85" fill="url(#silhouetteGradient)" data-magicpath-id="21" data-magicpath-path="TommasoPortfolio.tsx" style={{
              display: "none"
            }} />
              <path d="M 70 140 Q 70 200, 50 280 L 50 420 L 230 420 L 230 280 Q 210 200, 210 140 Z" fill="url(#silhouetteGradient)" data-magicpath-id="22" data-magicpath-path="TommasoPortfolio.tsx" style={{
              display: "none"
            }} />
            </svg>
          </SortableContainer>
        </SortableContainer>

        {/* Large PORTFOLIO text */}
        <SortableContainer dndKitId="b1a29fe7-10c3-4033-8f32-2002dd98f435" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 1
      }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" data-magicpath-id="23" data-magicpath-path="TommasoPortfolio.tsx" style={{
        height: "160px",
        minHeight: "auto",
        width: "fit-content",
        maxWidth: "fit-content"
      }}>
          <h1 className="text-center" data-magicpath-id="24" data-magicpath-path="TommasoPortfolio.tsx">
            <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight leading-none tracking-[0.35em] text-white" data-magicpath-id="25" data-magicpath-path="TommasoPortfolio.tsx" style={{
            marginTop: "550px",
            fontFamily: "Inter",
            fontWeight: "100",
            fontSize: "350px",
            letterSpacing: "0.5em",
            lineHeight: "0.5",
            paddingTop: "150px"
          }}>
              PORTFOLIO
            </span>
          </h1>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};