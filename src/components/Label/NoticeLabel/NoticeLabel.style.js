/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NoticeLabelLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: cetner;

  color: ${({ theme }) => theme.Colors.Primary};

  ${({ theme }) => theme.TextStyles.Paragraph4};
`;
