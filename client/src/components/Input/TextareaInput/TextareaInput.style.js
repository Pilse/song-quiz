/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Textarea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 10px;
  resize: none;
  font-family: inherit;

  border: 1px solid ${({ theme }) => theme.Colors.LightGray};

  background-color: ${({ theme }) => theme.Colors.Ivory};

  ::placeholder {
    color: ${({ theme }) => theme.Colors.LightGray};
  }

  ${({ theme }) => theme.TextStyles.Paragraph4};
`;
