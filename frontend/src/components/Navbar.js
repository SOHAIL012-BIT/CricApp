import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Navigation() {

    return (
        <>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">CRICBUZZ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                           
                            <li>
                                <Link to="/" className="nav-itms">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/admin" className="nav-itms">Admin Panel</Link>
                            </li>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;    