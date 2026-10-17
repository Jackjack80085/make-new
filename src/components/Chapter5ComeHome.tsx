import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MakeEmblem, MakeLogo } from './MakeLogo';

interface Chapter5Props {
  onStartConversation: () => void;
}

export const Chapter5ComeHome: React.FC<Chapter5Props> = ({ onStartConversation }) => {
  return (
    <section
      id="come-home"
      className="relative w-full bg-[#59212C] text-[#E0D9C9] py-20 md:py-28 lg:py-32 overflow-hidden select-none"
      aria-label="Chapter 05: Come Home"
    >
      {/* Burgundy Tactile Paper Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-35 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='burgundyNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23burgundyNoise)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Oversized MAKE Logo Watermark Impression in Background */}
      <div
        className="absolute -right-16 md:-right-8 lg:right-6 top-8 lg:top-12 pointer-events-none opacity-[0.08] hidden md:block z-0"
        aria-hidden="true"
      >
        <MakeEmblem fill="#E0D9C9" className="w-[340px] lg:w-[460px] h-auto aspect-[100/120]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Chapter 5 Header & Content */}
        <div className="reveal-on-scroll">
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#E0D9C9]/80 font-accent mb-12">
            <span>05 / COME HOME</span>
            <span className="w-8 h-px bg-[#E0D9C9]/40" />
            <span>A CONVERSATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Action */}
            <div className="lg:col-span-7">
              {/* Approved Heading: “Tell us what home means to you.” */}
              <h2
                className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.04] text-[#E0D9C9] tracking-tight mb-8"
                style={{ textWrap: 'balance' }}
              >
                Tell us what
                <br />
                <span className="italic font-light opacity-95">home means to you.</span>
              </h2>

              {/* Approved Supporting line: “We would be glad to hear.” (18px+) */}
              <p className="text-[18px] sm:text-xl md:text-2xl text-[#E0D9C9]/90 font-light leading-relaxed mb-10 max-w-xl">
                We would be glad to hear.
              </p>

              {/* Approved CTA: “Say hello” with rounded-full, min-h: 48-52px */}
              <motion.button
                whileHover={{ y: -2, backgroundColor: '#FFFFFF' }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartConversation}
                className="group inline-flex items-center gap-4 bg-[#E0D9C9] text-[#59212C] px-8 py-4 text-xs md:text-sm tracking-[0.18em] uppercase font-semibold transition-colors duration-200 min-h-[48px] rounded-full shadow-lg relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0D9C9]"
              >
                <span>Say hello</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* Right Column: Prominent MAKE Logo Seal (Directly where requested) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-sm p-8 sm:p-10 rounded-3xl border border-[#E0D9C9]/25 bg-[#E0D9C9]/[0.06] backdrop-blur-md shadow-2xl flex flex-col items-center text-center group overflow-hidden"
              >
                {/* Architectural Corner Alignment Marks */}
                <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#E0D9C9]/40 pointer-events-none" />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#E0D9C9]/40 pointer-events-none" />
                <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#E0D9C9]/40 pointer-events-none" />
                <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#E0D9C9]/40 pointer-events-none" />

                {/* Subtle Radial Atmosphere */}
                <div className="absolute inset-0 bg-radial-gradient from-[#E0D9C9]/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

                {/* Kicker Tag */}
                <span className="text-[10px] tracking-[0.26em] uppercase text-[#E0D9C9]/70 font-accent mb-6">
                  ARCHITECTURAL ATELIER
                </span>

                {/* The Faithful MAKE Logo: Arch Emblem & Canonical Typography */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] mb-4 transform transition-transform duration-500 group-hover:scale-105 flex justify-center">
                  <MakeLogo variant="limestone" size="lg" className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]" />
                </div>

                {/* Craftsmanship Baseline */}
                <div className="mt-8 pt-5 border-t border-[#E0D9C9]/20 w-full flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#E0D9C9]/65 font-accent">
                  <span>BENGALURU</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E0D9C9]/40" />
                  <span>HOMES BUILT WITH CARE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
