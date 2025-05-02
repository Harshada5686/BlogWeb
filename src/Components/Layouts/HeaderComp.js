import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeaderComp.css'
const HeaderComp = () => {
    return (
        <Navbar expand="lg"
            className="bg-body-tertiary"
        >
            <Container>
                <Navbar.Brand
                    href="#home"
                    className="fs-3 fw-bold"
                >
                    IMAJI
                    <span style={{ color: '#A27B5C' }}> Coffee.</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="navitem">Home</Nav.Link>
                        <Nav.Link href="#story" className="navitem">Story</Nav.Link>
                        <Nav.Link href="#menu" className="navitem">Menu</Nav.Link>
                        <Nav.Link href="#space" className="navitem">Space</Nav.Link>
                        <Nav.Link href="#community" className="navitem">Community</Nav.Link>
                        <Nav.Link href="#news" className="navitem">News</Nav.Link>

                        <div className="d-flex flex-column flex-lg-row ms-2">
                            <button type="button" className="btn me-lg-4 mb-2 mb-lg-0">
                            Sign in
                            </button>
                            <button type="button" className="btn">
                                Sign up
                            </button>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default HeaderComp;