import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Link({ link }) {
  return (
    <div className="link">
      <div className="votingContainer">
        <div className="votingCount">
          {link.voteCount}
        </div>
      </div>
      <div className="detailsContainer">
        <div>
          <a href={link.url} className="linkAnchor">{link.url}</a>
        </div>
        <div className="description">
          {link.description}
        </div>
      </div>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    voteCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Link;
