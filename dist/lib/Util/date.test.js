import { getToday } from './date';
const originalDate = global.Date;
describe('stringTime 을 date 객체로 반환', () => {
  // Mock Date 객체를 사용하기 위해 원래 Date 생성자를 저장
  const { Date } = global;
  beforeAll(() => {
    const mockedDate = new Date('2024-02-07T12:00:00'); // 원하는 날짜 및 시간으로 변경
    global.Date = class extends Date {
      constructor() {
        super();
        return mockedDate;
      }
    }; // 타입을 명시적으로 정의
  });
  afterAll(() => {
    // 각 테스트 후에 Date 객체를 복구
    global.Date = originalDate;
  });
  it('get  format 지정했을때 Today 를 string 으로 반환 - 성공', () => {
    expect(getToday()).toEqual('2024-02-07T12:00:00Z');
    expect(getToday('YYYY-MM-DD')).toEqual('2024-02-07');
    expect(getToday('YYYY년 M월 D일 h시 m분 s초')).toEqual(
      '2024년 2월 7일 12시 0분 0초',
    );
    expect(getToday('YYYYMMDDHHmmss')).toEqual('20240207120000');
  });
});
