/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';
import validator from 'email-validator';
import classNames from 'classnames';

class Login extends React.Component {
  state = {};

  login = () => {
    const email = this.emailField.value;
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }
    this.setState({
      errorText: null,
    });
    this.props.login(email);
  };
  render() {
    const fieldError = this.state.errorText ? (
      <div className="errorMessage">
        {this.state.errorText}
      </div>
    ) : null;
    return (
      <div className="login">
        <div className="heading">
          Login with your email
        </div>
        <input
          className={classNames('input', { 'inputError': this.state.errorText })}
          placeholder="Your email"
          ref={(f) => { this.emailField = f; }}
          type="text"/>
        {fieldError}
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
    ); 
  }
}

Login.prototypes = {
  login: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

export default Login;