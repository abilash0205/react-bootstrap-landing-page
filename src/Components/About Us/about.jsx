import { Container, Card } from "react-bootstrap";
import "./about.css";
import { companyStatistics } from "../../constants";

const about = () => {
  return (
    <Container id="about">
      <h2 style={{ textAlign: "center" }}>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, at
        consectetur magni alias quis cumque porro quisquam accusantium quasi
        amet harum quibusdam maxime laboriosam pariatur optio esse cum
        doloremque odit.
      </p>
      <div className="car">
        {companyStatistics.map(({ id, count, description }) => (
          <Card
            bg="light"
            key={id}
            style={{ width: "300px" }}
            className="singleCard"
          >
            <Card.Body>
              <Card.Title className="text-center title">{count}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <button>Learn More</button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default about;
