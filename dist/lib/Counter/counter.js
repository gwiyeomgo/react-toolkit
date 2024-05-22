import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Icon, useDebounce } from '../index';
const Container = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: center;
  padding: 10px;
  flex-direction: row;
  background: white;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;
const Counter = ({ getDebouncedResult }) => {
  const [count, setCount] = useState(0);
  const debouncedResult = useDebounce(String(count), 500);
  useEffect(() => {
    // debouncedInputValue가 변경될 때마다
    getDebouncedResult(debouncedResult);
  }, [debouncedResult]);
  return React.createElement(
    Container,
    null,
    React.createElement(Button, {
      style: { height: '50px' },
      icon: React.createElement(Icon, {
        icon: 'Plus',
        width: '10px',
        height: '10px',
        color: 'skyblue',
      }),
      onClick: () => setCount(count + 1),
    }),
    React.createElement(Input, {
      readOnly: true,
      style: {
        textAlign: 'center',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '30px',
        width: '60px',
        caretColor: 'transparent' /* 커서 클릭 효과 제거 */,
      },
      value: count,
    }),
    React.createElement(Button, {
      style: { height: '50px' },
      icon: React.createElement(Icon, {
        icon: 'Minus',
        width: '10px',
        height: '10px',
        color: 'skyblue',
      }),
      onClick: () => setCount(count - 1),
    }),
  );
};
export { Counter };
