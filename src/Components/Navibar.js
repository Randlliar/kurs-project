import React, { useState } from "react";
import {
  NavbarBrand,
  Nav,
  Button,
  Navbar,
  Container,
  Modal,
  ModalTitle,
  ModalBody,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  FormCheck,
  Form,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  navar-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar fixed="top" collapseOn expand="lg" bg="dark" variant="dark">
          <Container>
            <NavbarBrand aria-disabled="disabled">WebDev Blog</NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className="mr-2" onClick={handleShow}>
                  Log In
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Sign Out
                </Button>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </Styles>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton onClick={handleClose}>
          <ModalTitle>Log In</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <form>
            <FormGroup controlId="formBasicEmail">
              <FormLabel> Email Adress </FormLabel>
              <FormControl type="emali" placeholder="Enter email" />
              <FormText className="text-muted">
                We'll never share your email
              </FormText>
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <FormLabel> Password </FormLabel>
              <FormControl type="password" placeholder="Enter password" />
            </FormGroup>
            <FormGroup controlId="formBasicCheckbox">
              <FormCheck type="checkbox" label="Remember me" />
            </FormGroup>
            <FormGroup>
              <Button href="/cabinet">Войти</Button>
            </FormGroup>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}