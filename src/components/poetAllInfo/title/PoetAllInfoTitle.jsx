import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  poetName: {
    fontWeight: '200'
  }
});

const PoetAllInfoTitle = props => {
  const {
    poetInfo: { name, surname, yearsOfLife, picture }
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.poetName} variant="h3" component="h3">
        {name} {surname}
      </Typography>
      <Typography className={classes.poetName} variant="h5" component="h5">
        {yearsOfLife}
      </Typography>
      <img src={picture} alt="" />
    </React.Fragment>
  );
};

export default PoetAllInfoTitle;
