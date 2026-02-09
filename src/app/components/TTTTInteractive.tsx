import { motion } from 'motion/react';
import { useState } from 'react';

const sections = [
  {
    letter: 'T',
    title: 'TECH',
    description: 'Modern technology solutions that power your business forward',
    color: 'from-[#FF6B35] to-[#E60076]',
    textColor: 'text-[#FF6B35]',
  },
  {
    letter: 'R',
    title: 'RESULTS',
    description: 'Proven strategies that deliver measurable business outcomes',
    color: 'from-[#5BA3FF] to-[#9810FA]',
    textColor: 'text-[#5BA3FF]',
  },
  {
    letter: 'U',
    title: 'UNIQUE',
    description: 'Stand out from competitors with custom-tailored solutions',
    color: 'from-[#25D366] to-[#009343]',
    textColor: 'text-[#25D366]',
  },
  {
    letter: 'S',
    title: 'SUCCESS',
    description: 'Your growth is our mission - we succeed when you do',
    color: 'from-[#FFD520] to-[#FF6B35]',
    textColor: 'text-[#FFD520]',
  },
  {
    letter: 'T',
    title: 'TRANSFORM',
    description: 'Complete digital transformation from website to customer',
    color: 'from-[#E60076] to-[#9810FA]',
    textColor: 'text-[#E60076]',
  },
];

export function TTTTInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] gap-2">
      {sections.map((section, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;
        
        let flexValue = 1;
        if (isAnyHovered) {
          flexValue = isHovered ? 2 : 0.5;
        }

        return (
          <motion.div
            key={index}
            className={`relative overflow-hidden cursor-pointer rounded-2xl bg-gradient-to-br ${section.color}`}
            initial={{ flex: 1 }}
            animate={{ flex: flexValue }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Letter */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2
                className="font-black text-white/20 select-none"
                style={{
                  fontSize: 'clamp(8rem, 20vw, 18rem)',
                  lineHeight: 1,
                }}
              >
                {section.letter}
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
                {section.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-bold max-w-md">
                {section.description}
              </p>
            </motion.div>

            {/* Minimal label when not hovered */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white font-black text-sm sm:text-base md:text-lg transform -rotate-90 whitespace-nowrap origin-center">
                {section.title}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
