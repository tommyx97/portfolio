"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
export interface ContactSectionProps {
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}
const contactInfo = [{
  id: 'contact-email',
  icon: Mail,
  label: 'Email',
  value: 'tpiccioli97@gmail.com',
  href: 'mailto:tpiccioli97@gmail.com'
}, {
  id: 'contact-linkedin',
  icon: Linkedin,
  label: 'LinkedIn',
  value: 'Tommaso Piccioli',
  href: 'https://www.linkedin.com/feed/'
}] as const;
export const ContactSection = ({
  email = 'tpiccioli97@gmail.com',
  instagramUrl = 'https://instagram.com',
  linkedinUrl = 'https://www.linkedin.com/feed/'
}: ContactSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return <section id="contattami" className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#C8966B]/15 via-[#C8966B]/5 to-transparent blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 py-20 lg:py-32">
        
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }} className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-[0.15em] uppercase mb-6">
            <span>Contattami</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C8966B] to-transparent" />
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Message */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white/90">
                <span>Hai un progetto in mente?</span>
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-white/70">
                <span>
                  Sono sempre aperto a nuove collaborazioni e sfide creative. 
                  Lavoriamo insieme per dare vita alla tua visione.
                </span>
              </p>
            </div>

            {/* Decorative element */}
            <motion.div initial={{
            opacity: 0,
            scaleX: 0
          }} whileInView={{
            opacity: 1,
            scaleX: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            delay: 0.5
          }} className="w-32 h-[1px] bg-gradient-to-r from-[#E7B979]/60 to-transparent origin-left" />

            {/* Additional info */}
            <div className="pt-4">
              <p className="text-sm font-light text-white/50 tracking-wide uppercase">
                <span>Rispondo entro 24 ore</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Contact methods */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="space-y-6">
            {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isHovered = hoveredIndex === index;
            return <motion.a key={contact.id} href={contact.href} target={contact.id !== 'contact-email' ? '_blank' : undefined} rel={contact.id !== 'contact-email' ? 'noopener noreferrer' : undefined} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.1
            }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group relative block p-6 lg:p-8 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-[#C8966B]/40 transition-all duration-500" style={{
              borderTopWidth: "1px",
              borderTopColor: "rgb(105 144 199 / 0.4)",
              borderRightWidth: "1px",
              borderRightColor: "rgb(105 144 199 / 0.4)",
              borderBottomWidth: "1px",
              borderBottomColor: "rgb(105 144 199 / 0.4)",
              borderLeftWidth: "1px",
              borderLeftColor: "rgb(105 144 199 / 0.4)",
              borderStyle: "solid",
              borderRadius: "0px"
            }}>
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Icon and content */}
                    <div className="flex items-start gap-4 lg:gap-6 flex-1">
                      {/* Icon */}
                      <motion.div animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0
                  }} transition={{
                    duration: 0.3
                  }} className="mt-1">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#C8966B]/30 flex items-center justify-center bg-[#C8966B]/10 group-hover:bg-[#C8966B]/20 group-hover:border-[#C8966B]/50 transition-all duration-500" style={{
                      background: "#3c434c",
                      borderTopWidth: "1px",
                      borderTopColor: "rgb(59 138 162 / 0.5)",
                      borderRightWidth: "1px",
                      borderRightColor: "rgb(59 138 162 / 0.5)",
                      borderBottomWidth: "1px",
                      borderBottomColor: "rgb(59 138 162 / 0.5)",
                      borderLeftWidth: "1px",
                      borderLeftColor: "rgb(59 138 162 / 0.5)",
                      borderStyle: "solid",
                      borderRadius: "2.98262e+07px"
                    }}>
                          <Icon className="text-[#E7B979]" size={20} strokeWidth={1.5} style={{
                        color: "#aec7e9"
                      }} />
                        </div>
                      </motion.div>

                      {/* Text content */}
                      <div className="space-y-2 flex-1">
                        <p className="text-xs lg:text-sm font-light text-white/50 tracking-[0.2em] uppercase">
                          <span>{contact.label}</span>
                        </p>
                        <motion.p animate={{
                      x: isHovered ? 4 : 0
                    }} transition={{
                      duration: 0.3
                    }} className="text-lg lg:text-xl font-light text-white/90 group-hover:text-white transition-colors duration-300">
                          <span>{contact.value}</span>
                        </motion.p>
                      </div>
                    </div>

                    {/* Right: Arrow icon */}
                    <motion.div initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={{
                  opacity: isHovered ? 1 : 0.3,
                  scale: isHovered ? 1 : 0.8,
                  x: isHovered ? 4 : 0,
                  y: isHovered ? -4 : 0
                }} transition={{
                  duration: 0.3
                }}>
                      <ArrowUpRight className="text-[#E7B979]" size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#C8966B] to-transparent" initial={{
                width: "0%"
              }} animate={{
                width: isHovered ? "100%" : "0%"
              }} transition={{
                duration: 0.5
              }} />

                  {/* Glow effect on hover */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#C8966B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                mixBlendMode: 'screen'
              }} />
                </motion.a>;
          })}
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div initial={{
        opacity: 0,
        scaleX: 0
      }} whileInView={{
        opacity: 1,
        scaleX: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 1.2,
        delay: 0.8
      }} className="mt-20 lg:mt-32">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8966B]/30 to-transparent" />
        </motion.div>

        {/* Footer text */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="mt-12 text-center">
          <p className="text-xs lg:text-sm font-light text-white/40 tracking-[0.2em] uppercase">
            <span>© 2025 Tommaso Piccioli — AI Creator & Creative Director</span>
          </p>
        </motion.div>
      </div>
    </section>;
};