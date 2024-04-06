import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function Navigation() {
  return (
    <div id='nav'>
      <Navbar variant="dark"  id="navbar" style={{fontFamily:"Times,serif",fontWeight:"bold",fontSize:"x-large",padding:"0.5%"}}>
        <Container>
          <Navbar.Brand href="/">Home Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/create">Create Account</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
            <Nav.Link href="#/deposit">Deposit</Nav.Link>
            <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
            <Nav.Link href="#/alldata">All Data</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

