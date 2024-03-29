import React, { useContext } from 'react';
import {
  ConnectedUsersContext,
  ConnectedUsersProvider,
} from '../../lib/Util/connectedUser';

const ConnectedUsers = () => {
  // ConnectedUsersContext를 사용하여 동시 접속자 수 정보에 접근
  const context = useContext(ConnectedUsersContext);
  console.log('ConnectedUsers', context);
  if (!context || !context.connectedUsers) {
    return null;
  }

  return (
    <div>
      <h2>현재 동시 접속자 수: {context.connectedUsers}</h2>
    </div>
  );
};

export const ConnectUserExample = () => {
  return (
    <ConnectedUsersProvider>
      <ConnectedUsers />
    </ConnectedUsersProvider>
  );
};
