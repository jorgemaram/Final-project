import React, { Component } from 'react'
import BooksService from '../../../service/book.service'

import './Book-details.css'

//si ponemos loader, irá aquí 

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class BookDetails extends Component {

    constructor() {
        super()
        this.state = {
            book: undefined
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

    render() {

        return (
            <Container className="book-details">
                <h1>Detalles {this.state.book.title}</h1>
                <Row>
                    <Col md={{ span: 6, offset: 1 }} >
                        <img src={this.state.book.image} alt={this.state.book.title} />
                    </Col>
                    <Col md={4}>
                        <h3>Detalles</h3>
                        <p>{this.state.book.resume}</p>
                        <hr />
                        <p>Género: {this.state.book.genre}</p>
                        <Link to="/libros" className="btn btn-sm btn-dark">Volver</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookDetails