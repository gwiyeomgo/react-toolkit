import { convertStringToDate,
  getFormattedTimeObject
} from './convert';

describe('stringTime 을 date 객체로 반환', () => {
  it('stringTime 값이 yyyyMMddHHmmss 형식이 아닌 경우 - 실패', () => {
    try {
      convertStringToDate("잘못된문자열")
    } catch (err) {
      expect(err).toEqual(new Error('yyyyMMddHHmmss 형식이 아닙니다.'));
    }
  });
  it('stringTime 값이 yyyyMMddHHmmss 형식인 경우 - 성공', () => {
    let yyyyMMddHHmmss ="20231030100100"
    expect(convertStringToDate(yyyyMMddHHmmss)).toBeInstanceOf(Date);
  });

});


describe('', () => {
  it('문자열 - 실패', () => {
    try {
      getFormattedTimeObject("12345")
    } catch (err) {
      expect(err).toEqual(new Error('양의 정수가 아닙니다.'));
    }
  });
  it('부동소수점 실수 - 실패', () => {
    try {
      getFormattedTimeObject(parseFloat('0.0314E+2'))
    } catch (err) {
      expect(err).toEqual(new Error('양의 정수가 아닙니다.'));
    }
  });
  it('음수 - 실패', () => {
    try {
      getFormattedTimeObject(parseFloat(-123124))
    } catch (err) {
      expect(err).toEqual(new Error('양의 정수가 아닙니다.'));
    }

  });
  it('양수 - 성공', () => {
    //1 시간 = 3600000 밀리초
    expect(getFormattedTimeObject(3600000).seconds ==='00').toBe(true);
    expect(getFormattedTimeObject(3600000).minutes ==='00').toBe(true);
    expect(getFormattedTimeObject(3600000).hours ==='01').toBe(true);
    expect(getFormattedTimeObject(3600000).days ==='0').toBe(true);
  })

});

describe('', () => {
  it('', () => {
    let yyyyMMddHHmmss ="20231030100100"
    expect(convertStringToDate(yyyyMMddHHmmss)).toBeInstanceOf(Date);
  });
});