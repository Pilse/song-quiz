import styled from 'styled-components';
import Col from '../../components/Layout/Col/Col';

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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px 32px;
  flex: 5;
  position: relative;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  gap: 5px;
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
  width: 200px;
  height: 100%;
  align-items: center;
  gap: 26px;
  padding: 35px 16px;

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
  width: 400px;
  height: 100%;
  flex-direction: column;

  background: ${({ theme }) => `${theme.Colors.White}E6`};
`;

export const ChatLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 35px 5px;
  overflow-y: auto;

  ${({ theme }) => theme.Scroll.Default};
`;

export const InputForm = styled.form`
  display: flex;
  z-index: 2;

  ${({ theme }) => theme.Shadow.TopShadow};
`;

export const StyledCol = styled(Col)`
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.Colors.Primary};

  background: ${({ theme }) => theme.Colors.White};
`;
