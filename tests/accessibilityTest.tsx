import React from 'react';
import { render } from '@testing-library/react';

import { axe, toHaveNoViolations } from 'jest-axe';
//npm i --save-dev @types/jest-axe
expect.extend(toHaveNoViolations);

//React 컴포넌트의 접근성(Accessibility) 테스트를 수행
//jest-axe 라이브러리로 웹 접근성 표준을 준수하는지 확인하는 것을 목표
export default function accessibilityTest(Component: React.ComponentType) {
  describe(`accessibility`, () => {
    it(`component does not have any violations`, async () => {
      jest.useRealTimers(); // 실제 타이머 사용
      const { container } = render(<Component />); // 컴포넌트 렌더링
      const results = await axe(container); // 접근성 테스트 수행
      expect(results).toHaveNoViolations(); // 결과 검증
    });
  });
}
