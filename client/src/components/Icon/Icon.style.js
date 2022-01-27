/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const IconLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconBox = styled.img`
  ${({ clickable, theme }) => clickable && theme.Transition.ClickTransition};
`;
