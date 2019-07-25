import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Typography, Grid, Avatar, SvgIcon } from '@material-ui/core';

import authorsDB from '../../utils/AuthorsEng';

const useStyles = makeStyles({
  githubCard: {
    width: '15vw',

    display: 'inline-block'
  },
  githubCardContent: {
    height: '20vw'
  },
  githubCardContent__profileImage: {
    height: '9vw',
    width: '9vw'
  },
  githubCardContent__profileNickname: {
    marginTop: '1vw',
    marginBottom: 0,

    fontSize: '1.4vw'
  },
  githubCardContent__profileName: {
    fontSize: '0.81vw'
  },
  profileTasksCreatedArea: {
    height: '3.25vw'
  },
  profileTasksCreatedWrapper: {
    height: '2.7vw',
    width: '2.7vw',

    borderRadius: '100%'
  },
  profileTasksCreatedWrapper_ok: {
    color: '#50c878',
    border: '0.1vw solid #50c878'
  },
  profileTasksCreatedWrapper_warning: {
    color: '#ffae42',
    border: '0.1vw solid #ffae42'
  },
  profileTasksCreatedWrapper__profileTasksCreated: {
    fontSize: '1vw'
  },
  profileSocials: {
    height: '4vw'
  },
  profileSocials__profileSocialIcon: {
    height: '1.25vw',
    width: '1.25vw'
  }
});

const classes = useStyles();

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

    return (
      <div className="mdc-card authorContainer">
        <h2 className="authorName">{author.name}</h2>
        <img src={author.photo} alt="auhtor" />
        <p className="yearsOfLife">{author.yearsOfLife}</p>
        <p className="biography">{author.biography[0].content}</p>
      </div>
    );
  }
}

export default AuthorOfTheDay;
