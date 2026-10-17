import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Sun,
  Compass,
  Layers,
  Wind,
  Clock,
  Sparkles,
  BookOpen,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { MakeEmblem } from '../components/MakeLogo';

import morningRitualBreakfast from '../assets/images/morning_ritual_breakfast_1791013841349.jpg';
import architecturalResidence from '../assets/images/architectural_residence_1791013875636.jpg';
import solitudeQuietCorner from '../assets/images/solitude_quiet_corner_1791013863623.jpg';
import connectionLivingTerrace from '../assets/images/connection_living_terrace_1791013851990.jpg';

interface PhilosophyPageProps {
  onNavigateHome: () => void;
  onOpenEnquiry: () => void;
  onNavigateProjects?: () => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({
  onNavigateHome,
  onOpenEnquiry,
  onNavigateProjects,
}) => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // Five chronological narrative chapters detailing how MAKE thinks and builds
  const storyChapters = [
    {
      id: 'chapter-1',
      index: '01',
      timeCode: '07:00 AM · DAWN AWAKENING',
      chapterTitle: 'The Sequence Begins Inside',
      subtitle: 'Why we plan the life before drawing the perimeter walls',
      story: [
        'Most modern residential buildings begin with the site boundary: maximizing saleable square feet and subdividing floor plates into tight corridors.',
        'At MAKE, we invert this process completely. Before a single wall is placed, we script an ordinary morning: where does the first light strike when you pour tea? Where will conversations gather without echoing? The floor plan is simply the consequence of lived moments.',
      ],
      quote: '“A home is not an envelope you inhabit; it is a choreography of ordinary human moments.”',
      image: morningRitualBreakfast,
      alt: 'Morning sunlight pooling softly across oak table and tea',
      insights: [
        { title: 'Solar Orientation', desc: 'Living zones angled to receive low morning sun without midday glare.' },
        { title: 'Hallway Elimination', desc: 'Thresholds designed so every room connects directly to open daylight.' },
        { title: 'Thermal Comfort', desc: 'Cross-breeze paths that cool the kitchen naturally without continuous AC.' },
      ],
      lesson: 'Architecture is shaped by human ritual, not boundary lines.',
    },
    {
      id: 'chapter-2',
      index: '02',
      timeCode: '12:30 PM · MONSOON MIDDAY',
      chapterTitle: 'Nothing Without Purpose',
      subtitle: 'Rejecting cosmetic ornamentation in favor of functional craft',
      story: [
        'We believe architectural honesty creates deep peace. When you walk through a home, your body instinctively detects artificial veneers, faux crown moldings, and plastic coatings.',
        'Every structural gesture at MAKE has a physical job to accomplish: 900mm stone overhangs that deflect monsoon downpours while cooling the rooms below, and porous wire-cut terracotta that breathes naturally in South Indian humidity.',
      ],
      quote: '“If an element does not make everyday living more serene or resilient, it does not belong.”',
      image: architecturalResidence,
      alt: 'Honest architectural residence with deep verandas and open courtyard',
      insights: [
        { title: '900mm Eaves', desc: 'Deep eaves that shade windows from noon glare and heavy rains.' },
        { title: 'Breathable Masonry', desc: 'Raw clay and lime mortars that moderate ambient humidity.' },
        { title: 'Enduring Patina', desc: 'Native stone and solid teak that deepen in beauty over decades.' },
      ],
      lesson: 'True luxury is physical performance and material integrity.',
    },
    {
      id: 'chapter-3',
      index: '03',
      timeCode: '04:15 PM · AFTERNOON TRANQUILITY',
      chapterTitle: 'Spaces for Solitude and Sound',
      subtitle: 'Designing quiet corners in a bustling metropolis',
      story: [
        'Bengaluru is vibrant, energetic, and frequently noisy. When you close your door, your home should feel like an acoustic haven of quiet dignity.',
        'We shape thick solid-wood window benches proportioned for afternoon reading, and organize interior rooms around private buffer courtyards that dampen traffic noise by up to 18 decibels while keeping the sound of rain.',
      ],
      quote: '“A room with a deep window sill gives you a quiet reason to pause and breathe.”',
      image: solitudeQuietCorner,
      alt: 'Quiet window reading sill bathed in soft natural light and tree canopy',
      insights: [
        { title: '350mm Deep Sills', desc: 'Solid wood benches positioned precisely to frame green garden foliage.' },
        { title: 'Acoustic Buffering', desc: 'Courtyard walls that absorb external bustle while retaining natural ambient sounds.' },
        { title: 'Light Diffusion', desc: 'Lime-washed surfaces that softly bounce afternoon light into inner reading nooks.' },
      ],
      lesson: 'Solitude is a deliberate architectural achievement.',
    },
    {
      id: 'chapter-4',
      index: '04',
      timeCode: '07:30 PM · EVENING GATHERING',
      chapterTitle: 'Thresholds That Bring People Close',
      subtitle: 'Creating effortless togetherness without sacrificing privacy',
      story: [
        'A family needs both retreat and connection. In homes with fragmented cubicle rooms, people isolate; in harsh open-plan spaces, noise carries and privacy vanishes.',
        'We engineer subtle architectural transitions: gentle level shifts, wide sliding timber screens, and semi-open kitchen hearths where one can cook while remaining part of the conversation on the terrace.',
      ],
      quote: '“Walls should give protection without confinement; doors should welcome rather than barricade.”',
      image: connectionLivingTerrace,
      alt: 'Warm open living room connected seamlessly to dining and garden terrace',
      insights: [
        { title: 'Visual Connections', desc: 'Sightlines connecting living spaces to gardens without exposing private bedrooms.' },
        { title: 'Flexible Thresholds', desc: 'Pocketing timber louvers that adapt rooms for intimate evenings or family dinners.' },
        { title: 'Courtyard Anchoring', desc: 'The central hearth that unifies family members under one shared canopy.' },
      ],
      lesson: 'Connection flourishes when architecture removes spatial friction.',
    },
  ];

