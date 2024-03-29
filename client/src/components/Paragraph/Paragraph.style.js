/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ParagraphLayout = styled.p`
  white-space: pre-wrap;
  text-align: ${({ align }) => align};

  color: ${({ color, theme }) => theme.Colors[color]};

  ${({ textStyle, theme }) => theme.TextStyles[textStyle]};
`;
