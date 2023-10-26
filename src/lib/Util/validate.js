

/**
 * 특정 시간 범위에 현재시간이 포함되는지 확인합니다.
 *
 * @param {number} startMinutes- 시작 시간.
 * @param {number} endMinutes - 종료 시간.
 * @returns {boolean} - 시작,종료 시간 범위에 포함하면 true ,범위를 벗어나면 false.
 */
export const checkTimeWithinRange =(startMinutes,endMinutes) => {
  const nowTime = getMinutesFromCurrentTime();
  return  nowTime >= startMinutes || nowTime < endMinutes
}
/**
 * 현재 시간을 분단위로 계산
 *
 * @returns {number} - 분단위로 계산된 현재 시간
 */
export const getMinutesFromCurrentTime = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes()
}

/**
 * 현재 시간과 목표 시간 간의 시간 차이가 제한 시간 범위 내에 있는지 확인합니다.
 *
 * @param {Date} targetTime - 목표 시간.
 * @param {number} limitHours - 시간 차이의 최대 허용 범위 (제한 시간, 시간 차이의 최대 허용치).
 * @returns {boolean} - 시간 차이가 제한 시간 범위 내에 있으면 true, 그렇지 않으면 false를 반환합니다.
 * @throws {Error} - 목표 시간이나 제한 시간이 제공되지 않은 경우 오류가 발생합니다.
 */
export const checkTimeDifferenceWithinRange = (targetTime, limitHours) =>{
  if (!targetTime) throw new Error('목표 시간을 지정해야 합니다.');
  if (typeof limitHours !== 'number' || limitHours <= 0) {
    throw new Error('제한 시간은 양의 숫자여야 합니다.');
  }

  const now = new Date();
  // 시간 차이를 계산할 때 1시간을 나타내는 3600000 밀리초로 나누어 계산 (밀리초를 몇 시간으로 변환)
  const timeDifferenceHours = (targetTime - now) / 3600000;
  return timeDifferenceHours <= 0 || timeDifferenceHours <= limitHours;
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
export const convertStringToDate = (stringTime) =>{
  if (!yyyyMMddHHmmssRegex.test(stringTime)) {
    throw new Error('yyyyMMddHHmmss 형식이 아닙니다.');
  }
  // 날짜와 시간을 추출합니다
  const year = Math.floor(stringTime / YEAR_IN_SECONDS);  // 연도
  const month = Math.floor((stringTime % YEAR_IN_SECONDS) / MONTH_IN_SECONDS);  // 월
  const day = Math.floor((stringTime % MONTH_IN_SECONDS) / DAY_IN_SECONDS);  // 일
  const hour = Math.floor((stringTime % DAY_IN_SECONDS) / HOUR_IN_SECONDS);  // 시
  const minute = Math.floor((stringTime % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS);  // 분
  const second = stringTime % MINUTE_IN_SECONDS;  // 초
  return new Date(year, month - 1, day, hour, minute, second)
}

/**
 * 디지털 카운트다운 타이머
 *
 * @param {number} milliseconds - 밀리초단위 남아있는 시간
 * @returns {Object} - 시간 차이가 제한 시간 범위 내에 있으면 true, 그렇지 않으면 false를 반환합니다.
 */
export const getFormattedTimeObject = (milliseconds) => {
  if (!Number.isInteger(milliseconds) || milliseconds < 0) {
    throw new Error('양의 정수가 아닙니다.');
  }
  //https://sabe.io/blog/javascript-convert-milliseconds-seconds-minutes-hours
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  return {
    "seconds": seconds.toString().padStart(2, "0"),
    "minutes":minutes.toString().padStart(2, "0"),
    "hours":hours.toString().padStart(2, "0"),
    "days":days.toString(),
  }
}