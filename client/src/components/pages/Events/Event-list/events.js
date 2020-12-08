import { Container, Row, Col} from 'react-bootstrap'
import Credentials from "../../../../credential"
import Maps from './../../Maps/drawMaps'
import EventService from "../../../../service/event.service"
import EventCard from './event-card'
import { Link } from 'react-router-dom'
import { Component } from 'react';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;


class Events extends Component {
    
    constructor() {
        super()
        this.state = {
            events: [],
        }
        this.eventService = new EventService()

    }

    componentDidMount = () => {

        this.refreshEvents()
    }

    refreshEvents = () => {

        this.eventService
            .getEvent()
            .then(res => this.setState({ events: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (

            <>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1>Listado de eventos</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Maps
                                googleMapURL={mapURL}
                                containerElement={<div style={{ height: "400px" }} />}
                                mapElement={<div style={{ height: "100%" }} />}
                                loadingElement={<p>Cargando</p>}
                            />
                        </Col>
    
                        <Col md={6}>
                            <ul>
                                <h3>Próximos eventos</h3>
                                <hr></hr>
                                {this.state.events.map(elm => <EventCard key={elm._id} {...elm} />)}
                                {/* <Link to=`/eventos/${:event_id}`>
                                <p>Más información del evento</p>
                            </Link> */}
                            </ul>
                        </Col>
                    </Row>


                </Container>
            </>
        )
    }
}

export default Events
