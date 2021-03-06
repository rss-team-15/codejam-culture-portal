import React, { Component } from 'react';

import PortalDescription from '../portalDescription';
import AuthorOfTheDay from '../AuthorOfTheDay';
import DevelopersList from '../developersList';

import { languagesStore } from '../../storage';

export default class Home extends Component {
  constructor() {
    super();

    const { activeLanguage, lang } = languagesStore.getState();

    this.state = {
      activeLanguage,
      lang,
    };
  }

  render() {
    languagesStore.subscribe(() => {
      const { activeLanguage, lang } = languagesStore.getState();

      this.setState({ activeLanguage, lang });
    });

    const { authors } = this.props;
    const authorsList = authors[`allContentfulAuthor${this.state.lang[0].toUpperCase() + this.state.lang.slice(1)}`].edges;

    const authorOfTheDay = authorsList[Math.floor(Math.random() * 7)].node;

    return (
      <React.Fragment>
        <PortalDescription
          textContent={this.state.activeLanguage.home.portalDescription}
        />
        <AuthorOfTheDay
          authorOfTheDay={authorOfTheDay}
          poetOfTheDay={this.state.activeLanguage.home.poetOfTheDay}
          poetPhoto={authorOfTheDay.mainPicture.file.url}
        />
        <DevelopersList
          developers={this.state.activeLanguage.home.developersList}
        />
      </React.Fragment>
    );
  }
}
