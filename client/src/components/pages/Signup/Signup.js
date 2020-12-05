import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            birthday: '',
            gender: '',
            username: '',
            password: ''
        }
        this.authService = new AuthService()

    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {console.log(theLoggedInUser)
            })
            .catch(err => console.log('Error', err))
    }


    render() {

        return (

            <Container>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Registro de usuario</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="birthday">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control type="date" name="birthday" value={this.state.birthday} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>Género</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="gender" value={this.state.gender} onChange={this.handleInputChange} >
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                    <option>Otro</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Imagen de perfil</Form.Label>
                                <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button variant="dark" type="submit">Registrarme</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup