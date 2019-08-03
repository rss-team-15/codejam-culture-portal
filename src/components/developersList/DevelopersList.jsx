import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import GithubProfile from '../github-profile';

const useStyles = makeStyles({
  developersListContainer: {
    marginTop: '5vw',

    background:
      'linear-gradient(#ffffff 0%, #aee3ee70 25%, #16e9c950 50%, #aee3ee70 90%, #ffffff 100%)',
    backgroundSize: '100% 100%',
  },

  developersListContainer__developersList: {
    height: '30vw',
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
        className="developers-list-container__deveolpers-list-header"
        gutterBottom
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
