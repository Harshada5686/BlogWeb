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
                            <button type="button" className="btn me-lg-4 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Sign in
                            </button>


                            {/* sign in modal */}
                            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">

                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="loginModalLabel">Login</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="login.php" class="form" method="POST">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Email address</label>

                                                    <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />


                                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" />


                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary" value="login">Login</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#signupModal"
                        name="SIGNUP">SignUp</button>

                            {/* Signup modal */}
                            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="signupModalLabel">Sign up</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" class="form" method="POST">
                        <div class="mb-3">
                            <label for="exampleInputEmail2" class="form-label" name="email">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail2"
                                aria-describedby="emailHelp"/>
                            

                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="exampleInputPassword2"/>
                           

                        </div>
                        <div class="mb-3">
                            <label for="cexampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" name="confirmpassword" class="form-control"
                                id="cexampleInputPassword1"/>
                           

                        </div>

                        <button type="submit" class="btn btn-secondary" value="signup">Create Account</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>

                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default HeaderComp;