import { FC, useState } from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Header: FC = () => {
  const [mockAuth, setMockAuth] = useState(true)

  return (
    <Navbar className="p-3 header" expand="lg">
      <Container>
        <Navbar.Brand href="/">Customer.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/customers">Customers</Link>
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {mockAuth && <Navbar.Text>take-home@customer.io</Navbar.Text>}
            <Nav.Link onClick={() => setMockAuth(!mockAuth)}>{mockAuth ? 'Logout' : 'Login'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
