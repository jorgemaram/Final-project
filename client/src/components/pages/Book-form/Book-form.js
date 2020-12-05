import React, { Component } from 'react'
import BooksService from './../../../service/book.service'

import { Form, Button } from 'react-bootstrap'

class BookForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            genre: '',
            resume: '',
            chapters: [],
            image: '',
            author: this.props.loggedUser ? this.props.loggedUser._id : ''
        }
        this.booksService = new BooksService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.booksService
            .saveBook(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <h1>Nuevo libro</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="resume" value={this.state.resume} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="length">
                        <Form.Label>Género</Form.Label>
                        <Form.Control type="number" name="genre" value={this.state.genre} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear nuevo libro</Button>
                </Form>
            </>
        )
    }
}

export default BookForm