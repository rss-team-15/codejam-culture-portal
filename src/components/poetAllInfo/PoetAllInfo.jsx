import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import PoetTitle from './title';
import PoetBiograpyhy from './timeline';
import PoetWorks from './works';
import PoetVideo from './video';
import PoetMap from './map';
import PoetGallery from './gallery';

import ap from '../../utils/AlaizaPashkevich';

const useStyles = makeStyles(theme => ({
  poetAllInfoContainer: {
    paddingTop: '6vw',
    backgroundColor: '#eeeeee',
  },
  poetAllInfoRoot: {
    width: '75vw',
    padding: theme.spacing(3),
  },
}));

const PoetAllInfo = props => {
  const classes = useStyles();

  const {
    poetInfo,
    poetBio,
    listOfWorks,
    poetWorksInterface,
    videoId,
    placesOfActivity,
  } = props;

  return (
    <Grid container className={classes.poetAllInfoContainer} justify="center">
      <Paper className={classes.poetAllInfoRoot}>
        <PoetTitle poetInfo={poetInfo} />
        <PoetBiograpyhy poetBio={poetBio} title="Biography" />
        <PoetWorks listOfWorks={listOfWorks} interface={poetWorksInterface} />
        <PoetVideo videoId={videoId} />
        <PoetMap
          markers={placesOfActivity}
          center={placesOfActivity[0].mapLink}
          title="Map"
        />
        <PoetGallery images={ap.media.photo.gallery} title="Gallery" />
      </Paper>
    </Grid>
  );
};

export default PoetAllInfo;
