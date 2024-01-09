import * as React from 'react';
import { NotificationList } from '@gwiyeomgo/react-toolkit';
const list = [
  {
    id: 1,
    message: '안녕하세요',
    color: '#619290',
  },
  {
    id: 2,
    message: '지정한 메세지가 ',
    color: '#79B6B4',
  },
  {
    id: 3,
    message: '일정 시간 반복되며 보여집니다.',
  },
];
const App = () => {
  return <NotificationList list={list} delay={1000} />;
};

export default App;
