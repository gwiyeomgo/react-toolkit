import React, { useState, useReducer, useRef, CSSProperties } from 'react';
import styles from '../styles.module.css';

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

        if (dragItemIndex != dragOverItemIndex) {
          const dragItemValue = newList[dragItemIndex];
          newList.splice(dragItemIndex, 1);
          newList.splice(dragOverItemIndex, 0, dragItemValue);
        }
      }
      return { ...state, list: newList, dragItem: null, dragOverItem: null };
    default:
      return state;
  }
};

type SortableListProps = {
  initialList: string[];
  height: number;
  containerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
};
const SortableList: React.FC<SortableListProps> = ({
  initialList,
  height,
  containerStyle,
  itemStyle,
}) => {
  const initialState: State = {
    list: initialList,
    dragItem: null,
    dragOverItem: null,
  };

  //useReducer를 사용하여 position을 관리함으로써 드래그 앤 드롭 동작에서 요소의 위치 변경을 효율적으로 처리
  const [state, dispatch] = useReducer(reducer, initialState);
  const [clientY, setClientY] = useState(0);
  const elemets = new Array(initialList.length);
  const childRefs = useRef<(HTMLDivElement | null)[]>(elemets);
  const addRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) {
      childRefs.current[idx] = el;
    }
  };

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

  const getIndexOfDivByClientY = (clientY: number): number | null => {
    const boundingClientRects = childRefs.current.map((ref) => {
      if (ref) {
        return ref.getBoundingClientRect();
      }
      return null;
    });
    const index = boundingClientRects.findIndex((rect) => {
      if (rect) {
        return clientY >= rect.top && clientY <= rect.bottom;
      }
      return false; // rect가 null인 경우는 false를 반환하여 해당 요소를 건너뜀
    });

    //index !== -1은 항상 true
    return index !== -1 ? index : null;
  };
  const touched = (index: number) => {
    childRefs.current.forEach((ref, i) => {
      if (i === index) {
        ref && ref.classList.add(styles.touched);
      } else {
        ref && ref.classList.remove(styles.touched);
      }
    });
  };
  return (
    <div
      className={styles.sortableList}
      style={{ ...containerStyle, height: height }}
    >
      {state.list.length > 0 &&
        state.list.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => addRef(el, idx)}
            onTouchMove={(e) => {
              e.stopPropagation();
              setClientY(e.targetTouches[0].clientY);
            }}
            onMouseDown={() => {
              drop();
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              const changedIdx = getIndexOfDivByClientY(clientY);
              if (changedIdx) {
                dragEnter(changedIdx);
                drop();
              }
              const ref = childRefs.current[idx];
              ref && ref.classList.remove(styles.touched);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              dragStart(idx);
              touched(idx);
            }}
            style={{
              border: '1px solid black',
              width: '100%',
              height: height / state.list.length,
              ...itemStyle,
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
    </div>
  );
};

export { SortableList };