  const currentStory = storyChapters[activeStoryIdx];

  return (
    <div className="w-full pt-32 pb-24 paper-grain plaster-surface select-none bg-[#E0D9C9] text-[#242D36] min-h-screen">
      {/* Background Subtle Emblem Watermark */}
      <div
        className="fixed -right-24 bottom-12 pointer-events-none opacity-[0.025] hidden lg:block z-0 select-none"
        aria-hidden="true"
      >
        <MakeEmblem fill="#242D36" className="w-[580px] h-auto aspect-[100/120]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Narrative Folio Header */}
        <header className="border-b border-[#242D36]/15 pb-10 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-[#59212C]" />
            <span>HOW WE THINK & BUILD</span>
            <span className="w-6 h-px bg-[#242D36]/20 hidden sm:inline-block" />
            <span className="text-[#242D36]/60 hidden sm:inline-block">THE CHRONICLE OF CARE</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#242D36] tracking-tight mb-5 leading-[1.08]">
            Architecture written as a <br />
            <span className="italic font-light text-[#59212C]">daily story.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#242D36]/80 font-light max-w-3xl leading-relaxed">
            Every building tells a story about what its makers prioritized. Here is an honest, chapter-by-chapter chronicle of the architectural decisions that shape everyday life in a MAKE home.
          </p>
        </header>

        {/* Interactive Story Timeline Chapter Selector */}
        <div className="mb-14 sm:mb-18 pb-6 border-b border-[#242D36]/12 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 min-w-max">
            {storyChapters.map((chap, idx) => {
              const isActive = activeStoryIdx === idx;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`group text-left px-5 py-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#59212C] text-[#E0D9C9] border-[#59212C] shadow-sm'
                      : 'bg-[#E5DFD0]/60 text-[#242D36] border-[#242D36]/15 hover:bg-[#E5DFD0] hover:border-[#242D36]/30'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1 text-[10px] font-accent tracking-widest uppercase">
                    <span
                      className={`font-mono font-semibold ${
                        isActive ? 'text-[#E0D9C9]' : 'text-[#59212C]'
                      }`}
                    >
                      CHAPTER {chap.index}
                    </span>
                    <span className="opacity-40">•</span>
                    <span className={isActive ? 'text-[#E0D9C9]/80' : 'text-[#242D36]/60'}>
                      {chap.timeCode.split('·')[0]}
                    </span>
                  </div>
                  <div className="font-serif-display text-sm sm:text-base font-normal leading-snug">
                    {chap.chapterTitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Narrative Showcase (Story-Driven Spread) */}
        <AnimatePresence mode="wait">
          <motion.article
            key={currentStory.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 sm:space-y-16"
          >
            {/* Main Stage: Photo and Narrative Lead */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Visual Scene */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-xl group">
                  <img
                    src={currentStory.image}
                    alt={currentStory.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Noise Texture */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

                  {/* Time Stamp Ribbon */}
                  <div className="absolute top-4 left-4 bg-[#E0D9C9]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#242D36]/15 text-[10px] font-accent uppercase tracking-widest text-[#59212C] font-semibold shadow-xs">
                    {currentStory.timeCode}
                  </div>

                  {/* In-Frame Lesson Tag */}
                  <div className="absolute bottom-4 left-5 right-5 text-white flex items-center justify-between text-xs">
                    <span className="font-serif-display italic text-sm text-[#E0D9C9]/95">
                      {currentStory.lesson}
                    </span>
                    <span className="font-mono text-[11px] opacity-75">
                      CH. 0{activeStoryIdx + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative & Insight */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-accent uppercase tracking-[0.2em] text-[#59212C] font-semibold mb-2">
                    <span>CHAPTER 0{activeStoryIdx + 1}</span>
                    <span>•</span>
                    <span>{currentStory.timeCode.split('·')[1]}</span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-4xl text-[#242D36] font-normal tracking-tight leading-tight mb-2">
                    {currentStory.chapterTitle}
                  </h2>

                  <p className="font-accent text-xs sm:text-sm uppercase tracking-wider text-[#242D36]/65">
                    {currentStory.subtitle}
                  </p>
                </div>

                {/* Primary Story Text */}
                <div className="space-y-4 text-[15px] sm:text-[16px] text-[#242D36]/80 font-light leading-relaxed">
                  {currentStory.story.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Core Thought Quote */}
                <div className="border-l-2 border-[#59212C] pl-4 py-1">
                  <p className="font-serif-display text-base sm:text-lg text-[#59212C] italic leading-snug">
                    {currentStory.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Informative Architectural Reality Ledger (Deep Technical & Spatial Insights) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#E5DFD0]/70 border border-[#242D36]/12 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#242D36]/10 pb-3">
                <span className="text-[11px] font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold">
                  ARCHITECTURAL EXECUTION · HOW THIS PRINCIPLE BECOMES PHYSICAL
                </span>
                <span className="text-xs text-[#242D36]/50 font-mono">
                  FIELD NOTE 0{activeStoryIdx + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentStory.insights.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#59212C]" />
                      <h4 className="font-accent text-xs uppercase tracking-wider text-[#242D36] font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[13.5px] text-[#242D36]/75 font-light leading-relaxed pl-3.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter Stepper Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#242D36]/12 text-xs font-accent">
              <button
                disabled={activeStoryIdx === 0}
                onClick={() => setActiveStoryIdx((prev) => Math.max(0, prev - 1))}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                  activeStoryIdx === 0
                    ? 'opacity-30 cursor-not-allowed'
                    : 'text-[#242D36] hover:text-[#59212C] hover:bg-[#242D36]/5'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Chapter</span>
              </button>

              <span className="font-mono text-[#242D36]/50 tracking-widest">
                0{activeStoryIdx + 1} / 0{storyChapters.length}
              </span>

              <button
                disabled={activeStoryIdx === storyChapters.length - 1}
                onClick={() =>
                  setActiveStoryIdx((prev) => Math.min(storyChapters.length - 1, prev + 1))
                }
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                  activeStoryIdx === storyChapters.length - 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'text-[#242D36] hover:text-[#59212C] hover:bg-[#242D36]/5'
                }`}
              >
                <span>Next Chapter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Distinctive Contextual Action Banner in Brand Forest & Limestone */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#232F24] text-[#E0D9C9] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-accent uppercase tracking-[0.24em] text-[#E0D9C9]/60 font-semibold">
              EXPERIENCE THE HOMES
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal leading-tight">
              See these principles realized in brick and stone.
            </h3>
            <p className="text-[#E0D9C9]/80 text-sm sm:text-base font-light">
              Visit Make Sampigehalli and Make Borough in person.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigateProjects && (
              <button
                onClick={onNavigateProjects}
                className="px-7 py-3 bg-[#E0D9C9] text-[#232F24] hover:bg-white text-xs font-accent uppercase tracking-[0.16em] font-semibold rounded-full shadow-sm transition-colors cursor-pointer min-h-[44px]"
              >
                <span>View Residences</span>
              </button>
            )}

            <button
              onClick={onOpenEnquiry}
              className="px-7 py-3 border border-[#E0D9C9]/40 hover:border-white text-xs font-accent uppercase tracking-[0.16em] font-semibold text-[#E0D9C9] rounded-full transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Speak to Builders</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
