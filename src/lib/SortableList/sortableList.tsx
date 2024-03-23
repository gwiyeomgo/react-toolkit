import React, { useEffect, useReducer } from 'react';

/*
* 드래그 앤 드롭 인터랙션을 구현할 때 useReducer를 사용하여 요소의 위치를 관리
https://codesandbox.io/p/sandbox/dnd-k9wvtw?file=%2Fsrc%2FApp.js%3A9%2C13
https://aurigait.com/blog/drag-and-drop-in-react-without-using-any-external-library/
https://velog.io/@yunsungyang-omc/React-Drag-Drop-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
https://ggarden.tistory.com/entry/react-drag-drop
https://chaeyoung2.tistory.com/116
 */

type State = {
  list: string[];
  dragItem: number | null;
  dragOverItem: number | null;
};

type Action =
  | { type: 'SET_DRAG_ITEM'; position: number }
  | { type: 'SET_DRAG_OVER_ITEM'; position: number }
  | { type: 'MOVE_ITEM' };

//https://react.vlpt.us/basic/20-useReducer.html
const reducer = (state: State, action: Action): State => {
  let newList;
  switch (action.type) {
    case 'SET_DRAG_ITEM':
      return { ...state, dragItem: action.position };
    case 'SET_DRAG_OVER_ITEM':
      return { ...state, dragOverItem: action.position };
    case 'MOVE_ITEM':
      newList = [...state.list];
      if (state.dragItem !== null && state.dragOverItem !== null) {
        const dragItemIndex = state.dragItem;
        const dragOverItemIndex = state.dragOverItem;
        const dragItemValue = newList[dragItemIndex];
        newList.splice(dragItemIndex, 1);
        newList.splice(dragOverItemIndex, 0, dragItemValue);
      }
      return { ...state, list: newList, dragItem: null, dragOverItem: null };
    default:
      return state;
  }
};

const SortableList: React.FC<{ initialList: string[] }> = ({ initialList }) => {
  useEffect(() => {
    const scripts = [
      'https://code.jquery.com/jquery-3.6.0.js',
      'https://code.jquery.com/ui/1.13.0/jquery-ui.js',
      'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js',
    ];

    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;

      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  const initialState: State = {
    list: initialList,
    dragItem: null,
    dragOverItem: null,
  };

  //useReducer를 사용하여 position을 관리함으로써 드래그 앤 드롭 동작에서 요소의 위치 변경을 효율적으로 처리
  const [state, dispatch] = useReducer(reducer, initialState);

  //사용자가 요소를 드래그하기 시작
  const dragStart = (position: number) => {
    dispatch({ type: 'SET_DRAG_ITEM', position });
  };
  //요소가 드롭존에 들어갈 때 반응
  const dragEnter = (position: number) => {
    dispatch({ type: 'SET_DRAG_OVER_ITEM', position });
  };

  //요소가 드롭존에 놓일때 -> 이동
  const drop = () => {
    dispatch({ type: 'MOVE_ITEM' });
  };

  return (
    <>
      {state.list.length > 0 &&
        state.list.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'lightblue',
              margin: '20px 25%',
              textAlign: 'center',
              fontSize: '40px',
            }}
            draggable
            onDragStart={() => dragStart(idx)}
            onDragEnter={() => dragEnter(idx)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()} //브라우저의 기본 동작을 중단
          >
            {item}
          </div>
        ))}
    </>
  );
};

export { SortableList };
