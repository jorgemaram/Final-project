import React, { Component } from 'react'
import BooksService from '../../../service/book.service'

import './Book-details.css'

//si ponemos loader, irá aquí 

import { Container, Row, Col, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class BookDetails extends Component {

    constructor() {
        super()
        this.state = {
            book: []
        }
        this.bookService = new BooksService()
    }

    componentDidMount = () => {


        const book_id = this.props.match.params.book_id

        this.bookService
            .getBook(book_id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err))
    }

    deleteThisBook = () => {

        const book_id = this.props.match.params.book_id

        this.bookService
            .deleteBook(book_id)
            .then(res => this.props.history.push('/libros'))
            .catch(err => console.log(err))
        
    }

    render() {

        return (
            <>
                <Container>
                    <h1>{this.state.book.title}</h1>
                </Container>
                <Container className="book-details">
                    <Row>
                        <Col md={{ span: 6, offset: 1 }} >
                            <img src={this.state.book.image} alt={this.state.book.title} />
                            <h3>Detalles</h3>
                            <p>{this.state.book.resume}</p>
                            <hr />
                            <p>Género: {this.state.book.genre}</p>
                            <Link to="/libros" className="btn btn-sm btn-dark">Volver</Link>
                            <Button onClick={() => this.deleteThisBook()} className="btn btn-sm btn-danger">Borrar</Button>
                        </Col>
                        <Col md={4}>
                        </Col>
                    </Row>
                </Container>
            </>

        )
    }
}

export default BookDetails