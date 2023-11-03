import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import { carouselImages } from "../../constants";

const CarouselSection = () => {
  return (
    <div id="home">
      <Carousel>
        {carouselImages.map(({ id, src, heading, content }) => (
          <Carousel.Item interval={500} key={id}>
            <img className="carousel-images" src={src} alt="" />
            <Carousel.Caption className="center">
              <h3>{heading}</h3>
              <p>{content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
