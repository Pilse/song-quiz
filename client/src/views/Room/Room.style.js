import styled from 'styled-components';

export const RoomLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 129px;
  padding-top: 60px;
`;

export const OptionBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 158px;
`;

export const RoomOptionParagraph = styled.p`
  text-align: center;
  word-break: break-word;

  color: ${({ theme }) => theme.Colors.Primary};

  ${({ theme }) => theme.TextStyles.Paragraph2};
`;
