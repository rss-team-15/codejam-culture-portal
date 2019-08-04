import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  poetGalleryTitle: {
    fontFamily: `'PT Sans', 'proxima-nova', sans-serif`,
    fontWeight: '700',
    color: '#505050',
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
        className={`${classes.poetGalleryTitle} poet-page-gallery-title`}
        variant="h3"
        component="h3"
      >
        {title}
      </Typography>
      <ImageGallery style={galleryStyles} items={imagesWraps} />
    </Grid>
  );
};

export default PoetAllInfoGallery;
