/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom"
import "../css/Header.css"
import { Navbar,Container,Nav } from "react-bootstrap"


export const Header = () => {
  return (
    <div className='navbaar'>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Drugstore Green</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
            <Link to="/" className="nav-link">Cerrar Sesion</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
  )
}
export default Header
