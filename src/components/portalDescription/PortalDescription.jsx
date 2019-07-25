import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import belorusianLandscape from './assets/belorusian-landscape.jpg';

const useStyles = makeStyles({
  topSection: {
    height: '40vw',

    color: 'white',

    backgroundImage: `url(${belorusianLandscape})`,
    backgroundPosition: 'center 60%'
  }
});

const PortalDescription = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.topSection}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography gutterBottom variant="h2" component="h2">
        Belarusian Poetry Portal
      </Typography>
    </Grid>
  );
};

export default PortalDescription;
