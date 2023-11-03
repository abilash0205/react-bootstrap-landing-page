import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";

const contact = () => {
  return (
    <Container id="contact">
      <h2 className="text-center">Contact Us</h2>
      <Row>
        <Col md="6">
          <h3>Contact Information</h3>
          <p>Email: contact@mywebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </Col>
        <Col md="6">
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Enter your message" rows={3}/>
            </Form.Group>
            <Button variant="primary" type="submit" className="m-3">
              Submit
            </Button>
            <Button variant="danger" type="submit">
              Cancel
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default contact;
