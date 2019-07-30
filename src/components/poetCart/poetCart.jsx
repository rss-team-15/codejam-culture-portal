import React from 'react';
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
  },
  textYears: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: '2vh',
    marginBottom: '1em',
    padding: '3%',
  },
  wrapperButton: {
    padding: '3%',
  },
  button: {
    padding: '1em',
  },
});

export default function PoetCart(props) {
  const classes = useStyles();
  const {
    authorInfo: { name, surname, yearsOfLife },
    authorPhoto,
    poetCardLearnMore,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.imagecontayner}>
        <CardMedia className={classes.media} image={authorPhoto} title={name} />
      </CardActionArea>
      <CardContent className={classes.description}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.textName}>
          {name} {surname}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.textYears}
        >
          {yearsOfLife}
        </Typography>
        <CardActions className={classes.wrapperButton}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
          >
            {poetCardLearnMore}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
