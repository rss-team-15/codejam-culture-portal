import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

import { supportedLanguages } from './constants';

const styles = {
  languagePicker: {
    fontSize: '1vw',

    color: '#ffffff'
  }
};

class LanguagePicker extends Component {
  constructor() {
    super();

    this.state = {
      currentLanguage: supportedLanguages[0]
    };

    this.handleState = this.handleState.bind(this);
  }

  handleState(event) {
    this.setState({ currentLanguage: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { currentLanguage } = this.state;
    return (
      <Select
        className={classes.languagePicker}
        value={currentLanguage}
        onChange={this.handleState}
      >
        {supportedLanguages.map(supportedLanguage => (
          <MenuItem key={supportedLanguage} value={supportedLanguage}>
            {supportedLanguage}
          </MenuItem>
        ))}
      </Select>
    );
  }
}

export default withStyles(styles)(LanguagePicker);
