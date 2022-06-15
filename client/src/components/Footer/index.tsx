import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Footer: FC = () => {
  return (
    <footer className="p-3 footer">
      <Container>
        <Row>
          <Col>Customer.io Frontend Take-Home Exercise</Col>
          <Col className="d-flex justify-content-end">Oscar Barba</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
