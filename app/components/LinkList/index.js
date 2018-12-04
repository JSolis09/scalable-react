import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

function LinkList({ links, topicName }) {
  const linkNodes = links.map(l => (
    <Link key={l.id} link={l} />
  ));
  return (
    <div>
      <h1>{topicName}</h1>
      {linkNodes}
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
