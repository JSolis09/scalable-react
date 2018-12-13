/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import validator from 'email-validator';
import './styles.css';
import TextInput from '../TextInput';

class Login extends React.Component {
  state = {};

  login = () => {
    const email = this.emailField.value();
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
    return (
      <div className="login">
        <div className="heading">Login with your email</div>
        <TextInput
          errorText={this.state.errorText}
          ref={f => {
            this.emailField = f;
          }}
          placeholder="Your email"
        />
        <div className="actionContainer">
          <div className="button" role="none" onClick={this.props.cancelLogin}>
            cancel
          </div>
          <div className="button" role="none" onClick={this.login}>
            log in
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

export default Login;
