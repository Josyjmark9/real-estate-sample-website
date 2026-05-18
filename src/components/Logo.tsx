import { Link } from 'react-router-dom';

export function LogoIcon({ className = "w-12 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 85" className={className} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BF7D" />
            <stop offset="50%" stopColor="#C49B55" />
            <stop offset="100%" stopColor="#A37A3E" />
          </linearGradient>
        </defs>
        {/* Top block */}
        <path d="M50,15 L75,10 L100,22 L100,28 L75,16 L50,21 Z" fill="url(#gold)"/>
        
        {/* Second block */}
        <g>
          <path d="M35,22 L50,16 L75,28 L100,40 L100,46 L75,34 L50,22 Z" fill="url(#gold)"/>
          <path d="M20,25 L32,22 L32,28 L20,31 Z" fill="url(#gold)"/>
        </g>
        
        {/* Third block */}
        <g>
          <path d="M35,37 L50,31 L75,43 L100,55 L100,61 L75,49 L50,37 Z" fill="url(#gold)"/>
          <path d="M20,40 L32,37 L32,43 L20,46 Z" fill="url(#gold)"/>
        </g>
        
        {/* Bottom block */}
        <g>
          <path d="M35,52 L50,46 L75,58 L100,70 L100,76 L75,64 L50,52 Z" fill="url(#gold)"/>
          <path d="M20,55 L32,52 L32,58 L20,61 Z" fill="url(#gold)"/>
        </g>
    </svg>
  );
}

export function Logo({ className = "", light = false, compact = false }: { className?: string; light?: boolean; compact?: boolean; }) {
  if (compact) {
    return (
      <div className={`flex items-center gap-3 relative ${className}`}>
        <LogoIcon className="w-10 h-10" />
        <div className="flex flex-col justify-center">
          <span className={`font-black tracking-widest leading-none ${light ? 'text-white' : 'text-[#8B1E22]'}`} style={{ fontSize: '1.4rem', transform: 'scaleX(1.3)', transformOrigin: 'left' }}>REDS</span>
          <span className={`text-[0.45rem] tracking-[0.2em] font-medium mt-1 leading-tight uppercase ${light ? 'text-[#E2BF7D]' : 'text-[#A37A3E]'}`}>
            Real Estate Broker
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <LogoIcon className="w-16 h-14 mb-2" />
      <div className="flex flex-col items-center w-full">
        <span className={`font-black tracking-widest leading-none ${light ? 'text-white' : 'text-[#8B1E22]'}`} style={{ fontSize: '2.5rem', transform: 'scaleX(1.3)' }}>REDS</span>
        <span className={`text-[0.65rem] tracking-[0.25em] font-medium mt-3 leading-tight uppercase text-center ${light ? 'text-[#E2BF7D]' : 'text-[#A37A3E]'}`}>
            Real Estate<br/>Broker
        </span>
      </div>
    </div>
  );
}
