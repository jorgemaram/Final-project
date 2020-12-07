import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Maps = (props) => {
    return (
        <GoogleMap defaultZoom={15} 
            defaultCenter={{ lat: 40.39258526858532, lng: -3.697455942364282}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Maps
    )
)
