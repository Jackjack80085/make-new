import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { ProjectData } from '../config/brand';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onEnquire }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#242D36]/80 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-3xl bg-[#E0D9C9] paper-grain plaster-surface text-[#242D36] border border-[#242D36]/20 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-[#242D36]/15 flex items-center justify-between bg-[#E0D9C9]/95 backdrop-blur-sm sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#59212C] font-accent font-semibold mb-1">
                  <span>PROJECT OVERVIEW</span>
                  <span>·</span>
                  <span>{project.status}</span>
                </div>
                <h2 id="project-modal-title" className="font-serif-display text-2xl sm:text-3xl font-normal text-[#242D36]">
                  {project.name}
                </h2>
              </div>

              {/* Circular Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-[#242D36]/20 hover:border-[#59212C] hover:text-[#59212C] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]"
                aria-label="Close project details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8">
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-sm">
                <img
                  src={project.image}
                  alt={project.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#E0D9C9]/95 px-4 py-1.5 rounded-full border border-[#242D36]/15 text-xs font-accent tracking-wider text-[#59212C] uppercase shadow-sm">
                  {project.status}
                </div>
              </div>

              {/* Verified Information */}
              <div className="space-y-4">
                <p className="font-serif-display text-xl sm:text-2xl italic text-[#59212C]">
                  “{project.tagline}”
                </p>

                <p className="text-[18px] text-[#242D36]/85 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Verified Project Attributes (No invented claims) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#242D36]/15">
                <div className="flex items-center gap-3 p-4 bg-[#E5DFD0]/80 border border-[#242D36]/10">
                  <MapPin className="w-5 h-5 text-[#59212C] shrink-0" />
                  <div>
                    <div className="text-[10px] font-accent uppercase tracking-wider text-[#242D36]/50">
                      Location
                    </div>
                    <div className="text-sm font-medium text-[#242D36]">
                      {project.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#E5DFD0]/80 border border-[#242D36]/10">
                  <CheckCircle2 className="w-5 h-5 text-[#59212C] shrink-0" />
                  <div>
                    <div className="text-[10px] font-accent uppercase tracking-wider text-[#242D36]/50">
                      Current Phase
                    </div>
                    <div className="text-sm font-medium text-[#242D36]">
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-6 md:p-8 bg-[#D8D0BF]/50 border-t border-[#242D36]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#242D36]/70 font-accent">
                Interested in {project.name}?
              </span>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-[#242D36]/25 hover:border-[#242D36] text-xs font-accent uppercase tracking-widest text-[#242D36] rounded-full transition-colors min-h-[48px] flex-1 sm:flex-initial"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onEnquire(project.name);
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#59212C] text-[#E0D9C9] hover:bg-[#6e2936] px-8 py-3 text-xs font-accent uppercase tracking-widest font-medium rounded-full transition-colors min-h-[48px] flex-1 sm:flex-initial shadow-sm"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
