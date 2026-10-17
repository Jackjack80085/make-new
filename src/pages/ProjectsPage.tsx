import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Sparkles,
  Sun,
  Layers,
  Compass,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { MakeEmblem } from '../components/MakeLogo';
import { BRAND_CONFIG, ProjectData } from '../config/brand';

import architecturalResidence from '../assets/images/architectural_residence_1791013875636.jpg';
import heroSunlitHome from '../assets/images/hero_sunlit_home_1791013817349.jpg';
import morningRitualBreakfast from '../assets/images/morning_ritual_breakfast_1791013841349.jpg';
import connectionLivingTerrace from '../assets/images/connection_living_terrace_1791013851990.jpg';
import domesticDetailReading from '../assets/images/domestic_detail_reading_1791013828318.jpg';
import solitudeQuietCorner from '../assets/images/solitude_quiet_corner_1791013863623.jpg';

interface ProjectsPageProps {
  onExploreProject: (project: ProjectData) => void;
  onOpenEnquiry: (projectName?: string) => void;
  onNavigateHome: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onExploreProject,
  onOpenEnquiry,
  onNavigateHome,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'coming-soon' | 'completed'>('all');

  // Curated expressive projects portfolio
  const richProjects = [
    {
      id: 'make-sampigehalli',
      number: '01',
      name: 'Make Sampigehalli',
      tagline: 'Homes that feel like home from the first day. North Bengaluru.',
      status: 'Coming Soon',
      location: 'North Bengaluru',
      orientation: 'East-Facing Courtyard Matrix',
      year: '2026',
      heroImage: architecturalResidence,
      gallery: [
        { image: architecturalResidence, caption: 'Central garden elevation and continuous eaves' },
        { image: morningRitualBreakfast, caption: 'Low morning sunlight over timber breakfast sills' },
        { image: connectionLivingTerrace, caption: 'Living room thresholds dissolving into the terrace' },
      ],
      essence:
        'A residential community calibrated to the natural movement of the sun. Deep verandas, hand-hewn limestone, and intimate interior courtyards designed for quiet privacy.',
      metrics: [
        { label: 'Custody', value: 'Founders on Site' },
        { label: 'Eaves Depth', value: '900mm Shaded Eaves' },
        { label: 'Landscape', value: 'Native Courtyard Flora' },
      ],
    },
    {
      id: 'make-borough',
      number: '02',
      name: 'Make Borough',
      tagline: 'Where it began. Completed and handed over.',
      status: 'Completed',
      location: 'Central Bengaluru',
      orientation: 'North-South Cross Ventilation',
      year: '2022',
      heroImage: heroSunlitHome,
      gallery: [
        { image: heroSunlitHome, caption: 'Completed residence basking in tranquil natural light' },
        { image: domesticDetailReading, caption: 'Deep solid oak window bench crafted for quiet hours' },
        { image: solitudeQuietCorner, caption: 'Natural lime plaster walls and bespoke joinery' },
      ],
      essence:
        'The foundational MAKE realization. Every surface, joinery corner, and stone threshold was personally supervised and handed over, now home to its residents.',
      metrics: [
        { label: 'Status', value: 'Handed Over' },
        { label: 'Materiality', value: 'Solid Oak & Limestone' },
        { label: 'Living Experience', value: 'Thriving Community' },
      ],
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? richProjects
      : richProjects.filter((p) =>
          activeFilter === 'coming-soon'
            ? p.status.toLowerCase().includes('soon')
            : p.status.toLowerCase().includes('completed')
        );

  return (
    <div className="w-full bg-[#E0D9C9] text-[#242D36] paper-grain plaster-surface min-h-screen overflow-x-hidden selection:bg-[#59212C] selection:text-[#E0D9C9]">
      {/* Background Architectural Emblem Impression */}
      <div
        className="fixed -right-24 top-1/4 w-[600px] h-[600px] opacity-[0.022] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <MakeEmblem className="w-full h-full text-[#59212C]" />
      </div>

      {/* Hero Header Section */}
      <header className="relative z-10 pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-[#242D36]/12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-end gap-4 mb-8">
          {/* Quick Filter Switchers */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full bg-[#242D36]/5 border border-[#242D36]/10 text-xs font-accent tracking-wider uppercase">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#59212C] text-[#E0D9C9] font-semibold shadow-xs'
                  : 'text-[#242D36]/65 hover:text-[#242D36]'
              }`}
            >
              All (02)
            </button>
            <button
              onClick={() => setActiveFilter('coming-soon')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeFilter === 'coming-soon'
                  ? 'bg-[#59212C] text-[#E0D9C9] font-semibold shadow-xs'
                  : 'text-[#242D36]/65 hover:text-[#242D36]'
              }`}
            >
              Coming Soon
            </button>
            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeFilter === 'completed'
                  ? 'bg-[#59212C] text-[#E0D9C9] font-semibold shadow-xs'
                  : 'text-[#242D36]/65 hover:text-[#242D36]'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Hero Title & Subtle Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 text-xs font-accent tracking-[0.24em] uppercase text-[#59212C] font-semibold mb-3"
            >
              <span className="w-5 h-[1.5px] bg-[#59212C]" />
              <span>THE ARCHITECTURAL PORTFOLIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.06] text-[#242D36] tracking-tight"
            >
              Spaces crafted for <br />
              <span className="italic font-light text-[#59212C]">quiet generations.</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#242D36]/75 font-light leading-relaxed"
            >
              Every project starts with the same question: what is it actually like to live here? That question shapes everything — the layout, where light falls, the details most people never consciously notice but feel every single day.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Expressive Projects Showcase */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 sm:py-24 space-y-28 sm:space-y-36">
        {filteredProjects.map((project, pIdx) => {
          return (
            <ProjectShowcaseBlock
              key={project.id}
              project={project}
              index={pIdx}
              onExploreProject={() => {
                const found = BRAND_CONFIG.projects.find((p) => p.id === project.id);
                if (found) onExploreProject(found);
              }}
              onOpenEnquiry={() => onOpenEnquiry(project.name)}
            />
          );
        })}
      </main>

      {/* Bottom Expressive Conversation Banner */}
      <section className="relative z-10 border-t border-[#242D36]/12 bg-[#DCD5C3]/40 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-accent uppercase tracking-[0.26em] text-[#59212C] font-semibold">
            PERSONAL DIALOGUE · DIRECT ACCESS
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#242D36] font-normal tracking-tight">
            Curious about what it feels like to live in a MAKE home?
          </h2>
          <p className="text-base sm:text-lg text-[#242D36]/75 font-light max-w-xl mx-auto leading-relaxed">
            Our founders Gautham, Anish, and Sidharth answer every conversation personally. No brokers, no automated scripts.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#59212C] text-[#E0D9C9] hover:bg-[#431821] text-xs font-accent uppercase tracking-[0.16em] font-medium rounded-full shadow-md transition-colors cursor-pointer min-h-[48px]"
            >
              <span>Begin a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Expressive individual project block with interactive filmic gallery and parallax
const ProjectShowcaseBlock: React.FC<{
  project: {
    id: string;
    number: string;
    name: string;
    tagline: string;
    status: string;
    location: string;
    orientation: string;
    year: string;
    heroImage: string;
    gallery: Array<{ image: string; caption: string }>;
    essence: string;
    metrics: Array<{ label: string; value: string }>;
  };
  index: number;
  onExploreProject: () => void;
  onOpenEnquiry: () => void;
}> = ({ project, index, onExploreProject, onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);
  const photoY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const activePhoto = project.gallery[activeImageIdx] || project.gallery[0];

  return (
    <article
      ref={containerRef}
      id={project.id}
      className="scroll-mt-28 space-y-10"
    >
      {/* Top Project Label Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#242D36]/15">
        <div className="flex items-center gap-3.5">
          <span className="font-mono text-sm tracking-widest text-[#59212C] font-semibold">
            {project.number}
          </span>
          <span className="w-4 h-px bg-[#242D36]/25" />
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#242D36] tracking-tight">
            {project.name}
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs font-accent tracking-wider uppercase text-[#242D36]/65">
          <span>{project.location}</span>
          <span>•</span>
          <span className="text-[#59212C] font-semibold">{project.status}</span>
        </div>
      </div>

      {/* Main Photographic Stage (Large Filmic Frame) */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-xl group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhoto.image}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <motion.img
              src={activePhoto.image}
              alt={activePhoto.caption}
              style={{ scale: photoScale, y: photoY }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Tactile Noise Texture */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Gradient Scrim for Bottom Caption */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Caption & Perspective Switcher Bar */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-md">
                <span className="text-[10px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/75 block mb-1">
                  VIEW {activeImageIdx + 1} OF {project.gallery.length}
                </span>
                <p className="font-serif-display text-base sm:text-lg text-white font-normal italic">
                  “{activePhoto.caption}”
                </p>
              </div>

              {/* Thumbnail Selector Dots */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shrink-0 self-start sm:self-auto">
                {project.gallery.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveImageIdx(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeImageIdx === dotIdx ? 'bg-[#E0D9C9] w-6' : 'bg-white/40 hover:bg-white/70 w-2'
                    }`}
                    aria-label={`Switch to perspective ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Expressive Triple-Pillar Story Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
        {/* Left: Core Essence Quote */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-serif-display text-xl sm:text-2xl text-[#242D36] font-normal leading-relaxed italic">
            “{project.tagline}”
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#242D36]/80 font-light leading-relaxed">
            {project.essence}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreProject}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#59212C] text-[#E0D9C9] hover:bg-[#431821] text-xs font-accent uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer shadow-xs"
            >
              <span>Explore Overview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#242D36]/25 hover:border-[#59212C] hover:text-[#59212C] text-xs font-accent uppercase tracking-[0.16em] transition-colors cursor-pointer"
            >
              <span>Enquire</span>
            </button>
          </div>
        </div>

        {/* Right: Architectural Specifics (Metrics) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((m, mIdx) => (
            <div
              key={mIdx}
              className="p-4 sm:p-5 rounded-xl bg-[#E5DFD0]/60 border border-[#242D36]/10 flex flex-col justify-between"
            >
              <span className="text-[11px] font-accent uppercase tracking-[0.18em] text-[#59212C] font-semibold block mb-2">
                {m.label}
              </span>
              <span className="font-serif-display text-base sm:text-lg text-[#242D36] font-normal leading-snug">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
