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
type EntranceControlModuleProps = {
  maxCapacity?: number;
  entranceBtn?: boolean;
  entranceText?: string;
  exitBtn?: boolean;
  exitText?: string;
};

let MAX_CAPACITY = 10;
const EntranceControlModule = ({
  maxCapacity,
  entranceBtn = true,
  exitBtn = true,
  entranceText,
  exitText,
}: EntranceControlModuleProps) => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  if (maxCapacity) {
    MAX_CAPACITY = maxCapacity;
  }

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
  }, [count]);

  return (
    <Container>
      <CapacityCount>{`${count}/${MAX_CAPACITY}`}</CapacityCount>
      {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
      {entranceBtn && (
        <Button
          style={{ margin: '5px' }}
          type={'outline'}
          color="success"
          onClick={increaseCount}
          disabled={isFull}
        >
          {entranceText ? entranceText : '입장'}
        </Button>
      )}
      {exitBtn && (
        <Button
          disabled={count === 0}
          type={'outline'}
          color="danger"
          onClick={decreaseCount}
        >
          {exitText ? exitText : '퇴장'}
        </Button>
      )}
    </Container>
  );
};

export { EntranceControlModule, EntranceControlModuleProps };
