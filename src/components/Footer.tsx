import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { getScrollBehavior } from '../utils/scroll';
import { MakeLogo } from './MakeLogo';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenEnquiry: () => void;
  onExploreSection: (id: string) => void;
}

const indexLinks = [
  ['01', 'The First Light', 'the-first-light'],
  ['02', 'The Life', 'home-lifestyle'],
  ['03', 'The Home', 'home-design'],
  ['04', "A Note from Our Founders", 'founders-note'],
] as const;

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry, onExploreSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  };

  return (
    <footer
      id="site-footer"
      className="paper-grain plaster-surface relative w-full overflow-hidden border-t border-[#242D36]/12 bg-[#E0D9C9] pt-10 pb-7 text-[#242D36] sm:pt-14"
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
        <div className="flex flex-col gap-6 border-b border-[#242D36]/15 pb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pb-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <button
              onClick={() => onNavigate('/')}
              className="w-fit text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
              aria-label="make DEVELOPERS Home"
            >
              <MakeLogo variant="dark" size="md" />
            </button>
            <span className="hidden h-12 w-px bg-[#242D36]/20 sm:block" aria-hidden="true" />
            <p className="font-serif-display text-xl italic leading-tight text-[#59212C] sm:text-2xl">
              Thoughtful living, carefully built.
            </p>
          </div>
          <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#242D36]/55 sm:text-right">
            Bangalore · Residential Practice
          </p>
        </div>

        <div className="grid grid-cols-1 gap-9 border-b border-[#242D36]/15 py-9 sm:grid-cols-3 sm:gap-10 sm:py-12 lg:gap-16 lg:py-14">
          <section aria-labelledby="footer-studio-heading" className="flex flex-col items-start gap-3">
            <h2 id="footer-studio-heading" className="font-accent text-[10px] uppercase tracking-[0.22em] text-[#59212C]">
              Studio
            </h2>
            <div className="text-sm leading-relaxed text-[#242D36]/75">
              <p>{BRAND_CONFIG.contact.location}</p>
              <p>A brand of Iron Kore Private Limited</p>
            </div>
            <p className="text-sm text-[#242D36]/50">[Registered Address]</p>
          </section>

          <section aria-labelledby="footer-inquiries-heading" className="flex flex-col items-start gap-3">
            <h2 id="footer-inquiries-heading" className="font-accent text-[10px] uppercase tracking-[0.22em] text-[#59212C]">
              Inquiries
            </h2>
            <a
              href={`mailto:${BRAND_CONFIG.contact.email}`}
              className="text-sm text-[#242D36]/75 transition-colors hover:text-[#59212C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
            >
              {BRAND_CONFIG.contact.email}
            </a>
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="text-sm text-[#242D36]/50 transition-colors hover:text-[#59212C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
            >
              Contact
            </button>
          </section>

          <nav aria-label="Page index" className="flex flex-col items-start gap-3">
            <h2 className="font-accent text-[10px] uppercase tracking-[0.22em] text-[#59212C]">
              Index
            </h2>
            <ol className="flex flex-col items-start gap-2.5">
              {indexLinks.map(([number, label, sectionId]) => (
                <li key={sectionId}>
                  <button
                    type="button"
                    onClick={() => onExploreSection(sectionId)}
                    className="text-sm text-[#242D36]/75 transition-colors hover:text-[#59212C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
                  >
                    <span className="tabular-nums text-[#242D36]/50">{number}</span>
                    <span aria-hidden="true"> / </span>
                    {label}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-5 text-[11px] text-[#242D36]/55 sm:flex-row sm:items-center">
          <p>© 2026 Iron Kore Private Limited. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex shrink-0 items-center gap-2 py-1 font-accent text-[10px] font-medium uppercase tracking-[0.18em] text-[#59212C] transition-colors hover:text-[#242D36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]/50"
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
