import { ListItem, StatusIndicator } from './FriendList.styled';

export const FriendsListItem = ({ friends }) => {
  return friends.map(({ id, name, avatar, isOnline }) => {
    return (
      <ListItem key={id}>
        <StatusIndicator isOnline={isOnline}></StatusIndicator>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </ListItem>
    );
  });
};
