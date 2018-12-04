/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from '../../components/Login';
import { login, cancelLogin } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: (email) => dispatch(login(email)),
    cancelLogin: () => dispatch(cancelLogin())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
