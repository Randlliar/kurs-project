import React from "react";
import { Container, Form, Button } from "react-bootstrap";


export const AddAplication = () => (
  <Container>
  <Form>
      <>
        <Form.Check type="radio" id="/cabinet" label="Тут" />
        <Form.Check type="radio" id="" label="будет" />
        <Form.Check type="radio" id="" label="текст" />
        <Form.Check type="radio" id="" label="впадлу" />
        <Form.Check type="radio" id="" label="вчера" />
        <Form.Check type="radio" id="" label="было" />
        <Form.Check type="radio" id="" label="его" />
        <Form.Check type="radio" id="" label="писать" />
        <Form.Check type="radio" id="" label="radio 9" />
        <Form.Check type="radio" id="" label="radio 10" />
      </>

      <div className="mb-2">
        <Button variant="success" onClick={ () => {} }>Перейти</Button>
      </div>
    </Form>
  </Container>
);
