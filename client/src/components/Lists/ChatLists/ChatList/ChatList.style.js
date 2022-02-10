import styled, { css } from 'styled-components';
import Col from '../../../Layout/Col/Col';
import Paragraph from '../../../Paragraph/Paragraph';

export const StyledCol = styled(Col)`
  white-space: pre-line;

  ${({ isMyMessage, theme }) =>
    isMyMessage
      ? css`
          background: ${theme.Colors.Primary}};
          border-radius: 15px 15px 0 15px;
        `
      : css`
          background: ${theme.Colors.DarkWhite}};
          border-radius: 15px 15px 15px 0;
        `};
`;

export const StyledParagraph = styled(Paragraph)`
  padding: 0 15px;

  color: ${({ theme }) => theme.Colors.Gray};

  ${({ theme }) => theme.TextStyles.Paragraph3};
`;

export const ChatMessage = styled.p`
  ${({ theme }) => theme.TextStyles.Paragraph3};

  ${({ isMyMessage, theme }) =>
    isMyMessage
      ? css`
          color: ${theme.Colors.White};
        `
      : css`
          color: ${theme.Colors.Black};
        `};
`;
