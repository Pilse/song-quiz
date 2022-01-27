/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const TextInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  padding: 25px 10px;
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
  padding-left: 12px;
  height: 10px;

  color: ${({ theme }) => theme.Colors.Error};

  ${({ theme }) => theme.TextStyles.Paragraph7};
`;
