import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'


const Home = () => {

    return (
        <>
            <Container>
                <Button variant='dark'><Link to={'/crear'}>Crear nuevo libro</Link></Button>
            </Container>
        </>
    )
}

export default Home