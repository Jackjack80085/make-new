import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
  onNavigateContact?: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialProject = '',
  onNavigateContact,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [projectPreference, setProjectPreference] = useState(initialProject);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialProject) {
      setProjectPreference(initialProject);
    }
  }, [initialProject]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 150);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }

        if (e.key === 'Tab' && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!contact.trim()) {
      newErrors.contact = 'Please provide an email or telephone number.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please share a brief note.';
    }

    if (!consent) {
      newErrors.consent = 'Please confirm consent for us to respond.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setMessage('');
    setConsent(false);
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-drawer-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#242D36]/80 backdrop-blur-xs"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Side Sheet Container */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 max-w-full w-full sm:max-w-lg bg-[#E0D9C9] paper-grain plaster-surface text-[#242D36] border-l border-[#242D36]/15 shadow-2xl z-10 flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 md:p-8 border-b border-[#242D36]/15 flex items-center justify-between bg-[#E0D9C9]/95 backdrop-blur-sm sticky top-0 z-20">
              <div>
                <span className="text-[10px] font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold block mb-1">
                  MAKE DIRECT ENQUIRY
                </span>
                <h2 id="enquiry-drawer-title" className="font-serif-display text-2xl sm:text-3xl font-normal text-[#242D36]">
                  Start a conversation.
                </h2>
              </div>

              {/* Circular Close Button */}
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full border border-[#242D36]/20 hover:border-[#59212C] hover:text-[#59212C] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59212C]"
                aria-label="Close enquiry panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#59212C] text-[#E0D9C9] flex items-center justify-center mx-auto mb-6">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-display text-2xl md:text-3xl text-[#242D36] mb-3">
                    Thank you, {name}.
                  </h3>
                  <p className="text-[18px] text-[#242D36]/80 font-light leading-relaxed mb-8">
                    We read every message and write back personally. Our studio will reach out to you via {contact} soon.
                  </p>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center bg-[#59212C] text-[#E0D9C9] hover:bg-[#6e2936] px-8 py-3.5 text-xs tracking-[0.16em] uppercase font-medium rounded-full transition-colors min-h-[48px]"
                  >
                    Return to website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <p className="text-[18px] text-[#242D36]/80 font-light leading-relaxed pb-2 border-b border-[#242D36]/10">
                    We read every message and write back personally. Just say hello.
                  </p>

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-name" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]">
                      Your Name <span className="text-[#59212C]">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      id="enquiry-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      placeholder="e.g. Elena Vance"
                      className={`w-full bg-[#FFFFFF]/90 border ${
                        errors.name ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/25'
                      } rounded-[16px] px-4 py-3 text-sm text-[#242D36] placeholder-[#242D36]/40 focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#59212C] font-accent">{errors.name}</p>
                    )}
                  </div>

                  {/* Email / Phone Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-contact" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]">
                      Email or Phone <span className="text-[#59212C]">*</span>
                    </label>
                    <input
                      id="enquiry-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                        if (errors.contact) setErrors((prev) => ({ ...prev, contact: '' }));
                      }}
                      placeholder="name@domain.com or +91 98450 00000"
                      className={`w-full bg-[#FFFFFF]/90 border ${
                        errors.contact ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/25'
                      } rounded-[16px] px-4 py-3 text-sm text-[#242D36] placeholder-[#242D36]/40 focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                    />
                    {errors.contact && (
                      <p className="text-xs text-[#59212C] font-accent">{errors.contact}</p>
                    )}
                  </div>

                  {/* Project Preference (Verified projects only) */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-project" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]/80">
                      Project Preference <span className="text-[10px] text-[#242D36]/50">(Optional)</span>
                    </label>
                    <select
                      id="enquiry-project"
                      value={projectPreference}
                      onChange={(e) => setProjectPreference(e.target.value)}
                      className="w-full bg-[#FFFFFF]/90 border border-[#242D36]/25 rounded-[16px] px-4 py-3 text-sm text-[#242D36] focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors"
                    >
                      <option value="">General conversation / Open consultation</option>
                      {BRAND_CONFIG.projects.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.status})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-message" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]">
                      Message <span className="text-[#59212C]">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                      }}
                      placeholder="Tell us what home means to you..."
                      className={`w-full bg-[#FFFFFF]/90 border ${
                        errors.message ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/25'
                      } rounded-[16px] px-4 py-3 text-sm text-[#242D36] placeholder-[#242D36]/40 focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#59212C] font-accent">{errors.message}</p>
                    )}
                  </div>

                  {/* Consent and Privacy Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                        }}
                        className="mt-1 h-4 w-4 rounded border-[#242D36]/40 text-[#59212C] focus:ring-[#59212C] accent-[#59212C]"
                      />
                      <span className="text-xs text-[#242D36]/80 leading-relaxed font-light">
                        I agree to share these details for a direct conversation with MAKE Developers.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-[#59212C] font-accent mt-1.5 ml-7">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Rounded Submit Button: rounded-full, min-h: 48-52px */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center bg-[#59212C] text-[#E0D9C9] hover:bg-[#6e2936] py-3.5 text-xs tracking-[0.16em] uppercase font-medium rounded-full transition-colors min-h-[48px] shadow-sm"
                    >
                      Send note
                    </button>
                  </div>

                  {/* Dedicated Contact Page Link */}
                  {onNavigateContact && (
                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          handleClose();
                          onNavigateContact();
                        }}
                        className="text-xs text-[#59212C] underline hover:text-[#242D36] transition-colors"
                      >
                        Visit full contact page
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Panel Footer */}
            <div className="p-6 md:p-8 bg-[#D8D0BF]/50 border-t border-[#242D36]/10 text-xs text-[#242D36]/70 leading-relaxed">
              <span className="font-semibold text-[#59212C]">STUDIO DESK:</span> Indiranagar, Bangalore · {BRAND_CONFIG.contact.email}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
