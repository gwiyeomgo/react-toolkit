import { useEffect, useRef } from 'react';

const useIntervalCall = (callback, delay) =>{
  const savedCallback = useRef( null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
     const intervalId = setInterval(()=>{
        if (typeof savedCallback.current === "function") {
          savedCallback.current();
        }
      }, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}

export default useIntervalCall;