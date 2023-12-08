import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
`;

const Date = styled.div`
  padding: 4px 10px;
  background: #5a6794;
  color: #1c2135;
  border-radius: 18px;
  border: #5a6794 solid 2px;
`;

const Title = styled.div`
  margin: 5px 10px 0;
  padding: 0;
  color: #5a6794;
  opacity: 0.8;
  flex-shrink: 0;
  width: 100px;
  flex-grow: 1;
`;

const Contents = styled.div`
  margin: 8px 0 0;
  color: #5a6794;
`;

const Item = styled.div`
  position: relative;
  padding: 25px 20px;
  &:hover {
    ${Date} {
      background: #1c2135;
      border: #1c2135 solid 2px;
      color: white;
      font-weight: bold;
    }
    ${Title} {
      color: #5a6794;
      font-weight: bold;
    }
    ${Contents} {
      color: #8794c0;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: -7px;
    width: 12px;
    height: 12px;
    background: #5a6794;
    border-radius: 50%;
    box-shadow: #8794c0 0 0 10px rgba(0, 0, 0, 1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 40px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: #5a6794;
    border-radius: 50%;
    box-shadow: #e7e9ee 0 0 10px rgba(0, 255, 0, 1);
    box-shadow: #e7e9ee 0 0 10px rgba(0, 255, 0, 1);
    opacity: 0;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const Container = styled.div`
  color: white;
  max-width: 500px;
  box-sizing: border-box;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 2px solid #5a6794;
  list-style: none;
`;

const TimelineList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container>
      <Ul>{children}</Ul>
    </Container>
  );
};

interface TimeLineItemProps {
  url?: string;
  tag?: string;
  title?: string;
  contents?: string;
}
const TimelineItem = ({ url, tag, title, contents }: TimeLineItemProps) => {
  return (
    <a
      role="button"
      style={{
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
      href={url}
      //eslint 에러: Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers:
      target="_blank"
      rel="noreferrer"
    >
      <Item>
        <Header>
          <Date>{tag}</Date>
          <Title>{title}</Title>
        </Header>
        <Contents>
          <h5 style={{ margin: 0, marginLeft: 10 }}>{contents}</h5>
        </Contents>
      </Item>
    </a>
  );
};

const Timeline = {
  List: TimelineList,
  Item: TimelineItem,
};

export { Timeline };
