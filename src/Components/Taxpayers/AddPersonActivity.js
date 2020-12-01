import React from "react";
import { Container, Form, Dropdown, Row, Col, Button } from "react-bootstrap";
import Toolbar from "@material-ui/core/Toolbar";

export const AddPeronActivity = () => (
  <Container>
    <Toolbar />
    <h1>Person Activity</h1>
    <div>
      <Form>
        <Row className="mt-3">
          <Col>
            {" "}
            <Form.Control type="text" placeholder="WATAFAK" />
          </Col>
          <Col>
            {" "}
            <Form.Control type="text" placeholder="WATAFAK" />
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
