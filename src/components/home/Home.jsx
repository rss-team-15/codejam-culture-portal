import React, { Component } from 'react';

import PortalDescription from '../portalDescription';
import AuthorOfTheDay from '../AuthorOfTheDay';
import DevelopersList from '../developersList';

import { languagesStore, languagesInitState } from '../../storage/languages';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      activeLanguage: languagesInitState.activeLanguage,
      authorMedia: languagesInitState.poetMedia,
    };
  }

  render() {
    languagesStore.subscribe(() => {
      const { activeLanguage } = languagesStore.getState();

      this.setState({ activeLanguage });
    });

    return (
      <React.Fragment>
        <PortalDescription textContent={this.state.activeLanguage.home.portalDescription} />
        <AuthorOfTheDay
          poetOfTheDay={this.state.activeLanguage.home.poetOfTheDay}
          authorPhoto={this.state.authorMedia.photo.mainPhoto} />
        <DevelopersList developers={this.state.activeLanguage.home.developersList} />
      </React.Fragment>
    );
  }
}
