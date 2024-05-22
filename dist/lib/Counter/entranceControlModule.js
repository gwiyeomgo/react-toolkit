import React, { useState, useEffect } from 'react';
import { useCounter } from '../../lib/Util/hooks/useCounter';
import { Button } from '../Buttton/button';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
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
const CapacityCount = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
let MAX_CAPACITY = 10;
const EntranceControlModule = ({
  maxCapacity,
  entranceBtn = true,
  exitBtn = true,
  entranceText,
  exitText,
}) => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);
  if (maxCapacity) {
    MAX_CAPACITY = maxCapacity;
  }
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
  }, [count]);
  return React.createElement(
    Container,
    null,
    React.createElement(CapacityCount, null, `${count}/${MAX_CAPACITY}`),
    isFull &&
      React.createElement(
        'p',
        { style: { color: 'red' } },
        '\uC815\uC6D0\uC774 \uAC00\uB4DD\uCC3C\uC2B5\uB2C8\uB2E4.',
      ),
    entranceBtn &&
      React.createElement(
        Button,
        {
          style: { margin: '5px', backgroundColor: '#28a745' },
          type: 'secondary',
          onClick: increaseCount,
          disabled: isFull,
        },
        entranceText ? entranceText : '입장',
      ),
    exitBtn &&
      React.createElement(
        Button,
        {
          disabled: count === 0,
          type: 'secondary',
          danger: true,
          onClick: decreaseCount,
        },
        exitText ? exitText : '퇴장',
      ),
  );
};
export { EntranceControlModule };
