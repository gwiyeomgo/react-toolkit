import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Loading = styled.span`

    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${rotation} 2s linear infinite;
`
export {Loading}