import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Instagram, Linkedin, Mail, ChevronDown } from 'lucide-react';
type TommasoPortfolioProps = Record<string, never>;
const navLinks = [{
  label: 'Home',
  href: '#home',
  mpid: "b15e5cd7-805a-4957-8077-edd695b7c056"
}, {
  label: 'Progetti',
  href: '#progetti',
  mpid: "b3e879dc-220d-4727-a2a7-78ec4a2b6dbf"
}, {
  label: 'Chi Sono',
  href: '#chi-sono',
  mpid: "c0374d34-31a9-44c2-9c0b-b2514b5aa69f"
}, {
  label: 'Contattami',
  href: '#contatto',
  mpid: "30929c7d-c741-4ca3-b666-eba7bf524b66"
}] as any[];
const services = [{
  title: 'Campagne Visive AI',
  description: 'Immagini cinematiche e storytelling per automotive, moda e tecnologia.',
  mpid: "4f72ae32-a4e8-477d-a879-d8ae372df95d"
}, {
  title: 'Contenuti per Social & Web',
  description: 'Post, reel e video creativi per brand e professionisti digitali.',
  mpid: "2bc923a2-027f-4a69-84e9-90e4fc2abe31"
}, {
  title: 'Branding & Direzione Creativa',
  description: 'Concept, identità visiva e linguaggio estetico per progetti unici.',
  mpid: "524d2f43-20db-48ef-b386-74a17383315f"
}] as any[];
const projects = [{
  title: 'BMW X3 — Campagna Cinematografica AI',
  description: 'Un progetto di storytelling visivo che esplora il lusso e la luce.',
  mpid: "c3e86168-59bf-404b-b78e-aba71507f657"
}, {
  title: 'VISION AIR — Apple XR Concept',
  description: 'Un\'esperienza visiva che unisce design, tecnologia e emozione.',
  mpid: "5b8dd265-9492-48cb-9321-7aad63b8402e"
}, {
  title: 'NUTRASET PRO — Smart Kitchenware Concept',
  description: 'Lifestyle e innovazione raccontati con uno sguardo cinematografico.',
  mpid: "27dd7388-8d18-42cb-b300-e2e80d8da838"
}] as any[];
const methodology = ['Concept & Moodboard', 'Generazione AI', 'Post-Produzione & Grading', 'Output Social e Web'];

