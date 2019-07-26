import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import GithubProfile from '../github-profile';

import slnchnProfileImage from './assets/slnchn.png';
import igor82bvProfileImage from './assets/igor82bv.jpg';
import sannaoProfileImage from './assets/sannnao.jpg';
import sergmitminProfileImage from './assets/sergmitmin.jpg';
import ekater1naProfileImage from './assets/ekater1na.jpg';
import grenborkProfileImage from './assets/grenbork.jpg';

const useStyles = makeStyles({
  developersListContainer: {
    height: '40vw',

    background: 'linear-gradient(#ffffff 0%, #b751fb 25%, #fd1d1d 50%, #fcb045 90%, #ffffff 100%)',
    backgroundSize: '100% 100%'
  },

  developersListContainer__developersListHeader: {
    fontSize: '2vw'
  },

  developersListContainer__developersList: {
    height: '30vw'
  }
});

const DevelopersList = () => {
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
        Project was created by the team of six developers
      </Typography>
      <Grid
        className={classes.developersListContainer__developersList}
        container
        justify="space-around"
        alignItems="center"
      >
        <GithubProfile
          githubImg={slnchnProfileImage}
          name="Aliaksandr"
          surname="Kavalenka"
          githubLink="https://github.com/Slnchn"
          githubNickname="Slnchn"
          contactLink="https://t.me/addicted2y0u"
          tasksCreated={7}
          tasksAll={25}
          teamMembers={6}
        />

        <GithubProfile
          githubImg={igor82bvProfileImage}
          name="Ihar"
          surname="Baranau"
          githubLink="https://github.com/igor82bv"
          githubNickname="igor82bv"
          contactLink=""
          tasksCreated={7}
          tasksAll={25}
          teamMembers={6}
        />

        <GithubProfile
          githubImg={sannaoProfileImage}
          name="Aleksandr"
          surname="Piskun"
          githubLink="https://github.com/sannnao"
          githubNickname="Sannnao"
          contactLink=""
          tasksCreated={7}
          tasksAll={25}
          teamMembers={6}
        />

        <GithubProfile
          githubImg={sergmitminProfileImage}
          name="Siarhei"
          surname="Mitasau"
          githubLink="https://github.com/sergmitmin"
          githubNickname="SergMitMin"
          contactLink=""
          tasksCreated={7}
          tasksAll={25}
          teamMembers={6}
        />

        <GithubProfile
          githubImg={ekater1naProfileImage}
          name="Ekaterina"
          surname="Lysiuk"
          githubLink="https://github.com/ekater1na"
          githubNickname="ekater1na"
          contactLink="https://t.me/ObsssQ"
          tasksCreated={7}
          tasksAll={25}
          teamMembers={6}
        />

        <GithubProfile
          githubImg={grenborkProfileImage}
          name="Nikolay"
          surname="Shishkin"
          githubLink="https://github.com/grenbork"
          githubNickname="grenbork"
          contactLink=""
          tasksCreated={7}
          tasksAll={25}
          teamMembers={6}
        />
      </Grid>
    </Grid>
  );
};

export default DevelopersList;
