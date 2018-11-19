import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

function LinkList({ links }) {
  const linkNodes = links.map(l => (
    <Link key={l.id} link={l} />
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
