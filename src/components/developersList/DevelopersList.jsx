import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import GithubProfile from '../github-profile';

const useStyles = makeStyles({
  developersListContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '40vw',
    marginTop: '5vw',
    marginBottom: '5vw',

    background:
      'linear-gradient(#ffffff 0%, #aee3ee70 25%, #16e9c950 50%, #aee3ee70 90%, #ffffff 100%)',
    backgroundSize: '100% 100%',
  },

  developersListContainer__deveolpersListHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    fontSize: '40px',
    textAlign: 'center',
  },

  developersListContainer__developersList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    height: '65%',
  },
});

const DevelopersList = props => {
  const data = useStaticQuery(
    graphql`
      query developersQuery {
        allContentfulDeveloper {
          nodes {
            id
            developerPhoto {
              file {
                url
              }
            }
            name
            surname
            githubId
            githubLink
            telegramLink
            taskComplete
            taskAtAll
            teamMembers
          }
        }
      }
    `
  );

  const developersContentful = data.allContentfulDeveloper.nodes;

  const {
    developers: { developersListHeader, developers },
  } = props;

  const classes = useStyles();
  return (
    <Grid
      className={`${classes.developersListContainer} developers-list-container`}
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Typography
        className={`${classes.developersListContainer__deveolpersListHeader} developers-list-container__deveolpers-list-header`}
        color="textSecondary"
        variant="h5"
        component="h2"
      >
        {developersListHeader}
      </Typography>
      <Grid
        className={`${classes.developersListContainer__developersList} developers-list-container__deveolpers-list`}
        container
        justify="space-around"
        alignItems="center"
      >
        {developersContentful.map((developer, i) => {
          const { name, surname } = developers[i];
          const photo = developer.developerPhoto.file.url;
          const {
            id,
            githubId,
            githubLink,
            telegramLink,
            taskComplete,
            taskAtAll,
            teamMembers,
          } = developer;

          console.log(taskAtAll, teamMembers, taskComplete)

          return (
            <GithubProfile
              key={id}
              githubImg={photo}
              name={name}
              surname={surname}
              githubLink={githubLink}
              githubNickname={githubId}
              contactLink={telegramLink}
              tasksCreated={taskComplete}
              tasksAll={taskAtAll}
              teamMembers={teamMembers}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default DevelopersList;
