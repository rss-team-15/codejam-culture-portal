import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import PoetTitle from './title';

const useStyles = makeStyles(theme => ({
  poetAllInfoContainer: {
    paddingTop: '6vw',
    backgroundColor: '#eeeeee',
  },
  poetAllInfoRoot: {
    width: '75vw',
    padding: theme.spacing(2),
  },
}));

const PoetAllInfo = props => {
  const classes = useStyles();

  const poetInfo = {
    name: 'Alexander',
    surname: 'Kovalenko',
    yearsOfLife: 'July 15, 1876 – November 5, 1916',
    picture: 'https://avatars0.githubusercontent.com/u/40535982?v=4',
  };

  return (
    <Grid container className={classes.poetAllInfoContainer} justify="center">
      <Paper className={classes.poetAllInfoRoot}>
        <PoetTitle poetInfo={poetInfo} />
      </Paper>
    </Grid>
  );
};

export default PoetAllInfo;
