import React from 'react';

import { render } from '../tests/utils';

//기본적으로 모든 종류의 React 컴포넌트에 적용
//컴포넌트가 제대로 마운트되고, 리렌더링되며, 언마운트될 때 에러 없이 동작하는지 확인

export default function mountTest(Component: React.ComponentType) {
  describe(`mount and unmount`, () => {
    it(`component could be updated and unmounted without errors`, () => {
      const { unmount, rerender } = render(<Component />);
      expect(() => {
        rerender(<Component />);
        unmount();
      }).not.toThrow();
    });
  });
}
