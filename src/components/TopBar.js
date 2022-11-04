import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Instacart_logo.png';

export default function TopBar() {
    return (
        <Navbar bg="light" expand="lg" style={{padding: '20px 40px 20px 40px' }}>
            <Navbar.Brand href="home">
                <img src={logo} style={{ width: '149px '}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav className="me-auto" style={{marginLeft: ""}}>
                <Nav.Link href="#LogIn">Log In</Nav.Link>
                <Button variant="success">Sign Up</Button>
            </Nav>
        </Navbar>
    );
}