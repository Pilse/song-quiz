/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ColLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ padding }) => padding};
`;
