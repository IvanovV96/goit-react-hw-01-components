import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: white;
  width: 200px;
`;

export const StatusIndicator = styled.span`
  display: inline-flex;
  height: 20px;
  width: 20px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
