import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Compass, Sun, Layers } from 'lucide-react';
import { BRAND_CONFIG, ProjectData } from '../config/brand';
import { MakeEmblem } from './MakeLogo';

interface Chapter4Props {
  onExploreProject: (project: ProjectData) => void;
}

export const Chapter4PlaceToBelong: React.FC<Chapter4Props> = ({ onExploreProject }) => {
  const projects = BRAND_CONFIG.projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Curated architectural craft notes for each project to fill space elegantly
  const projectCraftNotes: Record<
    string,
    {
      architecturalThought: string;
      highlights: Array<{ label: string; value: string }>;
    }
  > = {
    'make-sampigehalli': {
      architecturalThought:
        'Conceived around calibrated seasonal daylight and garden thresholds. Living spaces expand into shaded verandas, creating natural thermal comfort without artificial isolation.',
      highlights: [
        { label: 'Spatial Flow', value: 'Private hearths opening to shared courtyards' },
        { label: 'Materiality', value: 'Hand-hewn limestone, native stone & seasoned timber' },
        { label: 'Living Focus', value: 'Generous domestic scale shaped for quiet privacy' },
      ],
    },
    'make-borough': {
      architecturalThought:
        'The foundational project where MAKE principles were realized in tactile masonry and joinery. Every threshold was built with personal custody of every pour, now home to thriving families.',
      highlights: [
        { label: 'Craft Custody', value: 'Direct founder oversight from foundation to key handover' },
        { label: 'Atmosphere', value: 'Warm natural light, quiet rooms & enduring joinery' },
        { label: 'Community', value: 'Completed residential community in central Bengaluru' },
      ],
    },
  };

  const currentCraft = projectCraftNotes[activeProject.id] || projectCraftNotes['make-sampigehalli'];

  return (
    <section
      id="a-place-to-belong"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[920px] bg-[#E0D9C9] text-[#242D36] paper-grain plaster-surface flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 lg:py-7 overflow-hidden select-none"
      aria-label="Chapter 04: A Place to Belong"
    >
      {/* Subtle Upper Hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#242D36]/10 max-w-7xl mx-auto px-6" />

      {/* Background Architectural Emblem Impression */}
      <div
        className="absolute -right-12 bottom-6 w-96 h-96 opacity-[0.025] pointer-events-none select-none z-0 hidden lg:block"
        aria-hidden="true"
      >
        <MakeEmblem className="w-full h-full text-[#242D36]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between my-auto">
        {/* Compact, Soothing Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 mb-5 sm:mb-6 border-b border-[#242D36]/12">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] tracking-[0.24em] uppercase text-[#59212C] font-accent font-semibold mb-1.5">
              <span>04 / A PLACE TO BELONG</span>
              <span className="w-4 h-px bg-[#59212C]/40" />
              <span className="text-[#242D36]/60">OUR WORK</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] text-[#242D36] tracking-tight">
              Find your <span className="italic font-light text-[#59212C]">kind of home.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-[14.5px] text-[#242D36]/75 font-light leading-relaxed">
            Every project begins with a simple question: what is it actually like to live here? The answer shapes every detail you come to know over time.
          </p>
        </div>

        {/* Focused, Screen-Fitting Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Visual Asset (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] lg:aspect-[16/10] rounded-xl overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-md group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Noise Texture */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pn)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* Clean Bottom Stamp */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-accent uppercase tracking-wider">
                    <span>{activeProject.location}</span>
                    <span className="opacity-75 font-mono">
                      0{currentIndex + 1} / 0{projects.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Status Pill Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#E0D9C9]/95 backdrop-blur-sm px-3.5 py-1 rounded-full border border-[#242D36]/15 text-[10px] sm:text-[11px] font-accent tracking-[0.16em] text-[#59212C] font-semibold uppercase shadow-xs">
                {activeProject.status}
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="mt-3.5 pt-3 border-t border-[#242D36]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border border-[#242D36]/20 hover:border-[#59212C] hover:text-[#59212C] bg-[#E0D9C9] text-[#242D36] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Previous home project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border border-[#242D36]/20 hover:border-[#59212C] hover:text-[#59212C] bg-[#E0D9C9] text-[#242D36] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Next home project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-accent">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-colors uppercase tracking-[0.18em] py-1 cursor-pointer ${
                      currentIndex === idx
                        ? 'text-[#59212C] font-semibold border-b border-[#59212C]'
                        : 'text-[#242D36]/40 hover:text-[#242D36]'
                    }`}
                  >
                    0{idx + 1} {p.name.replace('Make ', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Fully Balanced Editorial Column with Rich Architectural Substance (5 Cols) */}
          <div className="lg:col-span-5 bg-[#E5DFD0]/70 backdrop-blur-xs border border-[#242D36]/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-[11px] font-accent uppercase tracking-wider text-[#242D36]/60 pb-2.5 border-b border-[#242D36]/10">
                  <span>RESIDENTIAL PRACTICE</span>
                  <span className="text-[#59212C] font-semibold">{activeProject.status}</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#242D36] font-normal tracking-tight mb-1">
                    {activeProject.name}
                  </h3>
                  <p className="font-serif-display text-sm sm:text-base italic text-[#59212C] font-normal">
                    “{activeProject.tagline}”
                  </p>
                </div>

                {/* Architectural Thought Reflection */}
                <p className="text-[13.5px] sm:text-[14px] text-[#242D36]/80 font-light leading-relaxed">
                  {currentCraft.architecturalThought}
                </p>

                {/* Structured Architectural Highlights that comfortably fill the space */}
                <div className="py-3 px-3.5 rounded-lg bg-[#E0D9C9]/60 border border-[#242D36]/10 space-y-2">
                  <span className="text-[10px] font-accent uppercase tracking-[0.2em] text-[#59212C] font-semibold block">
                    Architectural Details
                  </span>
                  <div className="space-y-1.5">
                    {currentCraft.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start justify-between gap-3 text-[12px]">
                        <span className="font-accent uppercase tracking-[0.14em] text-[#242D36]/55 shrink-0">
                          {item.label}
                        </span>
                        <span className="text-[#242D36]/90 font-light text-right">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location & Status Line */}
                <div className="pt-2 border-t border-[#242D36]/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-accent uppercase tracking-[0.16em] text-[#242D36]/50 text-[11px]">
                      Location:
                    </span>
                    <span className="text-[#242D36] font-medium text-[12.5px]">
                      {activeProject.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-accent uppercase tracking-[0.16em] text-[#242D36]/50 text-[11px]">
                      Status:
                    </span>
                    <span className="text-[#59212C] font-medium text-[12.5px]">
                      {activeProject.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Button */}
            <div className="pt-4 border-t border-[#242D36]/10 mt-4">
              <button
                onClick={() => onExploreProject(activeProject)}
                className="w-full inline-flex items-center justify-between px-6 py-3 bg-[#59212C] text-[#E0D9C9] hover:bg-[#431821] transition-colors text-xs font-accent uppercase tracking-[0.16em] font-medium rounded-full shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]"
              >
                <span>View project overview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
