import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    maxWidth: '50vw',
    margin: '0 auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: '2%',
  },
  imagecontayner: {
    width: '50vw',
  },
  media: {
    height: '38vh',
  },
  description: {
    width: '50vw',
    background: '#a59f9f',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textName: {
    color: '#fff',
    fontSize: '3vh',
    margin: '3%',
    fontFamily: `'proxima-nova', sans-serif`,
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',

  },
  textYears: {
    color: '#fff',
    fontFamily: `'Marck Script', cursive`,
    fontSize: '2.5vh',
    marginBottom: '1em',
    padding: '3%',
  },
  wrapperButton: {
    padding: '3%',
    '& :first-child': {
      fontWeight: 'bold'
    }
  },
  button: {
    width: '100%',
    height: '100%',
    padding: '1em',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#303030',
    fontWeight: 'bold',
    '&:hover': {
      color: '#5348e5',
      transform: 'scale(1.1)',
      transitionDuration: '1.2s'
    }
  }
});

export default function PoetCart(props) {
  const classes = useStyles();
  const {
    authorInfo: { slug, name, surname, yearsOfLife, city, order },
    authorPhoto,
    poetCardLearnMore,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.imagecontayner}>
        <CardMedia className={classes.media} image={authorPhoto} title={name} />
      </CardActionArea>
      <CardContent className={classes.description}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.textName}
        >
          {name} {surname}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.textYears}
        >
         {city} {yearsOfLife}
        </Typography>
        <CardActions className={classes.wrapperButton}>
          <Link
            to={`/${slug}`}
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
          >
            <Typography className={classes.textButton}>{poetCardLearnMore} . . . </Typography>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}
