import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import foundersDesignTable from '../assets/images/founders_design_table_1792166121676.jpg';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenEnquiry: () => void;
  onNavigateProjects?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => (
  <div className="bg-[#E0D9C9] paper-grain text-[#242D36] pt-32 pb-20 px-6 md:px-12 lg:px-20">
    <div className="relative z-10 max-w-7xl mx-auto">
      <header className="border-b border-[#242D36]/15 pb-8 mb-10">
        <span className="text-xs font-accent uppercase tracking-[0.24em] text-[#59212C]">About</span>
        <h1 className="text-4xl sm:text-6xl mt-4">make DEVELOPERS</h1>
      </header>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="space-y-6 text-lg leading-relaxed font-light">
          {BRAND_CONFIG.about.story.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <img src={foundersDesignTable} alt="Architectural drawings and materials on a design table" className="w-full aspect-[4/3] object-cover rounded-2xl" />
      </div>
      <figure className="mt-16 sm:mt-24 max-w-4xl mx-auto border-y border-[#242D36]/15 py-10 sm:py-16">
        <blockquote className="font-serif-display text-2xl sm:text-4xl leading-relaxed text-[#59212C]">{BRAND_CONFIG.about.foundersNote}</blockquote>
        <figcaption className="mt-6 text-sm">— {BRAND_CONFIG.about.foundersAttribution}</figcaption>
      </figure>
      <div className="mt-10 text-center"><button onClick={onOpenEnquiry} className="min-h-12 px-8 py-3 rounded-full bg-[#59212C] text-[#E0D9C9] text-sm">Say hello</button></div>
    </div>
  </div>
);
