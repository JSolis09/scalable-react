import React from 'react';
import NavigationContainer from '../NavigationContainer';
import LinkListContainer from '../LinkListContainer';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavigationContainer />
        <LinkListContainer />
      </div>
    );
  }
}
