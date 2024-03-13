import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  convertStringToDate,
  getFormattedTimeObject,
  yyyyMMddHHmmssRegex,
} from '../Util/convert';
import useIntervalCall from '../Util/hooks/useIntervalCall';
import styled from 'styled-components';
import styles from '../styles.module.css';

const TimerContainer = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type TimeUnit = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  suffix?: string;
};

const TimeUnitDefault: TimeUnit = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  suffix: ':',
};
export type TimeKeys = keyof typeof TimeUnitDefault;

export type TimerType = 'default' | 'suffix' | 'none';
type CountdownTimerProps = {
  fontSize?: number;
  targetTime: string;
  type?: TimerType;
};

const CountdownTimer = ({
  fontSize = 60,
  targetTime,
  type = 'default',
}: CountdownTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [time, setTime] = React.useState<TimeUnit>(TimeUnitDefault);
  const [keys, setKeys] = useState<TimeKeys[]>([]);

  useEffect(() => {
    const keyList: TimeKeys[] = [
      'days',
      'suffix',
      'hours',
      'suffix',
      'minutes',
      'suffix',
      'seconds',
    ];
    const suffixes: TimeKeys[] =
      type === 'suffix'
        ? keyList
            .filter((item) => item !== 'suffix')
            .flatMap((item) => [item, item])
        : keyList;
    setKeys(suffixes);
  }, [type]);

  if (!yyyyMMddHHmmssRegex.test(targetTime)) {
    throw new Error('yyyyMMddHHmmss 형식이 아닙니다.');
  }
  const targetDate = convertStringToDate(targetTime);
  const currentDate = new Date();
  //TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
  // Date 값 앞에 단항 연산자 (Unary operator)인 + 를 지정하면
  // new Date()의 결과를 숫자(number)로 취급
  const timeDifference = +targetDate - +currentDate;
  if (timeDifference <= 0) {
    throw new Error('목표 시간이 이미 지났습니다.');
  }

  useIntervalCall(() => setRemainingTime(timeDifference), 1000);

  useEffect(() => {
    return setTime({
      ...getFormattedTimeObject(remainingTime),
      suffix: type === 'default' ? ':' : '',
    });
  }, [remainingTime]);

  return (
    <TimerContainer>
      {keys.map((key, index) => (
        <div className={styles.timerItem} key={index}>
          <div
            className={styles.timerValue}
            style={{
              minWidth: `${fontSize}px`,
              textAlign: 'center',
              fontSize:
                type === 'suffix' && index % 2 === 1
                  ? `${fontSize / 3}px`
                  : `${fontSize}px`,
            }}
          >
            <p
              style={{
                paddingBlockStart:
                  type === 'suffix' && index % 2 === 1 ? '80%' : undefined,
                margin: 'auto',
              }}
            >
              {type === 'suffix' && index % 2 === 1 ? key : time[key]}
            </p>
          </div>
        </div>
      ))}
    </TimerContainer>
  );
};

export { CountdownTimer, CountdownTimerProps };
