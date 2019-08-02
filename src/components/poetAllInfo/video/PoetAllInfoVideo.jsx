import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import ModalVideo from 'react-modal-video';

const styles = {
  watchVideoButton: {
    marginTop: '3vw',
    marginBottom: '3vw',

    fontSize: '2.5vw',
  },
};

class PoetAllInfoVideo extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    const { classes } = this.props;
    const { videoId, videoTitle } = this.props;

    return (
      <Grid container justify="center">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          onClose={this.closeModal}
          videoId={videoId}
        />
        <Button
          className={classes.watchVideoButton}
          color="secondary"
          onClick={this.openModal}
        >
          {videoTitle}
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(PoetAllInfoVideo);
