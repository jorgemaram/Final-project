import { Container, Row, Col} from 'react-bootstrap'
import Credentials from "./../../../credential"
import Maps from './../Maps/drawMaps'
import { Link } from 'react-router-dom'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

const Events = () => {
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
                            <li>Evento de Martina</li>
                            <p>Lunes 23 de marzo: <strong>7 plazas</strong></p>
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

export default Events