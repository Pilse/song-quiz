import styled, { css } from 'styled-components';
import Col from '../../../Layout/Col/Col';
import Paragraph from '../../../Paragraph/Paragraph';

export const StyledCol = styled(Col)`
  border-radius: 15px;
  background: ${({ theme }) => theme.Colors.White};
`;

export const StyledParagraph = styled(Paragraph)`
  ${({ isMyMessage, theme }) =>
    isMyMessage
      ? css`
          color: ${theme.Colors.Primary};
        `
      : css`
          color: ${theme.Colors.LightGray};
        `};

  ${({ theme }) => theme.TextStyles.Paragraph6};
`;
