import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  margin: 10px 30px;
  padding: 20px;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: #00bdb4;
  border-radius: 15px;
  box-shadow:
    -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.1),
    inset -50px -50px 50px rgba(255, 255, 255, 0.2),
    inset 50px 50px 50px rgba(0, 0, 0, 0.1);
`;

const Text = styled.span`
  color: white;
  margin: 0 5px;
  text-align: center;
  font-size: 16px;
`;

interface Props {
  id: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Message = ({ children, className, style }: Props) => {
  return (
    <Container className={className} style={style}>
      <Text>{children}</Text>
    </Container>
  );
};
