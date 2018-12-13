/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { Router, Switch, Route } from 'react-router-dom';
import history from 'utils/history';
import HomePage from 'containers/HomePage/Loadable';
import LinkListContainer from 'containers/LinkListContainer';
import LoginContainer from 'containers/LoginContainer';
import NavigationContainer from 'containers/NavigationContainer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Router history={history}>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/topics/:topicName" component={LinkListContainer} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </Router>
  );
}
