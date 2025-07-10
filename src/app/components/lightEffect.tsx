'use client';

import { useEffect, useRef } from 'react';

export default function LightEffect() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const light = lightRef.current;
      if (!light) return;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      light.style.left = `${mouseX}px`;
      light.style.top = `${mouseY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed top-0 left-0 w-[700px] h-[700px] rounded-full z-0"
      style={{
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, 
          rgba(29, 78, 216, 0.1) 0%, 
          rgba(29, 78, 216, 0.05) 30%, 
          rgba(29, 78, 216, 0.025) 60%, 
          rgba(29, 78, 216, 0.013) 80%, 
          transparent 100%)`,
      }}
    />
  );
}
