import React, { Component } from 'react';

import NavBar from '../components/navBar';

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
      </React.Fragment>
    );
  }
}
