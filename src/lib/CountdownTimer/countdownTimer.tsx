import * as React from 'react';
import {
  convertStringToDate,
  getFormattedTimeObject,
  yyyyMMddHHmmssRegex,
} from '#/Util/convert';
import { useEffect, useState } from 'react';
import useIntervalCall from '#hooks/useIntervalCall';
import styled from 'styled-components';

const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface TimeUnit {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const TimeUnitDefault: TimeUnit = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export type TimerType = 'default' | 'suffix' | 'none';
export type TimeSuffix = keyof TimeUnit;
//export type TimeSuffix = keyof typeof TimeUnitDefault
export type KoreanTimeSuffix = '일' | '시' | '분' | '초';
interface CountdownTimerProps {
  fontSize?: number;
  targetTime: string;
  type?: TimerType;
  keyList?: Array<TimeSuffix>;
  suffixList?: Array<KoreanTimeSuffix>;
}

const CountdownTimer = ({
  fontSize = 60,
  targetTime,
  type = 'default',
  keyList = ['days', 'hours', 'minutes', 'seconds'],
  suffixList = ['일', '시', '분', '초'],
}: CountdownTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(0);

  const [time, setTime] = React.useState<TimeUnit>(TimeUnitDefault);

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
    setTime(getFormattedTimeObject(remainingTime));
  }, [remainingTime]);

  const totalKeys = keyList.length;
  let allWidth = 100;
  if (type === 'default') {
    allWidth -= 3;
  }
  const widthPercentage = allWidth / totalKeys;

  return (
    <TimerContainer>
      {keyList.map((key, index) => (
        <div key={index}>
          <div
            style={{
              width: `${widthPercentage}%`,
              minWidth: `${fontSize * 1.5}px`,
              textAlign: 'center',
              fontSize: `${fontSize}px`,
            }}
          >
            {time[key]}
            {type === 'suffix' && suffixList.length > 0 && suffixList[index] ? (
              suffixList[index]
            ) : (
              <></>
            )}
          </div>
          {type === 'default' && index !== keyList.length - 1 ? (
            <span style={{ width: '1%', fontSize: `${fontSize}px` }}>
              {':'}
            </span>
          ) : (
            <></>
          )}
        </div>
      ))}
    </TimerContainer>
  );
};

export { CountdownTimer };
