import React, { useState } from 'react';
import { CalendarDays, ChevronDown, Palette, Sparkles, Sprout } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import foundersDesignTable from '../assets/images/founders_design_table_1792166121676.jpg';
import bespokeSketch from '../assets/images/architectural_sketch_bespoke_1792165890151.jpg';
import domesticDetail from '../assets/images/domestic_detail_reading_1791013828318.jpg';
import bespokeInterior from '../assets/images/envisioned_bespoke_home_1792166097774.jpg';
import sunlitInterior from '../assets/images/hero_sunlit_home_1791013817349.jpg';

const designDetails = [
  {
    label: 'Layouts',
    image: bespokeSketch,
    alt: 'An architectural sketch exploring a bespoke home layout',
    note: 'Your ideas, thoughtfully made real',
  },
  {
    label: 'Materials',
    image: domesticDetail,
    alt: 'Natural stone, woven textures and warm timber in a quiet reading nook',
    note: 'Materials chosen to feel like you',
  },
  {
    label: 'Finishes',
    image: foundersDesignTable,
    alt: 'A design table where the details and finishes come together',
    note: 'The little details make it yours',
  },
  {
    label: 'Joinery',
    image: bespokeInterior,
    alt: 'Warm timber cabinetry within a bespoke living room',
    note: 'Made for the way you live',
  },
  {
    label: 'Light',
    image: sunlitInterior,
    alt: 'Soft daylight falling across a living room and garden',
    note: 'A softer light, all your own',
  },
];

const lifestyleMoments = [
  {
    title: 'Community events',
    detail: 'Meet your neighbours, share a meal and make room for the moments that bring a community closer.',
    icon: CalendarDays,
  },
  {
    title: 'Pottery & workshops',
    detail: 'Try pottery, explore a new craft and make something by hand, together and at your own pace.',
    icon: Palette,
  },
  {
    title: 'Festival gatherings',
    detail: 'Celebrate the seasons and traditions with thoughtful festivities shared across the community.',
    icon: Sparkles,
  },
  {
    title: 'Greenery all around',
    detail: 'Gardens, planted paths and leafy corners weave nature through the property, with space to pause and breathe.',
    icon: Sprout,
  },
];

