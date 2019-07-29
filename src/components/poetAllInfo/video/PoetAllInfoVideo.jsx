import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import ModalVideo from 'react-modal-video';

export default class PoetAllInfoVideo extends Component {
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

    const { videoId } = this.props;

    return (
      <React.Fragment>
        <ModalVideo channel="youtube" isOpen={isOpen} onClose={this.closeModal} videoId={videoId} />
        <Button color="secondary" onClick={this.openModal}>
          Watch video
        </Button>
      </React.Fragment>
    );
  }
}
