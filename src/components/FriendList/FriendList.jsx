import { List } from './FriendList.styled';
import { FriendsListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <List>
      <FriendsListItem friends={friends} />
    </List>
  );
};
