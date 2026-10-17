import React from 'react';
import { MakeLogo } from './MakeLogo';
import { BRAND_CONFIG } from '../config/brand';

interface FooterProps {
  onNavigate: (route: string) => void;
  onExploreSection?: (id: string) => void;
}
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer id="site-footer" className="bg-[#E0D9C9] text-[#242D36] px-6 md:px-12 lg:px-20 py-10 border-t border-[#242D36]/15" aria-label="MAKE Site Footer">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 items-start pb-8">
        <div>
          <button onClick={() => onNavigate('/')} aria-label="make DEVELOPERS Home"><MakeLogo variant="dark" size="md" /></button>
          <p className="text-sm mt-4">A brand of {BRAND_CONFIG.legalEntity}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {['Home', 'Projects', 'About', 'Philosophy', 'Contact'].map(label => <button key={label} onClick={() => onNavigate(label === 'Home' ? '/' : `/${label.toLowerCase()}`)} className="min-h-11 hover:text-[#59212C]">{label}</button>)}
        </nav>
      </div>
      <p className="border-t border-[#242D36]/15 pt-6 text-xs">© 2026 Iron Kore Private Limited. All rights reserved.</p>
    </div>
  </footer>
);
