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
const Item = styled.div<{ isDragging: boolean; draggableStyle: any }>`
  user-select: none;
  padding: ${grid * 2}px;
  margin: 0 0 ${grid}px 0;
  background: ${(props) => (props.isDragging ? 'lightgreen' : 'grey')};
  ${(props) => props.draggableStyle}
`;

const List = styled.div<{ isDraggingOver: boolean }>`
  background: ${(props) => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
  padding: ${grid}px;
  width: 250px;
`;

type DroppableListProps = {
  count?: number;
};
const DroppableList = (props: DroppableListProps) => {
  const [items, setItems] = useState(getItems(props.count ? props.count : 10));

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
        {(provided, snapshot) => (
          <List
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <Item
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggableStyle={provided.draggableProps.style}
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
