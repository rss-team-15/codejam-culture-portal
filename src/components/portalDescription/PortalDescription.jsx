import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, SvgIcon } from '@material-ui/core';

import belorusianLandscape from './assets/belorusian-landscape.jpg';
import svgIcons from './assets/svg-icons';

const useStyles = makeStyles({
  topSection: {
    height: '70vh',

    color: 'white',

    backgroundImage: `url(${belorusianLandscape})`,
    backgroundPosition: 'center 60%'
  },
  aboutSection: {
    height: '30vh',

    boxShadow: '0 -7px 15px #00000080'
  },
  arrowDownIcon: {
    height: '3.5vw',
    width: '3.5vw'
  }
});

const PortalDescription = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Top section with image */}
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

      {/* Section with short 'about' info */}
      <Grid
        className={classes.aboutSection}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h4" component="p">
          Find info about your favorite belarusian poets with ease !
        </Typography>
        <SvgIcon className={classes.arrowDownIcon}>
          <path d={svgIcons.reading} />
        </SvgIcon>
      </Grid>
    </React.Fragment>
  );
};

export default PortalDescription;
