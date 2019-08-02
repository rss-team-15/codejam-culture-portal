import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, SvgIcon, Button } from '@material-ui/core';

import UsedTechnology from '../usedTechnology';

import belorusianLandscape from './assets/belorusian-landscape.jpg';
import svgIcons from './assets/svg-icons';
// import reactIcon from './assets/react-icon.png';
// import reduxIcon from './assets/redux-icon.png';
// import materialUiIcon from './assets/material-ui-icon.png';

import constants from './constants';

const useStyles = makeStyles({
  topSection: {
    height: '40vw',

    color: 'white',

    backgroundImage: `url(${belorusianLandscape})`,
    backgroundPosition: 'center 60%',
  },
  topSection__topSectionHeader: {
    fontSize: '4.25vw',
  },
  aboutSection: {
    height: '15vw',

    boxShadow: '0 -22px 15px #00000080',
  },
  aboutSection__aboutSectionHeader: {
    fontSize: '2.25vw',
  },
  arrowDownIcon: {
    height: '3.5vw',
    width: '3.5vw',
  },
  usedTecnologiesContainer: {
    height: '35vw',

    background: 'linear-gradient(#ffffff, #eeeeee)',
  },
  usedTecnologiesContainer__usedTecnologiesHeader: {
    fontSize: '2.25vw',
  },
  openSourceSection: {
    height: '20vw',

    background: 'linear-gradient(#eeeeee, #ffffff)',
  },
  openSourceSection__openSourceSectionHeader: {
    fontSize: '2.25vw',
  },
  openSourceSection__repositoryLinkButton: {
    padding: '0.8vw 1.5vw',

    color: '#ffffff',
    fontSize: '1.5vw',
    fontWeight: 'bold',
  },
});

const PortalDescription = props => {
  const data = useStaticQuery(
    graphql`
      query technologyQuery {
        allContentfulTechnology(sort: { fields: order, order: ASC }) {
          nodes {
            id
            logo {
              file {
                url
              }
            }
            technology
            order
          }
        }
      }
    `
  );

  const technologies = data.allContentfulTechnology.nodes;
   
  const {
    textContent: {
      topSectionHeader,
      aboutSectionHeader,
      usedTechnologies,
      openSourceSectionHeader,
      openSourceSectionButton,
    },
  } = props;
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
        <Typography
          className={classes.topSection__topSectionHeader}
          gutterBottom
          variant="h1"
          component="h1"
        >
          {topSectionHeader}
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
        <Typography
          className={classes.aboutSection__aboutSectionHeader}
          variant="h4"
          color="textSecondary"
          component="p"
        >
          {aboutSectionHeader}
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
        <Typography
          className={classes.usedTecnologiesContainer__usedTecnologiesHeader}
          variant="h4"
          color="textSecondary"
          component="p"
        >
          {usedTechnologies}
        </Typography>
        <Grid container justify="space-around" alignItems="center">
        {
          technologies.map((tech) => {
            const { id, technology, logo } = tech;
            const icon = logo.file.url;

            return <UsedTechnology key={id} tecnologyImg={icon} tecnologyName={technology} />
          })
        }
          
        </Grid>
      </Grid>

      {/* Section with sources info */}
      <Grid
        className={classes.openSourceSection}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography
          className={classes.openSourceSection__openSourceSectionHeader}
          variant="h4"
          color="textSecondary"
          component="p"
        >
          {openSourceSectionHeader}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className={classes.openSourceSection__repositoryLinkButton}
          href={constants.repositoryGithubLink}
        >
          {openSourceSectionButton}
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PortalDescription;
