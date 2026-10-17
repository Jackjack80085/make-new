import { getScrollBehavior } from '../utils/scroll';
import React from 'react';
import { MakeLogo } from './MakeLogo';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  onExploreSection?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onExploreSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  };

  const handleIndexClick = (id: string) => {
    if (onExploreSection) {
      onExploreSection(id);
      return;
    }
    if (window.location.pathname !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: getScrollBehavior() });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: getScrollBehavior() });
    }
  };

  return (
    <footer
      id="site-footer"
      className="relative w-full bg-[#E0D9C9] text-[#242D36] pt-12 md:pt-16 pb-8 overflow-hidden select-none border-t border-[#242D36]/12 paper-grain plaster-surface"
      aria-label="MAKE Site Footer"
    >
      {/* Subtle Tactile Grain */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='limestoneGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23limestoneGrain)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Masthead exactly matching Screenshot 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#242D36]/10">
          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus:outline-none"
              aria-label="make DEVELOPERS Home"
            >
              <MakeLogo variant="dark" size="md" />
            </button>
            <span className="w-px h-6 bg-[#242D36]/15 hidden sm:inline" />
            <span className="font-serif-display text-sm md:text-base italic text-[#59212C] hidden sm:inline font-normal">
              “Thoughtful living, carefully built.”
            </span>
          </div>

          <div className="text-[10px] font-accent uppercase tracking-[0.2em] text-[#242D36]/60">
            BANGALORE · RESIDENTIAL PRACTICE
          </div>
        </div>

        {/* Minimal 3-Column Architectural Registry */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 py-10 border-b border-[#242D36]/10 text-xs">
          {/* Column 1: Studio */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold mb-1">
              STUDIO
            </span>
            <p className="text-[#242D36]/80 font-light leading-relaxed">
              Indiranagar, Bangalore
              <br />
              12th Main Road, HAL 2nd Stage
            </p>
            <span className="text-[11px] text-[#242D36]/50 font-light mt-1">
              Visits by prior arrangement
            </span>
          </div>

          {/* Column 2: Inquiries */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold mb-1">
              INQUIRIES
            </span>
            <a
              href="mailto:hello@makedevelopers.com"
              className="text-[#242D36]/85 hover:text-[#59212C] transition-colors underline-offset-4 hover:underline"
            >
              hello@makedevelopers.com
            </a>
            <span className="text-[#242D36]/70 font-light">
              +91 80 4125 0920
            </span>
            <span className="text-[11px] text-[#242D36]/50 font-light mt-1">
              Mon – Sat, 9:30 AM — 6:30 PM
            </span>
          </div>

          {/* Column 3: Narrative Index */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold mb-1">
              INDEX
            </span>
            <div className="grid grid-cols-1 gap-1 text-[#242D36]/75">
              <button
                onClick={() => handleIndexClick('the-first-light')}
                className="text-left hover:text-[#59212C] transition-colors py-0.5"
              >
                01 / The First Light
              </button>
              <button
                onClick={() => handleIndexClick('the-feeling-of-home')}
                className="text-left hover:text-[#59212C] transition-colors py-0.5"
              >
                02 / The Feeling of Home
              </button>
              <button
                onClick={() => handleIndexClick('life-happens-here')}
                className="text-left hover:text-[#59212C] transition-colors py-0.5"
              >
                03 / Life Happens Here
              </button>
              <button
                onClick={() => handleIndexClick('a-place-to-belong')}
                className="text-left hover:text-[#59212C] transition-colors py-0.5"
              >
                04 / A Place to Belong
              </button>
              <button
                onClick={() => handleIndexClick('come-home')}
                className="text-left hover:text-[#59212C] transition-colors py-0.5"
              >
                05 / Come Home
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Baseline with Updated Legal Entity */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#242D36]/55 font-light">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <span>© 2026 MAKE Developers</span>
            <span>·</span>
            <span>A brand of Iron Kore Private Limited</span>
            <span>·</span>
            <span>Prototype lifestyle study</span>
            <span>·</span>
            <span className="hover:text-[#59212C] transition-colors cursor-pointer">Privacy approach</span>
            <span>·</span>
            <span>Bangalore</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[10px] font-accent uppercase tracking-widest text-[#59212C] hover:text-[#242D36] transition-colors py-1 shrink-0 font-medium"
            aria-label="Scroll to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
