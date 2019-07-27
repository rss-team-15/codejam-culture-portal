import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '100%'
  },
  poetOfTheDayCard__name: {
    fontSize: '2.5vw'
  },
  poetOfTheDayCard__yearsOfLive: {
    fontSize: '2vw'
  },
  poetOfTheDayCard__bio: {
    fontSize: '1.1vw'
  },
  poetOfTheDayCard__learnMoreBtn: {
    fontSize: '0.9vw'
  },
  mediaContainer: {
    display: 'flex',
    width: '100%',
    height: '35vw'
  },
  photo: {
    width: '100%',
    height: '35vw',
    backgroundPosition: 'center 0%'
  }
};

const AuthorOfTheDay = props => {
  const { classes } = props;

  const {
    poetOfTheDay: {
      poetInfo: { name, surname, yearsOfLife, biography },
      poetOfTheDayCardTitle,
      curDateTitle,
      learnMoreBtn
    },
    authorPhoto,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.mediaContainer}>
        <CardMedia className={classes.photo} image={authorPhoto} title={`${name} ${surname}`}>
          <CardHeader
            className={classes.poetOfTheDayCardTitle}
            title={poetOfTheDayCardTitle}
            subheader={curDateTitle}
          />
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography className={classes.poetOfTheDayCard__name} gutterBottom variant="h4">
          {name} {surname}
        </Typography>
        <Typography className={classes.poetOfTheDayCard__yearsOfLive} variant="h6">
          {yearsOfLife}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent>
        <Typography
          className={classes.poetOfTheDayCard__bio}
          component="p"
        >{`${biography[0].content}...`}</Typography>
      </CardContent>

      <CardActions>
        <Button
          className={classes.poetOfTheDayCard__learnMoreBtn}
          variant="contained"
          size="small"
          color="primary"
        >
          {learnMoreBtn}
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(AuthorOfTheDay);
