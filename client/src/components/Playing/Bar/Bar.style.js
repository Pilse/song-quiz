/* eslint-disable import/prefer-default-export */
import styled, { css, keyframes } from 'styled-components';

const updown = keyframes`
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(1.2);
  }
  50% {
    transform: scaleY(1);
  }
  75% {
    transform: scaleY(0.8);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const BarLayout = styled.div`
  width: 8px;
  border-radius: 50px;

  height: ${({ height }) => `${height}px`};

  background-color: ${({ theme }) => theme.Colors.White};

  ${({ playing, duration }) =>
    playing &&
    css`
      animation: ${duration}s ${updown} linear infinite;
    `}
`;
