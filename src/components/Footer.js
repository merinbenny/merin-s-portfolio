import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer style={{ background: "#f8f9fa", padding: "20px 0", marginTop: "auto" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p style={{ margin: 0, color: "#000" }}>© 2025 Merin. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
