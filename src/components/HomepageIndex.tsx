import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import foundersDesignTable from '../assets/images/founders_design_table_1792166121676.jpg';
import bespokeSketch from '../assets/images/architectural_sketch_bespoke_1792165890151.jpg';
import domesticDetail from '../assets/images/domestic_detail_reading_1791013828318.jpg';
import bespokeInterior from '../assets/images/envisioned_bespoke_home_1792166097774.jpg';
import sunlitInterior from '../assets/images/hero_sunlit_home_1791013817349.jpg';
import communityWeekend from '../assets/images/connection_living_terrace_1791013851990.jpg';
import communityFestival from '../assets/images/lifestyle_festival_generated.png';
import communityWorkshopPhoto from '../assets/images/lifestyle_workshop_generated.png';
import communityFitnessPhoto from '../assets/images/lifestyle_fitness_generated.png';

const designDetails = [
  {
    label: 'Paint',
    image: bespokeSketch,
    alt: 'An architectural sketch exploring a home’s interior possibilities',
    note: 'Five shades we love, from soft and calm to warm and rich. Pick one for each room and we’ll paint it before you move in.',
  },
  {
    label: 'Floors & Tiles',
    image: domesticDetail,
    alt: 'Natural stone, woven textures and warm timber in a quiet reading nook',
    note: 'Three palettes, each one picked to look right in the home. Choose the one that feels like you, and we’ll lay it.',
  },
  {
    label: 'Bath Fittings',
    image: foundersDesignTable,
    alt: 'A design table where carefully selected materials and finishes come together',
    note: 'Three sets of taps, showers and fittings, from quietly classic to a little bit bold. Choose your favourite and we’ll fit it.',
  },
  {
    label: 'Add-ons',
    image: bespokeInterior,
    alt: 'Warm timber cabinetry and practical details in a bespoke living room',
    note: 'Cameras and smart locks if you’d sleep better with them. Grab bars and support rails so your parents can move around easily. EV charging at your parking spot, where available. Tell us what you’d like and we’ll sort it before handover.',
  },
  {
    label: 'Interiors',
    image: sunlitInterior,
    alt: 'A warm, fully furnished living room opening onto a garden',
    note: 'For everything beyond that, we’ve lined up a small group of architects and contractors we trust. Your first consultation is free. If you’d like them to do the work, you hire them directly, and they’ll handle it end to end, from ideas to installation.',
  },
];

const lifestyleMoments = [
  {
    title: 'Family weekends',
    detail: 'Movie nights, flea markets, kids’ camps and potlucks. Something on the calendar every weekend, if you want it.',
    image: communityWeekend,
    alt: 'Neighbours and family enjoying a relaxed weekend together in a leafy courtyard',
    caption: 'Make room for the good bits',
  },
  {
    title: 'Festivals',
    detail: 'Diwali nights, Christmas evenings, Ugadi and Sankranti. Lights, food and the whole building together, organised so you don’t have to.',
    image: communityFestival,
    alt: 'Neighbours and families celebrating together at a softly lit courtyard festival',
    caption: 'A little more to celebrate',
  },
  {
    title: 'Workshops',
    detail: 'Pottery, cooking, gardening and art for the kids. Come curious and leave with something slightly wonky that you made yourself.',
    image: communityWorkshopPhoto,
    alt: 'Neighbours and a child shaping pottery together in a light-filled community studio',
    caption: 'Try something with your hands',
  },
  {
    title: 'Fitness',
    detail: 'Morning run clubs, yoga sessions and weekend sports. Easy reasons to get moving with the people next door.',
    image: communityFitnessPhoto,
    alt: 'Neighbours sharing a gentle morning yoga session on a leafy lawn',
    caption: 'Find your own rhythm',
  },
];

const lifestyleEmblemTexture = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="420" viewBox="0 0 360 420">
    <g fill="none" stroke="#D9C7A5" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".38">
      <path d="M42 420V191a138 138 0 0 1 276 0v229"/>
      <path d="M65 420V197a115 115 0 0 1 230 0v223" stroke-opacity=".56"/>
      <path d="M94 390c26-25 38-59 33-99-3-21-13-41-29-58m29 58c18-25 38-39 62-44m-70 20c-22-10-40-24-54-42m56 72c-24-2-44-8-62-20m177 113c-26-25-38-59-33-99 3-21 13-41 29-58m-29 58c-18-25-38-39-62-44m70 20c22-10 40-24 54-42m-56 72c24-2 44-8 62-20"/>
      <path d="M97 230c-16-20-26-23-39-20 7 14 19 22 39 20Zm17 24c-21-14-34-14-47-6 11 12 26 15 47 6Zm19-25c3-22 12-31 26-34 0 17-8 28-26 34Zm5 35c16-18 29-22 44-17-7 15-21 22-44 17Zm77 126c16-20 26-23 39-20-7 14-19 22-39 20Zm-17 24c21-14 34-14 47-6-11 12-26 15-47 6Zm-19-25c-3-22-12-31-26-34 0 17 8 28 26 34Zm-5 35c-16-18-29-22-44-17 7 15 21 22 44 17Z"/>
    </g>
  </svg>`
)}")`;

