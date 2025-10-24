"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
type TommasoPortfolioProps = Record<string, never>;

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {

  // @return
  return <div className="relative w-full h-screen bg-black text-white overflow-hidden hero-section">
      {/* Background gradient glow effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C8966B]/40 via-[#C8966B]/20 to-transparent blur-3xl" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2a529ca7-9941-4325-b7ac-0869b90895df.png)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "scroll"
    }}>
        {/* Subtitle text - desktop aligned positioning */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="absolute bottom-[25%] left-[5%] right-[5%] text-left lg:bottom-[15%] lg:left-[5%] lg:right-auto">
          <div className="space-y-1 lg:space-y-2">
            <p className="font-light tracking-[0.2em] text-white uppercase mobile-safe-area" style={{
            fontFamily: "Inter",
            textAlign: "left",
            fontSize: "clamp(0.75rem, 4vw, 1.25rem)",
            letterSpacing: "0.2em",
            fontWeight: "300",
            lineHeight: "1.2",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
            margin: 0
          }}>
              Tommaso Piccioli
            </p>
            <p className="font-light tracking-[0.2em] text-white uppercase mobile-safe-area" style={{
            fontFamily: "Inter",
            textAlign: "left",
            fontSize: "clamp(0.75rem, 4vw, 1.25rem)",
            letterSpacing: "0.2em",
            fontWeight: "300",
            lineHeight: "1.2",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
            margin: 0
          }}>
              AI Creator & Creative Director
            </p>
          </div>
        </motion.div>

        {/* Large PORTFOLIO text - desktop aligned positioning */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 1
      }} className="absolute bottom-[12%] left-[5%] right-[5%] lg:bottom-[5%] lg:left-[5%] lg:right-auto mobile-safe-area">
          <h1 className="text-left hero-portfolio-title">
            <span className="block font-extralight leading-none text-white" style={{
            fontFamily: "Inter",
            fontWeight: "100",
            fontSize: "clamp(1.5rem, 8vw, 6rem)",
            lineHeight: "0.9",
            letterSpacing: "clamp(0.3em, 2vw, 0.8em)",
            textAlign: "left",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
            margin: 0
          }}>
              P O R T F O L I O
            </span>
          </h1>
        </motion.div>
      </div>
    </div>;
};