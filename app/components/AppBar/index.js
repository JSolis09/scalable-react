import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';
import './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || <Link to="/login">login</Link>;

  return (
    <div className="appBar">
      <IconButton
        icon="bars"
        buttonClass="iconButton"
        iconClass="icon"
        onClick={toggleDrawer}
      />
      <div className="heading">Coder daily</div>
      <div className="linkContainer">{loginLink}</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default AppBar;
