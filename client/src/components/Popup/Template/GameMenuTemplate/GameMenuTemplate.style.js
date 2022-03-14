/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TextButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;

  background-color: ${({ theme }) => theme.Colors.White};

  color: ${({ theme }) => theme.Colors.LightGray};

  ${({ theme }) => theme.TextStyles.Paragraph2};

  &.selected {
    color: ${({ theme }) => theme.Colors.Primary};

    border-bottom: 2px solid ${({ theme }) => theme.Colors.Primary};
  }
`;
