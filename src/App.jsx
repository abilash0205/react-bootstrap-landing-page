import Header from "./Components/Header";
import CarouselSection from "./Components/Carousel/Carousel";
import AboutUs from "./Components/About Us/about";
import Questions from './Components/Accordions/questions';
import Products from './Components/Products/products'
import Contact from './Components/Contact/contact'

function App() {
  return (
    <div>
      <Header />
      <CarouselSection />
      <AboutUs />
      <Questions />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
