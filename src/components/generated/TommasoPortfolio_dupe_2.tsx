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
  mpid: "f3cf2af1-c4e4-41f5-96af-d362db3ad85e"
}, {
  id: 'nav-progetti',
  label: 'Progetti',
  href: '#progetti',
  mpid: "0a4c63a5-c2ef-4e36-80c5-fb3f8de2c216"
}, {
  id: 'nav-chi-sono',
  label: 'Chi Sono',
  href: '#chi-sono',
  mpid: "310a5bb2-770a-49e6-be32-a480f54a1544"
}, {
  id: 'nav-contattami',
  label: 'Contattami',
  href: '#contattami',
  mpid: "67712e9e-ec74-4b8c-a8cc-a8a500e7edba"
}] as const;
const socialLinks = [{
  id: 'social-instagram',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram',
  mpid: "ba1a460a-6b22-41ae-9093-4d58bca7e033"
}, {
  id: 'social-linkedin',
  icon: Linkedin,
  href: 'https://linkedin.com',
  label: 'LinkedIn',
  mpid: "cb46497d-7da4-4d4a-9955-1fe3909c72a0"
}] as const;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  // @return
  return <SortableContainer dndKitId="3483a59e-23af-47fc-9607-57e5a4acb103" containerType="regular" prevTag="div" className="relative w-full h-screen bg-black text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
      {/* Background gradient glow effect */}
      <SortableContainer dndKitId="c3e0266b-6397-4ac7-b648-93026c7ed603" containerType="regular" prevTag="div" className="absolute inset-0 z-0" data-magicpath-id="1" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" data-magicpath-id="2" data-magicpath-path="TommasoPortfolio_dupe_2.tsx" />
      </SortableContainer>

      {/* Top Navigation */}
      <SortableContainer dndKitId="56090ed8-5568-4155-b7f1-ce778a464e67" containerType="regular" prevTag="nav" className="absolute top-0 left-0 right-0 z-50 px-8 lg:px-16 py-8" data-magicpath-id="3" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
        <SortableContainer dndKitId="7afafd33-2794-4669-8a1b-581fb195fd5c" containerType="collection" prevTag="motion.div" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-[1800px] mx-auto flex items-center justify-between" data-magicpath-id="4" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
          {navLinks.map((link, idx) => <a key={link.id} href={link.href} className="text-sm lg:text-base font-light tracking-[0.2em] text-white/90 hover:text-white transition-colors duration-300 uppercase" style={{
          fontFamily: "Inter"
        }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3 + idx * 0.1
          }} style={{
            fontFamily: "Inter",
            letterSpacing: "0.5em",
            fontSize: "15px"
          }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="6" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
                {link.label}
              </motion.span>
            </a>)}
        </SortableContainer>
      </SortableContainer>

      {/* Left social icons */}
      <SortableContainer dndKitId="86da4dc7-eedd-4b45-b2d0-efcb4b1ff424" containerType="collection" prevTag="motion.div" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.8,
      delay: 0.6
    }} className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8" data-magicpath-id="7" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
        {socialLinks.map((social, idx) => {
        const Icon = social.icon;
        return <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300" aria-label={social.label} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7 + idx * 0.1
          }} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
                <Icon size={24} strokeWidth={1.5} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="TommasoPortfolio_dupe_2.tsx" />
              </motion.div>
            </a>;
      })}
      </SortableContainer>

      {/* Main hero content */}
      <SortableContainer dndKitId="3f4596bb-3591-45ac-aca2-5e6332656929" containerType="regular" prevTag="div" className="relative z-10 w-full h-full flex flex-col items-center justify-center" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/b079aa99-43af-4843-bba9-7cfabadbc051.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: "1"
    }} data-magicpath-id="11" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
        {/* Subtitle text above */}
        <SortableContainer dndKitId="e3ea6ab8-9010-4e49-90c8-8d17a6151a9d" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="absolute top-[38%] left-1/2 -translate-x-1/2 w-full text-center" style={{
        width: "fit-content",
        maxWidth: "fit-content",
        height: "fit-content",
        minHeight: "fit-content"
      }} data-magicpath-id="12" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
          <p className="text-xs sm:text-sm lg:text-base font-light tracking-[0.3em] text-white/90 uppercase" style={{
          fontFamily: "Inter",
          textAlign: "left",
          justifyContent: "flex-start",
          marginTop: "400px",
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          minHeight: "100%",
          marginLeft: "1000px",
          fontSize: "25px",
          letterSpacing: "0.5em",
          marginRight: "3020px"
        }} data-magicpath-id="13" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
            Tommaso Piccioli - AI Creator & Creative Director
          </p>
        </SortableContainer>

        {/* Silhouette image placeholder with glow */}
        <SortableContainer dndKitId="f0c5a142-04b0-4b62-b90e-802a4b21ffe9" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.4
      }} className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center" data-magicpath-id="14" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
          {/* Background glow behind silhouette */}
          <SortableContainer dndKitId="d907b166-bb7e-407d-98cd-e1e17adb27b6" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center"
        }} data-magicpath-id="15" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
            <div className="w-[400px] h-[500px] bg-gradient-radial from-[#C8966B]/60 via-[#C8966B]/30 to-transparent blur-[100px]" data-magicpath-id="16" data-magicpath-path="TommasoPortfolio_dupe_2.tsx" />
          </SortableContainer>

          {/* Silhouette - Using a gradient shape as placeholder */}
          <SortableContainer dndKitId="042333b4-765d-4a47-9169-8b6d6ad61874" containerType="regular" prevTag="div" className="relative z-10 w-[280px] h-[420px]" style={{
          display: "none"
        }} data-magicpath-id="17" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
            <svg viewBox="0 0 280 420" className="w-full h-full" aria-hidden="true" style={{
            display: "none"
          }} data-magicpath-id="18" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
              <defs data-magicpath-id="19" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
                <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%" data-magicpath-id="20" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
                  <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Head and shoulders silhouette shape */}
              <ellipse cx="140" cy="80" rx="70" ry="85" fill="url(#silhouetteGradient)" style={{
              display: "none"
            }} data-magicpath-id="21" data-magicpath-path="TommasoPortfolio_dupe_2.tsx" />
              <path d="M 70 140 Q 70 200, 50 280 L 50 420 L 230 420 L 230 280 Q 210 200, 210 140 Z" fill="url(#silhouetteGradient)" style={{
              display: "none"
            }} data-magicpath-id="22" data-magicpath-path="TommasoPortfolio_dupe_2.tsx" />
            </svg>
          </SortableContainer>
        </SortableContainer>

        {/* Large PORTFOLIO text */}
        <SortableContainer dndKitId="8345f5b1-dfeb-4faa-983f-c7f3fa321186" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 1
      }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" style={{
        height: "160px",
        minHeight: "auto",
        width: "fit-content",
        maxWidth: "fit-content"
      }} data-magicpath-id="23" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
          <h1 className="text-center" data-magicpath-id="24" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
            <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight leading-none tracking-[0.35em] text-white" style={{
            fontFamily: "Inter",
            fontWeight: "100",
            paddingTop: "150px",
            height: "100%",
            minHeight: "100%",
            marginTop: "400px",
            marginRight: "200px",
            width: "100%",
            maxWidth: "100%",
            lineHeight: "0.8",
            letterSpacing: "2.5em",
            fontSize: "80px"
          }} data-magicpath-id="25" data-magicpath-path="TommasoPortfolio_dupe_2.tsx">
              PORTFOLIO
            </span>
          </h1>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};