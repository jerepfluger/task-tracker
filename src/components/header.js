import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
                    <Navbar.Brand href="/">Task Tracker</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">
                            Inicio
                            &nbsp;
                            <i className="fas fa-home"/>
                        </Nav.Link>
                        <Nav.Link href="pricing">Precios</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Nav.Link href="login"><Button variant="outline-info">Iniciar Sesion</Button></Nav.Link>
                        <Nav.Link href="register"><Button variant="outline-info">Registrarse</Button></Nav.Link>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default Header;
