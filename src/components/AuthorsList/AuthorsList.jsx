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
    marginTop: '3vh',
  },
  textField: {
    width: '80%',
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
      lang,
    } = languagesStore.getState();

    this.state = {
      poetsList,
      poetsListSearchLabel,
      poetCardLearnMore,
      authorsList: [...this.props.authors[`allContentfulAuthor${lang[0].toUpperCase() + lang.slice(1)}`].edges],
      lang,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // languagesStore.dispatch(
    //   poetsListEvents.updatePoetsList(event.target.value)
    // );
    const queryLang = this.state.lang[0].toUpperCase() + this.state.lang.slice(1);
    console.log(queryLang);
    const authors = this.props.authors[`allContentfulAuthor${queryLang}`].edges;

    

    const filteredList = authors.filter(author => {
      const { name, surname, city } = author.node;
      console.log(author, name, surname, city);
      const fullName = `${name} ${surname}`.toLowerCase();
      const reverseFullName = `${surname} ${name}`.toLowerCase();
      const poetCity = city.toLowerCase();
      const eValue = event.target.value.toLowerCase();
      const regExp = new RegExp(eValue, 'g');

      return (
        regExp.test(fullName) ||
        regExp.test(reverseFullName) ||
        regExp.test(poetCity)
      );
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
        lang,
      } = languagesStore.getState();

      const authorsList = [...this.props.authors[`allContentfulAuthor${lang[0].toUpperCase() + lang.slice(1)}`].edges]

      this.setState({ poetsList, poetsListSearchLabel, poetCardLearnMore, lang, authorsList });
    });

    console.log(this.state.lang);

    return (
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <div className={classes.form}>
          <TextField
            onChange={this.handleChange}
            value={this.state.input}
            className={classes.textField}
            name="title"
            label={this.state.poetsListSearchLabel}
          />
        </div>

        <List>
          {this.state.authorsList.map(author => {
            const {
              id,
              name,
              surname,
              yearsOfLife,
              city,
              mainPicture,
              order,
            } = author.node;
            const poetInfo = {
              id,
              name,
              surname,
              yearsOfLife,
              city,
              mainPicture,
              order,
            };

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
