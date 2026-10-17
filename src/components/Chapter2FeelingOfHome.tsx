import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MakeEmblem } from './MakeLogo';
import { Sparkles } from 'lucide-react';

import domesticDetailReading from '../assets/images/domestic_detail_reading_1791013828318.jpg';
import morningRitualBreakfast from '../assets/images/morning_ritual_breakfast_1791013841349.jpg';
import connectionLivingTerrace from '../assets/images/connection_living_terrace_1791013851990.jpg';

interface Chapter2Props {
  onNavigatePhilosophy?: () => void;
  onNavigateProjects?: () => void;
  onNavigateAbout?: () => void;
}

export const Chapter2FeelingOfHome: React.FC<Chapter2Props> = () => {
  const [activeLens, setActiveLens] = useState(0);

  const perspectives = [
    {
      id: 'corner',
      num: '01',
      title: 'A familiar corner',
      subtitle: 'Quiet pauses & morning tea',
      detail: 'Deep solid timber sills crafted to hold a warm cup while the street awakens.',
      image: domesticDetailReading,
      alt: 'Quiet domestic reading corner bathed in gentle morning light',
      caption: 'Light resting on oak and open books',
    },
    {
      id: 'light',
      num: '02',
      title: 'Light through a window',
      subtitle: 'Natural daylit rhythm',
      detail: 'Morning light sweeping across the breakfast table, shifting naturally as the day begins.',
      image: morningRitualBreakfast,
      alt: 'Morning sunlight illuminating a dining and breakfast table',
      caption: 'Sunlight sweeping across shared timber',
    },
    {
      id: 'together',
      num: '03',
      title: 'Space for people you love',
      subtitle: 'Unrushed conversation',
      detail: 'Generous thresholds and open living where conversations carry on naturally.',
      image: connectionLivingTerrace,
      alt: 'Warm domestic living space with natural materials and open flow',
      caption: 'Living spaces opening quietly to terrace and air',
    },
  ];

  const current = perspectives[activeLens];

  return (
    <section
      id="feeling-of-home"
      className="relative bg-[#E0D9C9] text-[#242D36] pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Seamless Hero-to-Limestone Blend Gradient at the top */}
      <div
        className="absolute top-0 inset-x-0 h-32 sm:h-44 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(36,45,54,0.18) 0%, rgba(36,45,54,0.06) 40%, rgba(224,217,201,0) 100%)',
        }}
      />

      {/* Tactile Limestone Plaster Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='limestoneGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23limestoneGrain)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Delicate Architectural Drafting Grid Line Blend */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#242D36_1px,transparent_1px),linear-gradient(to_bottom,#242D36_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.025] pointer-events-none z-0" />

      {/* Subtle Logo Texture (2-3% opacity, static, pointer-events: none, aria-hidden) */}
      <div
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[340px] md:w-[480px] lg:w-[560px] opacity-[0.028] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <MakeEmblem className="w-full h-auto text-[#242D36]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">
          {/* Left Column: Brand Statement & Compact Moments Selector (No CTAs, Pure Editorial) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              {/* Eyebrow Brand Line */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-5 h-[1.5px] bg-[#59212C]/60" />
                <span className="text-[11px] sm:text-xs font-accent uppercase tracking-[0.22em] text-[#59212C] font-semibold">
                  Thoughtful living, carefully built.
                </span>
              </div>

              {/* Exact Canonical Heading */}
              <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] text-[#242D36] leading-[1.18] tracking-tight mb-3">
                Some things can’t be measured in square feet.
              </h2>

              {/* Exact Canonical Body */}
              <p className="text-[16.5px] sm:text-[17.5px] lg:text-[18px] leading-[1.65] text-[#242D36]/80 font-light">
                The comfort of a familiar corner. Light through a window. Space for the people you love. We begin with everyday life, and let that shape what we build.
              </p>
            </div>

            {/* Compact Interactive Realities Selector */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] sm:text-[11px] font-accent uppercase tracking-[0.2em] text-[#59212C] font-semibold flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#59212C]" />
                <span>Everyday Realities</span>
              </div>

              <div className="space-y-2">
                {perspectives.map((item, idx) => {
                  const isActive = activeLens === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveLens(idx)}
                      className={`w-full text-left p-3 sm:p-3.5 rounded-xl transition-all duration-300 border flex items-center justify-between gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-[#E5DFD0] border-[#59212C]/40 shadow-xs'
                          : 'bg-transparent border-[#242D36]/10 hover:bg-[#E5DFD0]/40 hover:border-[#242D36]/20'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-accent font-medium shrink-0 transition-colors ${
                              isActive
                                ? 'bg-[#59212C] text-[#E0D9C9]'
                                : 'bg-[#242D36]/10 text-[#242D36]/60'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span className="font-serif-display text-base sm:text-lg text-[#242D36]">
                            {item.title}
                          </span>
                        </div>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.25 }}
                            className="text-[12.5px] sm:text-[13px] text-[#242D36]/75 font-light leading-relaxed pl-7 pt-1"
                          >
                            {item.detail}
                          </motion.p>
                        )}
                      </div>

                      <span
                        className={`text-[10px] font-accent uppercase tracking-wider shrink-0 px-2 py-1 rounded-full border transition-colors ${
                          isActive
                            ? 'bg-[#59212C]/10 text-[#59212C] border-[#59212C]/20'
                            : 'text-[#242D36]/40 border-transparent'
                        }`}
                      >
                        {item.num}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subtle Architectural Registry Note (Understated, non-intrusive) */}
            <div className="pt-2 flex items-center gap-3 text-[11px] font-accent uppercase tracking-[0.2em] text-[#242D36]/45">
              <span className="w-1.5 h-1.5 rounded-full bg-[#59212C]/50" />
              <span>SPATIAL CONVERSATION · 01 / OVERTURE</span>
            </div>
          </div>

          {/* Right Column: Proportional Photographic Frame that Fits in the Section */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={current.image}
                    alt={current.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    loading="lazy"
                  />

                  {/* Noise Texture */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Gradient Scrim for Bottom Caption */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                  {/* Architectural Caption Ribbon */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex items-end justify-between gap-4 text-white">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/80 block mb-0.5">
                        {current.subtitle}
                      </span>
                      <h4 className="font-serif-display text-lg sm:text-xl lg:text-2xl text-white font-normal italic">
                        “{current.caption}”
                      </h4>
                    </div>

                    {/* Integrated Dot Switchers */}
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/10 shrink-0">
                      {perspectives.map((_, idx) => (
                        <button
                          key={`dot-${idx}`}
                          onClick={() => setActiveLens(idx)}
                          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                            activeLens === idx
                              ? 'bg-[#E0D9C9] w-5'
                              : 'bg-white/40 hover:bg-white/70'
                          }`}
                          aria-label={`Switch to moment ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
