/**
 *
 * LinkListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLinkListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';
import LinkFormContainer from '../LinkFormContainer';

/* eslint-disable react/prefer-stateless-function */
export class LinkListContainer extends React.Component {
  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicName !== this.props.topicName) {
      this.props.requestLinks(newProps.topicName);
    }
  }

  render() {
    return (
      <div>
        <LinkList {...this.props} />
        <Route exact path="/topics/:topicName/add" component={LinkFormContainer} />
      </div>
    );
  }
}

LinkListContainer.propTypes = {
  topicName: PropTypes.string.isRequired,
  requestLinks: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'linkListContainer', reducer });
const withSaga = injectSaga({ key: 'linkListContainer', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(LinkListContainer);
