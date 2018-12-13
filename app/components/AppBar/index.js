import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import * as styles from './styles.css';
import { Link } from 'react-router-dom';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">login</Link>);

  return (
    <div className="appBar">
       <IconButton
          icon="bars"
          buttonClass="iconButton"
          iconClass="icon"
          onClick={toggleDrawer}/>
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
