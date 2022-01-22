/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const BoxLayout = styled.div`
  ${({ theme }) => theme.Shadow.BoxShadow}

  ${({ size }) =>
    size === 'md'
      ? css`
          border-radius: 10px;
          padding: 42px 87px;
        `
      : css`
          border-radius: 20px;
          padding: 30px 107xp;
        `}
`;
