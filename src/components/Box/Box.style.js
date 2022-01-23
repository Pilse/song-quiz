/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const BoxLayout = styled.div`
  display: flex;

  background: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.Shadow.BoxShadow};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};

  ${({ size }) =>
    size === 'md'
      ? css`
          border-radius: 10px;
          padding: 42px 87px;
        `
      : css`
          border-radius: 20px;
          padding: 30px 107px;
        `}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `};
`;
