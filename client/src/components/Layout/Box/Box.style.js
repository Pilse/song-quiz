/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const BoxLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.Shadow.BoxShadow};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};

  ${({ type }) => {
    if (type === 'square') {
      return css`
        border-radius: 10px;
        width: 300px;
        height: 300px;
      `;
    }

    if (type === 'stretch') {
      return css`
        border-radius: 20px;
        padding: 30px;
        width: 100%;
      `;
    }

    return css`
      border-radius: 20px;
      padding: 30px;
    `;
  }}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `};
`;
