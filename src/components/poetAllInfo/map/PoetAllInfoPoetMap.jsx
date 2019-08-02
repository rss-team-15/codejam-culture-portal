import React from 'react';
import { Grid } from '@material-ui/core';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const PoetAllInfoMap = props => {
  const { markers, center } = props;

  const mapData = {
    center: [center.lat, center.lng],
    zoom: 6,
  };

  const markersYandexData = markers.map(marker => ({
    geometry: [marker.mapLink.lat, marker.mapLink.lng],
    properties: {
      hintContent: marker.activity,
      balloonContent: marker.activity,
    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
  }));

  return (
    <Grid container justify="center">
      <YMaps>
        <Map defaultState={mapData}>
          {markersYandexData.map((markerYandexData, i) => (
            <Placemark key={i} {...markerYandexData} />
          ))}
        </Map>
      </YMaps>
    </Grid>
  );
};

export default PoetAllInfoMap;
