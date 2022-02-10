/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const IconLayout = styled.img`
  ${({ clickable, theme }) => clickable && theme.Transition.ClickTransition};
`;
