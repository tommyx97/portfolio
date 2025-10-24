"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
type TommasoPortfolioProps = Record<string, never>;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {

  // @return
  return <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background gradient glow effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" />
      </div>

      {/* Navigation removed - now handled by StickyNavigation component */}

      {/* Social icons removed - now handled by StickyNavigation component */}

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
      }} className="absolute top-[38%] left-1/2 -translate-x-1/2 w-full text-center px-4">
          <p className="text-sm sm:text-base lg:text-lg font-light tracking-[0.2em] sm:tracking-[0.3em] text-white/90 uppercase" style={{
          fontFamily: "Inter",
          textAlign: "center",
          fontSize: "clamp(0.875rem, 3vw, 1.5rem)",
          letterSpacing: "clamp(0.1em, 1vw, 0.5em)"
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
      }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-center">
            <span className="block font-extralight leading-none tracking-[0.1em] sm:tracking-[0.2em] lg:tracking-[0.35em] text-white" style={{
            fontFamily: "Inter",
            fontWeight: "100",
            fontSize: "clamp(3rem, 15vw, 8rem)",
            lineHeight: "0.8",
            letterSpacing: "clamp(0.1em, 2vw, 0.35em)"
          }}>
              PORTFOLIO
            </span>
          </h1>
        </motion.div>
      </div>
    </div>;
};