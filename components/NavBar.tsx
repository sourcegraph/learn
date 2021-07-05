import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container className= "py-3 container ">
                <Navbar.Brand href="https://about.sourcegraph.com/">
                    <img src="/sourcegraph-logo.svg" width="150" style={{ verticalAlign: -5 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://about.sourcegraph.com/customers">Customers</Nav.Link>
                        <Nav.Link href="https://about.sourcegraph.com/case-studies">Case Studies</Nav.Link>
                        <Nav.Link href="https://docs.sourcegraph.com">Docs</Nav.Link>
                        <Nav.Link href="https://about.sourcegraph.com/pricing">Pricing</Nav.Link>


                        <NavDropdown title="Learn" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/">Overview </NavDropdown.Item>
                            <NavDropdown.Item href="/tags/tutorial">Tutorials </NavDropdown.Item>
                            <NavDropdown.Item href="/tags/video">Videos </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="https://sourcegraph.com/sign-in">Sign In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="https://about.sourcegraph.com/get-started/" variant="outline-primary" className="btn-link-color: red">
                                Get Started
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
