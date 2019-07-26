import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import authorsDB from '../../utils/AuthorsEng';

const styles = {
  card: {
    width: "100%",
  },
  mediaContainer: {
    display: "flex",
  },
  photo: {
    width: "100%",
    height: 400,
  },
};

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

class AuthorOfTheDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
    }

    this.updateAthour = this.updateAthour.bind(this);
    this.interval = null;
  }

  componentWillMount() {
    const date = new Date();
    const day = date.getDay();

    this.setState({ author: authorsDB[day] });
  }

  componentDidMount() {
    this.updateAthour();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateAthour() {
    this.interval = setInterval(() => {
      const date = new Date();
      const day = date.getDay();
      const { author } = this.state;

      if (author.name !== authorsDB[day].name) {
        this.setState({ author: authorsDB[day] });
      }
    }, 1000);
  }

  render() {
    const { author } = this.state;
    const { classes } = this.props;
    const date = new Date();
    const day = daysOfWeek[date.getDay()];
    const dayNumber = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Author Of The Day"
          subheader={`${month} ${dayNumber},${day} ${year}`}
        />
        <CardActionArea className={classes.mediaContainer}>
          <CardMedia
            className={classes.photo}
            image={author.photo}
            title="Author"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4">
            {author.name}
          </Typography>
          <Typography variant="h6">
            {author.yearsOfLife}
          </Typography>
          <Typography component="p">
            {`${author.biography[0].content}...`}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(AuthorOfTheDay);
