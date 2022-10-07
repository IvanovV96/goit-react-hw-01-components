import PropTypes from 'prop-types';

import {
  Container,
  UserPhoto,
  UserInfo,
  UserName,
  Location,
  Tag,
  List,
  ListItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <UserInfo>
        <UserPhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </UserInfo>
      <List>
        <ListItem>
          <span>Followers</span>
          <span> {followers}</span>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <span> {views}</span>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <span> {likes}</span>
        </ListItem>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
