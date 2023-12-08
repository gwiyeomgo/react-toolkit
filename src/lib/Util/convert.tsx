//Date 객체에 새로운 메서드를 추가하려면 TypeScript에서 확장을 선언 필요
//TS2339: Property 'YYYYMMDDHHMMSS' does not exist on type 'Date'.
declare global {
  interface Date {
    YYYYMMDDHHMMSS(): string;
  }
}
Date.prototype.YYYYMMDDHHMMSS = function (this: Date): string {
  const yyyy = this.getFullYear().toString();
  const MM = pad(this.getMonth() + 1, 2);
  const dd = pad(this.getDate(), 2);
  const hh = pad(this.getHours(), 2);
  const mm = pad(this.getMinutes(), 2);
  const ss = pad(this.getSeconds(), 2);

  return yyyy + MM + dd + hh + mm + ss;
};

function pad(number: number, length: number): string {
  let str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}

export const YEAR_IN_SECONDS = 10000000000;
export const MONTH_IN_SECONDS = 100000000;
export const DAY_IN_SECONDS = 1000000;
export const HOUR_IN_SECONDS = 10000;
export const MINUTE_IN_SECONDS = 100;
export const yyyyMMddHHmmssRegex = /^\d{4}\d{2}\d{2}\d{2}\d{2}\d{2}$/;
/**
 *  문자열 시간을 Date 객체로 반환
 *
 * @param {string} stringTime - "yyyyMMddHHmmss" 형태 문자열
 * @returns {Date}
 * @throws {Error} - yyyyMMddHHmmss 형식이 아닌 경우
 */
export const convertStringToDate = (stringTime: string) => {
  if (!yyyyMMddHHmmssRegex.test(stringTime)) {
    throw new Error('yyyyMMddHHmmss 형식이 아닙니다.');
  }
  // 날짜와 시간을 추출합니다

  const year = Math.floor(Number(stringTime) / YEAR_IN_SECONDS); // 연도
  const month = Math.floor(
    (Number(stringTime) % YEAR_IN_SECONDS) / MONTH_IN_SECONDS,
  ); // 월
  const day = Math.floor(
    (Number(stringTime) % MONTH_IN_SECONDS) / DAY_IN_SECONDS,
  ); // 일
  const hour = Math.floor(
    (Number(stringTime) % DAY_IN_SECONDS) / HOUR_IN_SECONDS,
  ); // 시
  const minute = Math.floor(
    (Number(stringTime) % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS,
  ); // 분
  const second = Number(stringTime) % MINUTE_IN_SECONDS; // 초
  return new Date(year, month - 1, day, hour, minute, second);
};

/**
 * 디지털 카운트다운 타이머
 *
 * @param {number} milliseconds - 밀리초단위 남아있는 시간
 * @returns {Object} - 시간 차이가 제한 시간 범위 내에 있으면 true, 그렇지 않으면 false를 반환합니다.
 */
export const getFormattedTimeObject = (milliseconds: number) => {
  if (!Number.isInteger(milliseconds) || milliseconds < 0) {
    throw new Error('양의 정수가 아닙니다.');
  }
  //https://sabe.io/blog/javascript-convert-milliseconds-seconds-minutes-hours
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  return {
    seconds: seconds.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    days: days.toString(),
  };
};
