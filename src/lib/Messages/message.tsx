import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  margin: 10px 30px;
  padding: 10px;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  width: max-content; /* 수정: min-content 대신 max-content 사용 */
  max-width: 300px; /* 추가: 부모 요소 크기를 넘지 않도록 최대 너비 설정 */
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  outline: none;
`;

const Text = styled.span`
  color: #000000;
  margin: 0 5px;
  text-align: left;
  font-size: 16px;
  width: 100%;
  word-wrap: break-word; /* 추가 */
  max-width: 200px; /* 추가 */
`;

type MessageProps = {
  id: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Message = ({ children, className, style }: MessageProps) => {
  return (
    <Container className={className} style={style}>
      <Text>{children}</Text>
    </Container>
  );
};
