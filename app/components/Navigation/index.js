import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import AppBar from '../AppBar';

function Navigation({ topics, selectTopic }) {
  const topicNodes = topics.map(topic => (
    <div role="none" key={topic.name} onClick={() => selectTopic(topic)}>
      {topic.name}
    </div>
  ));
  return (
    <div className={styles.navigation}>
      <AppBar />
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTopic: PropTypes.func.isRequired,
};

export default Navigation;
