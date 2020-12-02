import React from "react";
import { Container, Form, Dropdown, Row, Col, Button, DropdownButton } from "react-bootstrap";
import Toolbar from "@material-ui/core/Toolbar";

export const AddCheck = () => (
  <Container>
    <Toolbar />
    <h1>Add new declaration</h1>
    <div>
      <Form>
        <Row className="mt-4">
          <Col>
            {" "}
            <Form.Control type="text" placeholder="WATAFAK" />
          </Col>
          <Col>
          <div>
          <Dropdown>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
          </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={6}>
            {" "}
            <Form.Control type="text" placeholder="WATAFAK" />
          </Col>
        </Row>
      </Form>
      <Button className="float-right mt-5"  as="input" type="sent" value="Sent" />
    </div>
  </Container>
);
