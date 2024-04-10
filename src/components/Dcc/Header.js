import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';



function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: 'gray', width: '100%', marginTop:"20px" }}>
      <Container>
          <Navbar.Brand href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>Altraavision</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: 'auto', marginRight: '80px' }}>
              <Nav.Link href="#home" style={{ marginRight: '80px', marginLeft: '60px', color: '#333', fontWeight: 'bold', marginRight: '10px' }}>Home</Nav.Link>
              <Nav.Link href="#About us" style={{ marginRight: '80px', marginLeft: '60px', color: '#333', fontWeight: 'bold', marginRight: '10px' }}>About us</Nav.Link>
              <Nav.Link href="#Services" style={{ marginRight: '80px', marginLeft: '60px', color: '#333', fontWeight: 'bold', marginRight: '10px' }}>Services</Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown" style={{ marginRight: '160px', marginLeft: '60px' }}>
                <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Manager</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Site Engg</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Client</NavDropdown.Item>
              </NavDropdown>
              <Form inline style={{ marginLeft: '10px' }}>
                <Row>
                  <Col xs="auto">
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" style={{ borderRadius: 0 }} />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit" style={{ borderRadius: 0, backgroundColor: '#007bff', color: '#fff', borderColor: '#007bff' }}>Search</Button>
                  </Col>
                </Row>
                </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header;


