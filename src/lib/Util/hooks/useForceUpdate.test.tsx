import { act, render, screen, waitFor } from '@testing-library/react';
import useForceUpdate from './useForceUpdate';
import React from 'react';
//https://codesandbox.io/p/sandbox/t-wgdtkh?file=%2Fsrc%2FApp.js%3A3%2C10-3%2C24
/*
// 원래의 useForceUpdate 모듈 저장
const originalUseForceUpdate = jest.requireActual('./useForceUpdate');

// useForceUpdate 모듈을 목(mock)으로 대체
jest.mock('./useForceUpdate', () => jest.fn());
afterEach(() => {
    // useForceUpdate 모듈을 원래대로 되돌림
    jest.unmock('./useForceUpdate');
    jest.resetModules();
    jest.doMock('./useForceUpdate', () => originalUseForceUpdate);
});
const Test = () => {
  const forceUpdate = useForceUpdate(); // forceUpdate 함수만 사용
    const handleClick = () => {
        // 버튼 클릭 시 강제로 컴포넌트를 다시 렌더링
       forceUpdate();
    };

    return (
        <button onClick={handleClick}>test</button>
    );
};

it('버튼 클릭 시 forceUpdate가 호출되는지 확인', async() => {
    //forceUpdate 함수를 테스트용 Mock 함수로 설정
    const mockForceUpdate = jest.fn();
    require('./useForceUpdate').mockReturnValue(mockForceUpdate);
    const { getByText } = render(<Test />);
    const button = getByText('test')

    await act(()=>{
        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);
    })

    expect(mockForceUpdate).toHaveBeenCalledTimes(3); // forceUpdate 호출되었는지 확인
});
*/
//타이머 컴포넌트가 1초마다 화면이 업데이트되는지를 확인
export const Timer = () => {
  const forceUpdate = useForceUpdate();

  React.useEffect(() => {
    const intervalId = setInterval(forceUpdate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div role="timer">{new Date().toLocaleTimeString()}</div>;
};

describe('forceUpdate 테스트2', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('1초마다 화면이 업데이트되는지 확인', async () => {
    render(<Timer />);
    const time = screen.getByText(new Date().toLocaleTimeString());
    const initTime = time.textContent;

    // 타이머 진행200
    await act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      const updateTime = time.textContent;
      expect(updateTime).not.toEqual(initTime);
    });
  });
});
