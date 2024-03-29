import { useEffect } from 'react';
import { EventBroadcaster } from '../../Util/eventBroadcaster';

const useBroadcast = (topic: string, fn: (payload: any) => void) => {
  //이벤트 발송
  const broadcast = (args: any) => {
    EventBroadcaster.broadcast(topic, args);
  };

  useEffect(() => {
    const unsubscribeEvent = EventBroadcaster.on(topic, fn);

    // 컴포넌트가 언마운트될 때 구독 해제
    return () => {
      unsubscribeEvent();
    };
  }, [topic, fn]);
  //useEffect 내부에서 사용되는 외부 변수들을 포함해야함(외부 변수가 변경될 때마다 useEffect가 재실행)

  return [broadcast];
};
export { useBroadcast };
