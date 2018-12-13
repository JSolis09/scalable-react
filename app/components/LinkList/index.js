import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../Link';
import IconButton from '../IconButton';
import './styles.css';

function LinkList({ links, topicName, startAdd }) {
  const linkNodes = links.map(l => <LinkButton key={l.id} link={l} />);
  return (
    <div className="linkList">
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton
        icon="plus"
        buttonClass="button"
        iconClass="icon"
        onClick={() => startAdd(topicName)}
      />
    </div>
  );
}

LinkList.propTypes = {
  topicName: PropTypes.string.isRequired,
  startAdd: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;
