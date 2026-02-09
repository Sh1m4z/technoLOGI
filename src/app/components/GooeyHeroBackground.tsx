import { useEffect, useState } from 'react';

export function GooeyHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#FFD520] via-[#FFDFE0] to-[#E4FFD1]">
      <div className="absolute inset-0 w-full h-full" style={{ filter: 'url(#gooey-hero)', willChange: 'transform' }}>
        {/* Blob 1 - Yellow */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#FFD520] rounded-full opacity-30 mix-blend-multiply blur-[80px]"
          style={{
            animation: 'blob1 25s ease-in-out infinite',
          }}
        />
        
        {/* Blob 2 - Light Green */}
        <div 
          className="absolute top-[5%] right-[-10%] w-[55vw] h-[55vw] bg-[#E4FFD1] rounded-full opacity-30 mix-blend-multiply blur-[80px]"
          style={{
            animation: 'blob2 30s ease-in-out infinite',
          }}
        />
        
        {/* Blob 3 - Pinkish */}
        <div 
          className="absolute bottom-[-15%] left-[5%] w-[65vw] h-[65vw] bg-[#FFDFE0] rounded-full opacity-30 mix-blend-multiply blur-[80px]"
          style={{
            animation: 'blob3 28s ease-in-out infinite',
          }}
        />
        
        {/* Mouse Follower Blob */}
        <div 
          className="absolute w-[35vw] h-[35vw] bg-[#FFD520] rounded-full opacity-25 mix-blend-overlay blur-[60px] pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
      </div>
      
      {/* SVG Filter */}
      <svg className="hidden">
        <defs>
          <filter id="gooey-hero">
            <feGaussianBlur in="SourceGraphic" stdDeviation="100" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -6" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, -80px) scale(1.15); }
          66% { transform: translate(-40px, 40px) scale(0.95); }
        }
        
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-80px, 80px) scale(1.2); }
          66% { transform: translate(40px, -40px) scale(0.85); }
        }
        
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.1); }
          66% { transform: translate(-80px, 80px) scale(0.92); }
        }
      `}</style>
    </div>
  );
}
