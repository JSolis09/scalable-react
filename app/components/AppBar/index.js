import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './styles.css';

function AppBar({ toggleDrawer }) {
  return (
    <div className="appBar">
      <div role="none" className="iconButton" onClick={toggleDrawer}>
        <FontAwesome className="icon" name="bars" />
      </div>
      <div className="heading">Coder daily</div>
      <div className="linkContainer">Log in</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
