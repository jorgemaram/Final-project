import React, { Component } from 'react'
import BooksService from './../../../service/book.service'
import { Container } from 'react-bootstrap'

class ChapterForm extends Component {

    constructor() {
        super()
        this.state = {
            book: []
        }
        this.booksService = new BooksService()
        console.log(this.state)
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.booksService
            .saveBook(this.state)
            .then(res => {
                console.log(this.props)
                this.props.history.push('/libros')
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <Container>
                    <h1> Hola</h1>

                </Container>
            </>
        )
    }
}

export default ChapterForm