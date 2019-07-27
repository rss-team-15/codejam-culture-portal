import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import GithubProfile from '../github-profile';

const useStyles = makeStyles({
  developersListContainer: {
    height: '40vw',

    background:
      'linear-gradient(#ffffff 0%, #aee3ee70 25%, #16e9c950 50%, #aee3ee70 90%, #ffffff 100%)',
    backgroundSize: '100% 100%'
  },

  developersListContainer__developersListHeader: {
    fontSize: '2vw'
  },

  developersListContainer__developersList: {
    height: '30vw'
  }
});

const DevelopersList = props => {
  const {
    developers: { developersListHeader, developers }
  } = props;
  const classes = useStyles();
  return (
    <Grid
      className={classes.developersListContainer}
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Typography
        className={classes.developersListContainer__developersListHeader}
        gutterBottom
        color="textSecondary"
        variant="h5"
        component="h2"
      >
        {developersListHeader}
      </Typography>
      <Grid
        className={classes.developersListContainer__developersList}
        container
        justify="space-around"
        alignItems="center"
      >
        {developers.map(developer => (
          <GithubProfile
            key={developer.githubNickname}
            githubImg={developer.githubImg}
            name={developer.name}
            surname={developer.surname}
            githubLink={developer.githubLink}
            githubNickname={developer.githubNickname}
            contactLink={developer.contactLink}
            tasksCreated={developer.tasksCreated}
            tasksAll={developer.tasksAll}
            teamMembers={developer.teamMembers}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default DevelopersList;
