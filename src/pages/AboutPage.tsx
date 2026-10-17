import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MoveHorizontal,
} from 'lucide-react';
import { MakeEmblem } from '../components/MakeLogo';

// Filmic architectural photography
import architecturalSketch from '../assets/images/architectural_sketch_bespoke_1792165890151.jpg';
import envisionedBespokeHome from '../assets/images/envisioned_bespoke_home_1792166097774.jpg';
import foundersDesignTable from '../assets/images/founders_design_table_1792166121676.jpg';
import brandBornResidence from '../assets/images/brand_born_residence_1792166141880.jpg';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenEnquiry: () => void;
  onNavigateProjects?: () => void;
}

interface ChapterMeta {
  index: string;
  id: string;
  title: string;
}

const CHAPTERS: ChapterMeta[] = [
  { index: '01', id: 'hero', title: 'Overture' },
  { index: '02', id: 'founders', title: 'The Founders' },
  { index: '03', id: 'dialogue', title: 'Dialogue' },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenEnquiry,
  onNavigateProjects,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [activeFounderIndex, setActiveFounderIndex] = useState<number>(0);
  const [horizontalProgress, setHorizontalProgress] = useState<number>(0);

  // Mouse drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  // Smooth scroll to a vertical section
  const scrollToChapter = useCallback((index: number) => {
    if (!containerRef.current) return;
    const target = document.getElementById(`section-${CHAPTERS[index].id}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Intersection observer for vertical scroll snap tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            const foundIdx = CHAPTERS.findIndex(
              (c) => `section-${c.id}` === entry.target.id
            );
            if (foundIdx !== -1) {
              setActiveChapter(foundIdx);
            }
          }
        });
      },
      { root: container, threshold: [0.45, 0.75] }
    );

    CHAPTERS.forEach((c) => {
      const el = document.getElementById(`section-${c.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Horizontal scroll progress & active card calculation
  useEffect(() => {
    const el = horizontalScrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
      setHorizontalProgress(progress);

      const cards = el.querySelectorAll('[data-founder-card]');
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDiff = Infinity;

      cards.forEach((card, i) => {
        const htmlCard = card as HTMLElement;
        const cardCenter = htmlCard.offsetLeft + htmlCard.offsetWidth / 2;
        const diff = Math.abs(center - cardCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closest = i;
        }
      });

      setActiveFounderIndex(closest);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Translate vertical wheel into horizontal glide inside the founders section
  useEffect(() => {
    const el = horizontalScrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 10;
        const canScrollLeft = el.scrollLeft > 10;

        if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 1.3, behavior: 'auto' });
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Programmatic slide to specific founder
  const scrollToFounder = (index: number) => {
    const el = horizontalScrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-founder-card]');
    if (cards[index]) {
      const target = cards[index] as HTMLElement;
      el.scrollTo({
        left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
        behavior: 'smooth',
      });
    }
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!horizontalScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - horizontalScrollRef.current.offsetLeft);
    setInitialScrollLeft(horizontalScrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !horizontalScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - horizontalScrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    horizontalScrollRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeChapter < CHAPTERS.length - 1) {
          e.preventDefault();
          scrollToChapter(activeChapter + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeChapter > 0) {
          e.preventDefault();
          scrollToChapter(activeChapter - 1);
        }
      } else if (e.key === 'ArrowRight' && activeChapter === 1) {
        if (activeFounderIndex < chronicleStages.length - 1) {
          e.preventDefault();
          scrollToFounder(activeFounderIndex + 1);
        }
      } else if (e.key === 'ArrowLeft' && activeChapter === 1) {
        if (activeFounderIndex > 0) {
          e.preventDefault();
          scrollToFounder(activeFounderIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeChapter, activeFounderIndex, scrollToChapter]);

  // The Chronicle of MAKE: Exactly how the idea popped, was envisioned, united 3 founders, and was born
  const chronicleStages = [
    {
      num: '01',
      stage: 'THE INITIAL SPARK',
      tag: 'HOW THE IDEA POPPED',
      title: 'Looking at the city and realizing home was missing.',
      statement:
        '“The spark popped on an ordinary Bengaluru morning. Looking at hundreds of high-rises, we saw boxes built for sales brochures—not for living. Why had morning daylight and domestic quiet been forgotten?”',
      detail: 'The realization that architecture must begin with human ritual, never with plot spreadsheets.',
      metric: 'THE INITIAL SPARK · BENGALURU',
      image: architecturalSketch,
      overlayLabel: '[EPIPHANY: ARCHITECTURE FOR LIFE]',
    },
    {
      num: '02',
      stage: 'THE PHILOSOPHY',
      tag: 'HOW IT WAS ENVISIONED',
      title: 'Architecture for a bespoke life.',
      statement:
        '“We envisioned a home designed from the inside out: breakfast bathed in natural morning light, an unhurried breeze through honest timber, and raw stone that settles quietly into everyday ritual.”',
      detail: '100% natural cross-ventilation, zero dark corridors, and permanent material truth.',
      metric: 'INSIDE OUT · 100% DAYLIGHT',
      image: envisionedBespokeHome,
      overlayLabel: '[THE BLUEPRINT: INSIDE OUT]',
    },
    {
      num: '03',
      stage: 'THE THREE MINDS',
      tag: 'HOW THREE FOUNDERS PUT THEIR IDEAS INTO IT',
      title: 'Three minds, three unyielding disciplines.',
      statement:
        '“Gautham carved the spatial voids and solar daylight paths. Anish anchored it in structural honesty, monolithic stone, and tactile permanence. Sidharth breathed domestic care, acoustic calm, and direct personal custody into every threshold.”',
      detail: 'Gautham (Light & Void) · Anish (Monolithic Structure) · Sidharth (Human Care).',
      metric: 'THE THREE FOUNDERS’ COMPACT',
      image: foundersDesignTable,
      overlayLabel: '[GAUTHAM · ANISH · SIDHARTH]',
    },
    {
      num: '04',
      stage: 'THE GENESIS',
      tag: 'HOW THE BRAND WAS BORN',
      title: 'The birth of MAKE Developers.',
      statement:
        '“In 2018, the three builders walked away from speculative developers, pooled their personal savings, and founded MAKE on one sacred rule: build fewer homes, slowly, with personal custody of every pour.”',
      detail: 'From an idea on a sketchpad to completed, lived-in homes across Bengaluru.',
      metric: 'EST. 2018 · IRON KORE PRIVATE LIMITED',
      image: brandBornResidence,
      overlayLabel: '[MAKE DEVELOPERS · EST. 2018]',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#0F1216] text-[#E0D9C9] font-body selection:bg-[#59212C] selection:text-[#E0D9C9]">
      {/* Main Snap Scroll Container */}
      <main
        ref={containerRef}
        className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth focus:outline-none"
        tabIndex={0}
      >
        {/* ========================================================================= */}
        {/* ACT 01: ELEGANT LIGHT LIMESTONE HERO SECTION                              */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* ACT 01: ELEGANT LIGHT LIMESTONE HERO SECTION                              */}
        {/* ========================================================================= */}
        <section
          id="section-hero"
          className="relative min-h-screen w-full snap-start snap-always flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-32 pb-12 bg-[#E0D9C9] text-[#242D36] border-b border-[#242D36]/15 overflow-hidden"
        >
          {/* Layer 1: Tactile Limestone Paper / Grain Texture via SVG filter */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Layer 2: Delicate Architectural Drafting Grid (48px major, 12px micro) in Brand Charcoal */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#242D36_1px,transparent_1px),linear-gradient(to_bottom,#242D36_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#242D36_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

          {/* Layer 3: Warm Architectural Sunbeam Bloom in Brand Limestone & Burgundy */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFFFFF]/70 via-[#E0D9C9]/40 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#59212C]/8 via-transparent to-transparent blur-2xl pointer-events-none" />

          {/* Layer 4: Living Architectural Logo Medallion in Brand Charcoal & Burgundy */}
          <div className="absolute right-4 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden md:flex items-center justify-center">
            {/* Ambient Animated Concentric Texture Rings in Brand Charcoal & Burgundy */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[460px] lg:w-[580px] h-[460px] lg:h-[580px] rounded-full border border-[#242D36]/[0.05] border-dashed pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[380px] lg:w-[480px] h-[380px] lg:h-[480px] rounded-full border border-[#59212C]/[0.06] pointer-events-none"
            />

            {/* Subtle Animated Logo Texture Watermark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: [0.038, 0.065, 0.038],
                scale: [1, 1.025, 1],
                y: [0, -6, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-[320px] lg:w-[440px] aspect-[332/388] flex items-center justify-center"
            >
              {/* Textured Architectural Seal Backdrop in Brand Colors */}
              <div
                className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#242D36]/[0.02] to-[#59212C]/[0.03] blur-xl"
                aria-hidden="true"
              />

              {/* The Provided Emblem with Brand Charcoal */}
              <MakeEmblem
                fill="#242D36"
                className="w-full h-full mix-blend-multiply drop-shadow-[0_20px_40px_rgba(36,45,54,0.04)]"
              />
            </motion.div>
          </div>

          {/* Subtle header stamp in Brand Burgundy & Charcoal */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-accent tracking-[0.28em] uppercase text-[#242D36]/60 border-b border-[#242D36]/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#59212C]" />
              <span className="text-[#59212C] font-semibold">BENGALURU, INDIA</span>
            </div>
            <span className="hidden sm:inline text-[#242D36]/45 font-mono">
              [EST. 2018 · IRON KORE]
            </span>
          </div>

          {/* Central Editorial Statement in Brand Typography & Colors */}
          <div className="relative z-10 my-auto max-w-4xl space-y-6">
            <span className="inline-block text-xs font-accent tracking-[0.3em] uppercase text-[#59212C] font-semibold">
              Three Builders · One Standard
            </span>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-7xl text-[#242D36] leading-[1.08] tracking-tight">
              Built by three hands.{' '}
              <span className="italic font-light text-[#59212C]">Conceived for quiet lives.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-[#242D36]/80 font-light max-w-2xl leading-relaxed">
              In 2018, Gautham, Anish, and Sidharth departed speculative developer boardrooms. They chose to build fewer homes, slowly, with personal custody of every pour.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={() => scrollToChapter(1)}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#59212C] text-[#E0D9C9] text-xs font-accent tracking-widest uppercase font-medium hover:bg-[#431821] transition-all shadow-md cursor-pointer"
              >
                <span>The Three Founders</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <span className="text-xs font-accent tracking-widest uppercase text-[#242D36]/55 hidden sm:inline">
                Scroll to slide through their visions
              </span>
            </div>
          </div>

          {/* Bottom Hairline Stamp in Brand Charcoal */}
          <div className="relative z-10 flex items-center justify-between text-xs font-accent tracking-widest uppercase text-[#242D36]/50 border-t border-[#242D36]/15 pt-4">
            <span className="font-mono text-[11px]">01 // OVERTURE</span>
            <div className="flex items-center gap-2">
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#59212C]" />
              <span className="text-[#59212C] font-semibold">EXPLORE</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ACT 02: THE CHRONICLE OF MAKE (HOW IT WAS VISIONED FROM SCRATCH & GROWN)  */}
        {/* ========================================================================= */}
        <section
          id="section-founders"
          className="relative min-h-screen w-full snap-start snap-always flex flex-col justify-center pt-24 pb-12 bg-[#12161B] overflow-hidden border-b border-[#E0D9C9]/10"
        >
          {/* Header Bar */}
          <div className="px-6 md:px-16 lg:px-24 mb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-accent tracking-[0.25em] uppercase text-[#E0D9C9]/50">
                02 // THE GENESIS OF MAKE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#E0D9C9] tracking-tight">
                How the Idea Was Born.
              </h2>
            </div>

            {/* Stepper + Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-accent tracking-widest text-[#E0D9C9]/50">
                0{activeFounderIndex + 1} / 0{chronicleStages.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    activeFounderIndex > 0 && scrollToFounder(activeFounderIndex - 1)
                  }
                  disabled={activeFounderIndex === 0}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    activeFounderIndex === 0
                      ? 'opacity-20 border-[#E0D9C9]/10 text-[#E0D9C9]'
                      : 'border-[#E0D9C9]/25 hover:border-[#E0D9C9] bg-[#161B21]'
                  }`}
                  aria-label="Previous chapter"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() =>
                    activeFounderIndex < chronicleStages.length - 1 &&
                    scrollToFounder(activeFounderIndex + 1)
                  }
                  disabled={activeFounderIndex === chronicleStages.length - 1}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    activeFounderIndex === chronicleStages.length - 1
                      ? 'opacity-20 border-[#E0D9C9]/10 text-[#E0D9C9]'
                      : 'border-[#E0D9C9]/25 hover:border-[#E0D9C9] bg-[#161B21]'
                  }`}
                  aria-label="Next chapter"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Thin Progress Line */}
          <div className="px-6 md:px-16 lg:px-24 mb-6">
            <div className="w-full h-0.5 bg-[#E0D9C9]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#59212C] transition-all duration-150"
                style={{
                  width: `${((activeFounderIndex + 1) / chronicleStages.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Horizontal Rail: Inception to Growth */}
          <div
            ref={horizontalScrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`w-full flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-16 lg:px-24 py-2 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            } [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
          >
            {chronicleStages.map((stage, idx) => (
              <div
                key={stage.num}
                data-founder-card
                className="w-[85vw] sm:w-[72vw] md:w-[58vw] lg:w-[48vw] xl:w-[42vw] shrink-0 snap-center rounded-3xl bg-[#161B21] border border-[#E0D9C9]/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl group hover:border-[#E0D9C9]/40 transition-all duration-300"
              >
                <div className="space-y-5">
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between text-xs font-accent tracking-widest uppercase text-[#E0D9C9]/50 border-b border-[#E0D9C9]/10 pb-3">
                    <span className="text-[#59212C] font-semibold">{stage.num} // {stage.stage}</span>
                    <span className="text-right">{stage.tag}</span>
                  </div>

                  {/* Clean Visual Frame */}
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden border border-[#E0D9C9]/15 bg-[#1C232B]">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover filter contrast-[1.05] grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161B21]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-xs font-accent uppercase tracking-widest text-[#E0D9C9]/90">
                      {stage.overlayLabel}
                    </div>
                  </div>

                  {/* Statement & Detail */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#E0D9C9] leading-snug">
                      {stage.title}
                    </h3>
                    <p className="font-serif italic text-xs sm:text-sm text-[#E0D9C9]/90 leading-relaxed pl-3 border-l-2 border-[#59212C]">
                      {stage.statement}
                    </p>
                    <p className="font-body text-xs text-[#E0D9C9]/65 font-light pt-1">
                      {stage.detail}
                    </p>
                  </div>
                </div>

                {/* Bottom Metric Stamp */}
                <div className="pt-4 mt-4 border-t border-[#E0D9C9]/10 flex items-center justify-between text-xs font-accent tracking-wider uppercase text-[#E0D9C9]/60">
                  <span className="text-[#E0D9C9]/90 font-medium">{stage.metric}</span>
                  <span className="text-[#59212C]">0{idx + 1} / 0{chronicleStages.length}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quiet Sideways Scroll Cue */}
          <div className="px-6 md:px-16 lg:px-24 mt-4 flex items-center justify-between text-[11px] font-accent tracking-widest uppercase text-[#E0D9C9]/40">
            <div className="flex items-center gap-2">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#E0D9C9]/60 animate-pulse" />
              <span>Slide horizontally to trace the brand&apos;s evolution</span>
            </div>
            <span>2018 — TODAY</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ACT 03: DIRECT DIALOGUE & FOUNDER ACCESS                                  */}
        {/* ========================================================================= */}
        <section
          id="section-dialogue"
          className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-[#250F14] via-[#170A0D] to-[#0F1216] overflow-hidden"
        >
          {/* Faint emblem */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[400px] h-[400px] opacity-[0.04] pointer-events-none">
            <MakeEmblem className="w-full h-full text-[#E0D9C9]" />
          </div>

          <div className="relative max-w-3xl w-full text-center flex flex-col items-center space-y-6">
            <span className="text-[11px] font-accent tracking-[0.25em] uppercase text-[#E0D9C9]/50">
              03 // DIRECT DIALOGUE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#E0D9C9] leading-tight">
              Talk directly to the builders.
            </h2>

            <p className="font-body text-sm sm:text-base text-[#E0D9C9]/75 font-light max-w-xl leading-relaxed">
              No sales brokers or call centers. Gautham, Anish, and Sidharth personally read every note and reply directly.
            </p>

            {/* Discreet Coordinates */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-accent uppercase tracking-wider text-[#E0D9C9]/60 pt-2">
              <span>Indiranagar, Bengaluru</span>
              <span>·</span>
              <span>Mon – Sat, 9:30 AM — 6:30 PM</span>
              <span>·</span>
              <span>hello@makedevelopers.com</span>
            </div>

            {/* Minimalist Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-full bg-[#E0D9C9] text-[#0F1216] text-xs font-accent uppercase tracking-widest font-medium hover:bg-white transition-all shadow-md"
              >
                Start a Conversation
              </button>

              {onNavigateProjects && (
                <button
                  onClick={onNavigateProjects}
                  className="px-6 py-3 rounded-full border border-[#E0D9C9]/30 text-[#E0D9C9] text-xs font-accent uppercase tracking-widest hover:border-[#E0D9C9] transition-all"
                >
                  Explore Our Homes
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
