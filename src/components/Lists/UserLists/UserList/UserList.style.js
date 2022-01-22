import styled from 'styled-components';

export const UserListLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

export const NicknameParagraph = styled.p`
  color: ${({ theme }) => theme.Colors.Gray};
`;

export const ScoreBox = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);

  background: ${({ theme }) => theme.Colors.White};

  color: ${({ theme }) => theme.Colors.Primary};
`;
