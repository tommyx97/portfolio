"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
type FeaturedProjectsGridProps = Record<string, never>;
const projectsData = [{
  id: 'project-bmw',
  title: 'BMW X3',
  subtitle: 'Automotive Excellence',
  image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=1200&fit=crop',
  mpid: "1a78d6ea-c613-489f-b01f-e2c62255b85e"
}, {
  id: 'project-vision',
  title: 'Vision Air',
  subtitle: 'Future Technology',
  image: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=800&h=1200&fit=crop',
  mpid: "db6c9fe2-cebb-431b-82b3-d3a3350a98e0"
}, {
  id: 'project-iphone',
  title: 'iPhone Model T',
  subtitle: 'Premium Design',
  image: 'https://images.unsplash.com/photo-1592286927505-b0e2950e3900?w=800&h=1200&fit=crop',
  mpid: "706c11f6-4a02-47be-ac0e-5b9e663c31d4"
}] as const;
export const FeaturedProjectsGrid = (_props: FeaturedProjectsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "-80px"
  });
  return <SortableContainer dndKitId="b7c0d85c-c74e-4310-9570-1fc72505241b" containerType="regular" prevTag="div" className="relative w-full min-h-screen bg-black text-white" data-magicpath-id="0" data-magicpath-path="FeaturedProjectsGrid.tsx">
      {/* Ambient gradient background */}
      <SortableContainer dndKitId="791d462f-bfa6-4a82-ab25-53e549e41a74" containerType="regular" prevTag="div" className="absolute inset-0 z-0 overflow-hidden" data-magicpath-id="1" data-magicpath-path="FeaturedProjectsGrid.tsx">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#C8966B]/15 via-[#C8966B]/5 to-transparent blur-3xl" data-magicpath-id="2" data-magicpath-path="FeaturedProjectsGrid.tsx" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#8B7355]/10 via-transparent to-transparent blur-3xl" data-magicpath-id="3" data-magicpath-path="FeaturedProjectsGrid.tsx" />
      </SortableContainer>

      {/* Content Container */}
      <SortableContainer dndKitId="28f4f0e1-7c53-42aa-b129-83a60b4c1a4c" containerType="regular" prevTag="div" className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-36" data-magicpath-id="4" data-magicpath-path="FeaturedProjectsGrid.tsx">
        {/* Header Section */}
        <SortableContainer dndKitId="0d697b91-9c9d-443f-bff5-d9e2a1f5fb99" containerType="regular" prevTag="motion.div" ref={headerRef} initial={{
        opacity: 0,
        y: 30
      }} animate={isHeaderInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }} className="max-w-[1600px] mx-auto mb-12 md:mb-16 lg:mb-20" data-magicpath-id="5" data-magicpath-path="FeaturedProjectsGrid.tsx">
          <SortableContainer dndKitId="d70ab9b9-04a4-4baf-9d5a-a001e4d89dcd" containerType="regular" prevTag="div" className="space-y-3 md:space-y-4" data-magicpath-id="6" data-magicpath-path="FeaturedProjectsGrid.tsx">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[0.15em] uppercase" data-magicpath-id="7" data-magicpath-path="FeaturedProjectsGrid.tsx">
              <span data-magicpath-id="8" data-magicpath-path="FeaturedProjectsGrid.tsx">Selected Works</span>
            </h1>
            <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-[#C8966B] to-transparent" data-magicpath-id="9" data-magicpath-path="FeaturedProjectsGrid.tsx" />
            <p className="text-sm md:text-base lg:text-lg font-light text-white/70 tracking-wide max-w-2xl" data-magicpath-id="10" data-magicpath-path="FeaturedProjectsGrid.tsx">
              <span data-magicpath-id="11" data-magicpath-path="FeaturedProjectsGrid.tsx">Cinematic campaigns powered by AI-driven design and creative vision.</span>
            </p>
          </SortableContainer>
        </SortableContainer>

        {/* Projects Grid - Single Row */}
        <SortableContainer dndKitId="1b5a7e69-6a92-462d-9e59-32174645fb5a" containerType="regular" prevTag="div" className="max-w-[1600px] mx-auto" data-magicpath-id="12" data-magicpath-path="FeaturedProjectsGrid.tsx">
          <SortableContainer dndKitId="1a9f582f-55a2-4645-9996-a634685cb246" containerType="collection" prevTag="div" className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12" data-magicpath-id="13" data-magicpath-path="FeaturedProjectsGrid.tsx">
            {projectsData.map((project, index) => {
            const cardRef = React.useRef<HTMLAnchorElement>(null);
            const isInView = useInView(cardRef, {
              once: true,
              margin: "-100px"
            });
            const isHovered = hoveredIndex === index;
            return <motion.a data-magicpath-motion-tag="motion.a" key={project.id} ref={cardRef} href={`#${project.id}`} initial={{
              opacity: 0,
              y: 50
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 50
            }} transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1]
            }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group relative w-full aspect-[3/4] overflow-hidden cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="FeaturedProjectsGrid.tsx">
                  {/* Project Image */}
                  <div className="absolute inset-0 w-full h-full" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="FeaturedProjectsGrid.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-full h-full" animate={{
                  scale: isHovered ? 1.08 : 1
                }} transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="FeaturedProjectsGrid.tsx">
                      <img src={project.image} alt={`${project.title} - ${project.subtitle}`} className="w-full h-full object-cover" loading="lazy" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="17" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                    </motion.div>
                  </div>

                  {/* Gradient Overlay */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" animate={{
                opacity: isHovered ? 0.9 : 1
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="FeaturedProjectsGrid.tsx" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-10 z-10" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="FeaturedProjectsGrid.tsx">
                    {/* Top: Hover Icon */}
                    <div className="flex justify-end" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="FeaturedProjectsGrid.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" initial={{
                    opacity: 0,
                    scale: 0.8
                  }} animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8
                  }} transition={{
                    duration: 0.3
                  }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="FeaturedProjectsGrid.tsx">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <ArrowUpRight className="text-white" size={20} strokeWidth={1.5} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom: Text Content */}
                    <div className="space-y-2 md:space-y-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="FeaturedProjectsGrid.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" animate={{
                    y: isHovered ? -6 : 0
                  }} transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="FeaturedProjectsGrid.tsx">
                        <p className="text-xs md:text-sm font-light text-white/60 tracking-[0.2em] uppercase mb-1 md:mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="27" data-magicpath-path="FeaturedProjectsGrid.tsx">{project.subtitle}</span>
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.1em] text-white" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="29" data-magicpath-path="FeaturedProjectsGrid.tsx">{project.title}</span>
                        </h2>
                      </motion.div>

                      {/* Accent Line */}
                      <motion.div data-magicpath-motion-tag="motion.div" className="h-[1px] bg-gradient-to-r from-[#C8966B] to-transparent" initial={{
                    width: "0%"
                  }} animate={{
                    width: isHovered ? "100%" : "40%"
                  }} transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="FeaturedProjectsGrid.tsx" />

                      {/* Call to Action */}
                      <motion.div data-magicpath-motion-tag="motion.div" initial={{
                    opacity: 0,
                    height: 0
                  }} animate={{
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? "auto" : 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="FeaturedProjectsGrid.tsx">
                        <p className="text-xs md:text-sm font-light text-white/80 tracking-[0.15em] uppercase pt-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="FeaturedProjectsGrid.tsx">
                          <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="FeaturedProjectsGrid.tsx">View Project</span>
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Premium border effect on hover */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 border border-[#C8966B]/0" animate={{
                borderColor: isHovered ? 'rgba(200, 150, 107, 0.4)' : 'rgba(200, 150, 107, 0)'
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="FeaturedProjectsGrid.tsx" />
                </motion.a>;
          })}
          </SortableContainer>
        </SortableContainer>

        {/* Bottom decorative element */}
        <SortableContainer dndKitId="29ff7266-44c2-4134-9c72-8f99d8878bc4" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        scaleX: 0
      }} animate={isHeaderInView ? {
        opacity: 1,
        scaleX: 1
      } : {
        opacity: 0,
        scaleX: 0
      }} transition={{
        duration: 1.2,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="max-w-[1600px] mx-auto mt-16 md:mt-20 lg:mt-24" data-magicpath-id="35" data-magicpath-path="FeaturedProjectsGrid.tsx">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8966B]/40 to-transparent" data-magicpath-id="36" data-magicpath-path="FeaturedProjectsGrid.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};