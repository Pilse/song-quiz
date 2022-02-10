/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Textarea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  padding: 7px;
  resize: none;
  font-family: inherit;

  background-color: ${({ theme }) => theme.Colors.Ivory};

  ::placeholder {
    color: ${({ theme }) => theme.Colors.LightGray};
  }

  ${({ theme }) => theme.TextStyles.Paragraph3};
`;
