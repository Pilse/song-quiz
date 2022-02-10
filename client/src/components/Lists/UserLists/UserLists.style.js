/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Col from '../../Layout/Col/Col';

export const StyledCol = styled(Col)`
  overflow-y: auto;
  border-radius: 5px;

  background-color: ${({ theme }) => `${theme.Colors.DarkWhite}26`};

  ${({ theme }) => theme.Scroll.Default};
`;
