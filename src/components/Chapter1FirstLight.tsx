import heroSunlitHome from '../assets/images/hero_sunlit_home_1791013817349.jpg';
import React from 'react';
import { motion } from 'motion/react';

interface Chapter1Props {
  onDiscoverClick: () => void;
}

/**
 * Realistic Butterfly Silhouette with Anatomical Forewings, Scalloped Hindwings,
 * Antennae with Tips, Slender Abdomen, and Delicate Internal Vein Contours.
 */
const RealisticButterfly: React.FC<{
  className?: string;
  wingColor?: string;
  bodyColor?: string;
  wingSpan?: number;
}> = ({
  className = '',
  wingColor = 'rgba(224, 217, 201, 0.72)',
  bodyColor = '#242D36',
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* LEFT WINGS GROUP */}
      <motion.g
        style={{ transformOrigin: '32px 32px' }}
        animate={{ scaleX: [1, 0.35, 0.95, 0.4, 1] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Left Forewing Silhouette */}
        <path
          d="M31 29 C29 18 20 12 11 14 C7 15 5 19 8 23 C10 26 14 27 18 29 C24 32 29 33 31 33 Z"
          fill={wingColor}
        />
        {/* Left Forewing Delicate Veins */}
        <path
          d="M31 30 C22 24 16 19 12 16 M23 25 C17 22 13 22 9 21 M27 28 C21 27 16 29 13 28"
          stroke={bodyColor}
          strokeWidth="0.4"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />

        {/* Left Hindwing Silhouette (Scalloped Margin) */}
        <path
          d="M31 33 C26 34 18 37 16 42 C15 45 17 49 21 48 C24 47 26 44 28 42 C29 44 31 42 31 38 Z"
          fill={wingColor}
        />
        {/* Left Hindwing Veins */}
        <path
          d="M31 35 C25 38 20 42 18 45 M28 39 C24 42 22 45 21 47"
          stroke={bodyColor}
          strokeWidth="0.35"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />
      </motion.g>

      {/* RIGHT WINGS GROUP */}
      <motion.g
        style={{ transformOrigin: '32px 32px' }}
        animate={{ scaleX: [1, 0.35, 0.95, 0.4, 1] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Right Forewing Silhouette */}
        <path
          d="M33 29 C35 18 44 12 53 14 C57 15 59 19 56 23 C54 26 50 27 46 29 C40 32 35 33 33 33 Z"
          fill={wingColor}
        />
        {/* Right Forewing Delicate Veins */}
        <path
          d="M33 30 C42 24 48 19 52 16 M41 25 C47 22 51 22 55 21 M37 28 C43 27 48 29 51 28"
          stroke={bodyColor}
          strokeWidth="0.4"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />

        {/* Right Hindwing Silhouette (Scalloped Margin) */}
        <path
          d="M33 33 C38 34 46 37 48 42 C49 45 47 49 43 48 C40 47 38 44 36 42 C35 44 33 42 33 38 Z"
          fill={wingColor}
        />
        {/* Right Hindwing Veins */}
        <path
          d="M33 35 C39 38 44 42 46 45 M36 39 C40 42 42 45 43 47"
          stroke={bodyColor}
          strokeWidth="0.35"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />
      </motion.g>

      {/* ANATOMICAL BUTTERFLY BODY (Head, Thorax, Segmented Abdomen) */}
      <g fill={bodyColor}>
        {/* Head */}
        <ellipse cx="32" cy="22" rx="1.3" ry="1.4" />
        {/* Thorax */}
        <ellipse cx="32" cy="27" rx="1.6" ry="3.2" />
        {/* Segmented Abdomen */}
        <path
          d="M32 31 C32.8 31 33.2 32.5 33.2 36 C33.2 39.5 32.7 43 32 44.5 C31.3 43 30.8 39.5 30.8 36 C30.8 32.5 31.2 31 32 31 Z"
          opacity="0.95"
        />
      </g>

      {/* ANTENNAE WITH DELICATE CLUBBED TIPS */}
      <path
        d="M31.2 21 C29 17 24 14 21 16"
        stroke={bodyColor}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <circle cx="20.8" cy="16.2" r="0.7" fill={bodyColor} />

      <path
        d="M32.8 21 C35 17 40 14 43 16"
        stroke={bodyColor}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <circle cx="43.2" cy="16.2" r="0.7" fill={bodyColor} />
    </svg>
  );
};

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

        {/* Realistic Butterflies & Subtle, Soft Ambient Sparkle Motes */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {/* Realistic Butterfly 1: Gentle Gliding Flight in Sunbeam */}
          <motion.div
            initial={{ opacity: 0, x: -10, y: 15 }}
            animate={{
              opacity: [0, 0.55, 0.7, 0.45, 0.65, 0.15],
              x: [0, 40, 80, 130, 175],
              y: [0, -18, -32, -22, -42],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="absolute top-[28%] left-[26%] sm:left-[36%] w-10 h-10 pointer-events-none"
          >
            <motion.div
              animate={{ rotate: [-5, 7, -3, 8, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full drop-shadow-[0_1px_4px_rgba(0,0,0,0.18)]"
            >
              <RealisticButterfly
                className="w-full h-full"
                wingColor="rgba(245, 239, 226, 0.78)"
                bodyColor="#2B392C"
              />
            </motion.div>
          </motion.div>

          {/* Realistic Butterfly 2: Smaller, Distant Ambient Flight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0.55, 0.3, 0.48, 0],
              x: [0, -30, -55, -25, 12],
              y: [0, -22, -14, -34, -18],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              delay: 3,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            className="absolute top-[42%] right-[26%] w-8 h-8 pointer-events-none"
          >
            <motion.div
              animate={{ rotate: [6, -7, 5, -5, 6] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
            >
              <RealisticButterfly
                className="w-full h-full"
                wingColor="rgba(240, 234, 220, 0.68)"
                bodyColor="#32281F"
              />
            </motion.div>
          </motion.div>

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
