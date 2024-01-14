import * as React from 'react';
import { MessageGroup } from '@gwiyeomgo/react-toolkit';
const list = [
  {
    id: 1,
    message: '안녕하세요',
    style: {
      color: '#619290',
    },
  },
  {
    id: 2,
    message: '메세지가',
    style: {
      color: '#79B6B4',
    },
  },
  {
    id: 3,
    message: '1000간격으로 최초 1번 보여집니다.',
    style: {
      color: '#00bdb4',
    },
  },
];
const App = () => {
  return <MessageGroup list={list} delay={1000} addMessage={true} />;
};

export default App;
