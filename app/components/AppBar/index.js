import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './styles.css';
import { Link } from 'react-router-dom';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">login</Link>);

  return (
    <div className="appBar">
      <div role="none" className="iconButton" onClick={toggleDrawer}>
        <FontAwesome className="icon" name="bars" />
      </div>
      <div className="heading">Coder daily</div>
      <div className="linkContainer">
          { loginLink }
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default AppBar;
