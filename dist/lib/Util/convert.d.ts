declare global {
  interface Date {
    YYYYMMDDHHMMSS(): string;
  }
}
export declare const pad: (number: number, length: number) => string;
declare module 'dayjs' {
  interface Dayjs {
    YYYYMMDDHHMMSS(): string;
  }
}
export declare const YEAR_IN_SECONDS = 10000000000;
export declare const MONTH_IN_SECONDS = 100000000;
export declare const DAY_IN_SECONDS = 1000000;
export declare const HOUR_IN_SECONDS = 10000;
export declare const MINUTE_IN_SECONDS = 100;
export declare const yyyyMMddHHmmssRegex: RegExp;
/**
 *  문자열 시간을 Date 객체로 반환
 *
 * @param {string} stringTime - "yyyyMMddHHmmss" 형태 문자열
 * @returns {Date}
 * @throws {Error} - yyyyMMddHHmmss 형식이 아닌 경우
 */
export declare const convertStringToDate: (stringTime: string) => Date;
/**
 * 디지털 카운트다운 타이머
 *
 * @param {number} milliseconds - 밀리초단위 남아있는 시간
 * @returns {Object} - 시간 차이가 제한 시간 범위 내에 있으면 true, 그렇지 않으면 false를 반환합니다.
 */
export declare const getFormattedTimeObject: (milliseconds: number) => {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
};
