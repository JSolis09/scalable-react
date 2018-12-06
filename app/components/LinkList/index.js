import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import IconButton from '../IconButton';
import styles from './styles.css';

function LinkList({ links, topicName, startAdd }) {
  const linkNodes = links.map(l => (
    <Link key={l.id} link={l} />
  ));
  return (
    <div className="linkList">
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton icon="plus" buttonClass="button" iconClass="icon" onClick={() => startAdd(topicName)} />
    </div>
  );
}

LinkList.propTypes = {
  topicName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;
