import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import styled from 'styled-components';

const getItems = (count: number) =>
  Array.from({ length: count }, (_, k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// A little function to help with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;
const Item = styled.div`
  user-select: none;
  padding: ${grid * 2}px;
  margin: 0 0 ${grid}px 0;
`;

const List = styled.div`
  padding: ${grid}px;
  width: 250px;
`;

type DroppableListProps = {
  count?: number;
};

const DroppableList = (props: DroppableListProps) => {
  const { count = 10 } = props;
  const [items, setItems] = useState(getItems(count));

  const onDragEnd = (result: DropResult) => {
    //Dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index,
    );

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <Item
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </Item>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { DroppableList };
