import styled from 'styled-components';

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 66px;
`;

export const HomeBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

export const PlayParagraph = styled.div`
  color: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.TextStyles.Paragraph1};
`;
