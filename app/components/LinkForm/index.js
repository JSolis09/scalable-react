/**
 *
 * LinkForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as styles from './styles.css';
import TextInput from '../TextInput';

/* eslint-disable react/prefer-stateless-function */
class LinkForm extends React.Component {
  state = {};
  render() {
    return (
      <div className="overlay">
        <div className="linkForm">
          <div className="heading">
            Add a Link
          </div>
          <TextInput placeholder="URL" className="input" />
          <TextInput placeholder="Description" className="input" />
          <div className="actionContainer">
            <div
              className="button"
              role="none"
              onClick={this.props.cancelLogin}>
              cancel
            </div>
            <div
              className="button"
              role="none"
              onClick={this.login}>
              log in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LinkForm.propTypes = {};

export default LinkForm;
