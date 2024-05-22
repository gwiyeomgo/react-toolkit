import React, { createContext, useRef, useEffect, useContext } from 'react';
import styles from '../styles.module.css';
export const CollectionContext = createContext(undefined);
const CollectionProvider = ({ children }) => {
  const itemMap = useRef(new Map());
  return React.createElement(
    CollectionContext.Provider,
    { value: { itemMap } },
    children,
  );
};
const ITEM_DATA_ATTR = 'data-collection-item';
function CollectionItem({ index, value, children, onSelectValue }) {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error(
      'CollectionItem 는 Collection.Provider 내부에서 사용되어야 합니다',
    );
  }
  //TS2339: Property 'classList' does not exist on type 'never'
  const ref = useRef(null);
  const handleClick = () => {
    context.itemMap.current.forEach((item) => {
      var _a, _b, _c, _d;
      if (item && item.ref === ref) {
        if (onSelectValue) {
          onSelectValue(item.value);
        }
        (_b =
          (_a = item.ref) === null || _a === void 0 ? void 0 : _a.current) ===
          null || _b === void 0
          ? void 0
          : _b.classList.add(styles.selected);
      } else {
        (_d =
          (_c = item.ref) === null || _c === void 0 ? void 0 : _c.current) ===
          null || _d === void 0
          ? void 0
          : _d.classList.remove(styles.selected);
      }
    });
  };
  //KeyboardEventHandler<T> | undefined;
  const handleKeyDown = (e) => {
    var _a, _b;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const items = Array.from(context.itemMap.current.values());
      const currentIndex = items.findIndex((item) => item.ref === ref);
      const nextIndex = currentIndex + 1 < items.length ? currentIndex + 1 : 0;
      const nextItem = items[nextIndex];
      if (nextItem) {
        nextItem.ref.current.focus();
        nextItem.ref.current.classList.add(styles.selected); // 스타일 추가
        (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null ||
        _a === void 0
          ? void 0
          : _a.classList.remove(styles.selected); // 현재 항목의 스타일 제거
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const items = Array.from(context.itemMap.current.values());
      const currentIndex = items.findIndex((item) => item.ref === ref);
      const prevIndex =
        currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1;
      const prevItem = items[prevIndex];
      if (prevItem) {
        prevItem.ref.current.focus();
        prevItem.ref.current.classList.add(styles.selected); // 스타일 추가
        (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null ||
        _b === void 0
          ? void 0
          : _b.classList.remove(styles.selected); // 현재 항목의 스타일 제거
      }
    }
    if (e.key === 'Enter') {
      const items = Array.from(context.itemMap.current.values());
      const currentIndex = items.findIndex((item) => item.ref === ref);
      if (onSelectValue) {
        onSelectValue(items[currentIndex].value);
      }
    }
  };
  useEffect(() => {
    context.itemMap.current.set(ref, { ref, value });
    return () => {
      context.itemMap.current.delete(ref);
    };
  }, [context, value]);
  return React.createElement(
    'div',
    Object.assign(
      {},
      { [ITEM_DATA_ATTR]: index },
      {
        ref: ref,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        tabIndex: index,
        role: 'listitem',
      },
    ),
    children,
  );
}
function useCollection() {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error(
      'useCollection 는 Collection.Provider 내부에서 사용되어야 합니다',
    );
  }
  const getItems = () => {
    const options = Array.from(context.itemMap.current).map((item, index) => {
      return {
        index: index,
        value: item[1].value,
        ref: item[1].ref,
      };
    });
    return options;
  };
  const focusItem = (v) => {
    context.itemMap.current.forEach((item) => {
      if (item.value === v) {
        item.ref.current.focus();
        item.ref.current.classList.add(styles.selected);
      } else {
        item.ref.current.classList.remove(styles.selected);
      }
    });
  };
  return { getItems, focusItem };
}
const Collection = {
  Provider: CollectionProvider,
  Item: CollectionItem,
};
export { Collection, useCollection };
