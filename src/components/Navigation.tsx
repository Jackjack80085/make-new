import React, { useState, useEffect } from 'react';
import { MakeLogo } from './MakeLogo';

interface NavigationProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenEnquiry: () => void;
  activeChapter?: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentRoute,
  onNavigate,
  onOpenEnquiry,
  activeChapter = 1,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Color Configurations when on Home page ('/')
  const getHeaderTheme = () => {
    if (currentRoute === '/about') {
      return {
        bg: 'bg-[#E0D9C9]/95 backdrop-blur-md border-b border-[#242D36]/15',
        text: 'text-[#242D36]',
        logoVariant: 'dark' as const,
        underline: 'after:bg-[#59212C]',
        activeIndicator: 'text-[#59212C] font-semibold',
        button: 'bg-[#59212C] text-[#E0D9C9] hover:bg-[#6e2936] border-transparent',
        mobileMenuBg: 'bg-[#E0D9C9] border-[#242D36]/15 text-[#242D36]',
        mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
      };
    }

    if (currentRoute !== '/') {
      return {
        bg: 'bg-[#E0D9C9]/95 backdrop-blur-md border-b border-[#242D36]/15',
        text: 'text-[#242D36]',
        logoVariant: 'dark' as const,
        underline: 'after:bg-[#59212C]',
        activeIndicator: 'text-[#59212C] font-semibold',
        button: 'bg-[#59212C] text-[#E0D9C9] hover:bg-[#6e2936] border-transparent',
        mobileMenuBg: 'bg-[#E0D9C9] border-[#242D36]/15 text-[#242D36]',
        mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
      };
    }

    switch (activeChapter) {
      case 2: // Limestone Beige
      case 4:
        return {
          bg: 'bg-[#E0D9C9]/92 backdrop-blur-md border-b border-[#242D36]/15',
          text: 'text-[#242D36]',
          logoVariant: 'dark' as const,
          underline: 'after:bg-[#59212C]',
          activeIndicator: 'text-[#59212C] font-semibold',
          button: 'border-[#59212C] text-[#59212C] hover:bg-[#59212C] hover:text-[#E0D9C9]',
          mobileMenuBg: 'bg-[#E0D9C9] border-[#242D36]/15 text-[#242D36]',
          mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
        };
      case 3: // Forest Ash
        return {
          bg: 'bg-[#2B392C]/92 backdrop-blur-md border-b border-[#E0D9C9]/15',
          text: 'text-[#E0D9C9]',
          logoVariant: 'limestone' as const,
          underline: 'after:bg-[#E0D9C9]',
          activeIndicator: 'text-[#E0D9C9] font-semibold',
          button: 'border-[#E0D9C9]/60 text-[#E0D9C9] hover:bg-[#E0D9C9] hover:text-[#2B392C]',
          mobileMenuBg: 'bg-[#2B392C] border-[#E0D9C9]/15 text-[#E0D9C9]',
          mobileButton: 'bg-[#E0D9C9] text-[#2B392C]',
        };
      case 5: // Burgundy Clay
        return {
          bg: 'bg-[#59212C]/92 backdrop-blur-md border-b border-[#E0D9C9]/15',
          text: 'text-[#E0D9C9]',
          logoVariant: 'limestone' as const,
          underline: 'after:bg-[#E0D9C9]',
          activeIndicator: 'text-[#E0D9C9] font-semibold',
          button: 'border-[#E0D9C9]/60 text-[#E0D9C9] hover:bg-[#E0D9C9] hover:text-[#59212C]',
          mobileMenuBg: 'bg-[#59212C] border-[#E0D9C9]/15 text-[#E0D9C9]',
          mobileButton: 'bg-[#E0D9C9] text-[#59212C]',
        };
      case 1:
      default: // First Light (Dark Hero)
        return {
          bg: scrolled
            ? 'bg-[#242D36]/90 backdrop-blur-md border-b border-white/10'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent border-b border-transparent',
          text: 'text-[#E0D9C9]',
          logoVariant: 'limestone' as const,
          underline: 'after:bg-[#E0D9C9]',
          activeIndicator: 'text-[#E0D9C9] font-semibold',
          button: 'border-[#E0D9C9]/60 text-[#E0D9C9] hover:bg-[#E0D9C9] hover:text-[#242D36]',
          mobileMenuBg: 'bg-[#242D36] border-white/10 text-[#E0D9C9]',
          mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
        };
    }
  };

  const theme = getHeaderTheme();

  const handleNavClick = (route: string) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${theme.bg} ${theme.text}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('/')}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-current p-1 -ml-1 transition-opacity duration-200"
          aria-label="make DEVELOPERS Home"
        >
          <MakeLogo variant={theme.logoVariant} size="md" />
        </button>

        {/* Primary Navigation Destinations: Home / Projects / About / Philosophy / Contact */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] tracking-[0.14em] uppercase font-medium"
          aria-label="Primary Navigation"
        >
          <button
            onClick={() => handleNavClick('/')}
            className={`transition-colors duration-200 py-2 relative ${
              currentRoute === '/' ? theme.activeIndicator : 'opacity-75 hover:opacity-100'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('/projects')}
            className={`transition-colors duration-200 py-2 relative ${
              currentRoute === '/projects' ? theme.activeIndicator : 'opacity-75 hover:opacity-100'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('/about')}
            className={`transition-colors duration-200 py-2 relative ${
              currentRoute === '/about' ? theme.activeIndicator : 'opacity-75 hover:opacity-100'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('/philosophy')}
            className={`transition-colors duration-200 py-2 relative ${
              currentRoute === '/philosophy' ? theme.activeIndicator : 'opacity-75 hover:opacity-100'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Philosophy
          </button>
          <button
            onClick={() => handleNavClick('/contact')}
            className={`transition-colors duration-200 py-2 relative ${
              currentRoute === '/contact' ? theme.activeIndicator : 'opacity-75 hover:opacity-100'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Contact
          </button>
        </nav>

        {/* Action: Rounded "Enquire" button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className={`text-xs md:text-sm tracking-[0.14em] uppercase font-medium px-6 py-3 rounded-full transition-all duration-200 min-h-[48px] inline-flex items-center justify-center border shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-current ${theme.button}`}
          >
            Enquire
          </button>

          {/* Mobile Menu Toggle (Circular) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-12 h-12 rounded-full flex flex-col justify-center items-center gap-1.5 focus:outline-none border border-current/20"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-0.5 transition-all duration-300 ${
                theme.logoVariant === 'dark' ? 'bg-[#242D36]' : 'bg-[#E0D9C9]'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-5 h-0.5 transition-all duration-300 ${
                theme.logoVariant === 'dark' ? 'bg-[#242D36]' : 'bg-[#E0D9C9]'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`w-5 h-0.5 transition-all duration-300 ${
                theme.logoVariant === 'dark' ? 'bg-[#242D36]' : 'bg-[#E0D9C9]'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-8 border-b flex flex-col gap-5 animate-in fade-in duration-200 ${theme.mobileMenuBg}`}
        >
          <button
            onClick={() => handleNavClick('/')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('/projects')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('/about')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('/philosophy')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Philosophy
          </button>
          <button
            onClick={() => handleNavClick('/contact')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Contact
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className={`text-center py-3.5 uppercase tracking-[0.14em] text-xs font-medium mt-2 rounded-full shadow-sm min-h-[48px] ${theme.mobileButton}`}
          >
            Say hello
          </button>
        </div>
      )}
    </header>
  );
};
