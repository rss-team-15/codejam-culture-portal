import React, { Component } from 'react';

import PortalDescription from '../portalDescription';
import AuthorOfTheDay from '../AuthorOfTheDay';
import DevelopersList from '../developersList';

import { languagesStore, languagesInitState } from '../../storage/languages';

export default class Home extends Component {
  constructor() {
    super();

    this.state = { activeLanguage: languagesInitState.activeLanguage };
  }

  render() {
    languagesStore.subscribe(() => {
      const { activeLanguage } = languagesStore.getState();

      this.setState({ activeLanguage });
    });

    return (
      <React.Fragment>
        <PortalDescription textContent={this.state.activeLanguage.home.portalDescription} />
        <AuthorOfTheDay />
        <DevelopersList developers={this.state.activeLanguage.home.developersList} />
      </React.Fragment>
    );
  }
}
