import React, { Component } from 'react';
import EventService from "../../../service/event.service"

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


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
  
    // componentDidMount = () => {
    //     this.refreshEvents()
    // }

    // refreshEvents = () => {


    //     this.eventService
    //         .getOneEvent()
    //         .then(res => {  this.setState({ events: res.data })  })
    //         .catch(err => console.log(err))
    // }

    render() {
        
        return (

            <GoogleMap
            
                defaultZoom={15}
                defaultCenter={{ lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude) }}
            
            />
        )
    }
}

export default withScriptjs(withGoogleMap(Maps))
