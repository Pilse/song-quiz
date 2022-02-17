/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Col from '../../../Layout/Col/Col';

export const StyledCol = styled(Col)`
  overflow: auto;

  ${({ theme }) => theme.Scroll.Default};
`;
