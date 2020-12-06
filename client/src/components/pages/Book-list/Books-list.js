import React, { Component } from 'react'
import BooksService from '../../../service/book.service'

import BookCard from './Book-card'
//aquí si hay spinner
import BookForm from './../Book-form/Book-form'

import { Container, Row, Button, Modal } from 'react-bootstrap'


import './Books-list.css'

class BookList extends Component {

    constructor() {
        super()
        this.state = {
            books: [],
            //showModal: false
        }
        this.booksService = new BooksService()
    }

    componentDidMount = () => {
        console.log(this.state.books)
        this.refreshBooks()
    }

    refreshBooks = () => {
        
        this.booksService
            .getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err))
    }

    //handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Container>

                    <h1>Listado de libros</h1>

                    {/* {this.props.loggedUser && <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Nuevo libro</Button>} */}

                    <Row>
                        {this.state.books.map(elm => <BookCard key={elm._id} {...elm}  />)}
                        {/* loggedUser={this.props.loggedUser} */}
                    </Row>

                    
                </Container>

                {/* <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <BookForm closeModal={() => this.handleModal(false)} updateList={this.refreshBooks} loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal> */}
            </>
        )
    }
}

export default BookList