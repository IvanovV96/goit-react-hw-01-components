import PropTypes from 'prop-types';
import { Container, List, ListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
