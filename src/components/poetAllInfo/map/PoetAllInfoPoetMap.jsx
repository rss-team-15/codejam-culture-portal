import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

const PoetAllInfoMap = props => {
  const { markers, center } = props;
  return (
    <GoogleMap defaultZoom={8} defaultCenter={center}>
      {markers.map(marker => (
        <Marker position={marker} />
      ))}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(PoetAllInfoMap));
