"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
export interface ContactSectionProps {
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  mpid?: string;
}
const contactInfo = [{
  id: 'contact-email',
  icon: Mail,
  label: 'Email',
  value: 'tommaso.piccioli@email.com',
  href: 'mailto:tommaso.piccioli@email.com',
  mpid: "400fce3b-1866-43b8-9adb-be08b5f6b53a"
}, {
  id: 'contact-instagram',
  icon: Instagram,
  label: 'Instagram',
  value: '@tommasopiccioli',
  href: 'https://instagram.com/tommasopiccioli',
  mpid: "3bd71be2-81fd-4f4d-bb64-48cefb7e7247"
}, {
  id: 'contact-linkedin',
  icon: Linkedin,
  label: 'LinkedIn',
  value: 'Tommaso Piccioli',
  href: 'https://linkedin.com/in/tommasopiccioli',
  mpid: "9742ed8c-7889-41b6-baea-3699413e50c6"
}] as const;
export const ContactSection = ({
  email = 'tommaso.piccioli@email.com',
  instagramUrl = 'https://instagram.com',
  linkedinUrl = 'https://linkedin.com'
}: ContactSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return <SortableContainer dndKitId="65f983a2-e61c-444a-9c25-58741b728f6b" containerType="regular" prevTag="section" className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden" data-magicpath-id="0" data-magicpath-path="ContactSection.tsx">
      {/* Background ambient gradient */}
      <SortableContainer dndKitId="74b337d6-e7ee-4763-8192-11b3eb94e428" containerType="regular" prevTag="div" className="absolute inset-0 z-0" data-magicpath-id="1" data-magicpath-path="ContactSection.tsx">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#C8966B]/15 via-[#C8966B]/5 to-transparent blur-3xl" data-magicpath-id="2" data-magicpath-path="ContactSection.tsx" />
      </SortableContainer>

      {/* Content Container */}
      <SortableContainer dndKitId="4787fe5c-8aed-4f4b-be67-5472fb4d18af" containerType="regular" prevTag="div" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 py-20 lg:py-32" data-magicpath-id="3" data-magicpath-path="ContactSection.tsx">
        
        {/* Header */}
        <SortableContainer dndKitId="054a2010-9b4c-4bd9-b709-f5d0df0c63bd" containerType="regular" prevTag="motion.div" initial={{
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
      }} className="mb-16 lg:mb-24" data-magicpath-id="4" data-magicpath-path="ContactSection.tsx">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-[0.15em] uppercase mb-6" data-magicpath-id="5" data-magicpath-path="ContactSection.tsx">
            <span data-magicpath-id="6" data-magicpath-path="ContactSection.tsx">Contattami</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C8966B] to-transparent" data-magicpath-id="7" data-magicpath-path="ContactSection.tsx" />
        </SortableContainer>

        {/* Main content grid */}
        <SortableContainer dndKitId="f346a6ee-47e2-4f56-924e-4c99a06b73a4" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start" data-magicpath-id="8" data-magicpath-path="ContactSection.tsx">
          
          {/* Left: Message */}
          <SortableContainer dndKitId="db7047ae-f6df-4bb0-9c41-72782d87e346" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="space-y-8" data-magicpath-id="9" data-magicpath-path="ContactSection.tsx">
            <SortableContainer dndKitId="328d465b-0157-4a1c-a7d4-386606807cbe" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="10" data-magicpath-path="ContactSection.tsx">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white/90" data-magicpath-id="11" data-magicpath-path="ContactSection.tsx">
                <span data-magicpath-id="12" data-magicpath-path="ContactSection.tsx">Hai un progetto in mente?</span>
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-white/70" data-magicpath-id="13" data-magicpath-path="ContactSection.tsx">
                <span data-magicpath-id="14" data-magicpath-path="ContactSection.tsx">
                  Sono sempre aperto a nuove collaborazioni e sfide creative. 
                  Lavoriamo insieme per dare vita alla tua visione.
                </span>
              </p>
            </SortableContainer>

            {/* Decorative element */}
            <motion.div data-magicpath-motion-tag="motion.div" initial={{
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
          }} className="w-32 h-[1px] bg-gradient-to-r from-[#E7B979]/60 to-transparent origin-left" data-magicpath-id="15" data-magicpath-path="ContactSection.tsx" />

            {/* Additional info */}
            <SortableContainer dndKitId="de51be2d-8b6c-47c5-b3ed-90a5f85bc448" containerType="regular" prevTag="div" className="pt-4" data-magicpath-id="16" data-magicpath-path="ContactSection.tsx">
              <p className="text-sm font-light text-white/50 tracking-wide uppercase" data-magicpath-id="17" data-magicpath-path="ContactSection.tsx">
                <span data-magicpath-id="18" data-magicpath-path="ContactSection.tsx">Rispondo entro 24 ore</span>
              </p>
            </SortableContainer>
          </SortableContainer>

          {/* Right: Contact methods */}
          <SortableContainer dndKitId="829646b1-e241-4d18-ada9-769e86f2cafa" containerType="collection" prevTag="motion.div" initial={{
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
        }} className="space-y-6" data-magicpath-id="19" data-magicpath-path="ContactSection.tsx">
            {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isHovered = hoveredIndex === index;
            return <motion.a data-magicpath-motion-tag="motion.a" key={contact.id} href={contact.href} target={contact.id !== 'contact-email' ? '_blank' : undefined} rel={contact.id !== 'contact-email' ? 'noopener noreferrer' : undefined} initial={{
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
            }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group relative block p-6 lg:p-8 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-[#C8966B]/40 transition-all duration-500" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="ContactSection.tsx">
                  <div className="flex items-start justify-between gap-4" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="ContactSection.tsx">
                    {/* Left: Icon and content */}
                    <div className="flex items-start gap-4 lg:gap-6 flex-1" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="ContactSection.tsx">
                      {/* Icon */}
                      <motion.div data-magicpath-motion-tag="motion.div" animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0
                  }} transition={{
                    duration: 0.3
                  }} className="mt-1" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="ContactSection.tsx">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#C8966B]/30 flex items-center justify-center bg-[#C8966B]/10 group-hover:bg-[#C8966B]/20 group-hover:border-[#C8966B]/50 transition-all duration-500" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="ContactSection.tsx">
                          <Icon className="text-[#E7B979]" size={20} strokeWidth={1.5} data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="ContactSection.tsx" />
                        </div>
                      </motion.div>

                      {/* Text content */}
                      <div className="space-y-2 flex-1" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="ContactSection.tsx">
                        <p className="text-xs lg:text-sm font-light text-white/50 tracking-[0.2em] uppercase" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="ContactSection.tsx">
                          <span data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="28" data-magicpath-path="ContactSection.tsx">{contact.label}</span>
                        </p>
                        <motion.p data-magicpath-motion-tag="motion.p" animate={{
                      x: isHovered ? 4 : 0
                    }} transition={{
                      duration: 0.3
                    }} className="text-lg lg:text-xl font-light text-white/90 group-hover:text-white transition-colors duration-300" data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="ContactSection.tsx">
                          <span data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="30" data-magicpath-path="ContactSection.tsx">{contact.value}</span>
                        </motion.p>
                      </div>
                    </div>

                    {/* Right: Arrow icon */}
                    <motion.div data-magicpath-motion-tag="motion.div" initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={{
                  opacity: isHovered ? 1 : 0.3,
                  scale: isHovered ? 1 : 0.8,
                  x: isHovered ? 4 : 0,
                  y: isHovered ? -4 : 0
                }} transition={{
                  duration: 0.3
                }} data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="ContactSection.tsx">
                      <ArrowUpRight className="text-[#E7B979]" size={20} strokeWidth={1.5} data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="ContactSection.tsx" />
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#C8966B] to-transparent" initial={{
                width: "0%"
              }} animate={{
                width: isHovered ? "100%" : "0%"
              }} transition={{
                duration: 0.5
              }} data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="ContactSection.tsx" />

                  {/* Glow effect on hover */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#C8966B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                mixBlendMode: 'screen'
              }} data-magicpath-uuid={(contact as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="ContactSection.tsx" />
                </motion.a>;
          })}
          </SortableContainer>
        </SortableContainer>

        {/* Bottom decorative line */}
        <SortableContainer dndKitId="a26830d3-d9f4-430c-b418-16a82fae97e8" containerType="regular" prevTag="motion.div" initial={{
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
      }} className="mt-20 lg:mt-32" data-magicpath-id="35" data-magicpath-path="ContactSection.tsx">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8966B]/30 to-transparent" data-magicpath-id="36" data-magicpath-path="ContactSection.tsx" />
        </SortableContainer>

        {/* Footer text */}
        <SortableContainer dndKitId="d5df0887-5b68-408f-b3ff-8bfde7e5aa4f" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="mt-12 text-center" data-magicpath-id="37" data-magicpath-path="ContactSection.tsx">
          <p className="text-xs lg:text-sm font-light text-white/40 tracking-[0.2em] uppercase" data-magicpath-id="38" data-magicpath-path="ContactSection.tsx">
            <span data-magicpath-id="39" data-magicpath-path="ContactSection.tsx">© 2025 Tommaso Piccioli — AI Creator & Creative Director</span>
          </p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};