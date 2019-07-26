import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

import { supportedLanguages } from './constants';

const useStyles = makeStyles({
  languagePicker: {
    top: '1vw',
    left: '2vw',

    position: 'absolute'
  }
});

const LanguagePicker = () => {
  const [values, setValues] = React.useState({
    currentLanguage: supportedLanguages[0]
  });

  const classes = useStyles();

  function handleState(event) {
    setValues(oldValues => ({
      ...oldValues,
      currentLanguage: event.target.value
    }));
  }

  return (
    <Select
      className={classes.languagePicker}
      value={values.currentLanguage}
      onChange={handleState}
    >
      {supportedLanguages.map(supportedLanguage => (
        <MenuItem key={supportedLanguage} value={supportedLanguage}>
          {supportedLanguage}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguagePicker;
