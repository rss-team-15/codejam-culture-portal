import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Typography, Grid, Avatar, SvgIcon } from '@material-ui/core';

import icons from './assets/svg-icons';

const useStyles = makeStyles({
  githubCard: {
    width: '18%',
    height: '100%',
  },

  githubCardContent: {
    
  },

  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '60%',
  },
  githubCardContent__profileImage: {
    width: '9vw',
    height: '9vw',
  },
  githubCardContent__profileNickname: {
    marginTop: '1vw',
    marginBottom: 0,

    fontSize: '20px',
  },
  githubCardContent__profileName: {
    fontSize: '14px',
  },
  profileTasksCreatedArea: {
    height: '25%',
  },
  profileTasksCreatedWrapper: {
    height: '50px',
    width: '50px',

    borderRadius: '100%',
  },
  profileTasksCreatedWrapper_ok: {
    color: '#50c878',
    border: '0.1vw solid #50c878',
  },
  profileTasksCreatedWrapper_warning: {
    color: '#ffae42',
    border: '0.1vw solid #ffae42',
  },
  profileTasksCreatedWrapper__profileTasksCreated: {
    fontSize: '17px',
  },
  profileSocials: {
    display: 'flex',
    alignItems: 'center',
    height: '15%',
  },
  profileSocials__profileSocialIcon: {
    height: '20px',
    width: '20px',
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
    <Card className={`${classes.githubCard} gh-gard`}>
      <CardActionArea className={classes.actionArea} href={githubLink}>
        <Grid
          className={classes.githubCardContent}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid container justify="center" alignItems="center">
            <Avatar className={`${classes.githubCardContent__profileImage} gh-photo`} src={githubImg} />
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
            <Typography
              className={`${classes.githubCardContent__profileNickname} gh-nick-name`}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {githubNickname}
            </Typography>
            <Typography
              className={`${classes.githubCardContent__profileName} gh-name`}
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
        className={`${classes.profileTasksCreatedArea}`}
        container
        justify="center"
        alignItems="center"
      >
        <Grid
          className={`${classes.profileTasksCreatedWrapper}  gh-task-wrapper ${
            tasksAll / (teamMembers + 1) < tasksCreated
              ? classes.profileTasksCreatedWrapper_ok
              : classes.profileTasksCreatedWrapper_warning
          }`}
          container
          justify="center"
          alignItems="center"
        >
          <Typography
            className={classes.profileTasksCreatedWrapper__profileTasksCreated}
            align="center"
            variant="body2"
            component="p"
          >
            {((tasksCreated / tasksAll) * 100).toFixed(0)}%
          </Typography>
        </Grid>
      </Grid>
      <CardActionArea className={classes.profileSocials} href={contactLink}>
        <Grid container justify="center" alignItems="center">
          <SvgIcon className={`${classes.profileSocials__profileSocialIcon} tg-icon`}>
            <path d={icons.telegram} />
          </SvgIcon>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default GithubProfile;
