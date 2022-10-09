import PropTypes from 'prop-types';

import { ListItem, StatusIndicator } from './FriendList.styled';

export const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListItem>
      <StatusIndicator isOnline={isOnline}></StatusIndicator>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </ListItem>
  );
};

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
