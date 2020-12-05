import { Col, Card, ButtonGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const BookCard = ({ title, image, _id }) => {
    return (
        <Col lg={4}>
            <Card className="book-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                        <Link className="btn btn-dark" to={`/libros/editar/${_id}`}>Editar</Link>
                        <Link className="btn btn-dark" to={`/libros/${_id}`}>Ver detalles</Link>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BookCard