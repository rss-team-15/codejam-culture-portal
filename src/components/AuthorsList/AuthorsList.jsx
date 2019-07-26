import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';

import authorsDB from '../../utils/AuthorsEng';

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
        console.log(this.state.search);
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
              return (
                <ListItem key={i} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar alt={author.name} src={author.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={author.name}
                  />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {author.biography[0].content}
                  </Typography>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Gallery</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Image list here  Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here Image list here
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Biography</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        TimeList here TimeList here   TimeList here TimeList here  TimeList here TimeList here  TimeList here TimeList here  TimeList here TimeList here  TimeList here TimeList here  TimeList here TimeList here  TimeList here TimeList here  TimeList here TimeList here
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <Divider variant="inset" />
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
