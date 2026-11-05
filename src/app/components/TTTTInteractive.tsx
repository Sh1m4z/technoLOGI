import { motion } from 'motion/react';
import { useState } from 'react';

const sections = [
  {
    letter: 'E',
    badge: 'Exceptional',
    bgColor: '#f58a27',
    textColor: '#000000',
  },
  {
    letter: 'R',
    badge: 'Reliable',
    bgColor: '#1673ff',
    textColor: '#000000',
  },
  {
    letter: 'I',
    badge: 'Innovative',
    bgColor: '#c4c4c4',
    textColor: '#000000',
  },
  {
    letter: 'P',
    badge: 'Professional',
    bgColor: '#f5e6d3',
    textColor: '#30220a',
  },
];

export function TTTTInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row w-full h-full rounded-[32px] sm:rounded-[38px] md:rounded-[48px] overflow-hidden shadow-2xl">
      {sections.map((section, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;

        let flexValue = 1;
        if (isAnyHovered) {
          flexValue = isHovered ? 2.2 : 0.6;
        }

        return (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ backgroundColor: section.bgColor }}
            animate={{ flex: flexValue }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Letter */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="tttt-letter font-black select-none"
                style={{ color: section.textColor }}
              >
                {section.letter}
              </span>
            </motion.div>

            {/* Badge: Centered on the left on Mobile, Bottom-Left on Desktop */}
            <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-10 pointer-events-none">
              <div className="bg-white rounded-2xl px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 shadow-md md:shadow-lg flex items-center justify-center select-none">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-gray-950 tracking-wide whitespace-nowrap">
                  {section.badge}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
