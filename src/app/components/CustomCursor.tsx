import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth <= 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      // Check if target is an Element before using closest
      if (target instanceof Element) {
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target;
      // Check if target is an Element before using closest
      if (target instanceof Element) {
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
          setIsHovering(false);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
    return null;
  }

  return (
    <>
      {/* Glow */}
      <div
        className="fixed w-64 h-64 rounded-full bg-white/20 blur-[60px] pointer-events-none z-[9998] transition-transform duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Main Ring */}
      <div
        className={`fixed rounded-full border-2 border-white bg-white/20 backdrop-blur-sm pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isClicking ? 'w-5 h-5' : isHovering ? 'w-12 h-12' : 'w-8 h-8'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Center Dot */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />

      <style>{`
        .custom-cursor-page {
          cursor: none !important;
        }
        .custom-cursor-page * {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          .custom-cursor-page,
          .custom-cursor-page * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}