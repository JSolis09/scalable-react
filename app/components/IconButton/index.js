/**
 *
 * IconButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
// import styled from 'styled-components';

function IconButton({ onClick, icon, iconClass, buttonClass }) {
  return (
    <div
      role="none"
      className={classNames('iconButton', buttonClass)}
      onClick={onClick}>
        <FontAwesome
          className={iconClass}
          name={icon} />
    </div>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
