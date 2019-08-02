import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const useStyles = makeStyles({
  poetBiographyContainer: {
    marginTop: '5vw',
  },
  poetBiographyTitle: {
    fontSize: '2vw',
    color: '#555555',
    fontFamily: `'proxima-nova', sans-serif`
  },
});

const PoetAllInfoTimeLine = props => {
  const { poetBio, title } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        className={classes.poetBiographyContainer}
        container
        justify="center"
      >
        <Typography
          className={classes.poetBiographyTitle}
          variant="h5"
          component="h5"
        >
          {title}
        </Typography>
        <Timeline lineColor={'#555'}>
          {poetBio.map(poetBioItem => (
            <TimelineItem
              dateInnerStyle={{ background: '#40c8f4' }}
              dateText={poetBioItem.date}
              key={poetBioItem.date}
            >
              <p>{poetBioItem.content}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </React.Fragment>
  );
};

export default PoetAllInfoTimeLine;
