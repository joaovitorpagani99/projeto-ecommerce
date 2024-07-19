import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';

function Menu() {
    const usuario = useContext(UsuarioContext);

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Link to="/" >Logo</Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            {usuario && <Link className="nav-link" to='/'>Home</Link>}
                            {!usuario && <Link className="nav-link" to='/login'>Login</Link>}
                            {usuario && <Link className="nav-link" to='/galeria'>Galeria</Link>}
                            {usuario && <Link className="nav-link" to='/Catalogo'>Catalogo</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Menu;