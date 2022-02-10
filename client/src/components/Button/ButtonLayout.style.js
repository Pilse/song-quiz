/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ButtonLayout = styled.div`
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 25px 30px;
  cursor: pointer;
  transition: 0.2s ease-out;

  :hover {
    transform: scale(0.95);
  }

  background: ${({ theme }) => theme.Colors.Primary};

  color: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.TextStyles.Paragraph3};

  ${({ theme }) => theme.Shadow.ButtonShadow};
`;
