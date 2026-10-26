import React, { useState } from 'react';
import { CalendarDays, ChevronDown, Palette, Sparkles, Sprout } from 'lucide-react';
import foundersDesignTable from '../assets/images/founders_design_table_1792166121676.jpg';
import bespokeSketch from '../assets/images/architectural_sketch_bespoke_1792165890151.jpg';

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

  return (
  <>
    <section id="home-design" className="relative overflow-hidden bg-[#E0D9C9] text-[#242D36]" aria-labelledby="home-design-title">
      <div className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-multiply" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.08'/%3E%3C/svg%3E")`,
      }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32">
        <div className="flex items-center justify-between border-y border-[#242D36]/20 py-3 mb-10 sm:mb-14">
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#59212C]">01 / Designed around you</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#242D36]/45">A home, made to feel like you</span>
        </div>
        <div className="max-w-4xl">
          <h2 id="home-design-title" className="font-serif-display text-4xl sm:text-5xl lg:text-7xl leading-[1.04] tracking-tight">
            A home, made to <span className="italic text-[#59212C]">feel like you.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#242D36]/75">
            Tell us what matters in your everyday. We’ll shape the layout, materials, colours, storage, lighting and finer details around the way you live—so your home feels considered, personal and unmistakably yours.
          </p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#242D36]/65">
            We’ll help you explore the possibilities and guide each choice, one thoughtful detail at a time.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 font-accent text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#59212C]">
            <span>Layouts</span><span aria-hidden="true">·</span><span>Materials</span><span aria-hidden="true">·</span><span>Finishes</span><span aria-hidden="true">·</span><span>Joinery</span><span aria-hidden="true">·</span><span>Light</span>
          </div>
        </div>
        <figure className="relative mt-12 sm:mt-16 aspect-[16/7] min-h-52 sm:min-h-72 rounded-2xl overflow-hidden border border-[#242D36]/15 shadow-xl bg-[#D4CCBA]">
          <img src={bespokeSketch} alt="A bespoke home design taking shape on the drawing table" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242D36]/65 via-transparent to-transparent" />
          <figcaption className="absolute bottom-5 left-5 sm:bottom-7 sm:left-8 font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#E0D9C9]">
            Your ideas, thoughtfully made real
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="home-lifestyle" className="relative overflow-hidden bg-[#2B392C] text-[#E0D9C9]" aria-labelledby="home-lifestyle-title">
      <div className="absolute -right-24 top-12 h-80 w-80 rounded-full border border-[#E0D9C9]/10" aria-hidden="true" />
      <div className="absolute -right-10 top-24 h-52 w-52 rounded-full border border-[#E0D9C9]/10" aria-hidden="true" />
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
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 id="home-lifestyle-title" className="font-serif-display text-4xl sm:text-5xl lg:text-7xl leading-[1.04] tracking-tight">
            More life, <span className="italic text-[#D9C7A5]">together.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#E0D9C9]/75">
            At Make, home reaches beyond your front door. It’s the people you meet, the things you make and the little rituals you share. We bring the community together through experiences that make every day feel a little richer.
          </p>
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
                  onMouseEnter={() => setHoveredMoment(index)}
                  onMouseLeave={() => setHoveredMoment((current) => current === index ? null : current)}
                  onFocus={() => setHoveredMoment(index)}
                  onBlur={() => setHoveredMoment((current) => current === index ? null : current)}
                  onClick={() => setPinnedMoment((current) => current === index ? null : index)}
                  className="group w-full grid grid-cols-[2.5rem_2.5rem_minmax(0,1fr)_1.25rem] sm:grid-cols-[3rem_3.5rem_minmax(0,1fr)_1.5rem] gap-3 sm:gap-5 items-start py-5 sm:py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D9C7A5]"
                >
                  <span className="font-accent text-[10px] sm:text-[11px] tracking-[0.12em] text-[#D9C7A5]/75 pt-1">0{index + 1}</span>
                  <span className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#E0D9C9]/25 flex items-center justify-center text-[#D9C7A5] transition-colors duration-300 ${isExpanded ? 'bg-[#D9C7A5]/10 border-[#D9C7A5]/60' : ''}`}>
                    <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" aria-hidden="true" />
                  </span>
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

    <section id="founders-note" className="relative overflow-hidden bg-[#D8D0C1] text-[#242D36]" aria-labelledby="founders-note-title">
      <div className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-multiply" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
      }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32">
        <div className="flex items-center justify-between border-y border-[#242D36]/15 py-3 mb-10 sm:mb-14">
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#59212C]/80">03 / A note from our founders</span>
          <span className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#242D36]/45">With you, all the way</span>
        </div>
        <div className="max-w-5xl">
          <h2 id="founders-note-title" className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight">
            Elevate your lifestyle.<br /><span className="italic font-light text-[#59212C]">Express yourself.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#242D36]/75">
            Your home is a chance to show the world a little more of who you are. We’ll hold your hand from our first conversation to the day you settle in—listening, helping you find your way through the choices, and taking care of the details along the way.
          </p>
          <div className="mt-9 sm:mt-12 flex items-center gap-5 border-t border-[#242D36]/15 pt-6 sm:pt-8">
            <img src={foundersDesignTable} alt="The founders gathered around a design table" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#59212C]/25" loading="lazy" />
            <p className="max-w-lg font-serif-display italic text-base sm:text-xl leading-snug text-[#242D36]/70">
              We’re here to make the journey feel as thoughtful as the home.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
