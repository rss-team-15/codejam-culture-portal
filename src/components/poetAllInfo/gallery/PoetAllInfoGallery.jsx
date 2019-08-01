import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  poetGalleryTitle: {
    marginTop: '3vw',
    marginBottom: '3vw',

    fontSize: '2vw',
    color: '#555555',
  },
});

const galleryStyles = {
  width: '50vw',
};

const PoetAllInfoGallery = props => {
  const { images, title } = props;

  const imagesWraps = images.map(image => ({
    original: image.file.url,
    thumbnail: image.file.url,
  }));

  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Typography
        className={classes.poetGalleryTitle}
        variant="h5"
        component="h5"
      >
        {title}
      </Typography>
      <ImageGallery style={galleryStyles} items={imagesWraps} />
    </Grid>
  );
};

export default PoetAllInfoGallery;
