import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

export const AddAplication = () => (
  <Container style={{ paddingTop: "4rem"}}>
    <Form>
    <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

      <div className="mb-2">
        <Button variant="success" type="">
          Перейти
        </Button>
      </div>
    </Form>
  </Container>
);
