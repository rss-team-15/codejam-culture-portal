import React from 'react';
import { Link } from 'gatsby';
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
    mediaContainer: {
      display: 'flex',
      width: '100%',
    },
    width: '90%',
    margin: '0 auto'
  },
  poetOfTheDayCard__name: {
    fontSize: '4.5vh',
    textAlign: 'right',
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
    fontFamily: `'proxima-nova', sans-serif`
  },
  poetOfTheDayCard__yearsOfLive: {
    fontSize: '2vw',
    textAlign: 'right',
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
    fontFamily: `'proxima-nova', sans-serif`
  },
  poetOfTheDayCard__bio: {
    fontSize: '2.5vh',
    fontFamily: `'Marck Script', cursive`
  },
  poetOfTheDayCard__learnMoreBtn: {
    fontSize: '1.5vw'
  },
  photo: {
    width: '100%',
    height: '40vw',
    backgroundPosition: 'center 50%',
    '& span:first-child': {
      fontSize: '2.5vw'
    },
    '& span:nth-child(2)': {
      fontSize: '2vw'
    }
  },
  poetOfTheDayCardTitle: {
    '-webkitTextStroke': '0.5px #fafafa',
  },
};

const AuthorOfTheDay = props => {
  const { classes } = props;

  const {
    poetOfTheDay: {
      // poetInfo: { name, surname, yearsOfLife, biography },
      poetOfTheDayCardTitle,
      curDateTitle,
      learnMoreBtn
    },
    authorOfTheDay: { name, surname, yearsOfLife, biography },
    poetPhoto,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.mediaContainer}>
        <CardMedia className={classes.photo} image={poetPhoto} title={`${name} ${surname}`}>
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
          <Link to={`/${name}_${surname}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {learnMoreBtn}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(AuthorOfTheDay);
