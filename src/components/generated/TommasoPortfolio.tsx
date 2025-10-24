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
  mpid: "1978f48d-e00b-48ca-b71c-209dcffe406b"
}, {
  id: 'nav-progetti',
  label: 'Progetti',
  href: '#progetti',
  mpid: "161a9d5c-498f-4257-930e-314f6299a901"
}, {
  id: 'nav-chi-sono',
  label: 'Chi Sono',
  href: '#chi-sono',
  mpid: "8d114363-370a-4c04-bebe-18f92724ddf6"
}, {
  id: 'nav-contattami',
  label: 'Contattami',
  href: '#contattami',
  mpid: "fff6ceae-6e3d-4c87-a727-60d7ee63c9e6"
}] as const;
const socialLinks = [{
  id: 'social-instagram',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram',
  mpid: "d6ad35c4-aa9f-4fbb-83c2-e9747e7e134e"
}, {
  id: 'social-linkedin',
  icon: Linkedin,
  href: 'https://linkedin.com',
  label: 'LinkedIn',
  mpid: "b7b88ed7-0249-4fda-966d-038e7608a1c0"
}] as const;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  const [activeSection, setActiveSection] = React.useState<string>('#home');

  // @return
  return <SortableContainer dndKitId="411dede4-c171-4c6e-aea7-86a95aa64753" containerType="regular" prevTag="div" className="relative w-full h-screen bg-black text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="TommasoPortfolio.tsx">
      {/* Background gradient glow effect */}
      <SortableContainer dndKitId="e0ff6e76-e8ec-487d-bd43-26c9c71b6914" containerType="regular" prevTag="div" className="absolute inset-0 z-0" data-magicpath-id="1" data-magicpath-path="TommasoPortfolio.tsx">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" data-magicpath-id="2" data-magicpath-path="TommasoPortfolio.tsx" />
      </SortableContainer>

      {/* Top Navigation */}
      <SortableContainer dndKitId="6200d6e7-1ebc-4a9b-b28a-dd7f2386d55d" containerType="regular" prevTag="nav" className="absolute top-0 left-0 right-0 z-50 px-8 lg:px-16 py-8 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg shadow-black/20" data-magicpath-id="3" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="ea55d609-d999-49a0-b01e-54eaa350b829" containerType="collection" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="6ddcb028-60ef-43e1-956d-e46ec307877d" containerType="collection" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="32ea166d-a0a6-4b82-8030-dcba44634312" containerType="regular" prevTag="div" className="relative z-10 w-full h-full flex flex-col items-center justify-center" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2a529ca7-9941-4325-b7ac-0869b90895df.png)",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      opacity: "1"
    }} data-magicpath-id="13" data-magicpath-path="TommasoPortfolio.tsx">
        {/* Subtitle text above */}
        <SortableContainer dndKitId="53a62927-2498-475c-9c7f-899ca8c8179f" containerType="regular" prevTag="motion.div" initial={{
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
        <SortableContainer dndKitId="358f02ec-9b09-4572-9322-a7aae2fe49b1" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="4f783ce6-3e3d-46f5-89db-bcde87683f2a" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center"
        }} data-magicpath-id="17" data-magicpath-path="TommasoPortfolio.tsx">
            <div className="w-[400px] h-[500px] bg-gradient-radial from-[#C8966B]/60 via-[#C8966B]/30 to-transparent blur-[100px]" data-magicpath-id="18" data-magicpath-path="TommasoPortfolio.tsx" />
          </SortableContainer>

          {/* Silhouette - Using a gradient shape as placeholder */}
          <SortableContainer dndKitId="6072c5b9-681e-462b-9cd1-d702b760ccf8" containerType="regular" prevTag="div" className="relative z-10 w-[280px] h-[420px]" style={{
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
        <SortableContainer dndKitId="4cb86e66-520f-409d-aaac-3e8e98047c32" containerType="regular" prevTag="motion.div" initial={{
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