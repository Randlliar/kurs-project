import React from "react";
import {
  Container,
  Form,
  Dropdown,
  Row,
  Col,
  Button,
  DropdownButton,
} from "react-bootstrap";
import Toolbar from "@material-ui/core/Toolbar";

export const NewDeclarationPart = () => (
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
            <Form.Group controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>sosesh</option>
                <option>sosesh(x2)</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={6}>
            {" "}
            <Form.Control type="text" placeholder="WATAFAK" />
          </Col>
        </Row>
      </Form>
      <Button
        className="float-right mt-5"
        as="input"
        type="sent"
        value="Sent"
      />
    </div>
  </Container>
);
