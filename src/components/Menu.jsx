import { Container, Nav, Navbar, } from 'react-bootstrap';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container fluidr>
                    <Link to="/" >Logo</Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/cadastro'>Cadastro</Link>
                            <Link className="nav-link" to='/login'>Login</Link>
                            <Link className="nav-link" to='/galeria'>Galeria</Link>
                            <Link className="nav-link" to='/produtos'>Produtos</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Menu;