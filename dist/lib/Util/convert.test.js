import { convertStringToDate, getFormattedTimeObject, pad } from './convert';
describe('stringTime 을 date 객체로 반환', () => {
  it('stringTime 값이 yyyyMMddHHmmss 형식이 아닌 경우 - 실패', () => {
    try {
      convertStringToDate('잘못된문자열');
    } catch (err) {
      expect(err).toEqual(new Error('yyyyMMddHHmmss 형식이 아닙니다.'));
    }
  });
  it('stringTime 값이 yyyyMMddHHmmss 형식인 경우 - 성공', () => {
    const yyyyMMddHHmmss = '20231030100100';
    expect(convertStringToDate(yyyyMMddHHmmss)).toBeInstanceOf(Date);
  });
});
it('pad', () => {
  expect(pad(2, 2)).toBe('02');
  expect(pad(2, 3)).toBe('002');
  expect(pad(12, 5)).toBe('00012');
});
it('.prototype.YYYYMMDDHHMMSS', () => {
  const date = new Date('2024-02-06T12:34:56');
  const formatted = date.YYYYMMDDHHMMSS();
  expect(formatted).toBe('20240206123456');
});
describe('', () => {
  it('부동소수점 실수 - 실패', () => {
    try {
      getFormattedTimeObject(parseFloat('0.0314E+2'));
    } catch (err) {
      expect(err).toEqual(new Error('양의 정수가 아닙니다.'));
    }
  });
  it('음수 - 실패', () => {
    try {
      getFormattedTimeObject(parseFloat('-123124'));
    } catch (err) {
      expect(err).toEqual(new Error('양의 정수가 아닙니다.'));
    }
  });
  it('양수 - 성공', () => {
    //1 시간 = 3600000 밀리초
    expect(getFormattedTimeObject(3600000).seconds === '00').toBe(true);
    expect(getFormattedTimeObject(3600000).minutes === '00').toBe(true);
    expect(getFormattedTimeObject(3600000).hours === '01').toBe(true);
    expect(getFormattedTimeObject(3600000).days === '0').toBe(true);
  });
});
describe('', () => {
  it('', () => {
    const yyyyMMddHHmmss = '20231030100100';
    expect(convertStringToDate(yyyyMMddHHmmss)).toBeInstanceOf(Date);
  });
});
