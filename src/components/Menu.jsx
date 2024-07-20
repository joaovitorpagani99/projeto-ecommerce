import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';
import { logout } from '../firebase/auth';

function Menu() {
    const usuario = useContext(UsuarioContext);
    const navigate = useNavigate();

    function handleLogout() {
        logout().then(() => {
            navigate("/login");
        });
    }


    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container fluid >
                    <Link to="/" >Logo</Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            {usuario && <Link className="nav-link" to='/'>Home</Link>}
                            {usuario && <Link className="nav-link" to='/Sobre'>Sobre</Link>}
                            {!usuario && <Link className="nav-link" to='/login'>Login</Link>}
                            {usuario && <Link className="nav-link" to='/galeria'>Galeria</Link>}
                            {usuario && <Link className="nav-link" to='/catalogo'>Catalogo</Link>}
                            {usuario && <Button variant="outline-dark" onClick={handleLogout}>
                                Sair
                            </Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Menu;