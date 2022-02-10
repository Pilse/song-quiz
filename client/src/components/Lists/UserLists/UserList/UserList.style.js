import styled from 'styled-components';
import Row from '../../../Layout/Row/Row';
import Paragraph from '../../../Paragraph/Paragraph';

export const StyledRow = styled(Row)`
  border-radius: 5px;

  background: ${({ theme }) => theme.Colors.White};

  ${({ theme }) => theme.Shadow.BottomShadow}
`;

export const StyledParagraph = styled(Paragraph)`
  display: flex;
  flex: 1;
`;

export const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);

  background: ${({ theme }) => theme.Colors.White};

  color: ${({ theme }) => theme.Colors.Primary};

  ${({ theme }) => theme.TextStyles.Paragraph3};
`;
