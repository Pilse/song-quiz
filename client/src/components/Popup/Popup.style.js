/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Col from '../Layout/Col/Col';

export const AbsoluteCol = styled(Col)`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  backdrop-filter: blur(5px);
`;
