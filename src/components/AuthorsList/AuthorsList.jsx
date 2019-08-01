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
  textField: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    width: '50%',  
    minWidth: '50%',
    marginTop: '2vh',
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

    const {
      activeLanguage: {
        poetsListBlock: { poetsList, poetsListSearchLabel, poetCardLearnMore },
      },
    } = languagesStore.getState();

    this.state = {
      poetsList,
      poetsListSearchLabel,
      poetCardLearnMore,
      authorsList: [...this.props.authors],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // languagesStore.dispatch(
    //   poetsListEvents.updatePoetsList(event.target.value)
    // );

    const filteredList = this.props.authors.filter(author => {
      const { name, surname, city } = author.node;
      const fullName = `${name} ${surname}`.toLowerCase();
      const reverseFullName = `${surname} ${name}`.toLowerCase();
      const poetCity = city.toLowerCase();
      const eValue = event.target.value.toLowerCase();
      const regExp = new RegExp(eValue, 'g');

      return regExp.test(fullName) || regExp.test(reverseFullName) || regExp.test(poetCity);
    });

    this.setState({ authorsList: filteredList });
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
        <TextField
          className={classes.form}
          onChange={this.handleChange}
          value={this.state.input}
          className={classes.textField}
          name="title"
          label={this.state.poetsListSearchLabel}
        />

        <List>
          {this.state.authorsList.map(author => {
            const { id, name, surname, yearsOfLife, mainPicture } = author.node;
            const poetInfo = { id, name, surname, yearsOfLife, mainPicture };

            return (
              <ListItem key={id} className={classes.listItem}>
                <PoetCart
                  authorInfo={poetInfo}
                  authorPhoto={mainPicture.file.url}
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
