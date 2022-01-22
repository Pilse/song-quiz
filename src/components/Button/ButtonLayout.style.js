/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ButtonLayout = styled.div`
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 30px 22px;

  background: ${({ theme }) => theme.Colors.Primary};

  color: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.Shadow.ButtonShadow};
`;
