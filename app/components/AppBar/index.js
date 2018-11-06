import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles.css';

function AppBar() {
  return (
    <div className="appBar">
      <div className="iconButton">
        <FontAwesome className="icon" name="bars" />
      </div>
      <div className="heading">
        Coder daily
      </div>
      <div className="linkContainer">
        Log in
      </div>
    </div>
  );
}

AppBar.propTypes = {};

export default AppBar;
