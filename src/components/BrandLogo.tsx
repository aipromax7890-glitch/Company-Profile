import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showTagline = false 
}) => {
  // Height and aspect ratio constraints according to size variant
  const sizeStyles = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative overflow-hidden rounded-md transition-transform duration-300 ${sizeStyles[size]}`}>
        {/* Official uploaded logo image with dark blending */}
        <img
          src="/assets/aistudio/logo_UrbanNusaCyber_1ec4a51b.jpeg"
          alt="UrbanNusaCyber Logo"
          className="h-full w-auto object-contain object-left mix-blend-screen filter contrast-125 brightness-110 drop-shadow-[0_2px_12px_rgba(199,163,75,0.25)]"
          loading="eager"
        />
      </div>

      {showTagline && (
        <div className="hidden lg:flex flex-col border-l border-[#C7A34B]/30 pl-3">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C7A34B]">
            Cybersecurity
          </span>
          <span className="text-[9px] tracking-wider text-[#A5A39A]">
            Enterprise Defense & Web
          </span>
        </div>
      )}
    </div>
  );
};
