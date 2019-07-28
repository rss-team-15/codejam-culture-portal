import React, { Component } from 'react';

import NavBar from '../components/navBar';

import { languagesStore, languagesInitState } from '../storage/languages';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLanguage: languagesInitState.activeLanguage
    };
  }

  render() {
    languagesStore.subscribe(() => {
      const { activeLanguage } = languagesStore.getState();

      this.setState({ activeLanguage });
    });

    return (
      <React.Fragment>
        <NavBar
          homeLink={this.state.activeLanguage.navbar.homeLink}
          poetsListLink={this.state.activeLanguage.navbar.poetsListLink}
        />
      </React.Fragment>
    );
  }
}
