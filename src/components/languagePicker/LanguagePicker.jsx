import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

import { supportedLanguages } from './constants';
import {
  languagesEvents,
  languagesActions,
  languagesStore,
} from '../../storage';

const styles = {
  languagePicker: {
    position: 'absolute',
    left: '2vw',
    fontSize: '1vw',

    color: '#ffffff',
  },
};

class LanguagePicker extends Component {
  constructor() {
    super();

    const {
      activeLanguage: { languagePicker },
    } = languagesStore.getState();

    console.log(supportedLanguages[0], languagePicker);

    this.state = {
      currentLanguage: supportedLanguages[languagePicker],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ currentLanguage: event.target.value });

    languagesStore.dispatch(
      languagesEvents.updateLanguage(event.target.value.code)
    );
  }

  render() {
    const { classes } = this.props;
    const { currentLanguage } = this.state;
    return (
      <Select
        className={classes.languagePicker}
        value={currentLanguage}
        onChange={this.handleChange}
      >
        {supportedLanguages.map(supportedLanguage => (
          <MenuItem key={supportedLanguage.code} value={supportedLanguage}>
            {supportedLanguage.value}
          </MenuItem>
        ))}
      </Select>
    );
  }
}

export default withStyles(styles)(LanguagePicker);
