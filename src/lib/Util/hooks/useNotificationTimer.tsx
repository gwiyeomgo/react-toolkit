import { useEffect, useRef, useState } from 'react';

//useNotificationTimer 훅은 list가 변경될 때마다 새로운 notifications를 생성하고 반환
export const useNotificationTimer = (list: any[], delay: number) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // 새로운 list가 주어질 때마다 이전 타이머를 정리하고 새로운 타이머를 생성
    console.log('list', list);
    if (timerRef.current) {
      console.log('타이머정리');
      clearInterval(timerRef.current);
    }
    console.log('새 타이머');
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
  }, [list, notifications]);
  //notifications 을 추가하는 이유?
  //사용자 인터페이스를 업데이트하고 더 동적인 경험을 제공하기 위해 필요한 요소
  //setNotifications 으로 notifications 이 변경된다면
  // 반환한 notifications 을 사용하는 부모 컴포넌트에서도 리렌더링 발생

  return notifications;
};
