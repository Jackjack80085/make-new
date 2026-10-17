import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sun, Heart, Compass } from 'lucide-react';
import { MakeEmblem } from './MakeLogo';

import connectionLivingTerrace from '../assets/images/connection_living_terrace_1791013851990.jpg';
import morningRitualBreakfast from '../assets/images/morning_ritual_breakfast_1791013841349.jpg';
import solitudeQuietCorner from '../assets/images/solitude_quiet_corner_1791013863623.jpg';

interface Chapter3Props {
  onDiscoverHomes?: () => void;
}

interface LifestylePillarProps {
  pillar: {
    id: string;
    index: string;
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    image: string;
    alt: string;
    icon: React.ComponentType<{ className?: string }>;
    tag: string;
  };
  idx: number;
}

const LifestylePillarItem: React.FC<LifestylePillarProps> = ({ pillar, idx }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 0.95], [0.35, 1, 1, 0.4]);
  const textY = useTransform(scrollYProgress, [0.1, 0.35], [20, 0]);

  const Icon = pillar.icon;
  const isEven = idx % 2 === 1;

  return (
    <div
      ref={containerRef}
      className="relative py-14 sm:py-20 lg:py-28 border-b border-[#E0D9C9]/10 last:border-b-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
          isEven ? 'lg:grid-flow-dense' : ''
        }`}
      >
        {/* Editorial Text Block that reveals on scroll */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className={`lg:col-span-5 flex flex-col justify-center space-y-5 ${
            isEven ? 'lg:col-start-8' : ''
          }`}
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#E0D9C9]/15 flex items-center justify-center text-[10px] text-[#E0D9C9] font-accent">
              <Icon className="w-3 h-3" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-accent uppercase tracking-[0.22em] text-[#E0D9C9]/75 font-semibold">
              {pillar.tag}
            </span>
            <span className="text-[10px] font-mono text-[#E0D9C9]/40 ml-auto">
              {pillar.index}
            </span>
          </div>

          <div>
            <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-[#E0D9C9] leading-[1.18] tracking-tight mb-2">
              {pillar.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] font-accent uppercase tracking-[0.16em] text-[#E0D9C9]/65">
              {pillar.subtitle}
            </p>
          </div>

          <p className="font-serif-display text-lg sm:text-xl text-[#E0D9C9]/95 italic font-light leading-snug border-l-2 border-[#E0D9C9]/35 pl-4 py-0.5">
            {pillar.quote}
          </p>

          <p className="text-[15.5px] sm:text-[16.5px] text-[#E0D9C9]/80 font-light leading-relaxed">
            {pillar.description}
          </p>
        </motion.div>

        {/* Photographic Window with Cinematic Scroll Reveal */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#1A231B] border border-[#E0D9C9]/20 shadow-2xl group"
          >
            <motion.img
              src={pillar.image}
              alt={pillar.alt}
              style={{ scale: imageScale, y: imageY }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Tactile Photo Grain Overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='photoNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23photoNoise)' opacity='0.1'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Gradient Scrim for Bottom Caption */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* In-Frame Ribbon Stamp */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[10px] sm:text-[11px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/80 block mb-0.5">
                  {pillar.tag}
                </span>
                <span className="font-serif-display text-sm sm:text-base text-white/95 font-normal italic">
                  {pillar.title}
                </span>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#E0D9C9]/70 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xs border border-white/10">
                03.{pillar.index}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const Chapter3LifeHappensHere: React.FC<Chapter3Props> = () => {
  const lifestylePillars = [
    {
      id: 'rhythm',
      index: '01',
      title: 'Unrushed Daily Rhythms',
      subtitle: 'Living at a human pace',
      quote: '“Architecture that invites you to breathe, pause, and inhabit the moment.”',
      description:
        'We believe a true home isn’t a trophy; it is the silent backdrop to a calmer life. Every sill, deep veranda, and natural light path is calibrated so you never feel hurried inside your own walls.',
      image: morningRitualBreakfast,
      alt: 'Morning sunlight across a calm shared breakfast table',
      icon: Sun,
      tag: 'CALM & PACE',
    },
    {
      id: 'connection',
      index: '02',
      title: 'Effortless Togetherness',
      subtitle: 'Spaces that bring people close',
      quote: '“Walls that give privacy without isolation; thresholds that encourage conversation.”',
      description:
        'Modern luxury is having space for the people who matter most. We craft generous communal thresholds, shared courtyards, and kitchen hearths where conversations linger long after dinner.',
      image: connectionLivingTerrace,
      alt: 'Generous living terrace opening to nature and gathering',
      icon: Heart,
      tag: 'HUMAN CONNECTION',
    },
    {
      id: 'groundedness',
      index: '03',
      title: 'Tactile Groundedness',
      subtitle: 'Honest materials that age with grace',
      quote: '“Surfaces that feel warm to bare feet, patinaed wood that remembers generations.”',
      description:
        'A lifestyle grounded in authenticity. We reject synthetic veneers in favor of hand-hewn limestone, native stone, and solid joinery that soften, deepen, and grow richer with every passing year.',
      image: solitudeQuietCorner,
      alt: 'Quiet architectural corner crafted in honest stone and warm timber',
      icon: Compass,
      tag: 'HONEST LIVING',
    },
  ];

  return (
    <section
      id="life-happens-here"
      className="relative w-full bg-[#232F24] text-[#E0D9C9] py-18 sm:py-24 lg:py-28 overflow-hidden select-none"
      aria-label="Chapter 03: The Lifestyle We Build"
    >
      {/* Tactile Forest Ash Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='forestNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23forestNoise)' opacity='0.14'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Background Emblem Watermark */}
      <div
        className="absolute -right-16 top-1/3 -translate-y-1/2 w-[420px] lg:w-[540px] opacity-[0.035] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <MakeEmblem className="w-full h-auto text-[#E0D9C9]" />
      </div>

      {/* Top Hairline Accent Rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#E0D9C9]/15 max-w-7xl mx-auto px-6 md:px-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E0D9C9]/20 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#E0D9C9]/95 font-accent font-medium">
            <span>03 / THE LIFESTYLE WE BUILD</span>
            <span className="w-6 h-px bg-[#E0D9C9]/40" />
            <span>PURPOSE & LIVING</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#E0D9C9]/55 font-accent">
            SLOW LIVING · HONEST CRAFT
          </span>
        </div>

        {/* Section Lead Statement */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-[1.5px] bg-[#E0D9C9]/60" />
            <span className="text-[11px] sm:text-xs font-accent uppercase tracking-[0.22em] text-[#E0D9C9]/85 font-semibold">
              Beyond Real Estate
            </span>
          </div>

          <h2
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#E0D9C9] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            A lifestyle formed around{' '}
            <span className="italic font-light opacity-95">quiet ease.</span>
          </h2>

          <p className="text-[17px] sm:text-[18px] lg:text-[18.5px] text-[#E0D9C9]/80 font-light leading-relaxed">
            We do not construct buildings to impress passersby from the curb. We shape homes around the subtle texture of living: waking to daylight, gathering without friction, and having spaces that welcome you home.
          </p>
        </div>

        {/* Scroll-Revealed Lifestyle Pillars (Alternating Photographic Layout) */}
        <div className="space-y-4 sm:space-y-6">
          {lifestylePillars.map((pillar, idx) => (
            <LifestylePillarItem key={pillar.id} pillar={pillar} idx={idx} />
          ))}
        </div>

        {/* Architectural Footer Registry Note */}
        <div className="pt-12 sm:pt-16 border-t border-[#E0D9C9]/15 flex items-center justify-between text-[11px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/50">
          <span>THE MAKE WAY · THREE FOUNDERS · LIFELONG CUSTODY</span>
          <span className="hidden sm:inline">03 / CONTINUOUS HARMONY</span>
        </div>
      </div>
    </section>
  );
};
