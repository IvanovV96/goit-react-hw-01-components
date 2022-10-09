import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendsListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
