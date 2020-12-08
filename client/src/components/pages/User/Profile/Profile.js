import React, { Component } from 'react'
import './Profile.css'
import AuthService from '../../../../service/auth.service'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Profile extends Component  {

    constructor(props) {
        super(props)
        this.state = {
            user: []
        }

        this.authService = new AuthService()
        console.log(props)
    }

    deleteThisUser = () => {

        console.log(this.props)
        const userID = this.props.loggedUser._id

        this.authService
            .deleteUser(userID)
            .then(res => { this.props.history.push('/') })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <Container>
                <h1>¡Bienvenid@, {this.props.loggedUser.username}!</h1>
                <hr></hr>
                <Row>
                    <Col md={6}>

                        <img src={this.props.loggedUser.image} alt="profile-image"></img>

                    </Col>

                    <Col md={6}>

                        <h2>Datos del perfil: </h2>
                        <p>Nombre: {this.props.loggedUser.name}</p>
                        <p>Tu fecha de nacimiento es: {this.props.loggedUser.birthday}!</p>

                        <Link to={`/editar-perfil/${this.props.loggedUser._id}`}>Editar perfil</Link>
                        <br></br>
                        <Button onClick={() => this.deleteThisUser()} className="btn btn-sm btn-danger">Borrar perfil</Button>
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
