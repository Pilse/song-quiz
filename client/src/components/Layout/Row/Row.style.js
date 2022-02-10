/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const RowLayout = styled.div`
  display: flex;

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ padding }) => padding};
`;
