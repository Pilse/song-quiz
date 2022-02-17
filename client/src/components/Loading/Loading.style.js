/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Col from '../Layout/Col/Col';

export const StyledCol = styled(Col)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
