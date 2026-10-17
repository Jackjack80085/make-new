import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name.';
    if (!contact.trim()) errs.contact = 'Please provide an email or telephone number.';
    if (!message.trim()) errs.message = 'Please share a brief note.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In this frontend build without a live mailing backend, reflect verified simulation
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full pt-32 pb-24 paper-grain plaster-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Header */}
        <div className="border-b border-[#242D36]/15 pb-10 mb-16">
          <div className="text-xs font-accent uppercase tracking-[0.24em] text-[#59212C] font-semibold mb-4">
            CONTACT · DIRECT CONVERSATION
          </div>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#242D36] tracking-tight mb-6">
            Say hello.
          </h1>
          <p className="text-[18px] md:text-xl text-[#242D36]/80 font-light max-w-2xl leading-relaxed">
            We read every message and write back personally. Just say hello.
          </p>
        </div>

        {/* Grid: Contact Information & Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Verified Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 bg-[#E5DFD0]/60 border border-[#242D36]/15 p-8 sm:p-10 shadow-xs">
            <div>
              <span className="text-xs font-accent uppercase tracking-widest text-[#59212C] font-semibold block mb-2">
                STUDIO PRESENCE
              </span>
              <p className="text-[18px] text-[#242D36] font-light leading-relaxed">
                {BRAND_CONFIG.contact.location}
              </p>
              <p className="text-xs text-[#242D36]/60 font-light mt-1">
                Visits by prior arrangement
              </p>
            </div>

            <div className="pt-6 border-t border-[#242D36]/15">
              <span className="text-xs font-accent uppercase tracking-widest text-[#59212C] font-semibold block mb-2">
                ELECTRONIC MAIL
              </span>
              <a
                href={`mailto:${BRAND_CONFIG.contact.email}`}
                className="text-[18px] text-[#242D36] hover:text-[#59212C] transition-colors underline-offset-4 hover:underline font-light"
              >
                {BRAND_CONFIG.contact.email}
              </a>
            </div>

            <div className="pt-6 border-t border-[#242D36]/15">
              <span className="text-xs font-accent uppercase tracking-widest text-[#59212C] font-semibold block mb-2">
                OFFICE HOURS
              </span>
              <p className="text-sm text-[#242D36]/80 font-light">
                {BRAND_CONFIG.contact.hours}
              </p>
            </div>

            <div className="pt-6 border-t border-[#242D36]/15">
              <span className="text-[11px] font-accent uppercase tracking-wider text-[#242D36]/50 block mb-1">
                DIRECT TELEPHONE NOTICE
              </span>
              <p className="text-xs text-[#242D36]/60 font-light">
                Dedicated telephone channels are currently being configured for our Indiranagar studio desk.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#E0D9C9] border border-[#242D36]/15 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#59212C] text-[#E0D9C9] flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-3xl text-[#242D36]">
                  Thank you for saying hello.
                </h3>
                <p className="text-[18px] text-[#242D36]/80 font-light max-w-md mx-auto leading-relaxed">
                  We read every message and write back personally. Our team will be in touch with you shortly.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setContact('');
                      setMessage('');
                    }}
                    className="px-8 py-3.5 border border-[#242D36]/30 hover:border-[#59212C] hover:text-[#59212C] text-xs font-accent uppercase tracking-wider rounded-full transition-colors min-h-[48px]"
                  >
                    Send another note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h3 className="font-serif-display text-2xl text-[#242D36] mb-2">
                    Send a note
                  </h3>
                  <p className="text-xs text-[#242D36]/70 font-light">
                    Share what you’re looking for in a home, or simply begin an unhurried conversation.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-xs font-accent uppercase tracking-wider text-[#242D36]">
                    Your Name <span className="text-[#59212C]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="Enter your name"
                    className={`w-full bg-white/90 border ${
                      errors.name ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/20'
                    } rounded-[16px] px-4 py-3.5 text-sm text-[#242D36] focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-[#59212C] font-accent">{errors.name}</p>}
                </div>

                {/* Email or Phone */}
                <div className="space-y-2">
                  <label htmlFor="contact-detail" className="block text-xs font-accent uppercase tracking-wider text-[#242D36]">
                    Email or Phone <span className="text-[#59212C]">*</span>
                  </label>
                  <input
                    id="contact-detail"
                    type="text"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (errors.contact) setErrors((prev) => ({ ...prev, contact: '' }));
                    }}
                    placeholder="name@example.com or +91 98000 00000"
                    className={`w-full bg-white/90 border ${
                      errors.contact ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/20'
                    } rounded-[16px] px-4 py-3.5 text-sm text-[#242D36] focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                  />
                  {errors.contact && <p className="text-xs text-[#59212C] font-accent">{errors.contact}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-accent uppercase tracking-wider text-[#242D36]">
                    Message <span className="text-[#59212C]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    placeholder="Tell us what home means to you..."
                    className={`w-full bg-white/90 border ${
                      errors.message ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/20'
                    } rounded-[16px] px-4 py-3.5 text-sm text-[#242D36] focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                  />
                  {errors.message && <p className="text-xs text-[#59212C] font-accent">{errors.message}</p>}
                </div>

                {/* Submit button: rounded-full, min-h: 48-52px */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#59212C] text-[#E0D9C9] hover:bg-[#6e2936] text-xs font-accent uppercase tracking-[0.16em] font-medium rounded-full shadow-sm transition-colors min-h-[48px]"
                  >
                    <span>Send message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
