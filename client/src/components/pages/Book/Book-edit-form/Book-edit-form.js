import React, { Component } from 'react'
import BooksService from './../../../../service/book.service'
import { Container, Form, Button } from 'react-bootstrap'

class BookForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            genre: this.props.genre,
            resume: this.props.resume,
            author: this.props.loggedUser._id
        }
        this.booksService = new BooksService()
        console.log(props)
    }

    componentDidMount = () => {

        const book_id = this.props.match.params.book_id

        this.booksService
            .getBook(book_id)
            // .then(res => {
            //     this.setState({ book: res.data })
            //     console.log(book)
            // })
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.booksService

            .editBook(this.state)
            .then(res => {
                this.props.history.push('/libros')
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <Container>
                    <h1> Editar {this.props.title}</h1>
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
                            <Form.Control as="select" defaultValue="Elige una opción" name="genre" value={this.state.genre} onChange={this.handleInputChange} >
                                <option>Elige una opción</option>
                                <option>Aventuras</option>
                                <option>Ciencia Ficción</option>
                                <option>Infantil</option>
                                <option>Misterio</option>
                                <option>Novela negra</option>
                                <option>Romántico</option>
                                <option>Terror</option>
                                <option>Otro</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Button variant="dark" type="submit">Edita tu libro</Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default BookForm