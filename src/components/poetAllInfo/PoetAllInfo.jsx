import React from 'react';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  poetAllInfoRoot: {
    padding: theme.spacing(3, 2),
  },
}));

const PoetAllInfo = props => {
  const classes = useStyles();

  return <Paper className={classes.poetAllInfoRoot}></Paper>;
};

export default PoetAllInfo;
