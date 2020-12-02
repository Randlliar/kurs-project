import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 200;

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={classes.root}>
  
    
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
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
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={handleShow}
                >
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
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    
   
    </div>
  );
}
