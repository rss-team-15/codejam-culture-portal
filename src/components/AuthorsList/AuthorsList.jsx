import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import PoetCart from '../PoetCart';

import authorsDB from '../../utils/poetsList';

const styles = {
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    minWidth: "50%",
  },
  textField: {
    width: "50%",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
  },
  expansionPanel: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
};

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      const keyEnter = 13;
      if (e.keyCode === keyEnter) {
        this.handleSubmit();
      }
    });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;

    this.setState({
      search: input,
      input: '',
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <TextField
            onChange={this.handleChange}
            value={this.state.input}
            className={classes.textField}
            name='title'
            label='Search Author'
          />
          <Button type="submit" color='primary' variant='contained'>Search</Button>
        </form>
        <List>
          {
            authorsDB.map((author, i) => {
              const authorInfo = author.englishInfo;
              const authorPhoto = author.media.photo.mainPhoto;

              return (
                <ListItem key={i} className={classes.listItem}>
                  <PoetCart authorInfo={authorInfo} authorPhoto={authorPhoto} />
                </ListItem>
              );
            })
          }
        </List>
      </Grid>
    );
  }
}

export default withStyles(styles)(AuthorsList);
