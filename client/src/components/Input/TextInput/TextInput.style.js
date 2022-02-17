import styled, { css } from 'styled-components';

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

  ${({ theme }) => theme.TextStyles.Paragraph4};
`;
