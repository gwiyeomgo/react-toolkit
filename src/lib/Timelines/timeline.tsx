import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
`;

const Date = styled.div`
  padding: 4px 10px;
  border: none;
  cursor: pointer;
  background: #0d6efd;
  color: white;
  border-radius: 18px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Title = styled.div`
  margin: 5px 10px 0;
  padding: 0;
  color: black;
  opacity: 0.8;
  flex-shrink: 0;
  width: 100px;
  flex-grow: 1;
`;

const Contents = styled.div`
  margin: 8px 0 0;
  color: black;
`;

const Item = styled.div`
  position: relative;
  padding: 25px 20px;
  &:hover {
    ${Date} {
      color: white;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    ${Title} {
      color: grey;
      font-weight: bold;
    }
    ${Contents} {
      color: grey;
    }
  }
  &:active {
    ${Date} {
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    left: -7px;
    width: 12px;
    height: 12px;
    background: #0d6efd;
    border-radius: 50%;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  &::after {
    position: absolute;
    top: 30px;
    left: -6px;
    width: 12px;
    height: 12px;
    box-shadow: #e7e9ee 0 0 10px rgba(0, 255, 0, 1);
    box-shadow: #e7e9ee 0 0 10px rgba(0, 255, 0, 1);
    opacity: 0;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 500px;
  box-sizing: border-box;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 1px solid #5a6794;
  list-style: none;
`;

const TimelineList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container>
      <Ul>{children}</Ul>
    </Container>
  );
};

type TimeLineItemProps = {
  url?: string;
  tag?: string;
  title?: string;
  contents?: string;
};
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
