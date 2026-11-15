import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 36,
  sx = {},
  ...props
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If reduced motion is requested, immediately reveal
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    // Check if already in viewport on mount (e.g. Hero section above the fold)
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      // Small timeout so initial mount animation can still play smoothly
      const timer = setTimeout(() => setRevealed(true), 50);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: revealed ? 'auto' : 'transform, opacity',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
