import React from 'react';

interface MakeLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'limestone' | 'burgundy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

// Standalone vector emblem with arch, rabbit, butterfly, and foliage
export const MakeEmblem: React.FC<{
  fill?: string;
  className?: string;
  opacity?: number;
}> = ({ fill, className = '', opacity = 1 }) => {
  // Determine variant or default to limestone
  let emblemSrc = '/make-emblem-limestone.png';
  if (fill) {
    const f = fill.toLowerCase();
    if (f === '#242d36' || f === '#14181e' || f === 'dark' || f === '#1a1f26') {
      emblemSrc = '/make-emblem-dark.png';
    } else if (f === '#59212c' || f === 'burgundy' || f === '#591f2d') {
      emblemSrc = '/make-emblem-burgundy.png';
    } else if (f === '#ffffff' || f === 'white' || f === '#fff') {
      emblemSrc = '/make-emblem-white.png';
    } else {
      emblemSrc = '/make-emblem-limestone.png';
    }
  }

  return (
    <img
      src={emblemSrc}
      alt="Make Developers Arch Emblem"
      className={`object-contain select-none pointer-events-none ${className}`}
      style={{ opacity }}
      draggable={false}
      aria-hidden="true"
    />
  );
};

export const MakeLogo: React.FC<MakeLogoProps> = ({
  className = '',
  variant = 'limestone',
  size = 'md',
  showWordmark = true,
}) => {
  const sizeClasses = {
    sm: showWordmark ? 'h-8' : 'h-7',
    md: showWordmark ? 'h-10 sm:h-11' : 'h-9',
    lg: showWordmark ? 'h-14 sm:h-16' : 'h-13',
    xl: showWordmark ? 'h-20 sm:h-24' : 'h-18',
  };

  const logoSrc = showWordmark
    ? `/make-logo-${variant}.png`
    : `/make-emblem-${variant}.png`;

  return (
    <div className={`inline-flex items-center select-none transition-transform duration-300 ${className}`}>
      <img
        src={logoSrc}
        alt="make DEVELOPERS"
        className={`${sizeClasses[size]} w-auto object-contain block`}
        draggable={false}
      />
    </div>
  );
};

