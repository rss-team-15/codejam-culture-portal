import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import PoetProfile from '../components/poet-profile/PoetProfile.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    // the line below is for disabling ESLint warnings
    // later we will create Redux store for this component
    this.state = {};
  }


  render() {
    return (
      <>
        <div>
          <Button variant="contained" color="primary">
            Anime
          </Button>
        </div>
        <div><PoetProfile /></div>
      </>
    );
  }
}
