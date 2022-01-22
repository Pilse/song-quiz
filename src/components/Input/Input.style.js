/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const TextInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 0 10px;
  border-radius: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.Colors.LightGray};
  }

  background: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.TextStyles.Paragraph3};

  ${({ error, theme }) =>
    error
      ? css`
          border: 1px solid ${theme.Colors.Error};
        `
      : css`
          border: 1px solid ${theme.Colors.Gray};
        `}
`;

export const ErrorParagraph = styled.p`
  padding-left: 16px;

  color: ${({ theme }) => theme.Colors.Error};

  ${({ theme }) => theme.TextStyles.Paragraph7};
`;