export const HomepageIndex: React.FC = () => {
  const [activeMoment, setActiveMoment] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState(1);
  const [activeDesignDetail, setActiveDesignDetail] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
  <>
    <section id="home-lifestyle" className="relative isolate overflow-hidden bg-[#2B392C] text-[#E0D9C9]" aria-labelledby="home-lifestyle-title">
      <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-soft-light" aria-hidden="true" style={{
        backgroundImage: `${lifestyleEmblemTexture}, radial-gradient(ellipse at 18% 24%, rgba(217,199,165,.12), transparent 48%), radial-gradient(ellipse at 79% 76%, rgba(12,24,16,.2), transparent 52%)`,
        backgroundSize: '360px 420px, 100% 100%, 100% 100%',
        backgroundPosition: 'right 8% center, center, center',
        backgroundRepeat: 'repeat, no-repeat, no-repeat',
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32">
        <div className="flex items-center justify-between border-y border-[#E0D9C9]/20 py-3 mb-10 sm:mb-14">
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E0D9C9]/80">02 / The life</span>
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
              Then, a calendar that’s <span className="italic text-[#D9C7A5]">already full.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#E0D9C9]/75">
              Most developers hand over the keys and leave. We keep a team on the ground whose whole job is the life of the community: planning the festivals, running the workshops, organising the weekends. You just show up.
            </p>
            <div className="mt-6 flex items-center gap-3 font-accent text-[9px] uppercase tracking-[0.2em] text-[#D9C7A5]/80">
              <span className="h-px w-8 bg-[#D9C7A5]/60" />
              Planned for you, every month
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative border-y border-[#E0D9C9]/20 py-7 sm:py-10"
          aria-roledescription="carousel"
          aria-label="Life at Make"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait" initial={false} custom={carouselDirection}>
            {(() => {
              const moment = lifestyleMoments[activeMoment];
              return (
                <motion.article
                  key={moment.title}
                  custom={carouselDirection}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: carouselDirection * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: carouselDirection * -48 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="min-h-48"
                  aria-live="polite"
                >
                  <div className="grid gap-7 sm:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] sm:items-center sm:gap-10 lg:gap-16">
                    <motion.div
                      className="group relative isolate overflow-hidden rounded-[1.35rem] border border-[#E0D9C9]/20 bg-[#E0D9C9]/5 shadow-[0_18px_50px_rgba(0,0,0,.2)]"
                      initial={reduceMotion ? false : { opacity: 0, scale: .97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img src={moment.image} alt={moment.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] sm:aspect-[5/4]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17231B]/75 via-transparent to-[#17231B]/5" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                        <span className="font-accent text-[9px] uppercase tracking-[.19em] text-[#F0E8D8]/90 sm:text-[10px]">{moment.caption}</span>
                      </div>
                      <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-[#253329]/55 px-3 py-1.5 font-accent text-[9px] tracking-[.14em] text-[#F0E8D8] backdrop-blur-sm">0{activeMoment + 1} / 04</span>
                    </motion.div>
                    <div className="max-w-xl">
                      <div className="mb-4 flex items-center gap-3 font-accent text-[9px] uppercase tracking-[.19em] text-[#D9C7A5]/70">
                        <span className="h-px w-7 bg-[#D9C7A5]/55" /> A little life at Make
                      </div>
                      <h3 className="font-serif-display text-3xl leading-[1.08] text-[#D9C7A5] sm:text-4xl lg:text-5xl">{moment.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-[#E0D9C9]/75 sm:mt-5 sm:text-lg">{moment.detail}</p>
                      <div className="mt-7 flex items-center gap-2 font-accent text-[9px] uppercase tracking-[.16em] text-[#E0D9C9]/55">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9C7A5]" /> Little moments, already in the making
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-between border-t border-[#E0D9C9]/15 pt-5">
            <div className="flex items-center gap-2" aria-label={`Slide ${activeMoment + 1} of ${lifestyleMoments.length}`}>
              {lifestyleMoments.map((moment, index) => (
                <button
                  key={moment.title}
                  type="button"
                  onClick={() => {
                    setCarouselDirection(index > activeMoment ? 1 : -1);
                    setActiveMoment(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C7A5] ${index === activeMoment ? 'w-8 bg-[#D9C7A5]' : 'w-1.5 bg-[#E0D9C9]/35 hover:bg-[#E0D9C9]/65'}`}
                  aria-label={`Show ${moment.title}`}
                  aria-current={index === activeMoment ? 'true' : undefined}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setCarouselDirection(-1);
                  setActiveMoment((index) => (index - 1 + lifestyleMoments.length) % lifestyleMoments.length);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9C7A5]/40 text-[#D9C7A5] transition-colors hover:bg-[#E0D9C9]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C7A5]"
                aria-label="Previous community moment"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setCarouselDirection(1);
                  setActiveMoment((index) => (index + 1) % lifestyleMoments.length);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9C7A5]/40 text-[#D9C7A5] transition-colors hover:bg-[#E0D9C9]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C7A5]"
                aria-label="Next community moment"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

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
        <span className="absolute bottom-8 left-8 font-accent text-[9px] uppercase tracking-[0.2em] text-[#59212C]/55">Yours in the details</span>
      </motion.div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
        <motion.div
          className="mb-10 flex items-center justify-between border-y border-[#242D36]/20 py-3 sm:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#59212C]">01 / The home</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#242D36]/45">Well made. Made yours.</span>
        </motion.div>
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="home-design-title" className="font-serif-display text-4xl sm:text-5xl lg:text-7xl leading-[1.04] tracking-tight">
            We’ve sorted the big stuff. <span className="italic text-[#59212C]">The fun part’s all yours.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#242D36]/75">
            Every Make home comes properly thought through. The rooms catch the light, the air moves the way it should, and there’s green wherever you look. All of that is already taken care of, so you can just enjoy it.
          </p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#242D36]/65">
            Then you get to make it yours. Pick your wall colours, floors, tiles and bathroom fittings from options we’ve put together, and we’ll take care of the rest. No hunting for contractors, no chasing suppliers. You choose, we do the work, and it’s ready when you move in. Want to go further with wardrobes, kitchens or furniture? Our trusted architects and contractors can take it from there.
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
          <span className="absolute bottom-6 right-5 font-accent text-[9px] uppercase tracking-[0.2em] text-[#E0D9C9]/75 sm:bottom-8 sm:right-8">MAKE / 0{activeDesignDetail + 1}</span>
        </motion.figure>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={designDetails[activeDesignDetail].label}
            aria-live="polite"
            className="mt-5 max-w-4xl text-sm leading-relaxed text-[#242D36]/75 sm:text-base"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {designDetails[activeDesignDetail].note}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>

    <section id="founders-note" className="relative overflow-hidden bg-[#633139] text-[#E0D9C9]" aria-labelledby="founders-note-title">
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full border border-[#E0D9C9]/15 sm:-right-12 sm:h-[30rem] sm:w-[30rem]" aria-hidden="true">
        <div className="absolute inset-8 rounded-full border border-dashed border-[#E0D9C9]/15" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
        <div className="flex items-center justify-between border-y border-[#E0D9C9]/20 py-3 mb-10 sm:mb-14">
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E0D9C9]/85">04 / A note from our founders</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#E0D9C9]/60">With you, all the way</span>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(25rem,.95fr)] lg:gap-16">
          <motion.div
            className="max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-3 font-accent text-[9px] uppercase tracking-[0.22em] text-[#D9C7A5]/85 sm:text-[10px]">
              <span className="h-px w-7 bg-[#D9C7A5]/70" />
              Made with you, from the start
            </span>
            <h2 id="founders-note-title" className="font-serif-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Elevate your lifestyle.<br /><span className="italic font-light text-[#D9C7A5]">Express yourself.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#E0D9C9]/80 sm:text-lg">
              Your home is one of the most personal things you’ll create. We’ll be alongside you from our first conversation to the day you settle in—listening closely, guiding every choice, and looking after the details that make it feel like yours.
            </p>
          </motion.div>

          <motion.figure
            className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-[#E0D9C9]/20 bg-[#49272C] shadow-[0_30px_75px_-40px_rgba(36,20,24,.6)]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#32191E]/75 via-transparent to-[#32191E]/10" />
            <span className="absolute left-4 top-4 rounded-full border border-[#E0D9C9]/45 bg-[#49272C]/60 px-3 py-1.5 font-accent text-[9px] uppercase tracking-[0.18em] text-[#E0D9C9] backdrop-blur-sm sm:left-6 sm:top-6">
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

        <div className="relative mt-12 grid grid-cols-3 border-t border-[#E0D9C9]/25 pt-6 sm:mt-16 sm:pt-8">
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-[-1px] h-px w-1/3 origin-left bg-[#D9C7A5]/80"
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
              <span className="block font-accent text-[9px] tracking-[0.16em] text-[#D9C7A5]/85 sm:text-[10px]">{number}</span>
              <span className="mt-2 block font-serif-display text-sm text-[#E0D9C9]/90 sm:text-lg">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};
