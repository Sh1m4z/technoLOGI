import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const smooth = useRef({ x: -100, y: -100 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    const over = (e: any) => {
      if (e.target.closest("a,button,[role='button']")) setIsHovering(true);
    };

    const out = (e: any) => {
      if (e.target.closest("a,button,[role='button']")) setIsHovering(false);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    document.body.classList.add("custom-cursor-page");

    // 🔥 Smooth animation loop
    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.15;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.15;

      const transform = `translate(${smooth.current.x}px, ${smooth.current.y}px) translate(-50%, -50%)`;

      if (ringRef.current) ringRef.current.style.transform = transform;
      if (dotRef.current) dotRef.current.style.transform = transform;
      if (glowRef.current) glowRef.current.style.transform = transform;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.body.classList.remove("custom-cursor-page");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed w-56 h-56 rounded-full bg-black/20 blur-[50px] pointer-events-none z-[9998]"
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed rounded-full border-2 border-black pointer-events-none z-[9999] transition-all duration-150
        ${isClicking ? "w-5 h-5" : isHovering ? "w-12 h-12" : "w-8 h-8"}`}
      />

      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-black pointer-events-none z-[9999]"
      />

      <style>{`
        .custom-cursor-page,
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
