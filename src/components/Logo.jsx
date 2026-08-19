import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* SVG Icon */}
      <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
        {/* Left figure */}
        <circle cx="25" cy="35" r="9" className="fill-finova-navy" />
        <path d="M 25 48 C 10 48 5 65 15 78 C 25 90 45 98 48 100 L 48 60 C 40 55 35 48 25 48 Z" className="fill-finova-navy" />
        
        {/* Right figure */}
        <circle cx="75" cy="35" r="9" className="fill-finova-green" />
        <path d="M 75 48 C 90 48 95 65 85 78 C 75 90 55 98 52 100 L 52 60 C 60 55 65 48 75 48 Z" className="fill-finova-green" />
        
        {/* Center figure */}
        <circle cx="50" cy="20" r="11" className="fill-finova-navy" />
        <path d="M 50 35 C 35 35 30 50 30 65 C 30 80 45 95 50 100 C 55 95 70 80 70 65 C 70 50 65 35 50 35 Z" className="fill-finova-navy" />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-[26px] md:text-[28px] font-extrabold tracking-tight leading-none mb-1">
          <span className="text-finova-navy">Fin</span>
          <span className="text-finova-green">Inclusion</span>
        </div>
        <span className="text-[10.5px] md:text-[11.5px] text-slate-500 font-semibold tracking-wide">
          Empowering Every Life, Every Day
        </span>
      </div>
    </div>
  );
};

export default Logo;
