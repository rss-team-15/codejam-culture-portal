import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Button,
  Typography,
} from '@material-ui/core';

const styles = {
  card: {
    mediaContainer: {
      display: 'flex',
      width: '100%',
    },
    width: '90%',
    margin: '0 auto',
  },
  poetOfTheDayCard__name: {
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
    fontFamily: `'proxima-nova', sans-serif`,
    '-webkitTextStroke': '0.5px #fafafa',
    textShadow: '0px 0px 0.5vw #ffffff, 0px 0px 1vw #000000',
  },
  poetOfTheDayCard__yearsOfLive: {
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
    fontFamily: `'proxima-nova', sans-serif`,
    '-webkitTextStroke': '0.5px #fafafa',
    textShadow: '0px 0px 0.5vw #ffffff, 0px 0px 1vw #000000',
  },
  poetOfTheDayCard__bio: {
    fontFamily: `'Marck Script', cursive`,
  },
  photo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '45vw',
    backgroundPosition: 'center 50%',
    '& span:first-child': {
      fontSize: '2.5vw',
    },
    '& span:nth-child(2)': {
      fontSize: '2vw',
    },
  },
  poetOfTheDayCardTitle: {
    '-webkitTextStroke': '0.5px #fafafa',
    textShadow: '0px 0px 0.5vw #ffffff, 0px 0px 1vw #000000',
  },
};

const AuthorOfTheDay = props => {
  const { classes } = props;

  const {
    poetOfTheDay: { poetOfTheDayCardTitle, curDateTitle, learnMoreBtn },
    authorOfTheDay: { slug, name, surname, yearsOfLife, biography },
    poetPhoto,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.mediaContainer}>
        <CardMedia
          className={classes.photo}
          image={poetPhoto}
          title={`${name} ${surname}`}
        >
          <CardHeader
            className={classes.poetOfTheDayCardTitle}
            title={poetOfTheDayCardTitle}
            subheader={curDateTitle}
          />
          <CardContent>
            <Typography
              className={`${classes.poetOfTheDayCard__name} poet-of-the-day__name`}
              gutterBottom
              variant="h4"
            >
              {name} {surname}
            </Typography>
            <Typography
              className={`${classes.poetOfTheDayCard__yearsOfLive} poet-of-the-day__years-of-life`}
              variant="h6"
            >
              {yearsOfLife}
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
      <Divider variant="middle" />
      <CardContent>
        <Typography
          className={`${classes.poetOfTheDayCard__bio} poet-of-the-day__bio`}
          component="p"
        >{`${biography[0].content}...`}</Typography>
      </CardContent>

      <CardActions className="poet-of-the-day-button-container">
        <Button
          className={`${classes.poetOfTheDayCard__learnMoreBtn} poet-of-the-day__learn-more-button`}
          variant="contained"
          size="small"
          color="primary"
        >
          <Link
            to={`/${slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {learnMoreBtn}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(AuthorOfTheDay);
