import React, { Component } from 'react';

import NavBar from '../components/navBar';
import Home from '../components/home';
import AuthrosList from '../components/AuthorsList';

export default class App extends Component {
  constructor(props) {
    super(props);

    // the line below is for disabling ESLint warnings
    // later we will create Redux store for this component
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Home />
        <AuthrosList />
      </React.Fragment>
    );
  }
}
