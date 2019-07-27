import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import LanguagePicker from '../languagePicker';

const useStyles = makeStyles({
  navBar: {
    position: 'fixed',
    height: '4vw',
    width: '100%',
    padding: '0 2vw',
    zIndex: 10,

    display: 'flex',
    alignItems: 'center',

    backgroundColor: '#303030',
    boxShadow: '1px 1px 12px #000000f0;'
  }
});

const NavBar = props => {
  const { navBar } = useStyles();
  return (
    <header className={navBar}>
      <LanguagePicker />
    </header>
  );
};

export default NavBar;
