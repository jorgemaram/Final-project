import './Profile.css'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = ({ loggedUser }) => {

    
    return (
        <Container>
            <h1>¡Bienvenid@, {loggedUser.username}!</h1>
            <hr></hr>
            <Row>
                <Col md={6}>

            <img src={loggedUser.image} alt="profile-image"></img>

                </Col>

                <Col md={6}>

            <h2>Datos del perfil: </h2>
            <p>Nombre: {loggedUser.name}</p>
                    <p>Tu fecha de nacimiento es: {loggedUser.birthday}!</p>

                    <Link to={`/editar-perfil/${loggedUser._id}`}>Editar perfil</Link>
                    <br></br>
                    <Link to={`/eliminar-perfil/${loggedUser._id}`}>Eliminar perfil</Link>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Profile
