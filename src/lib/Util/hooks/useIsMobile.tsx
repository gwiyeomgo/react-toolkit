import { useEffect, useState } from 'react';
import { useScreenSize } from './useScreenSize';

export const useIsMobile = (breakpoint = 768): boolean => {
  const { width } = useScreenSize();
  const [isMobile, setIsMobile] = useState(width < breakpoint);

  useEffect(() => {
    setIsMobile(width < breakpoint);
  }, [width, breakpoint]);

  return isMobile;
};
