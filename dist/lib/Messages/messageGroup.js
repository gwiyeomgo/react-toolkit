import React, { useState } from 'react';
import { Message } from './message';
import { useNotificationTimer } from '../Util/hooks/useNotificationTimer';
import { SearchInput } from '../SearchInput/searchInput';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  width: 300px;
  padding: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Content = styled.div`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  overflow-y: auto; /* 콘텐츠가 넘치면 스크롤바 추가 */
`;
const Footer = styled.div`
  width: '100%';
  flex: 0 0 auto; /* 높이를 고정시키고, 늘어나거나 줄어들지 않도록 설정 */
`;
const MessageGroup = ({ boxMinHeight, delay, list, addMessage }) => {
  const [statusList, setStatusList] = useState(list);
  //최초1번 보여짐 + addMessage 기능 추가 경우 SearchInput 입력값 추가되며 리렌더링
  const notifications = statusList
    ? useNotificationTimer(statusList, delay)
    : [];
  // min-height: 100vh; /* 최소 높이를 뷰포트 높이의 100%로 설정 */
  return React.createElement(
    Container,
    {
      style: {
        minHeight: boxMinHeight ? boxMinHeight : '50vh',
      },
    },
    React.createElement(
      Content,
      null,
      notifications.map((notification) => {
        return React.createElement(
          Message,
          {
            className: notification.classNames,
            key: notification.id,
            id: notification.id,
            style: notification.style,
          },
          React.createElement('span', null, notification.message),
        );
      }),
    ),
    addMessage &&
      React.createElement(
        Footer,
        null,
        React.createElement(SearchInput, {
          delay: delay,
          onClickSearch: (message) => {
            const newItem = {
              id: statusList ? statusList.length + 1 : 1,
              message: message,
            };
            setStatusList((prevList) => {
              // 새로운 배열을 생성하고, 이전 배열의 내용을 그대로 복사한 후 새로운 아이템을 추가
              //|| []를 사용하여 빈 배열을 반환
              return [...(prevList || []), newItem];
            });
          },
        }),
      ),
  );
};
export { MessageGroup };
