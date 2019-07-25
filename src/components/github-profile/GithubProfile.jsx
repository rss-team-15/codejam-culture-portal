import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Typography, Grid, Avatar, SvgIcon } from '@material-ui/core';

import icons from './assets/svg-icons';

const useStyles = makeStyles({
  githubCard: {
    width: '15vw'
  },
  githubCardContent: {
    height: '20vw'
  },
  profileImage: {
    height: '9vw',
    width: '9vw'
  },
  profileNickname: {
    marginTop: '1vw',
    marginBottom: 0,

    fontSize: '1.4vw'
  },
  profileName: {
    fontSize: '0.81vw'
  },
  profileSocials: {
    height: '4vw'
  },
  profileTasksCreatedArea: {
    height: '3.25vw'
  },
  profileTasksCreatedWrapper_ok: {
    height: '2.7vw',
    width: '2.7vw',

    borderRadius: '100%',

    color: '#50c878',
    border: '2px solid #50c878'
  },
  profileTasksCreatedWrapper_warning: {
    height: '2.7vw',
    width: '2.7vw',

    borderRadius: '100%',

    color: '#ffae42',
    border: '2px solid #ffae42'
  },
  profileTasksCreated: {
    fontSize: '1vw'
  }
});

const GithubProfile = props => {
  const {
    githubImg,
    name,
    surname,
    githubLink,
    githubNickname,
    contactLink,
    tasksCreated,
    tasksAll,
    teamMembers
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.githubCard}>
      <CardActionArea href={githubLink}>
        <Grid
          className={classes.githubCardContent}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid container justify="center" alignItems="center">
            <Avatar className={classes.profileImage} src={githubImg} />
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
            <Typography
              className={classes.profileNickname}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {githubNickname}
            </Typography>
            <Typography
              className={classes.profileName}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {name} {surname}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
      <Grid
        className={classes.profileTasksCreatedArea}
        container
        justify="center"
        alignItems="center"
      >
        <Grid
          className={
            tasksAll / teamMembers < tasksCreated
              ? classes.profileTasksCreatedWrapper_ok
              : classes.profileTasksCreatedWrapper_warning
          }
          container
          justify="center"
          alignItems="center"
        >
          <Typography
            className={classes.profileTasksCreated}
            align="center"
            variant="body2"
            component="p"
          >
            {((tasksCreated / tasksAll) * 100).toFixed(0)}%
          </Typography>
        </Grid>
      </Grid>
      <CardActionArea href={contactLink}>
        <Grid className={classes.profileSocials} container justify="center" alignItems="center">
          <SvgIcon className={classes.profileSocialIcon}>
            <path d={icons.telegram} />
          </SvgIcon>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default GithubProfile;
