import { useEffect, useRef, useState } from 'react';

export const useNotificationTimer = (list: any[], delay: number) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setNotifications((prevList) => {
        if (prevList.length < list.length) {
          const index = prevList.length;
          return [...prevList, list[index]];
        } else {
          clearInterval(timerRef.current as NodeJS.Timeout);
          return [];
        }
      });
    }, delay);

    return () => {
      console.log('Component will unmount');
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [list]);

  return notifications;
};
