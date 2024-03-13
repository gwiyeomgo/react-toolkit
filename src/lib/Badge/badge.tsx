import React from 'react';
import styles from '../styles.module.css';
import styled from 'styled-components';

export type BadgeProps = {
  children?: React.ReactNode;
  count?: number;
  color?: string;
  text?: string;
  moveLeft?: number;
  moveBottom?: number;
  className?: string;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
};
const Container = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
`;

const Badge = ({
  children,
  count,
  color = '#ff4d4f',
  text,
  moveLeft = 0,
  moveBottom = 0,
  textStyle,
}: BadgeProps) => {
  const hasCount = count !== undefined && count !== null;
  const hasChildren = children !== undefined && children !== null;

  if (moveBottom > 50 || moveLeft > 50)
    throw new Error('moveBottom 과 moveLeft 은 50 이하의 숫자여야 합니다.');

  return (
    <Container>
      {hasChildren && children}
      <span
        className={hasChildren ? styles.badgeAboveChildren : styles.badge}
        style={{
          color: 'white',
          textAlign: 'center',
          padding: '4px',
          backgroundColor: color,
          transform: hasChildren
            ? `translate(${50 - moveLeft}%, -${50 - moveBottom}%)`
            : 'none',
          borderRadius:
            hasCount && count.toString().length > 1 ? '15px' : '50%',
          width: !hasCount
            ? undefined
            : count.toString().length === 1
              ? '18px'
              : hasCount && count.toString().length === 2
                ? '20px'
                : undefined,
        }}
      >
        {count}
      </span>
      {text && (
        <span
          style={{
            marginInlineStart: text ? '8px' : '0',
            fontSize: '14px',
            ...textStyle,
          }}
        >
          {text}
        </span>
      )}
    </Container>
  );
};
export { Badge };
