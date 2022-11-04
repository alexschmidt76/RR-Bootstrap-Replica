import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Instacart_logo.png';

export default function TopBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="home">
                <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav className="me-auto">
                <Nav.Link href="#LogIn">Log In</Nav.Link>
                <Button variant="success">Sign Up</Button>
            </Nav>
        </Navbar>
    );
}