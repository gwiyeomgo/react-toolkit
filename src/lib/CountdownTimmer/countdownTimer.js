import * as React from 'react';
import { convertStringToDate, getFormattedTimeObject } from '../Util/validate';
import { useEffect, useState } from 'react';
import useIntervalCall from '../Util/hooks/useIntervalCall';
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CountdownTimer = ({
                          fontSize = "60",
                          targetTime,
                          type = "default",
                          keys = ["days", "hours", "minutes", "seconds"],
                          suffixIndex,
                          suffix
                        }) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [time, setTime] = useState({});

  const check = (target) => {
    const targetDate = convertStringToDate(target);
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      return new Error(`목표 시간이 이미 지났습니다.`);
    }
    setRemainingTime(timeDifference);
  };

  useIntervalCall(() => targetTime > 0 && check(targetTime), 1000);

  useEffect(() => {
    setTime(getFormattedTimeObject(remainingTime));
  }, [remainingTime]);

  let totalKeys = keys.length;
  let allWidth = 100;
  if (type === "default") {
    allWidth -= 3;
  }
  let widthPercentage = allWidth / totalKeys;

  return (
    <Container>
      {keys.map((key, index) => (
        <>
          <div
            key={index}
            style={{
              width: `${widthPercentage}%`,
              minWidth: `${fontSize * 1.5}px`,
              textAlign: "center",
              fontSize: `${fontSize}px`
            }}
          >
            {time[key]}
            {type === "daysSuffix" ? suffixIndex === index && suffix : <></>}
          </div>
          {type === "default" && index !== keys.length - 1 ? (
            <span style={{ width: "1%", fontSize: `${fontSize}px` }}>
              {":"}
            </span>
          ) : (
            <></>
          )}
        </>
      ))}
    </Container>
  );
};

export { CountdownTimer };


