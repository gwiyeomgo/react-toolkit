import { render, waitFor, screen, act } from '@testing-library/react';
import { Icon, IconName } from './icon';
import { icons } from './icons';
import React from 'react';

describe('<Icon />', () => {
  // it.each 로 테스트 케이스를 반복
  it.each(Object.keys(icons) as IconName[])(
    'renders correct %s icon without violations',
    async (iconName: IconName) => {
      render(<Icon icon={iconName} />);
      // act 함수 내에서 비동기 작업이 실행되도록 수정
      await act(async () => {
        const iconElement = screen.getByRole('img');

        // 비동기 작업을 대기하고, 특정 조건이 충족될 때까지 기다린다.
        await waitFor(() => {
          expect(iconElement).toHaveAttribute('aria-label', iconName);
        });
      });
    },
  );
});
