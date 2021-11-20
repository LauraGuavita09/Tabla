import React from 'react'
import './SupBarra.css'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


export default function SupBarra() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" expand={false}>
                    <Container fluid>

                        <Navbar.Brand href="#">Iservi</Navbar.Brand>                       

                        <Nav>
                        
                            <Nav.Link href="#deets">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Servicios</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Noticias</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Equipo</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Nosotros</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#deets">Registros</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Añadir servicio</Nav.Link>
                        </Nav>


                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Inicio</Nav.Link>
                                    <Nav.Link href="#action2">Servicios</Nav.Link>
                                    <Nav.Link href="#action2">Noticias</Nav.Link>
                                    <Nav.Link href="#action2">Equipo</Nav.Link>
                                    <Nav.Link href="#action2">Nosotros</Nav.Link>
                                    <NavDropdown title="Registros" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="/RegistrarProveedor">Usuarios registrados</NavDropdown.Item>
                                        <NavDropdown.Item href="/VerProveedor">Proovedores registrados</NavDropdown.Item>
                                        <br />
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
