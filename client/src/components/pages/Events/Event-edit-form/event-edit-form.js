import React, { Component } from 'react'
import EventService from "../../../../service/event.service"
import { Container, Form, Button } from 'react-bootstrap'

class EventEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            description: this.props.description,
            place: this.props.place,
            capacity: this.props.capacity,
            date: this.props.date,
            author: this.props.loggedUser._id
        }
        console.log(props)
        this.eventService = new EventService()
    }

    componentDidMount = () => {


        const event_id = this.props.match.params.event_id 

        this.eventService
            .getEvent(event_id)
            .then(res => {
                this.setState({ event: res.data })
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.eventService

            .editEvent(this.state)
            .then(res => {
                this.props.history.push('/eventos')
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                

                <Container>
                    <h1> Editar evento</h1>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Descripción del evento</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="place">
                            <Form.Label>Lugar de celebración</Form.Label>
                            <Form.Control type="text" name="place" value={this.state.place} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="capacity">
                            <Form.Label>Aforo</Form.Label>
                            <Form.Control type="number" name="capacity" value={this.state.capacity} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Fecha (URL)</Form.Label>
                            <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">Editar evento</Button>
                    </Form>
                </Container>

            </>
        )
    }
}

export default EventEditForm