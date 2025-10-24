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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center hero-background" style={{
      backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/2a529ca7-9941-4325-b7ac-0869b90895df.png)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "scroll"
    }}>
        {/* Centered text layout - matching reference image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex flex-col items-center justify-center text-center px-6"
        >
          {/* Name - TOMMASO PICCIOLI */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white font-light tracking-[0.3em] uppercase mb-4 hero-name"
            style={{
              fontFamily: "Inter",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              letterSpacing: "0.3em",
              fontWeight: "300",
              lineHeight: "1.1",
              textAlign: "center",
              margin: 0
            }}
          >
            TOMMASO PICCIOLI
          </motion.h1>

          {/* Professional title - AI CREATOR & CREATIVE DIRECTOR */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-white font-light tracking-[0.2em] uppercase hero-title"
            style={{
              fontFamily: "Inter",
              fontSize: "clamp(0.9rem, 3vw, 1.4rem)",
              letterSpacing: "0.2em",
              fontWeight: "300",
              lineHeight: "1.2",
              textAlign: "center",
              margin: 0
            }}
          >
            AI CREATOR & CREATIVE DIRECTOR
          </motion.p>
        </motion.div>
      </div>
    </div>;
};