import { Card, Container } from "react-bootstrap";
import { productItems } from "../../constants";
import "./products.css";

const products = () => {
  return (
    <Container id="products">
      <h2 className="text-center my-5">Our Products</h2>
      <div className="singlecard">
        {productItems.map(({ id, src }) => (
          <Card
            style={{ width: "400px" }}
            key={id}
            className="card-hover"
          >
            <Card.Img variant="top" src={src} className="cardimages"></Card.Img>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default products;
