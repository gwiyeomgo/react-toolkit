import React from 'react';
import { Message } from './Message';
import { useNotificationTimer } from '../Util/hooks/useNotificationTimer';
import { Badge } from '../Badge/badge';

export interface ListItem {
  id: number;
  message: string;
  color: string;
}

interface Props {
  list: ListItem[];
  delay: number;
}
//TODO 시간을 지정하고 특정 시간에만 보이도록
export const NotificationList = ({ list, delay }: Props) => {
  //최초1번 보여짐 (새로고침 필수)
  const notifications = useNotificationTimer(list, delay);

  return (
    <div>
      {notifications.map((notification) => {
        return (
          <Message
            key={notification.id}
            id={notification.id}
            style={{
              backgroundColor: notification.color
                ? notification.color
                : ' #00bdb4',
            }}
          >
            <Badge />
            <span>{notification.message}</span>
          </Message>
        );
      })}
    </div>
  );
};
