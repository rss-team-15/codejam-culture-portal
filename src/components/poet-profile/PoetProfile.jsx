import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import authorsDB from '../../utils/AuthorsEng';


const useStyles = makeStyles({
  card: {
    display: 'flex',
    maxWidth: 600,
    margin: '0 auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: '2%',
  },
  media: {
    height: 240,
  },
  description: {
    background: '#787878',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textName: {
    color: '#fff',
  },
  textYears: {
    color: '#fff',
    fontStyle: 'italic',
    marginBottom: '25px',
  },
  wrapperButton: {
    paddingLeft: 0,
  },
});

export default function PoetProfile() {
  const classes = useStyles();
  const { name, yearsOfLife, photo } = authorsDB[0];


  return (
    <ul>
      <li>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={photo}
              title={name}
            />
          </CardActionArea>
          <CardContent className={classes.description}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.textName}>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.textYears}>
              {yearsOfLife}
            </Typography>
            <CardActions className={classes.wrapperButton}>
              <Button variant="contained" size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </CardContent>
        </Card>

      </li>
    </ul>
  );
}
