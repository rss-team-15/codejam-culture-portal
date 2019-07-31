import React, { Component } from 'react';

import PortalDescription from '../portalDescription';
import AuthorOfTheDay from '../AuthorOfTheDay';
import DevelopersList from '../developersList';

import { languagesStore, languagesInitState } from '../../storage';

export default class Home extends Component {
  constructor() {
    super();

    const { activeLanguage } = languagesStore.getState();

    this.state = {
      activeLanguage,
      poetPhoto: languagesInitState.poetPhoto,
    };
  }

  render() {
    languagesStore.subscribe(() => {
      const { activeLanguage } = languagesStore.getState();

      this.setState({ activeLanguage });
    });

    return (
      <React.Fragment>
        <PortalDescription
          textContent={this.state.activeLanguage.home.portalDescription}
        />
        <AuthorOfTheDay
          poetOfTheDay={this.state.activeLanguage.home.poetOfTheDay}
          poetPhoto={this.state.poetPhoto}
        />
        <DevelopersList
          developers={this.state.activeLanguage.home.developersList}
        />
      </React.Fragment>
    );
  }
}
