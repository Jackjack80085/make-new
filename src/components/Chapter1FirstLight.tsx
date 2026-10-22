import heroSunlitHome from '../assets/images/hero_sunlit_home_1791013817349.jpg';
import React from 'react';
import { motion } from 'motion/react';

interface Chapter1Props {
  onDiscoverClick: () => void;
}

export const Chapter1FirstLight: React.FC<Chapter1Props> = ({ onDiscoverClick }) => {
  return (
    <section
      id="the-first-light"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden select-none"
      aria-label="Chapter 01: The First Light"
    >
      {/* Background Cinematic Photo with Settle Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroSunlitHome}
          alt="Sunlight pouring across a quiet living space with billowing linen curtains"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.04, opacity: 0.94 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover object-[65%_35%] md:object-center"
        />

        {/* Tactile Texture Overlay: Paper & Plaster grain */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Ambient Morning Light Beams (Soft Diffused Golden Wash) */}
        <div
          className="absolute -top-32 -left-20 w-[900px] h-[900px] pointer-events-none rounded-full blur-3xl opacity-15 bg-gradient-to-br from-amber-100/30 via-amber-200/10 to-transparent"
        />

        {/* Reference Butterfly & Subtle Ambient Motes */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {/* One articulated butterfly: wings hinge independently around the thorax. */}
          <div className="hero-butterfly-flight" aria-hidden="true">
            <div className="hero-butterfly-bank">
              <div className="hero-butterfly-anatomy">
                {['left', 'right'].map(side => (
                  <div key={side} className={`hero-butterfly-wing hero-butterfly-wing-${side}`}>
                    <svg viewBox="0 0 40 64" fill="none">
                      <path d="M2 33C5 20 14 2 26 3C37 4 40 15 34 26C31 32 25 35 21 37C32 35 38 42 35 51C32 62 19 63 11 54C6 49 3 42 2 33Z" fill={`url(#wing-cream-${side})`} />
                      <path d="M3 34C13 27 23 14 27 7M3 35C17 33 27 27 33 19M4 37C15 41 24 46 31 53M5 39C11 48 16 54 22 57" stroke="#b9ac8e" strokeWidth=".6" opacity=".45" />
                      <defs><linearGradient id={`wing-cream-${side}`} x1="2" y1="34" x2="37" y2="25"><stop stopColor="#c8b995"/><stop offset=".35" stopColor="#e0d9c9"/><stop offset="1" stopColor="#f5efdf"/></linearGradient></defs>
                    </svg>
                  </div>
                ))}
                <svg className="hero-butterfly-body" viewBox="0 0 16 64" fill="none">
                  <path d="M6 21C5 16 2 12 1 10M10 21C11 16 14 12 15 10" stroke="#d9cdb3" strokeWidth="1" strokeLinecap="round" />
                  <ellipse cx="8" cy="23" rx="2.4" ry="3" fill="#c9b997"/>
                  <ellipse cx="8" cy="30" rx="2.8" ry="5" fill="#d9cdb3"/>
                  <path d="M6 33Q3 42 8 52Q13 42 10 33Z" fill="#c5b58f"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Subdued Low-Brightness Morning Light Motes (Reduced Glow & Brightness) */}
          <motion.div
            animate={{ opacity: [0.05, 0.22, 0.05], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[32%] left-[42%] w-1 h-1 rounded-full bg-amber-100/40 blur-[0.5px]"
          />
          <motion.div
            animate={{ opacity: [0.04, 0.18, 0.04], scale: [0.75, 1.05, 0.75] }}
            transition={{ duration: 7.5, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[38%] left-[30%] w-1 h-1 rounded-full bg-amber-200/35 blur-[0.4px]"
          />
          <motion.div
            animate={{ opacity: [0.05, 0.2, 0.05], scale: [0.8, 1.15, 0.8] }}
            transition={{ duration: 6.5, delay: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[46%] left-[48%] w-1.2 h-1.2 rounded-full bg-amber-100/35 blur-[0.5px]"
          />
        </div>

        {/* Contrast Scrims */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(36,45,54,0.88) 0%, rgba(36,45,54,0.45) 45%, rgba(36,45,54,0.12) 75%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none hidden md:block z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(36,45,54,0.72) 0%, rgba(36,45,54,0.25) 50%, transparent 85%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Lower-left Typography Block */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#E0D9C9] font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-normal mb-6 max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              Homes built
              <br />
              <span className="italic font-light">with care.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#E0D9C9]/90 text-[18px] md:text-xl font-light leading-relaxed tracking-wide max-w-lg mb-8"
            >
              For everyday life, thought through from the inside out.
            </motion.p>

            {/* Contextual Hero CTA: "See our work" */}
            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, backgroundColor: '#6e2936' }}
              whileTap={{ scale: 0.98 }}
              onClick={onDiscoverClick}
              className="group inline-flex items-center gap-3.5 bg-[#59212C] text-[#E0D9C9] px-8 py-3.5 text-xs md:text-sm tracking-[0.16em] uppercase font-medium transition-colors duration-200 min-h-[48px] rounded-full shadow-lg border border-[#E0D9C9]/10 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0D9C9]"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>See our work</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 14 14"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 7h12m-5-5l5 5-5 5" />
              </svg>
            </motion.button>
          </div>

          {/* Right Column: Scroll line & chapter indicator */}
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end mt-6 lg:mt-0">
            <motion.a
              href="#the-feeling-of-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              onClick={(e) => {
                e.preventDefault();
                onDiscoverClick();
              }}
              className="group flex items-center lg:flex-col lg:items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#E0D9C9]/80 hover:text-[#E0D9C9] transition-colors py-2"
              aria-label="Scroll to 02 / The Feeling of Home"
            >
              <span className="text-[11px] font-accent tracking-[0.22em] text-[#E0D9C9]/90 font-medium">
                02 / THE FEELING OF HOME
              </span>
              <div className="w-12 lg:w-px h-px lg:h-20 bg-[#E0D9C9]/25 relative overflow-hidden">
                <motion.div
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#E0D9C9] to-transparent"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
