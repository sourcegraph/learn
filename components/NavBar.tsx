import Link from 'next/link'
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="/sourcegraph-learn.svg" width="200" style={{ verticalAlign: -5 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/tags/tutorial">Tutorials</Nav.Link>
                        <Nav.Link href="/tags/video">Videos</Nav.Link>
                        <NavDropdown title="About Sourcegraph" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://about.sourcegraph.com/customers">
                                Customers
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://about.sourcegraph.com/case-studies">
                                Case Studies
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.sourcegraph.com">Docs</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.sourcegraph.com/pricing">Pricing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <Button href="https://sourcegraph.com" variant="outline-primary">
                                Go to Sourcegraph.com
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