// @component: TommasoPortfolio
export const TommasoPortfolio = (_props: TommasoPortfolioProps) => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const aboutInView = useInView(aboutRef, {
    once: true,
    margin: "-100px"
  });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px"
  });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // @return
  return <SortableContainer dndKitId="538ec9fc-cdf1-49ab-b0e4-cd34b78b6ee2" containerType="regular" prevTag="div" className="w-full bg-black text-white overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="TommasoPortfolio.tsx">
      <SortableContainer dndKitId="72e2350c-ce81-4e19-b980-fda509dc771d" containerType="regular" prevTag="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/10'}`} data-magicpath-id="1" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="77580eca-dc13-4a5e-b28f-ed6676a39ff1" containerType="regular" prevTag="nav" className="container mx-auto px-6 py-6 flex items-center justify-center" data-magicpath-id="2" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="83d06257-450e-4fa4-be6f-4219de7b3cba" containerType="collection" prevTag="ul" className="flex gap-12 items-center" data-magicpath-id="3" data-magicpath-path="TommasoPortfolio.tsx">
            {navLinks.map(link => <li key={link.href} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="4" data-magicpath-path="TommasoPortfolio.tsx">
                <a href={link.href} className="text-white/80 hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-colors duration-300" data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="5" data-magicpath-path="TommasoPortfolio.tsx">
                  {link.label}
                </a>
              </li>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="17aa0b66-425e-4bdd-bd21-822e795790fd" containerType="regular" prevTag="div" className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6" data-magicpath-id="6" data-magicpath-path="TommasoPortfolio.tsx">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E7B979] transition-colors duration-300" data-magicpath-id="7" data-magicpath-path="TommasoPortfolio.tsx">
          <Instagram size={20} strokeWidth={1.5} data-magicpath-id="8" data-magicpath-path="TommasoPortfolio.tsx" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E7B979] transition-colors duration-300" data-magicpath-id="9" data-magicpath-path="TommasoPortfolio.tsx">
          <Linkedin size={20} strokeWidth={1.5} data-magicpath-id="10" data-magicpath-path="TommasoPortfolio.tsx" />
        </a>
      </SortableContainer>

      <SortableContainer dndKitId="2a0ed698-0fd8-4c93-94de-b6f345304682" containerType="regular" prevTag="section" id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden" data-magicpath-id="11" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="7bd5c34a-6e33-4682-a04d-9ddaf2e849dd" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="absolute inset-0" data-magicpath-id="12" data-magicpath-path="TommasoPortfolio.tsx">
          <div className="absolute inset-0 bg-gradient-radial from-[#E7B979]/30 via-transparent to-black" data-magicpath-id="13" data-magicpath-path="TommasoPortfolio.tsx" />
          <SortableContainer dndKitId="7b51dd6f-ca12-4358-b8fa-3a3f84306bfd" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" data-magicpath-id="14" data-magicpath-path="TommasoPortfolio.tsx">
            <SortableContainer dndKitId="50688216-6ab8-4cc5-9ffb-f9299311e4e8" containerType="regular" prevTag="div" className="relative w-96 h-96" data-magicpath-id="15" data-magicpath-path="TommasoPortfolio.tsx">
              <div className="absolute inset-0 bg-gradient-radial from-[#E7B979] via-[#E7B979]/50 to-transparent blur-3xl opacity-60" data-magicpath-id="16" data-magicpath-path="TommasoPortfolio.tsx" />
              <SortableContainer dndKitId="ab4b0e2c-4715-4db8-8e34-499cde094421" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" data-magicpath-id="17" data-magicpath-path="TommasoPortfolio.tsx">
                <div className="w-64 h-64 rounded-full bg-black border-4 border-[#E7B979]/20" data-magicpath-id="18" data-magicpath-path="TommasoPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="c24d3f8c-7a15-4e63-bcef-a624b2a08ed7" containerType="regular" prevTag="div" className="absolute inset-0 flex flex-col items-center justify-end pb-32" data-magicpath-id="19" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="1ae41442-8407-4328-96eb-5e13e9720542" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.5
        }} className="text-center space-y-6" data-magicpath-id="20" data-magicpath-path="TommasoPortfolio.tsx">
            <p className="text-white/70 text-xs uppercase tracking-[0.4em] font-light" data-magicpath-id="21" data-magicpath-path="TommasoPortfolio.tsx">
              Tommaso Piccioli · AI Creator & Creative Director
            </p>
            <h1 className="text-8xl uppercase tracking-[0.3em] font-extralight text-white" data-magicpath-id="22" data-magicpath-path="TommasoPortfolio.tsx">
              Portfolio
            </h1>
          </SortableContainer>

          <SortableContainer dndKitId="04f57058-6342-42b4-b39e-b5ff1b21284a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }} className="absolute bottom-12" data-magicpath-id="23" data-magicpath-path="TommasoPortfolio.tsx">
            <ChevronDown className="text-white/40" size={32} strokeWidth={1} data-magicpath-id="24" data-magicpath-path="TommasoPortfolio.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="ed42f1f5-17cd-4d86-89a7-c07061d9eea4" containerType="regular" prevTag="section" id="chi-sono" ref={aboutRef} className="relative py-32 px-6" data-magicpath-id="25" data-magicpath-path="TommasoPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E7B979]/5 to-transparent" data-magicpath-id="26" data-magicpath-path="TommasoPortfolio.tsx" />
        <SortableContainer dndKitId="827ec63c-9c46-4918-a013-2a21fb9b9c03" containerType="regular" prevTag="div" className="container mx-auto max-w-7xl relative" data-magicpath-id="27" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="0507f051-f4bd-4bcd-b9fe-910559c5968a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 40
        }} animate={aboutInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }} className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="28" data-magicpath-path="TommasoPortfolio.tsx">
            <SortableContainer dndKitId="8dcc7c33-53d3-4cd3-8585-d8cceef8ffbc" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="29" data-magicpath-path="TommasoPortfolio.tsx">
              <h2 className="text-5xl font-light leading-tight" data-magicpath-id="30" data-magicpath-path="TommasoPortfolio.tsx">
                Direzione creativa e contenuti per l'era dell'intelligenza artificiale.
              </h2>
              <SortableContainer dndKitId="feef777e-28c3-4ac8-a707-69e8ea4899fc" containerType="regular" prevTag="div" className="space-y-6 text-[#AAAAAA] leading-relaxed text-lg" data-magicpath-id="31" data-magicpath-path="TommasoPortfolio.tsx">
                <p data-magicpath-id="32" data-magicpath-path="TommasoPortfolio.tsx">
                  Sono un AI Content Creator e Creative Director.
                </p>
                <p data-magicpath-id="33" data-magicpath-path="TommasoPortfolio.tsx">
                  Unisco design, tecnologia e narrazione visiva per creare immagini e video dallo stile cinematografico, pensati per brand e progetti digitali.
                </p>
                <p data-magicpath-id="34" data-magicpath-path="TommasoPortfolio.tsx">
                  Ogni creazione nasce da un'idea, da una visione e da un linguaggio visivo coerente.
                </p>
              </SortableContainer>
              <button className="mt-8 px-8 py-4 border border-[#E7B979]/40 text-white uppercase tracking-[0.3em] text-sm font-light hover:bg-[#E7B979]/10 transition-all duration-300" data-magicpath-id="35" data-magicpath-path="TommasoPortfolio.tsx">
                Scopri di più
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="f572e4d2-0c2a-4458-95d5-2f230332ecfa" containerType="regular" prevTag="div" className="relative h-[600px] bg-gradient-to-br from-[#E7B979]/10 to-black/50 rounded-sm" data-magicpath-id="36" data-magicpath-path="TommasoPortfolio.tsx">
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60" data-magicpath-id="37" data-magicpath-path="TommasoPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="03267a6b-f3bc-48b9-8e0b-fe070b1e2288" containerType="regular" prevTag="section" ref={servicesRef} className="relative py-32 px-6 bg-black" data-magicpath-id="38" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="f04599aa-a85e-481a-a692-d86d9aa6950f" containerType="regular" prevTag="div" className="container mx-auto max-w-7xl" data-magicpath-id="39" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="f062938a-7bd2-490f-9bc2-c6c28a91155d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 40
        }} animate={servicesInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }} className="text-center space-y-6 mb-20" data-magicpath-id="40" data-magicpath-path="TommasoPortfolio.tsx">
            <h2 className="text-6xl font-light uppercase tracking-[0.2em]" data-magicpath-id="41" data-magicpath-path="TommasoPortfolio.tsx">Cosa realizzo</h2>
            <p className="text-[#AAAAAA] text-lg max-w-3xl mx-auto leading-relaxed" data-magicpath-id="42" data-magicpath-path="TommasoPortfolio.tsx">
              Dall'idea al contenuto finale — visione, design e intelligenza artificiale.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="cac79c52-ebd6-4650-8baa-00151da5973b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="43" data-magicpath-path="TommasoPortfolio.tsx">
            {services.map((service, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 40
          }} animate={servicesInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} className="relative group" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="TommasoPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E7B979]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="TommasoPortfolio.tsx" />
                <div className="relative p-12 space-y-6" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="TommasoPortfolio.tsx">
                  <div className="w-16 h-16 border border-[#E7B979]/40 flex items-center justify-center" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="TommasoPortfolio.tsx">
                    <div className="w-2 h-2 bg-[#E7B979]" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="TommasoPortfolio.tsx" />
                  </div>
                  <h3 className="text-2xl font-light" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="49" data-magicpath-path="TommasoPortfolio.tsx">{service.title}</h3>
                  <p className="text-[#AAAAAA] leading-relaxed" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="50" data-magicpath-path="TommasoPortfolio.tsx">{service.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="2e984e93-d7e9-48d7-a38c-e23d0e31bff7" containerType="regular" prevTag="section" id="progetti" ref={projectsRef} className="relative py-32" data-magicpath-id="51" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="732e087e-7861-47a1-9f91-8962674de359" containerType="regular" prevTag="div" className="container mx-auto max-w-7xl px-6" data-magicpath-id="52" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="ed0f7351-4c9d-4707-8dca-391cfe995318" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 40
        }} animate={projectsInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }} className="text-center space-y-6 mb-20" data-magicpath-id="53" data-magicpath-path="TommasoPortfolio.tsx">
            <h2 className="text-6xl font-light uppercase tracking-[0.2em]" data-magicpath-id="54" data-magicpath-path="TommasoPortfolio.tsx">Progetti in evidenza</h2>
          </SortableContainer>

          <SortableContainer dndKitId="ccb425bb-899a-49d1-aace-59a1ec7be397" containerType="collection" prevTag="div" className="space-y-32" data-magicpath-id="55" data-magicpath-path="TommasoPortfolio.tsx">
            {projects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 60
          }} animate={projectsInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: index * 0.3
          }} className="group cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="TommasoPortfolio.tsx">
                <div className="relative h-[70vh] bg-gradient-to-br from-[#E7B979]/10 via-black to-black overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="TommasoPortfolio.tsx">
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="TommasoPortfolio.tsx" />
                  <div className="absolute inset-0 bg-[#E7B979]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="TommasoPortfolio.tsx" />
                </div>
                <div className="mt-8 space-y-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="TommasoPortfolio.tsx">
                  <h3 className="text-3xl font-light uppercase tracking-[0.15em]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="61" data-magicpath-path="TommasoPortfolio.tsx">{project.title}</h3>
                  <p className="text-[#AAAAAA] text-lg" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="62" data-magicpath-path="TommasoPortfolio.tsx">{project.description}</p>
                  <button className="mt-4 text-[#E7B979] uppercase tracking-[0.3em] text-sm font-light group-hover:tracking-[0.4em] transition-all duration-300" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="TommasoPortfolio.tsx">
                    Vedi il progetto →
                  </button>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="495101fc-b01e-4583-be9b-b31c99fcf6e1" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-black to-[#E7B979]/5" data-magicpath-id="64" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="6cf4821c-a357-4da1-8cba-3fb8ea26928e" containerType="regular" prevTag="div" className="container mx-auto max-w-6xl" data-magicpath-id="65" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="5822919d-6ab3-418c-8620-7a4c9cc14125" containerType="regular" prevTag="div" className="text-center space-y-6 mb-20" data-magicpath-id="66" data-magicpath-path="TommasoPortfolio.tsx">
            <h2 className="text-6xl font-light uppercase tracking-[0.2em]" data-magicpath-id="67" data-magicpath-path="TommasoPortfolio.tsx">Come lavoro</h2>
            <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto leading-relaxed" data-magicpath-id="68" data-magicpath-path="TommasoPortfolio.tsx">
              Ogni progetto segue un flusso chiaro, dalla visione all'esecuzione finale.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="7476fe23-bb88-433c-b352-350a4d18709a" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-8" data-magicpath-id="69" data-magicpath-path="TommasoPortfolio.tsx">
            {methodology.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.15
          }} className="relative text-center space-y-6 group" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="TommasoPortfolio.tsx">
                <div className="flex flex-col items-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="TommasoPortfolio.tsx">
                  <div className="w-20 h-20 border border-[#E7B979]/40 flex items-center justify-center group-hover:bg-[#E7B979]/10 transition-colors duration-300" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="TommasoPortfolio.tsx">
                    <span className="text-2xl font-extralight text-[#E7B979]" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="TommasoPortfolio.tsx">{index + 1}</span>
                  </div>
                  {index < methodology.length - 1 && <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-[#E7B979]/40 to-transparent" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="TommasoPortfolio.tsx" />}
                </div>
                <p className="text-sm uppercase tracking-[0.2em] font-light" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="TommasoPortfolio.tsx">{step}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="710414f9-f25a-48e0-98f0-4f50bc327451" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-black" data-magicpath-id="76" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="ad17128a-86ed-4d5f-a64b-185cc043afeb" containerType="regular" prevTag="div" className="container mx-auto max-w-5xl text-center space-y-12" data-magicpath-id="77" data-magicpath-path="TommasoPortfolio.tsx">
          <h2 className="text-5xl font-light leading-tight" data-magicpath-id="78" data-magicpath-path="TommasoPortfolio.tsx">Dal fotogramma al movimento.</h2>
          <p className="text-[#AAAAAA] text-lg max-w-3xl mx-auto leading-relaxed" data-magicpath-id="79" data-magicpath-path="TommasoPortfolio.tsx">
            Trasformo le immagini AI in sequenze video cinematografiche, perfette per la comunicazione digitale e social.
          </p>
          <SortableContainer dndKitId="4483637f-2a55-4a77-8cc7-ed00ccd6eb9e" containerType="regular" prevTag="div" className="relative w-full aspect-video bg-gradient-to-br from-[#E7B979]/10 to-black border border-[#E7B979]/20 group cursor-pointer overflow-hidden" data-magicpath-id="80" data-magicpath-path="TommasoPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-radial from-[#E7B979]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-magicpath-id="81" data-magicpath-path="TommasoPortfolio.tsx" />
            <SortableContainer dndKitId="3d5d5908-eaed-42c9-bca5-c56025b07a73" containerType="regular" prevTag="div" className="absolute inset-0 flex items-center justify-center" data-magicpath-id="82" data-magicpath-path="TommasoPortfolio.tsx">
              <SortableContainer dndKitId="f54b3459-ff2b-4916-91c6-709315f7f13c" containerType="regular" prevTag="div" className="w-20 h-20 border-2 border-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-magicpath-id="83" data-magicpath-path="TommasoPortfolio.tsx">
                <div className="w-0 h-0 border-l-[16px] border-l-white/80 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" data-magicpath-id="84" data-magicpath-path="TommasoPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <button className="px-8 py-4 border border-[#E7B979]/40 text-white uppercase tracking-[0.3em] text-sm font-light hover:bg-[#E7B979]/10 transition-all duration-300" data-magicpath-id="85" data-magicpath-path="TommasoPortfolio.tsx">
            Guarda il reel
          </button>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="69af0b81-b503-4444-9f02-fd2c39c9e76e" containerType="regular" prevTag="section" id="contatto" className="relative py-32 px-6 bg-gradient-to-b from-black via-[#E7B979]/5 to-black" data-magicpath-id="86" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="6b21bf40-eee4-40a5-9f4f-e6db0f3fe537" containerType="regular" prevTag="div" className="container mx-auto max-w-4xl text-center space-y-12" data-magicpath-id="87" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="738228c1-e18c-4385-af89-5f48d9ab22a8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-8" data-magicpath-id="88" data-magicpath-path="TommasoPortfolio.tsx">
            <h2 className="text-6xl font-light leading-tight" data-magicpath-id="89" data-magicpath-path="TommasoPortfolio.tsx">Costruiamo insieme la tua visione.</h2>
            <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto leading-relaxed" data-magicpath-id="90" data-magicpath-path="TommasoPortfolio.tsx">
              Collaboro con brand, designer e studi che vogliono innovare la comunicazione visiva attraverso l'intelligenza artificiale.
            </p>
            <button className="mt-8 px-12 py-5 border-2 border-[#E7B979] text-white uppercase tracking-[0.3em] text-sm font-light hover:bg-[#E7B979] hover:text-black transition-all duration-300" data-magicpath-id="91" data-magicpath-path="TommasoPortfolio.tsx">
              Contattami
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="f583ae00-413d-49b5-8e77-3441598701a9" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-black border-t border-white/5" data-magicpath-id="92" data-magicpath-path="TommasoPortfolio.tsx">
        <SortableContainer dndKitId="caa91b13-9044-4412-a352-416b3b42298a" containerType="regular" prevTag="div" className="container mx-auto max-w-6xl" data-magicpath-id="93" data-magicpath-path="TommasoPortfolio.tsx">
          <SortableContainer dndKitId="7d8cbf4e-ac3f-4499-88ac-e024d1ee7e48" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="94" data-magicpath-path="TommasoPortfolio.tsx">
            <h3 className="text-4xl font-extralight uppercase tracking-[0.3em]" data-magicpath-id="95" data-magicpath-path="TommasoPortfolio.tsx">Tommaso Piccioli</h3>
            <p className="text-[#AAAAAA] text-sm uppercase tracking-[0.3em]" data-magicpath-id="96" data-magicpath-path="TommasoPortfolio.tsx">
              AI Content Creator & Creative Director
            </p>
            <SortableContainer dndKitId="b6499ed2-917b-4b2a-8af0-5be6de30f328" containerType="regular" prevTag="div" className="flex items-center justify-center gap-8 pt-6" data-magicpath-id="97" data-magicpath-path="TommasoPortfolio.tsx">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#E7B979] transition-colors duration-300" data-magicpath-id="98" data-magicpath-path="TommasoPortfolio.tsx">
                <Instagram size={20} strokeWidth={1.5} data-magicpath-id="99" data-magicpath-path="TommasoPortfolio.tsx" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#E7B979] transition-colors duration-300" data-magicpath-id="100" data-magicpath-path="TommasoPortfolio.tsx">
                <Linkedin size={20} strokeWidth={1.5} data-magicpath-id="101" data-magicpath-path="TommasoPortfolio.tsx" />
              </a>
              <a href="mailto:contact@tommasopiccioli.com" className="text-white/50 hover:text-[#E7B979] transition-colors duration-300" data-magicpath-id="102" data-magicpath-path="TommasoPortfolio.tsx">
                <Mail size={20} strokeWidth={1.5} data-magicpath-id="103" data-magicpath-path="TommasoPortfolio.tsx" />
              </a>
            </SortableContainer>
            <p className="text-white/30 text-xs tracking-[0.2em] pt-8" data-magicpath-id="104" data-magicpath-path="TommasoPortfolio.tsx">
              © 2025 Tommaso Piccioli Studio — Tutti i diritti riservati.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};