import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  titleWrap: {
    display: 'flex',
  },
  poetName: {
    fontWeight: '200',
    fontSize: '3.5vw',
    fontFamily: `'PT Sans', 'proxima-nova', sans-serif`,
    fontWeight: '700',
    color: '#505050',
  },
  poetYearsOfLife: {
    fontWeight: '200',
    fontSize: '2.5vw',
    fontFamily: `'PT Sans', 'proxima-nova', sans-serif`,
    color: '#404040',
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
    <div className={`${classes.titleWrap} poet-page-title-wrap`}>
      <Typography className={`${classes.poetName} poet-page-title-name`} variant="h2" component="h2">
        {name} {surname}
      </Typography>
      <Typography
        className={`${classes.poetYearsOfLife} poet-page-title-data`}
        variant="h4"
        component="h4"
      >
        {yearsOfLife}
      </Typography>
      <img className={`${classes.poetPicture} poet-page-title-photo`} src={mainPicture.file.url} alt="" />
    </div>
  );
};

export default PoetAllInfoTitle;
