import { useEffect, useState } from 'react';

export interface WindowDimensions {
  width: number;
  height: number;
  error?: Error;
}

export function useWindowDimensions(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    } else {
      setWindowSize({
        width: 0,
        height: 0,
        error: new Error('useWindowDimensions: window is not defined')
      });
    }
  }, []);

  return windowSize;
}
