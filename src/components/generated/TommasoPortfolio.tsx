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
  mpid: "638ac8c0-2718-477a-8200-3baeb74dc058"
}, {
  id: 'nav-progetti',
  label: 'Progetti',
  href: '#progetti',
  mpid: "de880e1f-ecb0-45fe-b14b-f2f3e5cfd934"
}, {
  id: 'nav-chi-sono',
  label: 'Chi Sono',
  href: '#chi-sono',
  mpid: "1319104f-ae99-44f0-be68-a05acb6700a3"
}, {
  id: 'nav-contattami',
  label: 'Contattami',
  href: '#contattami',
  mpid: "7c3776b1-97e8-401d-8d04-532760240319"
}] as const;
const socialLinks = [{
  id: 'social-instagram',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram',
  mpid: "06ceca62-fa9b-42c3-b421-4a0a5cc65bf9"
}, {
  id: 'social-linkedin',
  icon: Linkedin,
  href: 'https://linkedin.com',
  label: 'LinkedIn',
  mpid: "3f1f9037-e1ff-4770-834a-99584c27f014"
}] as const;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  const [activeSection, setActiveSection] = React.useState<string>('#home');

  // @return
  return <SortableContainer dndKitId="2ceaea56-2ee6-4b6c-ac6b-38fd3d6aac1b" containerType="regular" prevTag="div" className="relative w-full h-screen bg-black text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="TommasoPortfolio.tsx">
      {/* Background gradient glow effect */}
      <SortableContainer dndKitId="7455f198-c0d1-4a10-850e-f8456dcf3e3f" containerType="regular" prevTag="div" className="absolute inset-0 z-0" data-magicpath-id="1" data-magicpath-path="TommasoPortfolio.tsx">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" data-magicpath-id="2" data-magicpath-path="TommasoPortfolio.tsx" />
      </SortableContainer>

      {/* Top Navigation */}
      <SortableContainer dndKitId="f2c60d49-d54c-4095-b1d0-c83cd20ef2d5" containerType="regular" prevTag="nav" className="absolute top-0 left-0 right-0 z-50 px-8 lg:px-16 py-8 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg shadow-black/20" data-magicpath-id="3" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="ad6fd012-a7da-4997-a0a3-e6a4af923269" containerType="collection" prevTag="motion.div" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-[1800px] mx-auto flex items-center justify-between" data-magicpath-id="4" data-magicpath-path="TommasoPortfolio.tsx">
          {navLinks.map((link, idx) => <a key={link.id} href={link.href} onClick={e => {
          e.preventDefault();
          setActiveSection(link.href);
        }} className={`relative text-sm lg:text-base font-light tracking-[0.2em] transition-all duration-300 uppercase ${activeSection === link.href ? 'text-[#E8A876] drop-shadow-[0_0_8px_rgba(200,150,107,0.8)]' : 'text-white/90 hover:text-white'}`} style={{
          fontFamily: "Inter"
        }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="TommasoPortfolio.tsx">
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
          }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="6" data-magicpath-path="TommasoPortfolio.tsx">
                {link.label}
              </motion.span>
              {activeSection === link.href && <motion.div data-magicpath-motion-tag="motion.div" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8A876] to-transparent shadow-[0_0_10px_rgba(232,168,118,0.8)]" initial={{
            opacity: 0,
            scaleX: 0
          }} animate={{
            opacity: 1,
            scaleX: 1
          }} transition={{
            duration: 0.3
          }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="TommasoPortfolio.tsx" />}
              {activeSection === link.href && <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 -z-10 bg-[#C8966B]/40 blur-2xl" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.3
          }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="TommasoPortfolio.tsx" />}
            </a>)}
        </SortableContainer>
      </SortableContainer>

      {/* Left social icons */}
      <SortableContainer dndKitId="8b8ecb45-0377-4380-91af-11b44fa7a1d5" containerType="collection" prevTag="motion.div" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.8,
      delay: 0.6
    }} className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8" data-magicpath-id="9" data-magicpath-path="TommasoPortfolio.tsx">
        {socialLinks.map((social, idx) => {
        const Icon = social.icon;
        return <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300" aria-label={social.label} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="TommasoPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7 + idx * 0.1
          }} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="TommasoPortfolio.tsx">
                <Icon size={24} strokeWidth={1.5} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="TommasoPortfolio.tsx" />
              </motion.div>
            </a>;
      })}
      </SortableContainer>

      {/* Main hero content */}
      <SortableContainer dndKitId="0ea75163-2c06-4c6b-8f4b-9f220eca79ae" containerType="regular" prevTag="div" className="relative z-10 w-full h-full flex flex-col items-center justify-center" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/b079aa99-43af-4843-bba9-7cfabadbc051.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: "1"
    }} data-magicpath-id="13" data-magicpath-path="TommasoPortfolio.tsx">
        {/* Subtitle text above */}
        <SortableContainer dndKitId="5bf64d7d-bb6c-419f-aa37-6e604c85fe19" containerType="regular" prevTag="motion.div" initial={{
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
      }} data-magicpath-id="14" data-magicpath-path="TommasoPortfolio.tsx">
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
        }} data-magicpath-id="15" data-magicpath-path="TommasoPortfolio.tsx">
            Tommaso Piccioli - AI Creator & Creative Director
          </p>
        </SortableContainer>

        {/* Silhouette image placeholder with glow */}
        <SortableContainer dndKitId="c803a313-90b7-4c68-ad9b-79c110d1de3e" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.4
      }} className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center" data-magicpath-id="16" data-magicpath-path="TommasoPortfolio.tsx">
          {/* Background glow behind silhouette */}
          <SortableContainer dndKitId="e87e9c2d-2d24-4f26-bdd8-5a1447727dd8" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center"
        }} data-magicpath-id="17" data-magicpath-path="TommasoPortfolio.tsx">
            <div className="w-[400px] h-[500px] bg-gradient-radial from-[#C8966B]/60 via-[#C8966B]/30 to-transparent blur-[100px]" data-magicpath-id="18" data-magicpath-path="TommasoPortfolio.tsx" />
          </SortableContainer>

          {/* Silhouette - Using a gradient shape as placeholder */}
          <SortableContainer dndKitId="8d1daae6-502b-420d-b3fc-af3312d79839" containerType="regular" prevTag="div" className="relative z-10 w-[280px] h-[420px]" style={{
          display: "none"
        }} data-magicpath-id="19" data-magicpath-path="TommasoPortfolio.tsx">
            <svg viewBox="0 0 280 420" className="w-full h-full" aria-hidden="true" style={{
            display: "none"
          }} data-magicpath-id="20" data-magicpath-path="TommasoPortfolio.tsx">
              <defs data-magicpath-id="21" data-magicpath-path="TommasoPortfolio.tsx">
                <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%" data-magicpath-id="22" data-magicpath-path="TommasoPortfolio.tsx">
                  <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Head and shoulders silhouette shape */}
              <ellipse cx="140" cy="80" rx="70" ry="85" fill="url(#silhouetteGradient)" style={{
              display: "none"
            }} data-magicpath-id="23" data-magicpath-path="TommasoPortfolio.tsx" />
              <path d="M 70 140 Q 70 200, 50 280 L 50 420 L 230 420 L 230 280 Q 210 200, 210 140 Z" fill="url(#silhouetteGradient)" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="TommasoPortfolio.tsx" />
            </svg>
          </SortableContainer>
        </SortableContainer>

        {/* Large PORTFOLIO text */}
        <SortableContainer dndKitId="b3c05624-359b-423b-a85b-2db5c232e1db" containerType="regular" prevTag="motion.div" initial={{
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
      }} data-magicpath-id="25" data-magicpath-path="TommasoPortfolio.tsx">
          <h1 className="text-center" data-magicpath-id="26" data-magicpath-path="TommasoPortfolio.tsx">
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
          }} data-magicpath-id="27" data-magicpath-path="TommasoPortfolio.tsx">
              PORTFOLIO
            </span>
          </h1>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};