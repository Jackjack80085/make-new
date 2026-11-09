import React from 'react';
import { ArrowUp } from 'lucide-react';
import { getScrollBehavior } from '../utils/scroll';
import { MakeLogo } from './MakeLogo';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  };

  return (
    <footer
      id="site-footer"
      className="paper-grain plaster-surface relative w-full overflow-hidden border-t border-[#242D36]/12 bg-[#E0D9C9] pt-10 pb-7 text-[#242D36]"
      aria-label="MAKE Site Footer"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='limestoneGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23limestoneGrain)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-8 border-b border-[#242D36]/15 pb-9 sm:grid-cols-3 sm:gap-10 lg:gap-16">
          <div className="flex flex-col items-start gap-3">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
              aria-label="make DEVELOPERS Home"
            >
              <MakeLogo variant="dark" size="md" />
            </button>
            <p className="text-xs leading-relaxed text-[#242D36]/70">
              A brand of Iron Kore Private Limited
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
            <h2 className="font-accent text-[10px] uppercase tracking-[0.22em] text-[#59212C]">
              Navigation
            </h2>
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="text-sm text-[#242D36]/80 transition-colors hover:text-[#59212C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
            >
              Contact
            </button>
          </nav>

          <div className="flex flex-col items-start gap-3">
            <h2 className="font-accent text-[10px] uppercase tracking-[0.22em] text-[#59212C]">
              Registered Address
            </h2>
            <p className="text-sm leading-relaxed text-[#242D36]/70">
              [Registered Address]
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-5 text-[11px] text-[#242D36]/60 sm:flex-row sm:items-center">
          <p>© 2026 Iron Kore Private Limited. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex shrink-0 items-center gap-1.5 py-1 font-accent text-[10px] font-medium uppercase tracking-[0.18em] text-[#59212C] transition-colors hover:text-[#242D36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
