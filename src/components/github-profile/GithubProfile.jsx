import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Typography, Grid, Avatar, SvgIcon } from '@material-ui/core';

import icons from './assets/svg-icons';

const useStyles = makeStyles({
  githubCard: {
    width: '17vw'
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
    height: '2.5vw'
  },
  profileTasksCreated: {
    fontSize: '1.1vw'
  },
  profileTasksCreated_ok: {
    color: '#50c878'
  },
  profileTasksCreated_warning: {
    color: '#ffae42'
  },
  profileSocialIcon: {
    height: '1.3vw',
    width: '1.3vw'
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
        <Typography
          className={`${classes.profileTasksCreated} ${
            tasksAll / teamMembers > tasksCreated
              ? classes.profileTasksCreated_warning
              : classes.profileTasksCreated_ok
          }`}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {((tasksCreated / tasksAll) * 100).toFixed(0)}%
        </Typography>
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
