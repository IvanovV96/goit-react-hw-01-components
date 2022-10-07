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
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
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
