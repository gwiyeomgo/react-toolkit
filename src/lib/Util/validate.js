/**
 * 특정 시간 범위에 현재시간이 포함되는지 확인합니다.
 *
 * @param {number} startMinutes- 시작 시간.
 * @param {number} endMinutes - 종료 시간.
 * @returns {boolean} - 시작,종료 시간 범위에 포함하면 true ,범위를 벗어나면 false.
 */
export const checkTimeWithinRange = (startMinutes, endMinutes) => {
  const nowTime = getMinutesFromCurrentTime();
  return nowTime >= startMinutes || nowTime < endMinutes;
};
/**
 * 현재 시간을 분단위로 계산
 *
 * @returns {number} - 분단위로 계산된 현재 시간
 */
export const getMinutesFromCurrentTime = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

/**
 * 현재 시간과 목표 시간 간의 시간 차이가 제한 시간 범위 내에 있는지 확인합니다.
 *
 * @param {Date} targetTime - 목표 시간.
 * @param {number} limitHours - 시간 차이의 최대 허용 범위 (제한 시간, 시간 차이의 최대 허용치).
 * @returns {boolean} - 시간 차이가 제한 시간 범위 내에 있으면 true, 그렇지 않으면 false를 반환합니다.
 * @throws {Error} - 목표 시간이나 제한 시간이 제공되지 않은 경우 오류가 발생합니다.
 */
export const checkTimeDifferenceWithinRange = (targetTime, limitHours) => {
  if (!targetTime) throw new Error('목표 시간을 지정해야 합니다.');
  if (typeof limitHours !== 'number' || limitHours <= 0) {
    throw new Error('제한 시간은 양의 숫자여야 합니다.');
  }

  const now = new Date();
  // 시간 차이를 계산할 때 1시간을 나타내는 3600000 밀리초로 나누어 계산 (밀리초를 몇 시간으로 변환)
  const timeDifferenceHours = (targetTime - now) / 3600000;
  return timeDifferenceHours <= 0 || timeDifferenceHours <= limitHours;
};

/**
 * 지정한 시간이 지났는지 확인하는 함수
 * @throws {Error}
 * @param {Date} targetTime - 확인하고 싶은 날짜
 */
export const checkTimePassed = (targetTime) => {
  const currentTime = new Date();
  return targetTime - currentTime <= 0;
};
/**
 * 위 예제처럼 사용하면 str 에 숫자만 있는지 확인이 가능하다
 * isNaN 함수는 숫자를 넣으면 false 를 반환한다.
 * * isNaN 함수는 string 과 숫자가 함께있는 문자를 입력하면 true 값을 반환한다
 *
 * isNaN(123)         // false
 * isNaN('123')       // false
 * isNaN('test')      // true
 * isNaN('123test')   // true
 *
 * isNaN('')          // false
 * isNaN(' ')         // false
 * isNaN(false)       // false
 **/
const 문자가숫자로변환가능한가 = (str) => {
  if (typeof str !== 'string') return false;
  return !isNaN(str) && !isNaN(parseFloat(str)); //true && true
};
