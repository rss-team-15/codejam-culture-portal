import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, SvgIcon } from '@material-ui/core';

import UsedTechnology from '../usedTechnology';

import belorusianLandscape from './assets/belorusian-landscape.jpg';
import svgIcons from './assets/svg-icons';
import reactIcon from './assets/react-icon.png';
import reduxIcon from './assets/redux-icon.png';
import materialUiIcon from './assets/material-ui-icon.png';

const useStyles = makeStyles({
  topSection: {
    height: '70vh',

    color: 'white',

    backgroundImage: `url(${belorusianLandscape})`,
    backgroundPosition: 'center 60%'
  },
  aboutSection: {
    height: '30vh',

    boxShadow: '0 -22px 15px #00000080'
  },
  arrowDownIcon: {
    height: '3.5vw',
    width: '3.5vw'
  },
  usedTecnologiesContainer: {
    height: '35vw',

    background: 'linear-gradient(#ffffff, #eeeeee)'
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
        <Typography variant="h4" color="textSecondary" component="p">
          Find info about your favorite belarusian poets with ease !
        </Typography>
        <SvgIcon className={classes.arrowDownIcon}>
          <path d={svgIcons.reading} />
        </SvgIcon>
      </Grid>

      {/* Section with used technologies info */}
      <Grid
        className={classes.usedTecnologiesContainer}
        container
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h4" color="textSecondary" component="p">
          Portal Uses
        </Typography>
        <Grid container justify="space-around" alignItems="center">
          <UsedTechnology tecnologyImg={reactIcon} tecnologyName="React" />
          <UsedTechnology tecnologyImg={reduxIcon} tecnologyName="Redux" />
          <UsedTechnology tecnologyImg={materialUiIcon} tecnologyName="Material-UI" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PortalDescription;
