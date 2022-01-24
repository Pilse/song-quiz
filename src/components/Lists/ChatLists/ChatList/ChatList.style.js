import styled from 'styled-components';

export const ChatListLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  padding: 15px 15px;
  border-radius: 15px;
  background: ${({ theme }) => theme.Colors.White};
`;

export const NicknameParagraph = styled.p`
  color: ${({ theme }) => theme.Colors.LightGray};

  ${({ theme }) => theme.TextStyles.Paragraph5};
`;

export const MessageParagraph = styled.p`
  ${({ theme }) => theme.TextStyles.Paragraph5};
`;
