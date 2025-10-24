"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';
type TommasoPortfolioProps = Record<string, never>;
const navLinks = [{
  id: 'nav-home',
  label: 'Home',
  href: '#home'
}, {
  id: 'nav-progetti',
  label: 'Progetti',
  href: '#progetti'
}, {
  id: 'nav-chi-sono',
  label: 'Chi Sono',
  href: '#chi-sono'
}, {
  id: 'nav-contattami',
  label: 'Contattami',
  href: '#contattami'
}] as const;
const socialLinks = [{
  id: 'social-instagram',
  icon: Instagram,
  href: 'https://instagram.com',
  label: 'Instagram'
}, {
  id: 'social-linkedin',
  icon: Linkedin,
  href: 'https://linkedin.com',
  label: 'LinkedIn'
}] as const;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  const { activeSection, scrollToSection } = useNavigation();

  // @return
  return <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background gradient glow effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" />
      </div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 lg:px-16 py-8 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg shadow-black/20">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-[1800px] mx-auto flex items-center justify-between">
          {navLinks.map((link, idx) => <a key={link.id} href={link.href} onClick={e => {
          e.preventDefault();
          scrollToSection(link.href);
        }} className={`nav-link relative text-sm lg:text-base font-light tracking-[0.2em] transition-all duration-300 uppercase ${activeSection === link.href ? 'active text-[#aec7e9] drop-shadow-[0_0_8px_rgba(174,199,233,0.8)]' : 'text-white/90'}`} style={{
          fontFamily: "Inter"
        }}>
              <motion.span initial={{
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
          }}>
                {link.label}
              </motion.span>
              {activeSection === link.href && <motion.div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#aec7e9] to-transparent shadow-[0_0_10px_rgba(174,199,233,0.8)]" initial={{
            opacity: 0,
            scaleX: 0
          }} animate={{
            opacity: 1,
            scaleX: 1
          }} transition={{
            duration: 0.3
          }} />}
              {activeSection === link.href && <motion.div className="absolute inset-0 -z-10 bg-[#C8966B]/40 blur-2xl" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.3
          }} />}
            </a>)}
        </motion.div>
      </nav>

      {/* Left social icons */}
      <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.8,
      delay: 0.6
    }} className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
        {socialLinks.map((social, idx) => {
        const Icon = social.icon;
        return <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="nav-link text-white/80 transition-all duration-300" aria-label={social.label}>
              <motion.div initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7 + idx * 0.1
          }}>
                <Icon size={24} strokeWidth={1.5} />
              </motion.div>
            </a>;
      })}
      </motion.div>

      {/* Main hero content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2a529ca7-9941-4325-b7ac-0869b90895df.png)",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      opacity: "1"
    }}>
        {/* Subtitle text above */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="absolute top-[38%] left-1/2 -translate-x-1/2 w-full text-center" style={{
        height: "437.5px",
        minHeight: "auto",
        width: "4244.71px",
        maxWidth: "4244.71px"
      }}>
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
        }}>
            Tommaso Piccioli - AI Creator & Creative Director
          </p>
        </motion.div>

        {/* Silhouette image placeholder with glow */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.4
      }} className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center" style={{
        display: "none"
      }}>
          {/* Background glow behind silhouette */}
          <div className="absolute inset-0 flex items-center justify-center" style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          display: "none"
        }}>
            <div className="w-[400px] h-[500px] bg-gradient-radial from-[#C8966B]/60 via-[#C8966B]/30 to-transparent blur-[100px]" />
          </div>

          {/* Silhouette - Using a gradient shape as placeholder */}
          <div className="relative z-10 w-[280px] h-[420px]" style={{
          display: "none"
        }}>
            <svg viewBox="0 0 280 420" className="w-full h-full" aria-hidden="true" style={{
            display: "none"
          }}>
              <defs>
                <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Head and shoulders silhouette shape */}
              <ellipse cx="140" cy="80" rx="70" ry="85" fill="url(#silhouetteGradient)" style={{
              display: "none"
            }} />
              <path d="M 70 140 Q 70 200, 50 280 L 50 420 L 230 420 L 230 280 Q 210 200, 210 140 Z" fill="url(#silhouetteGradient)" style={{
              display: "none"
            }} />
            </svg>
          </div>
        </motion.div>

        {/* Large PORTFOLIO text */}
        <motion.div initial={{
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
      }}>
          <h1 className="text-center">
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
          }}>
              PORTFOLIO
            </span>
          </h1>
        </motion.div>
      </div>
    </div>;
};