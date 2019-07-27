import React, { Component } from 'react';

import Home from '../components/home';
import LanguagePicker from '../components/languagePicker';

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
        <LanguagePicker />
        <Home />
      </React.Fragment>
    );
  }
}
