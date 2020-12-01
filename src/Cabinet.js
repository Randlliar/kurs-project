import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cabinet = () => (
  <Container style={{ paddingTop: "4rem"}}>
    <Row>
      <Col>
        <Link to="/addaplication">Application for documents</Link>
      </Col>
      <Col>
        <Link to="/filingapp">Application for documents</Link>
      </Col>
      <Col>
        <Link to="/filingdec">Application for documents</Link>
      </Col>
    </Row>
    <Row>
      <Col> <Link to="/newmessage">New Message</Link></Col>
      <Col> <Link to="/departorg">Depart Org</Link></Col>
      
      <Col>3 of 3</Col>
    </Row>
  </Container>
);