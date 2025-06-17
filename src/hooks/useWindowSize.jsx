import React, { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : undefined,
    h: typeof window !== 'undefined' ? window.innerHeight : undefined
  }));

  useEffect(() => {
    if(typeof window === 'undefined') return null;

    const resize = () => setWindowSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return windowSize;
};