export const HomepageIndex: React.FC = () => {
  const [hoveredMoment, setHoveredMoment] = useState<number | null>(null);
  const [pinnedMoment, setPinnedMoment] = useState<number | null>(null);
  const [activeDesignDetail, setActiveDesignDetail] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
  <>
    <section id="home-design" className="paper-grain plaster-surface relative overflow-hidden bg-[#E0D9C9] text-[#242D36]" aria-labelledby="home-design-title">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.13]" aria-hidden="true" style={{
        backgroundImage: 'linear-gradient(rgba(36,45,54,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(36,45,54,.12) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse at 84% 26%, black, transparent 52%)',
      }} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-44 hidden h-72 w-72 rounded-full border border-[#59212C]/15 lg:block xl:right-[13%] xl:h-96 xl:w-96"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: -18 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-5 rounded-full border border-dashed border-[#59212C]/20"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#59212C]/55" />
        <span className="absolute bottom-8 left-8 font-accent text-[9px] uppercase tracking-[0.2em] text-[#59212C]/55">Made to measure</span>
      </motion.div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
        <motion.div
          className="mb-10 flex items-center justify-between border-y border-[#242D36]/20 py-3 sm:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#59212C]">01 / Designed around you</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#242D36]/45">A home, made to feel like you</span>
        </motion.div>
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="home-design-title" className="font-serif-display text-4xl sm:text-5xl lg:text-7xl leading-[1.04] tracking-tight">
            A home, made to <span className="italic text-[#59212C]">feel like you.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#242D36]/75">
            Tell us what matters in your everyday. We’ll shape the layout, materials, colours, storage, lighting and finer details around the way you live—so your home feels considered, personal and unmistakably yours.
          </p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#242D36]/65">
            We’ll help you explore the possibilities and guide each choice, one thoughtful detail at a time.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-accent text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#59212C]">
            {designDetails.map((detail, index) => (
              <React.Fragment key={detail.label}>
                {index > 0 && <span aria-hidden="true" className="text-[#59212C]/40">·</span>}
                <motion.button
                  type="button"
                  aria-pressed={activeDesignDetail === index}
                  onMouseEnter={() => setActiveDesignDetail(index)}
                  onFocus={() => setActiveDesignDetail(index)}
                  onClick={() => setActiveDesignDetail(index)}
                  className={`border-b pb-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50 ${activeDesignDetail === index ? 'border-[#59212C]/60 text-[#59212C]' : 'border-transparent text-[#59212C]/75 hover:border-[#59212C]/50 hover:text-[#59212C]'}`}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {detail.label}
                </motion.button>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        <motion.figure
          className="group relative mt-12 aspect-[16/7] min-h-52 overflow-hidden rounded-2xl border border-[#242D36]/20 bg-[#D4CCBA] shadow-[0_28px_70px_-38px_rgba(36,45,54,.65)] sm:mt-16 sm:min-h-72"
          initial={reduceMotion ? false : { opacity: 0, y: 32, clipPath: 'inset(8% 0 0 0 round 1rem)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0 round 1rem)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={designDetails[activeDesignDetail].label}
              src={designDetails[activeDesignDetail].image}
              alt={designDetails[activeDesignDetail].alt}
              className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 group-hover:saturate-[1.08]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.045 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply" aria-hidden="true" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.12'/%3E%3C/svg%3E")`,
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242D36]/75 via-[#242D36]/5 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full border border-[#242D36]/20 bg-[#E0D9C9]/75 px-3 py-1.5 font-accent text-[9px] uppercase tracking-[0.18em] text-[#59212C] backdrop-blur-sm sm:left-7 sm:top-7">
            A closer look at {designDetails[activeDesignDetail].label.toLowerCase()}
          </span>
          <figcaption className="absolute bottom-5 left-5 font-serif-display text-lg italic text-[#E0D9C9] sm:bottom-7 sm:left-8 sm:text-2xl">
            {designDetails[activeDesignDetail].note}
          </figcaption>
          <span className="absolute bottom-6 right-5 font-accent text-[9px] uppercase tracking-[0.2em] text-[#E0D9C9]/75 sm:bottom-8 sm:right-8">MAKE / 0{activeDesignDetail + 1}</span>
        </motion.figure>
      </div>
    </section>

    <section id="home-lifestyle" className="relative overflow-hidden bg-[#2B392C] text-[#E0D9C9]" aria-labelledby="home-lifestyle-title">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light" aria-hidden="true" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='forestGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23forestGrain)' opacity='0.18'/%3E%3C/svg%3E"), radial-gradient(ellipse at 82% 32%, rgba(217,199,165,.12), transparent 46%)`,
      }} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full border border-[#E0D9C9]/10 sm:-right-10 sm:h-[28rem] sm:w-[28rem]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-10 rounded-full border border-dashed border-[#D9C7A5]/10" />
      </motion.div>
      <img
        src="/make-emblem-limestone.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[min(44vw,720px)] opacity-[0.045] pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32">
        <div className="flex items-center justify-between border-y border-[#E0D9C9]/20 py-3 mb-10 sm:mb-14">
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E0D9C9]/80">02 / Life together</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#E0D9C9]/50">Life at Make</span>
        </div>
        <div className="mb-10 sm:mb-14">
          <motion.div
            className="max-w-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 id="home-lifestyle-title" className="font-serif-display text-4xl sm:text-5xl lg:text-7xl leading-[1.04] tracking-tight">
              More life, <span className="italic text-[#D9C7A5]">together.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#E0D9C9]/75">
              At Make, home reaches beyond your front door. It’s the people you meet, the things you make and the little rituals you share. We bring the community together through experiences that make every day feel a little richer.
            </p>
            <div className="mt-6 flex items-center gap-3 font-accent text-[9px] uppercase tracking-[0.2em] text-[#D9C7A5]/80">
              <span className="h-px w-8 bg-[#D9C7A5]/60" />
              A neighbourhood with room to join in
            </div>
          </motion.div>
        </div>
        <ol className="border-t border-[#E0D9C9]/20">
          {lifestyleMoments.map((moment, index) => {
            const Icon = moment.icon;
            const isExpanded = hoveredMoment === index || pinnedMoment === index;
            return (
              <li key={moment.title} className={`border-b border-[#E0D9C9]/20 transition-colors duration-300 ${isExpanded ? 'bg-[#E0D9C9]/[0.035]' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onMouseEnter={() => {
                    setHoveredMoment(index);
                  }}
                  onMouseLeave={() => setHoveredMoment((current) => current === index ? null : current)}
                  onFocus={() => {
                    setHoveredMoment(index);
                  }}
                  onBlur={() => setHoveredMoment((current) => current === index ? null : current)}
                  onClick={() => {
                    setPinnedMoment((current) => current === index ? null : index);
                  }}
                  className="group w-full grid grid-cols-[2.5rem_3rem_minmax(0,1fr)_1.25rem] sm:grid-cols-[3rem_3.5rem_minmax(0,1fr)_1.5rem] gap-3 sm:gap-5 items-start py-5 sm:py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D9C7A5]"
                >
                  <span className="font-accent text-[10px] sm:text-[11px] tracking-[0.12em] text-[#D9C7A5]/75 pt-1">0{index + 1}</span>
                  <motion.span
                    aria-hidden="true"
                    animate={reduceMotion ? undefined : isExpanded ? { scale: 1.06, rotate: -3 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className={`relative flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border shadow-[0_5px_18px_rgba(0,0,0,.18),inset_0_1px_0_rgba(255,255,255,.12)] transition-all duration-300 ${isExpanded ? 'border-[#E8D5AE]/80 bg-[radial-gradient(circle_at_32%_24%,rgba(232,213,174,.22),rgba(43,57,44,.95)_70%)] text-[#F0DDB6]' : 'border-[#D9C7A5]/45 bg-[radial-gradient(circle_at_32%_24%,rgba(217,199,165,.13),rgba(43,57,44,.98)_72%)] text-[#D9C7A5]'}`}
                  >
                    <span className="absolute inset-[3px] rounded-full border border-[#E8D5AE]/20" />
                    <span className="absolute right-[10px] top-[8px] h-1 w-1 rounded-full bg-[#E8D5AE]/65 shadow-[0_0_8px_rgba(232,213,174,.55)]" />
                    <Icon className="relative h-[18px] w-[18px] sm:h-5 sm:w-5 drop-shadow-[0_1px_3px_rgba(232,213,174,.2)]" strokeWidth={1.45} />
                  </motion.span>
                  <span className="max-w-3xl">
                    <span className={`block font-serif-display text-xl sm:text-2xl lg:text-3xl leading-tight transition-colors duration-300 ${isExpanded ? 'text-[#D9C7A5]' : 'text-[#E0D9C9]'}`}>{moment.title}</span>
                    <span className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <span className="overflow-hidden">
                        <span className="block pt-2 text-sm sm:text-base leading-relaxed text-[#E0D9C9]/70">{moment.detail}</span>
                      </span>
                    </span>
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 mt-1 text-[#D9C7A5]/70 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

    <section id="founders-note" className="paper-grain plaster-surface relative overflow-hidden bg-[#D8D0C1] text-[#242D36]" aria-labelledby="founders-note-title">
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full border border-[#59212C]/10 sm:-right-12 sm:h-[30rem] sm:w-[30rem]" aria-hidden="true">
        <div className="absolute inset-8 rounded-full border border-dashed border-[#59212C]/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
        <div className="flex items-center justify-between border-y border-[#242D36]/15 py-3 mb-10 sm:mb-14">
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#59212C]/80">03 / A note from our founders</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#242D36]/45">With you, all the way</span>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(25rem,.95fr)] lg:gap-16">
          <motion.div
            className="max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-3 font-accent text-[9px] uppercase tracking-[0.22em] text-[#59212C]/75 sm:text-[10px]">
              <span className="h-px w-7 bg-[#59212C]/60" />
              Made with you, from the start
            </span>
            <h2 id="founders-note-title" className="font-serif-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Elevate your lifestyle.<br /><span className="italic font-light text-[#59212C]">Express yourself.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#242D36]/75 sm:text-lg">
              Your home is one of the most personal things you’ll create. We’ll be alongside you from our first conversation to the day you settle in—listening closely, guiding every choice, and looking after the details that make it feel like yours.
            </p>
          </motion.div>

          <motion.figure
            className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-[#242D36]/20 bg-[#C8BFAF] shadow-[0_30px_75px_-40px_rgba(36,45,54,.6)]"
            initial={reduceMotion ? false : { opacity: 0, y: 24, clipPath: 'inset(8% 0 0 0 round 1rem)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0 round 1rem)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={foundersDesignTable}
              alt="The founders discussing a home design together around a table"
              className="absolute inset-0 h-full w-full object-cover object-center transition-[filter] duration-700 group-hover:saturate-[1.08]"
              initial={reduceMotion ? false : { scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light" aria-hidden="true" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='founderGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23founderGrain)' opacity='0.16'/%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242D36]/75 via-transparent to-[#242D36]/10" />
            <span className="absolute left-4 top-4 rounded-full border border-[#E0D9C9]/45 bg-[#242D36]/25 px-3 py-1.5 font-accent text-[9px] uppercase tracking-[0.18em] text-[#E0D9C9] backdrop-blur-sm sm:left-6 sm:top-6">
              The people behind Make
            </span>
            <figcaption className="absolute inset-x-4 bottom-4 rounded-xl border border-[#E0D9C9]/50 bg-[#E0D9C9]/95 p-4 shadow-xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
              <span className="font-accent text-[8px] uppercase tracking-[0.2em] text-[#59212C]/75 sm:text-[9px]">A note from our founders</span>
              <p className="mt-2 max-w-lg font-serif-display text-base italic leading-snug text-[#242D36]/80 sm:text-xl">
                We’re here to make the journey feel as thoughtful as the home.
              </p>
            </figcaption>
          </motion.figure>
        </div>

        <div className="relative mt-12 grid grid-cols-3 border-t border-[#242D36]/15 pt-6 sm:mt-16 sm:pt-8">
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-[-1px] h-px w-1/3 origin-left bg-[#59212C]/65"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          {[
            ['01', 'We listen'],
            ['02', 'We shape it with you'],
            ['03', 'You settle in'],
          ].map(([number, step]) => (
            <div key={number} className="pr-2 sm:pr-4">
              <span className="block font-accent text-[9px] tracking-[0.16em] text-[#59212C]/65 sm:text-[10px]">{number}</span>
              <span className="mt-2 block font-serif-display text-sm text-[#242D36]/80 sm:text-lg">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};
