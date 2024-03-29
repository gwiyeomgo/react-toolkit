import React, { createContext, useState, useEffect } from 'react';
import { EventBroadcaster } from '../Util/eventBroadcaster';

// createContext를 사용하여 Context 생성
type ConnectedUsersContextProps = {
  connectedUsers: number;
};
export const ConnectedUsersContext = createContext<
  ConnectedUsersContextProps | undefined
>(undefined);

// Provider 컴포넌트 정의
export const ConnectedUsersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [connectedUsers, setConnectedUsers] = useState(0);

  useEffect(() => {
    console.log('connectedUsers', connectedUsers);
    // 사용자 접속 이벤트 발생 시 연결된 사용자 수 증가
    const handleUserConnected = () => {
      console.log('handleUserConnected', connectedUsers + 1);
      setConnectedUsers((prevCount) => prevCount + 1);
    };
    // 이벤트 리스너 등록 및 구독 취소 함수 반환
    const unsubscribeUserConnected = EventBroadcaster.on(
      'userConnected',
      handleUserConnected,
    );
    EventBroadcaster.broadcast('userConnected', connectedUsers);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      unsubscribeUserConnected();
    };
  }, []);

  return (
    <ConnectedUsersContext.Provider value={{ connectedUsers }}>
      {children}
    </ConnectedUsersContext.Provider>
  );
};
