/**
 * 특정 시간 범위에 현재시간이 포함되는지 확인합니다.
 *
 * @param {number} startMinutes- 시작 시간.
 * @param {number} endMinutes - 종료 시간.
 * @returns {boolean} - 시작,종료 시간 범위에 포함하면 true ,범위를 벗어나면 false.
 */
export declare const checkTimeWithinRange: (
  startMinutes: number,
  endMinutes: number,
) => boolean;
/**
 * 현재 시간을 분단위로 계산
 *
 * @returns {number} - 분단위로 계산된 현재 시간
 */
export declare const getMinutesFromCurrentTime: () => number;
/**
 * 현재 시간과 목표 시간 간의 시간 차이가 제한 시간 범위 내에 있는지 확인합니다.
 *
 * @param {Date} targetTime - 목표 시간.
 * @param {number} limitHours - 시간 차이의 최대 허용 범위 (제한 시간, 시간 차이의 최대 허용치).
 * @returns {boolean} - 시간 차이가 제한 시간 범위 내에 있으면 true, 그렇지 않으면 false를 반환합니다.
 * @throws {Error} - 목표 시간이나 제한 시간이 제공되지 않은 경우 오류가 발생합니다.
 */
export declare const checkTimeDifferenceWithinRange: (
  targetTime: Date,
  limitHours: number,
) => boolean;
/**
 * 지정한 시간이 지났는지 확인하는 함수
 * @throws {Error}
 * @param {Date} targetTime - 확인하고 싶은 날짜
 */
export declare const checkTimePassed: (targetTime: Date) => boolean;
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
export declare const ConvertVerifyStringToNumber: (str: string) => boolean;
