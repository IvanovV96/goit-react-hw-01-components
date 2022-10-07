import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  width: 200px;
  padding: 10px;
  background-color: white;
  box-shadow: 4px 6px 5px 0px rgba(0, 0, 0, 0.75);
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  img {
    margin: 0 10px;
  }
`;

export const StatusIndicator = styled.span`
  height: 20px;
  width: 20px;
  align-self: center;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
  display: inline-block;
`;
