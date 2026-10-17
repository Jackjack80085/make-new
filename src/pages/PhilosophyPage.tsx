import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import morning from '../assets/images/morning_ritual_breakfast_1791013841349.jpg';
import architecture from '../assets/images/architectural_residence_1791013875636.jpg';
import quiet from '../assets/images/solitude_quiet_corner_1791013863623.jpg';

interface PhilosophyPageProps {
  onNavigateHome: () => void;
  onOpenEnquiry: () => void;
  onNavigateProjects?: () => void;
}
const images = [morning, architecture, quiet];
export const PhilosophyPage: React.FC<PhilosophyPageProps> = () => (
  <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 bg-[#E0D9C9] text-[#242D36] paper-grain">
    <div className="relative z-10 max-w-7xl mx-auto">
      <header className="pb-10 border-b border-[#242D36]/15">
        <h1 className="text-4xl sm:text-6xl mb-6">Philosophy</h1>
        <p className="text-lg sm:text-xl font-light leading-relaxed max-w-3xl">We think about homes a little differently. For us, a home is not a unit to deliver — it is a place someone will quietly shape their life around.</p>
      </header>
      <div className="space-y-16 sm:space-y-24 mt-12">
        {BRAND_CONFIG.philosophy.map((principle, index) => (
          <section key={principle.number} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <img src={images[index]} alt={['Morning light across a breakfast table', 'A residence opening onto greenery', 'A quiet corner for reading'][index]} className={`w-full aspect-[4/3] object-cover rounded-2xl ${index % 2 ? 'lg:order-2' : ''}`} />
            <div>
              <span className="text-xs tracking-widest text-[#59212C]">{principle.number}</span>
              <h2 className="text-3xl sm:text-4xl my-4">{principle.title}</h2>
              <p className="text-lg font-light leading-relaxed">{principle.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  </div>
);
