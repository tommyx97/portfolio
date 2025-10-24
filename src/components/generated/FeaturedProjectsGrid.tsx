"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
type FeaturedProjectsGridProps = Record<string, never>;
const projectsData = [{
  id: 'project-automotive',
  title: 'BMW X3',
  category: 'AUTOMOTIVE',
  year: '2025',
  image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=1600&fit=crop&q=90',
  bgColor: 'from-slate-500/20 to-blue-900/30',
  mpid: "db8144b9-3d08-476b-80e5-9810c9e748a1"
}, {
  id: 'project-innovation',
  title: 'Vision Air',
  category: 'INNOVATION',
  year: '2024',
  image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=1600&fit=crop&q=90',
  bgColor: 'from-amber-500/30 to-yellow-600/40',
  mpid: "2f3d12c8-dc04-4d5f-92b2-5ed55c6594b1"
}, {
  id: 'project-product',
  title: 'iPhone Model T',
  category: 'PRODUCT',
  year: '2025',
  image: 'https://images.unsplash.com/photo-1592286927505-b0e2950e3900?w=1200&h=1600&fit=crop&q=90',
  bgColor: 'from-zinc-900/50 to-black/70',
  mpid: "15c68787-99ad-40e1-94c7-d14c8295e814"
}] as const;
export const FeaturedProjectsGrid = (_props: FeaturedProjectsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });
  return <SortableContainer dndKitId="2c9e57f3-f0fa-41e5-b604-9247b384b2c1" containerType="regular" prevTag="div" className="relative w-full min-h-screen bg-black text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="FeaturedProjectsGrid.tsx">
      {/* Ambient background glow */}
      <SortableContainer dndKitId="98cd2b5d-b872-481b-8345-04431235f0aa" containerType="regular" prevTag="div" className="absolute inset-0 z-0 pointer-events-none" data-magicpath-id="1" data-magicpath-path="FeaturedProjectsGrid.tsx">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-[120px]" data-magicpath-id="2" data-magicpath-path="FeaturedProjectsGrid.tsx" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-amber-500/8 via-transparent to-transparent blur-[100px]" data-magicpath-id="3" data-magicpath-path="FeaturedProjectsGrid.tsx" />
      </SortableContainer>

      {/* Main container */}
      <SortableContainer dndKitId="4fdfa102-c49f-4514-966b-abf651f7ec56" containerType="regular" prevTag="div" ref={containerRef} className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32" data-magicpath-id="4" data-magicpath-path="FeaturedProjectsGrid.tsx">
        {/* Header section */}
        <SortableContainer dndKitId="c6a6ec8c-0a5e-4d64-b2b9-686bf85941ca" containerType="regular" prevTag="motion.div" initial={{
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
      }} className="mb-12 sm:mb-16 md:mb-20 lg:mb-24" data-magicpath-id="5" data-magicpath-path="FeaturedProjectsGrid.tsx">
          <SortableContainer dndKitId="06357dcc-b079-4c28-9993-9952abf69839" containerType="regular" prevTag="div" className="space-y-4 sm:space-y-5 md:space-y-6" data-magicpath-id="6" data-magicpath-path="FeaturedProjectsGrid.tsx">
            <p className="text-xs sm:text-sm font-light text-white/50 tracking-[0.3em] uppercase" data-magicpath-id="7" data-magicpath-path="FeaturedProjectsGrid.tsx">
              <span data-magicpath-id="8" data-magicpath-path="FeaturedProjectsGrid.tsx">Progetti Selezionati</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-[1.05]" data-magicpath-id="9" data-magicpath-path="FeaturedProjectsGrid.tsx">
              <span className="block text-white" data-magicpath-id="10" data-magicpath-path="FeaturedProjectsGrid.tsx">Featured</span>
              <span className="block text-white" data-magicpath-id="11" data-magicpath-path="FeaturedProjectsGrid.tsx">Projects</span>
            </h1>
          </SortableContainer>
        </SortableContainer>

        {/* Three cards grid */}
        <SortableContainer dndKitId="df47dc1d-c3ba-4986-95d5-d58b3fcaae60" containerType="collection" prevTag="div" className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8" data-magicpath-id="12" data-magicpath-path="FeaturedProjectsGrid.tsx">
          {projectsData.map((project, index) => {
          const isHovered = hoveredIndex === index;
          return <motion.div data-magicpath-motion-tag="motion.div" key={project.id} initial={{
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
          }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group relative w-full" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="FeaturedProjectsGrid.tsx">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-950 cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="FeaturedProjectsGrid.tsx">
                  {/* Background image */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 w-full h-full" animate={{
                scale: isHovered ? 1.08 : 1
              }} transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="FeaturedProjectsGrid.tsx">
                    <img src={project.image} alt={`${project.title} - ${project.category}`} className="w-full h-full object-cover" loading="lazy" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="16" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                  </motion.div>

                  {/* Gradient overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.bgColor} mix-blend-multiply`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="FeaturedProjectsGrid.tsx" />

                  {/* Hover glow effect */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" initial={{
                opacity: 0
              }} animate={{
                opacity: isHovered ? 1 : 0
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="FeaturedProjectsGrid.tsx" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 z-10" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="FeaturedProjectsGrid.tsx">
                    {/* Top: Category badge */}
                    <motion.div data-magicpath-motion-tag="motion.div" initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : -10
                }} transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1
                }} className="flex items-start" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="FeaturedProjectsGrid.tsx">
                      <div className="inline-flex px-3 py-1.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-full" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="FeaturedProjectsGrid.tsx">
                        <span className="text-[10px] sm:text-xs font-light text-white/90 tracking-[0.2em] uppercase" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="23" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          {project.category}
                        </span>
                      </div>
                    </motion.div>

                    {/* Bottom: Project info */}
                    <motion.div data-magicpath-motion-tag="motion.div" animate={{
                  y: isHovered ? -6 : 0
                }} transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }} className="space-y-3 sm:space-y-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="FeaturedProjectsGrid.tsx">
                      <div className="space-y-1.5 sm:space-y-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="FeaturedProjectsGrid.tsx">
                        <p className="text-[10px] sm:text-xs font-light text-white/40 tracking-[0.25em] uppercase" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="FeaturedProjectsGrid.tsx">PROGETTO</span>
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-light tracking-tight text-white leading-tight" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="29" data-magicpath-path="FeaturedProjectsGrid.tsx">{project.title}</span>
                        </h2>
                        <p className="text-xs sm:text-sm font-light text-white/30 tracking-wide" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:unknown" data-magicpath-id="31" data-magicpath-path="FeaturedProjectsGrid.tsx">{project.year}</span>
                        </p>
                      </div>

                      {/* Animated underline */}
                      <motion.div data-magicpath-motion-tag="motion.div" className="h-[1px] bg-gradient-to-r from-white/60 via-white/30 to-transparent" initial={{
                    width: "40%"
                  }} animate={{
                    width: isHovered ? "85%" : "40%"
                  }} transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="FeaturedProjectsGrid.tsx" />

                      {/* Hover reveal: View project */}
                      <motion.div data-magicpath-motion-tag="motion.div" initial={{
                    opacity: 0,
                    height: 0
                  }} animate={{
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? "auto" : 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="FeaturedProjectsGrid.tsx">
                        <div className="flex items-center gap-2 pt-1" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span className="text-xs font-light text-white/70 tracking-[0.15em] uppercase" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="FeaturedProjectsGrid.tsx">
                            View project
                          </span>
                          <motion.svg data-magicpath-motion-tag="motion.svg" animate={{
                        x: isHovered ? 3 : 0
                      }} transition={{
                        duration: 0.3
                      }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="FeaturedProjectsGrid.tsx">
                            <path d="M7 7h10v10" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                            <path d="M7 17 17 7" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                          </motion.svg>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 pointer-events-none" initial={{
                boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0)"
              }} animate={{
                boxShadow: isHovered ? "inset 0 0 0 1px rgba(255, 255, 255, 0.15)" : "inset 0 0 0 1px rgba(255, 255, 255, 0)"
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                </div>

                {/* Outer glow */}
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-1 bg-white/5 blur-2xl -z-10 rounded-sm" initial={{
              opacity: 0
            }} animate={{
              opacity: isHovered ? 1 : 0
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="FeaturedProjectsGrid.tsx" />
              </motion.div>;
        })}
        </SortableContainer>

        {/* Bottom spacing */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32" data-magicpath-id="41" data-magicpath-path="FeaturedProjectsGrid.tsx" />
      </SortableContainer>
    </SortableContainer>;
};