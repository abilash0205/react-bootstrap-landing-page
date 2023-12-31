import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" bg='dark' data-bs-theme='dark' className="fixed top">
        <Container>
          <NavbarBrand href="#home">Great Indian Company</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#qna">QNA</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link> 
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;