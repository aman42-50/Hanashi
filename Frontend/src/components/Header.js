import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import "../App.css";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar expand="lg" fixed="top" className="Header ms-auto">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            {user ? (
              <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
