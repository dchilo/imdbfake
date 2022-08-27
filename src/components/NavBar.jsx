import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from './NavBar.module.css'


export function NavBar() {


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.navBarMain}>
      <Container>
        <Navbar.Brand href="/">IMDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <NavDropdown title="Movies" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href='/sort/popular/movie'
              >
                Popular
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
              >
                All
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="TV shows" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/sort/popular/tv"
              >
                Popular
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
