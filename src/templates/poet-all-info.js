import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import PoetTitle from '../components/poetAllInfo/title';
import PoetBiograpyhy from '../components/poetAllInfo/timeline';
import PoetWorks from '../components/poetAllInfo/works';
import PoetVideo from '../components/poetAllInfo/video';
import PoetMap from '../components/poetAllInfo/map';
import PoetGallery from '../components/poetAllInfo/gallery';

import { languagesStore } from '../storage';

import App from '../app/';


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

const PoetAllInfo = ({ pageContext }) => {
  const classes = useStyles();
  const { lang } = languagesStore.getState();
  const [language, updateLang] = useState(lang);

  languagesStore.subscribe(() => {
    const { lang } = languagesStore.getState();

    updateLang(lang);
  });

  const { indexData } = pageContext;

  const {
    name,
    surname,
    yearsOfLife,
    biography,
    mainPicture,
    videoId,
    listOfWorks,
    placesOfActivity,
    gallery,
  } = pageContext.resultData[`allContentfulAuthor${lang[0].toUpperCase() + lang.slice(1)}`].edges[indexData].node;

  const {
    biographyTitle,
    worksTitle,
    firstColumnTitle,
    secondColumnTitle,
    watchVideoTitle,
    galleryTitle,
  } = pageContext.resultData[`contentfulPoetPageInterface${lang[0].toUpperCase() + lang.slice(1)}`];

  console.log(pageContext);

  const poetInfo = { name, surname, yearsOfLife, mainPicture };

  const tableInterface = {
    title: worksTitle,
    firstColumnName: firstColumnTitle,
    secondColumnName: secondColumnTitle,
  };

  return (
    <App>
      <Grid container className={classes.poetAllInfoContainer} justify="center">
        <Paper className={classes.poetAllInfoRoot}>
          <PoetTitle poetInfo={poetInfo} />
          <PoetBiograpyhy poetBio={biography} title={biographyTitle} />
          <PoetWorks listOfWorks={listOfWorks} interface={tableInterface} />
          <PoetVideo videoId={videoId} videoTitle={watchVideoTitle}/>
          <PoetMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `30vw` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markers={placesOfActivity}
            center={placesOfActivity[0].mapLink}
            title="Map"
          />
          <PoetGallery images={gallery} title={galleryTitle} />
        </Paper>
      </Grid>
    </App>
  );
};

export default PoetAllInfo;
