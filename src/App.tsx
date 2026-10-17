import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Chapter1FirstLight } from './components/Chapter1FirstLight';
import { Chapter2FeelingOfHome } from './components/Chapter2FeelingOfHome';
import { Chapter3LifeHappensHere } from './components/Chapter3LifeHappensHere';
import { Chapter4PlaceToBelong } from './components/Chapter4PlaceToBelong';
import { Chapter5ComeHome } from './components/Chapter5ComeHome';
import { Footer } from './components/Footer';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectData } from './config/brand';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (['/projects', '/about', '/philosophy', '/contact'].includes(path)) {
        return path;
      }
    }
    return '/';
  });

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProjectForEnquiry, setSelectedProjectForEnquiry] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectData | null>(null);
  const [activeChapter, setActiveChapter] = useState(1);

  // Sync route with browser popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentRoute(['/projects', '/about', '/philosophy', '/contact'].includes(path) ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    if (route !== currentRoute) {
      setCurrentRoute(route);
      window.history.pushState({}, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Intersection Observer-based animation system with cubic-bezier(0.22, 1, 0.36, 1)
  // and reduced-motion accessibility compliance
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');

      // Accessibility: if reduced motion is preferred, immediately reveal all elements without motion
      if (mediaQuery.matches) {
        elements.forEach((el) => {
          el.classList.add('is-revealed');
        });
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        return;
      }

      // Intersection Observer with custom cubic-bezier threshold
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('is-revealed');
        } else {
          observer?.observe(el);
        }
      });
    };

    setupObserver();

    const handleMotionChange = () => {
      setupObserver();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    const mutationObserver = new MutationObserver(() => {
      if (!mediaQuery.matches && observer) {
        document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          observer?.observe(el);
        });
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, [currentRoute]);

  // Monitor scroll position on Home page to determine active chapter for header theme
  useEffect(() => {
    if (currentRoute !== '/') return;

    const handleScroll = () => {
      const chapters = [
        { id: 'the-first-light', chapter: 1 },
        { id: 'the-feeling-of-home', chapter: 2 },
        { id: 'life-happens-here', chapter: 3 },
        { id: 'a-place-to-belong', chapter: 4 },
        { id: 'come-home', chapter: 5 },
        { id: 'site-footer', chapter: 2 },
      ];

      const headerY = 40;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerY && rect.bottom > headerY) {
            setActiveChapter(chapters[i].chapter);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleOpenEnquiry = (initialProject?: string) => {
    setSelectedProjectForEnquiry(initialProject || '');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (currentRoute !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E0D9C9] text-[#242D36] flex flex-col relative selection:bg-[#59212C] selection:text-[#E0D9C9]">
      {/* Top Navigation */}
      <Navigation
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry()}
        activeChapter={activeChapter}
      />

      {/* Main Content with short fade transitions */}
      <main className="flex-1 w-full flex flex-col">
        <AnimatePresence mode="wait">
          {currentRoute === '/' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 w-full flex flex-col"
            >
              {/* Chapter 1: The First Light */}
              <Chapter1FirstLight
                onDiscoverClick={() => scrollToSection('the-feeling-of-home')}
              />

              {/* Chapter 2: The Feeling of Home */}
              <Chapter2FeelingOfHome
                onNavigatePhilosophy={() => navigateTo('/philosophy')}
                onNavigateAbout={() => navigateTo('/about')}
              />

              {/* Chapter 3: Life Happens Here */}
              <Chapter3LifeHappensHere
                onDiscoverHomes={() => scrollToSection('a-place-to-belong')}
              />

              {/* Chapter 4: A Place to Belong (Our Work: Make Sampigehalli & Make Borough) */}
              <Chapter4PlaceToBelong
                onExploreProject={(project) => setActiveProjectModal(project)}
              />

              {/* Chapter 5: Come Home */}
              <Chapter5ComeHome
                onStartConversation={() => handleOpenEnquiry()}
              />
            </motion.div>
          )}

          {currentRoute === '/projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectsPage
                onExploreProject={(project) => setActiveProjectModal(project)}
                onOpenEnquiry={(projectName) => handleOpenEnquiry(projectName)}
                onNavigateHome={() => navigateTo('/')}
              />
            </motion.div>
          )}

          {currentRoute === '/about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-screen overflow-hidden"
            >
              <AboutPage
                onNavigateHome={() => navigateTo('/')}
                onOpenEnquiry={() => handleOpenEnquiry()}
                onNavigateProjects={() => navigateTo('/projects')}
              />
            </motion.div>
          )}

          {currentRoute === '/philosophy' && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <PhilosophyPage
                onNavigateHome={() => navigateTo('/')}
                onOpenEnquiry={() => handleOpenEnquiry()}
                onNavigateProjects={() => navigateTo('/projects')}
              />
            </motion.div>
          )}

          {currentRoute === '/contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ContactPage
                onNavigateHome={() => navigateTo('/')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Brand Footer (omitted on full-viewport scroll-snapped About page which has its own integrated covenant plinth) */}
      {currentRoute !== '/about' && <Footer onNavigate={navigateTo} />}

      {/* Direct Enquiry Side Panel */}
      <EnquiryDrawer
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialProject={selectedProjectForEnquiry}
        onNavigateContact={() => navigateTo('/contact')}
      />

      {/* Simplified Project Overview Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onEnquire={(projectName) => {
          setActiveProjectModal(null);
          handleOpenEnquiry(projectName);
        }}
      />
    </div>
  );
}
