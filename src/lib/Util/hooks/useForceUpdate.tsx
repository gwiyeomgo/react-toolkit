import * as React from 'react';

// React 함수 컴포넌트에서 강제로 업데이트를 트리거할 때 사용
//React에서 상태(state)가 변경되면 컴포넌트가 다시 렌더링되는데, 때로는 상태가 변경되지 않았지만 컴포넌트를 강제로 다시 렌더링해야 할 때
//https://react.vlpt.us/basic/20-useReducer.html
//ex 타이머 완료 감지?
//너무 자주 호출하면 React 성능에 영향을 줄 수 있음
export default function useForceUpdate() {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  return forceUpdate;
}
