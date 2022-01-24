import styled from 'styled-components';

export const GameLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 67px;
  padding: 5% 20%;
  flex: 5;
`;

export const QuizInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

export const CodeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

export const CodeParagraph = styled.p`
  width: 100%;
  text-align: center;

  color: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.TextStyles.Paragraph4};
`;

export const QuizParagraph = styled.p`
  width: 100%;
  text-align: center;

  color: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.TextStyles.Paragraph1};
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 26px;
  padding: 35px 16px;
  flex: 2;

  background: ${({ theme }) => `${theme.Colors.White}E6`};

  border-right: 1px solid ${({ theme }) => theme.Colors.Primary};
`;

export const UsersParagraph = styled.p`
  text-align: center;

  color: ${({ theme }) => theme.Colors.Primary};

  ${({ theme }) => theme.TextStyles.Paragraph4};
`;

export const ChatBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex: 3;

  background: ${({ theme }) => `${theme.Colors.White}E6`};
`;

export const ChatLogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  flex: 1;
  padding: 35px 17px;

  border-bottom: 1px solid ${({ theme }) => theme.Colors.Primary};
`;

export const ChatInputBox = styled.div`
  display: flex;
  padding: 7px 6px;
`;
