/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Row from '../../Layout/Row/Row';

export const StyledRow = styled(Row)`
  border-radius: 10px;
  ${({ theme }) => theme.Shadow.ListShadow};
`;
