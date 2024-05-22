import { act, renderHook } from '@testing-library/react';
import { useBroadcast } from '../hooks/useBroadcast';
it('useBroadcast', () => {
  const { result } = renderHook(() =>
    useBroadcast('test', (d) => {
      expect(d).toBe(1);
    }),
  );
  act(() => result.current[0](1));
});
