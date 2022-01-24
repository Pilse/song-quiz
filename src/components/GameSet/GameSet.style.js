import styled from 'styled-components';

export const GameSetLayout = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: transparent;
  backdrop-filter: blur(5px);
`;

export const GameSetInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: min(496px, 50vw);
  justify-content: center;
  align-items: center;
  gap: 33px;
`;

export const WinnerParagraph = styled.p`
  text-align: center;

  ${({ theme }) => theme.TextStyles.Paragraph2};
`;
