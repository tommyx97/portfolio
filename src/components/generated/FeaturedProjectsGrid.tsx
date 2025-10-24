"use client";

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { useProjectNavigation } from '../../hooks/useNavigation';
const projectsData = [{
  id: 'project-automotive',
  title: 'BMW X3',
  category: 'AUTOMOTIVE',
  year: '2025',
  image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=1600&fit=crop&q=90',
  bgColor: 'from-slate-500/20 to-blue-900/30'
}, {
  id: 'project-innovation',
  title: 'Vision Air',
  category: 'INNOVATION',
  year: '2024',
  image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=1600&fit=crop&q=90',
  bgColor: 'from-amber-500/30 to-yellow-600/40'
}, {
  id: 'project-product',
  title: 'iPhone Model T',
  category: 'PRODUCT',
  year: '2025',
  image: 'https://images.unsplash.com/photo-1592286927505-b0e2950e3900?w=1200&h=1600&fit=crop&q=90',
  bgColor: 'from-zinc-900/50 to-black/70'
}] as const;
export interface FeaturedProjectsGridProps {
  onProjectClick?: (projectId: string) => void;
}
export const FeaturedProjectsGrid = ({
  onProjectClick
}: FeaturedProjectsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { saveProjectIntent } = useProjectNavigation();
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });

  const handleProjectClick = (projectId: string) => {
    // Save the current section for smart return
    saveProjectIntent('#progetti');
    if (onProjectClick) {
      onProjectClick(projectId);
    }
  };

  return <section id="progetti" className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-amber-500/8 via-transparent to-transparent blur-[100px]" />
      </div>

      {/* Main container */}
      <div ref={containerRef} className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Header section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-xs sm:text-sm font-light text-white/50 tracking-[0.3em] uppercase">
              <span>Progetti Selezionati</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-[1.05]">
              <span className="block text-white">Featured</span>
              <span className="block text-white">Projects</span>
            </h1>
          </div>
        </motion.div>

        {/* Three cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {projectsData.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isBMW = project.id === 'project-automotive';
          return <motion.div key={project.id} initial={{
            opacity: 0,
            y: 60
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 60
          }} transition={{
            duration: 0.9,
            delay: 0.1 + index * 0.15,
            ease: [0.25, 0.1, 0.25, 1]
          }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => {
            if (isBMW) {
              handleProjectClick('bmw-x3');
            }
          }} className="group relative w-full">
                <div className={`relative w-full aspect-[3/4] overflow-hidden bg-zinc-950 ${isBMW ? 'cursor-pointer' : 'cursor-default'}`}>
                  {/* Background image */}
                  <motion.div className="absolute inset-0 w-full h-full" animate={{
                scale: isHovered ? 1.08 : 1
              }} transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              }}>
                    <img src={project.image} alt={`${project.title} - ${project.category}`} className="w-full h-full object-cover transition-all duration-700" loading="lazy" />
                  </motion.div>

                  {/* Cinematic overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.bgColor} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />
                  
                  {/* Cinematic lighting effect */}
                  <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#aec7e9]/20 via-transparent to-transparent mix-blend-screen" />
                  
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-transparent" />

                  {/* Hover glow effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" initial={{
                opacity: 0
              }} animate={{
                opacity: isHovered ? 1 : 0
              }} transition={{
                duration: 0.4
              }} />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 z-10">
                    {/* Top: Category badge */}
                    <motion.div initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : -10
                }} transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1
                }} className="flex items-start">
                      <div className="inline-flex px-3 py-1.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
                        <span className="text-[10px] sm:text-xs font-light text-white/90 tracking-[0.2em] uppercase">
                          {project.category}
                        </span>
                      </div>
                    </motion.div>

                    {/* Bottom: Project info */}
                    <motion.div animate={{
                  y: isHovered ? -6 : 0
                }} transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }} className="space-y-3 sm:space-y-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs font-light text-white/40 tracking-[0.25em] uppercase">
                          <span>PROGETTO</span>
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-light tracking-tight text-white leading-tight">
                          <span>{project.title}</span>
                        </h2>
                        <p className="text-xs sm:text-sm font-light text-white/30 tracking-wide">
                          <span>{project.year}</span>
                        </p>
                      </div>

                      {/* Animated underline */}
                      <motion.div className="h-[1px] bg-gradient-to-r from-white/60 via-white/30 to-transparent" initial={{
                    width: "40%"
                  }} animate={{
                    width: isHovered ? "85%" : "40%"
                  }} transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }} />

                      {/* Hover reveal: View project */}
                      <motion.div initial={{
                    opacity: 0,
                    height: 0
                  }} animate={{
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? "auto" : 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden">
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-xs font-light text-white/70 tracking-[0.15em] uppercase">
                            View project
                          </span>
                          <motion.svg animate={{
                        x: isHovered ? 3 : 0
                      }} transition={{
                        duration: 0.3
                      }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </motion.svg>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div className="absolute inset-0 pointer-events-none" initial={{
                boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0)"
              }} animate={{
                boxShadow: isHovered ? "inset 0 0 0 1px rgba(255, 255, 255, 0.15)" : "inset 0 0 0 1px rgba(255, 255, 255, 0)"
              }} transition={{
                duration: 0.4
              }} />
                </div>

                {/* Outer glow */}
                <motion.div className="absolute -inset-1 bg-white/5 blur-2xl -z-10 rounded-sm" initial={{
              opacity: 0
            }} animate={{
              opacity: isHovered ? 1 : 0
            }} transition={{
              duration: 0.5
            }} />
              </motion.div>;
        })}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32" />
      </div>
    </section>;
};