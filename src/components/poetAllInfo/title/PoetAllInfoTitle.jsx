import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  poetName: {
    fontWeight: '200',
    fontSize: '3.5vw',
  },
  poetYearsOfLife: {
    fontWeight: '200',
    fontSize: '2.5vw',
  },
  poetPicture: {
    width: '25vw',
    marginTop: '2vw',

    borderRadius: '5px',
  },
});

const PoetAllInfoTitle = props => {
  const {
    poetInfo: { name, surname, yearsOfLife, picture },
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.poetName} variant="h3" component="h3">
        {name} {surname}
      </Typography>
      <Typography
        className={classes.poetYearsOfLife}
        variant="h4"
        component="h4"
      >
        {yearsOfLife}
      </Typography>
      <img className={classes.poetPicture} src={picture} alt="" />
    </React.Fragment>
  );
};

export default PoetAllInfoTitle;
