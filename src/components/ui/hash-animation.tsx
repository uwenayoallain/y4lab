import React, { useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FallingCharsProps {
  text: string;
  className?: string;
  amount?: number;
}

const FallingChars: React.FC<FallingCharsProps> = ({
  text,
  className = '',
  amount = 1,
}) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+';
  const randomCharsCount = Math.floor(Math.random() * (10 - 4)) + 4;
  const extendedChars: string[][] = useMemo(
    () =>
      text.split('').map((char) => [
        ...Array(randomCharsCount)
          .fill('')
          .map(() => characters[Math.floor(Math.random() * characters.length)]),
        char,
      ]),
    [text, randomCharsCount]
  );

  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount, once: true });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" ref={ref}>
      <motion.div
        className={cn(
          'px-10 text-sm font-bold flex h-4 overflow-hidden w-full select-none',
          className
        )}
        initial="hidden"
        animate={isInView && 'visible'}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.018,
            },
          },
        }}
      >
        {extendedChars.map((chars, charIndex) => (
          <div key={charIndex} className="relative h-4 w-3">
            {chars.map((char, index) => (
              <motion.span
                className="absolute top-0 inset-0 text-center"
                key={index}
                variants={{
                  hidden: { y: -100, opacity: 1 },
                  visible: {
                    y: index === chars.length - 1 ? 0 : 100,
                    opacity: index === chars.length - 1 ? 1 : 0,
                    transition: {
                      y: { duration: 0.3 },
                      opacity: { duration: 0.4 },
                      delay: index * 0.001,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FallingChars;
