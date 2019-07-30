import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import PoetCart from '../PoetCart';

import authorsDB from '../../utils/poetsList';
import { languagesStore, languagesInitState } from '../../storage';
import { poetsListActions, poetsListEvents } from '../../storage/poetsList';

const styles = {
  container: {
    position: 'relative',
    top: '4vh',
    zIndex: 1,
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    minWidth: '50%',
    marginTop: '2vh'
  },
  textField: {
    width: '50%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  expansionPanel: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
};

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poetsList: languagesInitState.activeLanguage.poetsListBlock.poetsList,
      poetsListSearchLabel:
        languagesInitState.activeLanguage.poetsListBlock.poetsListSearchLabel,
      poetCardLearnMore:
        languagesInitState.activeLanguage.poetsListBlock.poetCardLearnMore,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    languagesStore.dispatch(
      poetsListEvents.updatePoetsList(event.target.value)
    );
  }

  render() {
    const { classes } = this.props;

    languagesStore.subscribe(() => {
      const {
        activeLanguage: {
          poetsListBlock: {
            poetsList,
            poetsListSearchLabel,
            poetCardLearnMore,
          },
        },
      } = languagesStore.getState();

      this.setState({ poetsList, poetsListSearchLabel, poetCardLearnMore });
    });

    return (
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <form className={classes.form}>
          <TextField
            onChange={this.handleChange}
            value={this.state.input}
            className={classes.textField}
            name="title"
            label={this.state.poetsListSearchLabel}
          />
        </form>
        <List>
          {this.state.poetsList.map((author, i) => {
            const { poetInfo, poetMedia } = author;
            return (
              <ListItem key={i} className={classes.listItem}>
                <PoetCart
                  authorInfo={poetInfo}
                  authorPhoto={poetMedia}
                  poetCardLearnMore={this.state.poetCardLearnMore}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    );
  }
}

export default withStyles(styles)(AuthorsList);
