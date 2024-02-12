import React from "react"
import { Navbar, Nav, Container, Form, Image, NavbarBrand } from 'react-bootstrap';

const NavbarComponent = ({handleSubmit, handleSearchChange, searchQuery }) => {

   

      
    return(
        <div>
        <Navbar className='nav-first'  data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/"><Image src={require("../img/logo-movie-time.png")} style={{width: "15rem"}} /></Navbar.Brand>
          <Nav className='ms-auto'>
           <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Search Movie"
              className="mr-sm-2 mt-1"
              style={{width: "17rem", height: "35px", borderRadius: "15px"}}
              value={searchQuery}
              onChange={handleSearchChange}
              />
          </Form> 
          </Nav>
        </Container>
      </Navbar>
      <Navbar className='nav-second bg-light '>
        <Container>
        <Nav className="me-auto " style={{fontSize: "18px"}}>
            <Nav.Link className='me-3' href="/">Popular</Nav.Link>
            <Nav.Link className='me-3' href="/horror">Horror</Nav.Link>
            <Nav.Link className='me-3' href="/cartoon">Cartoon</Nav.Link>
            <Nav.Link className='me-3' href="/action">Action</Nav.Link>
          </Nav>
        <Nav className='ms-auto'>
          <NavbarBrand><Image src={require("../img/cinema21.png")} style={{width: "10rem"}} /> </NavbarBrand>
          <NavbarBrand><Image src={require("../img/cinepolis.png")} style={{width: "10rem"}} /> </NavbarBrand>
          <NavbarBrand><Image src={require("../img/dolby.png")} style={{width: "10rem"}} /> </NavbarBrand>
        </Nav>
        </Container>
      </Navbar>   
        </div>
    
    )
}

export default NavbarComponent;