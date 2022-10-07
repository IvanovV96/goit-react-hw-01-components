import { List, ListItem, Dot } from './FriendListItem.styled';
import PropTypes from 'prop-types';
export const FriendListItem = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <ListItem key={`id-${id}`}>
            <Dot prop={isOnline}></Dot>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
          </ListItem>
        );
      })}
    </List>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
