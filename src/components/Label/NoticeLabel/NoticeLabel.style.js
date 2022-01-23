/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NoticeLabelLayout = styled.p`
  width: 100%;
  text-align: center;
  word-break: keep-all;

  color: ${({ theme }) => theme.Colors.Primary};

  ${({ size, theme }) =>
    size === 'sm' ? theme.TextStyles.Paragraph4 : theme.TextStyles.Paragraph2};
`;
