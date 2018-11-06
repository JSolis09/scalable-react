/**
 *
 * LinkListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLinkListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import LinkList from '../../components/LinkList';

/* eslint-disable react/prefer-stateless-function */
export class LinkListContainer extends React.Component {
  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

LinkListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'linkListContainer', reducer });
const withSaga = injectSaga({ key: 'linkListContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LinkListContainer);
