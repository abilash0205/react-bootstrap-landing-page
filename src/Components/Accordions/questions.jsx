import { Container, Accordion, Row, Col } from "react-bootstrap";
import "./questions.css";
import { accordionItems } from "../../constants";
import serviceImage from "../../assets/info-box.jpg";

const questions = () => {
  return (
    <Container id="qna" className="">
      <Row>
        <Col xs='8' className="headings">
          <h3>
            Eum ipsam laborum deleniti velit pariatur architecto aut nihil
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>
          <Accordion flush>
            {accordionItems.map(({ id, eventKey, question, answer }) => (
              <Accordion.Item eventKey={eventKey} key={id}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>{answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
        <Col className="service-image">
          <img src={serviceImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default questions;
