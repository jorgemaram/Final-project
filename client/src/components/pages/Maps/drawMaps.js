import React, { Component } from 'react';
import EventService from "../../../service/event.service"

import { GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';


class Maps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: {
                name: "",
                longitude: "",
                latitude:"",
            }
        }
        console.log(props.latitude)
        console.log(props.longitude)
        this.eventService = new EventService()

    }
  
    
    render() {
        

        return (
<>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude) }}
            />
            <Marker 
                    position={{ lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude) }}
                    name={this.props.name}
                />
</>
        )
    }
}

export default withScriptjs(withGoogleMap(Maps))
