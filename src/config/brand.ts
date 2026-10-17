/**
 * MAKE Developers - Central Brand Configuration & Verified Data Register
 * 
 * Centralised store for verified project details, company story, founders,
 * philosophy principles, and contact information.
 * Any unverified values (e.g. speculative RERA, pricing, or unconfirmed phones)
 * are omitted rather than invented.
 */

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  location: string;
  status: 'Coming Soon' | 'Completed';
  summary: string;
  description: string;
  image: string;
  alt: string;
}

export const BRAND_CONFIG = {
  name: 'make DEVELOPERS',
  legalEntity: 'Iron Kore Private Limited',
  copyrightYear: 2026,
  
  // Primary identity palette
  colors: {
    burgundy: '#59212C',
    limestone: '#E0D9C9',
    forest: '#2B392C',
    charcoal: '#242D36',
    earth: '#32281F',
    white: '#FFFFFF',
    black: '#000000',
  },

  // Central contact points
  contact: {
    email: 'hello@makedevelopers.com',
    location: 'Indiranagar, Bangalore',
    hours: 'Monday – Saturday, 9:30 AM — 6:30 PM',
    note: 'We read every message and write back personally. Just say hello.',
  },

  // Verified projects (no invented square footage, prices, or speculative claims)
  projects: [
    {
      id: 'make-sampigehalli',
      name: 'Make Sampigehalli',
      tagline: 'Homes that feel like home from the first day. North Bengaluru.',
      location: 'North Bengaluru',
      status: 'Coming Soon' as const,
      summary: 'Homes that feel like home from the first day.',
      description:
        'A residential community shaped around the natural pace of everyday life. Generous domestic spaces, daylight calibrated through the seasons, and thoughtful transitions between shared gardens and private hearths.',
      image: '/src/assets/images/architectural_residence_1791013875636.jpg',
      alt: 'Architectural study of Make Sampigehalli with courtyards and natural daylight in North Bengaluru',
    },
    {
      id: 'make-borough',
      name: 'Make Borough',
      tagline: 'Where it began. Completed and handed over.',
      location: 'Bengaluru',
      status: 'Completed' as const,
      summary: 'Where it began. Completed and handed over.',
      description:
        'The foundational MAKE project where our principles were first built into stone, timber, and everyday domestic routines. Thought through from the inside out and now home to its residents.',
      image: '/src/assets/images/hero_sunlit_home_1791013817349.jpg',
      alt: 'Completed Make Borough residence showing honest materials and tranquil living spaces',
    },
  ],

  // Founders and company story
  about: {
    founders: ['Gautham', 'Anish', 'Sidharth'],
    story:
      'We started MAKE because we felt something was missing in the way homes were being built. Not ambition or scale, but genuine care for the person who would live there.\n\nThat is what we try to bring to every project. We think about how a space will be used, ask questions that make us look again, and pay attention to details people may never consciously notice, but feel every day.',
    foundersNote:
      '“We looked at what was being built and knew something was missing. Not scale, not ambition — just care. So we decided to build it ourselves.”',
    foundersAttribution: 'Gautham, Anish & Sidharth',
  },

  // Three core architectural principles
  philosophy: [
    {
      number: '01',
      title: 'Inside Out',
      description:
        'We begin with how a home feels on an ordinary Tuesday. The plan follows the life.',
    },
    {
      number: '02',
      title: 'Nothing Without Purpose',
      description:
        'Every detail should make a space better to live in. If it does not, it does not belong.',
    },
    {
      number: '03',
      title: 'Quietly Considered',
      description:
        'A window placed just right. A corner that works. Details you notice slowly, once life settles in.',
    },
  ],

  // Missing Asset Register for client handover
  missingAssets: [
    {
      item: 'Original Transparent Emblem Asset',
      status: 'Pending Client Upload',
      note: 'High-res transparent vector or PNG of the emblem featuring the arch, rabbit, butterfly, and foliage without opaque background. A clean arch contour is currently used as a faithful placeholder.',
    },
    {
      item: 'Licensed Typography Files',
      status: 'System Fallbacks Active',
      note: 'Web font files for Recoleta (display) and Rawline/Nohemi (body/accents). Currently mapped through CSS font-family stacks.',
    },
    {
      item: 'Original Founder Portraits',
      status: 'Pending Client Upload',
      note: 'Authentic portraits of Gautham, Anish, and Sidharth. Fictional or synthetic portraits are strictly avoided per brand guidelines.',
    },
    {
      item: 'Direct Telephone / WhatsApp Channel',
      status: 'Pending Verification',
      note: 'Direct phone lines will be published once officially assigned to the Indiranagar studio desk.',
    },
  ],
};
