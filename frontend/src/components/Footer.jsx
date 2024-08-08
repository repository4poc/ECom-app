import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4">
            Punjab Bottle Agency &copy; {currentYear}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
