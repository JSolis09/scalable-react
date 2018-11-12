import React from 'react';
import PropTypes from 'prop-types';

function LinkList({ links }) {
  const linkNodes = links.map(link => (
    <div key={link.id}>
      {link.url} - {link.description}
    </div>
  ));
  return <div>{linkNodes}</div>;
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;
