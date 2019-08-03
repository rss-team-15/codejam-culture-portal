import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  poetName: {
    fontWeight: '200',
    fontSize: '3.5vw',
    fontFamily: `'proxima-nova', sans-serif`,
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)'
  },
  poetYearsOfLife: {
    fontWeight: '200',
    fontSize: '2.5vw',
    fontFamily: `'proxima-nova', sans-serif`,
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)'
  },
  poetPicture: {
    width: '40vw',
    borderRadius: '5px',
    display: 'block',
    margin: '10px auto',
  }
});

const PoetAllInfoTitle = props => {
  const {
    poetInfo: { name, surname, yearsOfLife, mainPicture },
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
      <img className={classes.poetPicture} src={mainPicture.file.url} alt="" />
    </React.Fragment>
  );
};

export default PoetAllInfoTitle;
