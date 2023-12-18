/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Col from '../Layout/Col/Col';

export const AbsoluteCol = styled(Col)`
  position: absolute;
  top: ${({ top }) => (top ? `${top}px` : 0)};
  left: ${({ left }) => (left ? `${left}px` : 0)};
  background: transparent;
  backdrop-filter: blur(5px);
  z-index: 10;
`;
