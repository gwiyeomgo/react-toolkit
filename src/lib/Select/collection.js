import React, {
  useState,
  createContext,
  useRef,
  useEffect,
  useContext
} from "react";

import styles from "../styles.module.css";
const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const itemMap = useRef(new Map());

  return (
    <CollectionContext.Provider value={{ itemMap }}>
      {children}
    </CollectionContext.Provider>
  );
}

const ITEM_DATA_ATTR = "data-collection-item";
function CollectionItem({ value, children, onSelectValue, onKeyDown }) {
  const context = useContext(CollectionContext);

  const ref = useRef([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    context.itemMap.current.forEach((item) => {
      if (item.ref === ref) {
        item.isSelected = true;
        onSelectValue(item.value);
      } else {
        item.ref.current.classList.remove(styles.selected);
        item.isSelected = false;
      }
    });

    setIsSelected(!isSelected);
  };

  useEffect(() => {
    context.itemMap.current.set(ref, { ref, value });
    return () => {
      context.itemMap.current.delete(ref);
    };
  }, [context, value]);

  return (
    <div
      {...{ [ITEM_DATA_ATTR]: "" }}
      ref={ref}
      onClick={handleClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}

function useCollection() {
  const context = useContext(CollectionContext);

  const getItems = () => {
    const orderedItems = Array.from(context.itemMap.current).map(
      (item, index) => {
        return {
          index: index,
          value: item.value,
          isSelected: item.isSelected
        };
      }
    );

    return orderedItems;
  };

  return { getItems };
}

const Collection = {
  Provider: CollectionProvider,
  Item: CollectionItem
};

export { Collection, useCollection };
