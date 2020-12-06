import './Navbar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const navbar = () => {

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to='/'>
                    <Nav.Link as="div" id="basic-nav-dropdown">Codelance_</Nav.Link>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Form inline>
                <FormControl type="text" placeholder="Encuentra tu novela" className="mr-sm-2" />
                <Button variant="outline-success">Buscar novela</Button>
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Zona Lector" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/libros">
                                <Nav.Link as="div" id="basic-nav-dropdown">Todas las novelas</Nav.Link>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Eventos</NavDropdown.Item>

                    </NavDropdown>
                    <Link to="/registro">
                        <Nav.Link as="div">Registro</Nav.Link>
                    </Link>
                    <Link to="/acceso-usuario">
                        <Nav.Link as="div">Acceso Usuario</Nav.Link>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default navbar