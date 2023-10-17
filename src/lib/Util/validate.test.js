import { getMinutesFromCurrentTime, checkTimeWithinRange, checkTimeDifferenceWithinRange } from './validate';

describe(' 현재 시간이 범위에 해당하는지  true false 반환', () => {
    // Mock Date 객체를 사용하기 위해 원래 Date 생성자를 저장
    const { Date } = global;

    beforeAll(() => {
      // 각 테스트 전에 Date 객체를 모킹하여 고정된 날짜를 사용
      const mockedDate = new Date('2023-10-11T12:00:00'); // 원하는 날짜 및 시간으로 변경
      global.Date = class extends Date {
        constructor() {
          super();
          return mockedDate;
        }
      };
    });


    afterAll(() => {
      // 각 테스트 후에 Date 객체를 복구
      global.Date = Date;
    });


    it('현재 시간이 아침 08:01  밤 20:01  사이인지 확인', () => {
      expect(checkTimeWithinRange(481, 1201)).toBe(true);
    });

    it('현재 시간이 밤 20:01 이후이거나 아침 08:01 이전인지 확인', () => {
      expect(checkTimeWithinRange(1201, 481)).toBe(false);
    });

  }
)


describe('현재시간을 분으로 계산', () => {

  const { Date } = global;

  beforeAll(() => {
    const mockedDate = new Date('2023-10-11T12:10:00'); // 원하는 날짜 및 시간으로 변경
    global.Date = class extends Date {
      constructor() {
        super();
        return mockedDate;
      }
    };
   });

  afterAll(() => {
    global.Date = Date;
  });

  it(' 12:10 시간을 분으로 계산', () => {
   expect(getMinutesFromCurrentTime() === 730).toBe(true);
  });

})

describe('현재 시간과 목표 시간 간의 시간 차이가 제한 시간 범위 내에 있는지 확인', () => {

  const { Date } = global;


  it(' 현재시간 16:10 - 목표시간 18:00 - 시간차 2시간 이내 ', () => {
    const mockedDate = new Date('2023-10-13T16:10:00'); // 원하는 날짜 및 시간으로 변경
    global.Date = class extends Date {
      constructor() {
        super();
        return mockedDate;
      }
    };
    const targetDate = new Date('2023-10-13T18:10:00')
    expect(checkTimeDifferenceWithinRange(targetDate,2) ).toBe(true);
    global.Date = Date;
  });
  it(' 현재시간 16:10 - 목표시간 18:00 - 시간차 2시간 이상 ', () => {
    const mockedDate = new Date('2023-10-13T11:10:00'); // 원하는 날짜 및 시간으로 변경
    global.Date = class extends Date {
      constructor() {
        super();
        return mockedDate;
      }
    };
    const targetDate = new Date('2023-10-13T18:10:00')
    expect(checkTimeDifferenceWithinRange(targetDate,2) ).toBe(false);
    global.Date = Date;
  });

  it(' targetDate 값이 없음 - 에러 ', () => {
    try {
      const targetDate = null
      checkTimeDifferenceWithinRange(targetDate,2)
    } catch (err) {
      expect(err).toEqual(new Error('목표 시간을 지정해야 합니다.'));
    }
  });

})