import React, { useState } from 'react'
import Link from 'next/link'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import { Dropdown, Navbar, Nav, NavDropdown, Container } from  'react-bootstrap'

interface Props {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
}

export default function Header(props: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
         <Navbar 
         className={`header navbar-default navbar-fixed-top navbar-expand-md py-3 container-lg px-0 px-lg-3 static-top ${props.className || 'navbar-light'}`} 
         expand="lg" 
         position="absolute">
            <Container>
                <Navbar.Brand 
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none nowrap" 
                    href="https://about.sourcegraph.com">
                    <img
                        className="me-2"
                        height="22"
                        role="img"
                        aria-label="Sourcegraph"
                        src="/sourcegraph-mark.svg"
                    />
                    <a 
                        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-5" 
                        style={{ fontFamily: 'PT Sans', fontWeight: 'bold'}}>
                            Sourcegraph
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    className="d-flex me-auto my-auto"
                    style={{ maxHeight: '40px' }}
                >
                <Nav.Link 
                    className="text-nowrap" 
                    href="https://about.sourcegraph.com/customers">
                        Customers
                </Nav.Link>
                <Nav.Link 
                    className="text-nowrap" 
                    href="https://about.sourcegraph.com/case-studies">
                        Case Studies
                </Nav.Link>
                <Nav.Link 
                    className="text-nowrap" 
                    href="https://docs.sourcegraph.com">
                        Docs <ExternalLinkIcon className="icon-inline small ml-1"/>
                </Nav.Link>
                <NavDropdown title="Learn" id="navbarScrollingDropdown">
                    <NavDropdown.Item 
                        href="https://learn.sourcegraph.com">
                            Sourcegraph Learn
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                        href="https://learn.sourcegraph.com/posts">
                            Tutorials
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                        href="https://learn.sourcegraph.com/tags/video">
                            Videos
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link 
                    href="https://about.sourcegraph.com/pricing" 
                    className="text-nowrap">
                        Pricing
                </Nav.Link>
                <Nav.Link className="col-md-3 text-end my-auto">&nbsp;</Nav.Link>
                <Nav.Link className="header__nav-item nav-item">
                    <a
                        className="header__nav-link nav-link text-nowrap"
                        href="https://sourcegraph.com/sign-in"
                        title="Search public code with Sourcegraph Cloud">
                            Sign in
                    </a>
                </Nav.Link>
                <Nav.Link 
                    className="text-nowrap"  
                    href="https://about.sourcegraph.com/get-started">
                    <a
                        title="Get started with Sourcegraph"
                        className="btn btn-outline-primary me-2">
                            <b>Get started</b>
                    </a>
                </Nav.Link>      
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}