import React, { Component } from 'react';

import PortalDescription from '../portalDescription';
import AuthorOfTheDay from '../AuthorOfTheDay';
import DevelopersList from '../developersList';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <PortalDescription />
        <AuthorOfTheDay />
        <DevelopersList />
      </React.Fragment>
    );
  }
}
