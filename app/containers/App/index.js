/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import history from 'utils/history';
import HomePage from 'containers/HomePage/Loadable';
import LinkListContainer from 'containers/LinkListContainer';
import NavigationContainer from 'containers/NavigationContainer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';

export default function App() {
  return (
    <Router history={history}>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/topics/:topicName" component={LinkListContainer} />
        </Switch>
        <GlobalStyle />
      </div>
    </Router>
  );
}