import * as React from 'react';
type TimeUnit = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  suffix?: string;
};
declare const TimeUnitDefault: TimeUnit;
export type TimeKeys = keyof typeof TimeUnitDefault;
export type TimerType = 'default' | 'suffix' | 'none';
type CountdownTimerProps = {
  fontSize?: number;
  targetTime: string;
  type?: TimerType;
};
declare const CountdownTimer: ({
  fontSize,
  targetTime,
  type,
}: CountdownTimerProps) => React.JSX.Element;
export { CountdownTimer, CountdownTimerProps };
