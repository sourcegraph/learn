import React, { useState } from 'react'
import Link from 'next/link'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'

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
            <nav className={`header navbar navbar-expand-md py-3 ${props.className || 'navbar-light'}`}>
                <div className="container-lg px-0 px-lg-3">
                    <a href="https://about.sourcegraph.com" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img
                        className="me-2"
                        height="22"
                        role="img"
                        aria-label="Sourcegraph"
                        src="/sourcegraph-mark.svg"
                    />
                            <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-5" style={{ fontFamily: 'PT Sans', fontWeight: 'bold'}}>Sourcegraph</a>
                    </a>
                    {!props.minimal && (
                        <>
                            <button
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navcol-1"
                                onClick={toggle}
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}
                                id="navcol-1"
                            >
                                <ul className="nav navbar-nav d-flex w-100">
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <Link href="https://about.sourcegraph.com/customers">
                                            <a className="header__nav-link nav-link">Customers</a>
                                        </Link>
                                    </li>
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <a className="header__nav-link nav-link" href="https://docs.sourcegraph.com">
                                            Docs <ExternalLinkIcon className="icon-inline small ml-1" />
                                        </a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a 
                                            class="nav-link dropdown-toggle btn btn-navbar" 
                                            href="#" 
                                            id="navbarDropdownMenuLink" 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false" 
                                            data-target=".nav-collapse"
                                        >
                                            Learn
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="https://learn.sourcegraph.com/posts">Tutorials</a></li>
                                            <li><a class="dropdown-item" href="https://learn.sourcegraph.com/tags/video">Videos</a></li>
                                        </ul>
                                    </li>
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <Link href="https://about.sourcegraph.com/pricing">
                                            <a className="header__nav-link nav-link">Pricing</a>
                                        </Link>
                                    </li>
                                    <li className="col-md-3 text-end">&nbsp;</li>
                                    <li className="header__nav-item nav-item" role="presentation">

                                        <a
                                            className="header__nav-link nav-link"
                                            href="https://sourcegraph.com/sign-in"
                                            title="Search public code with Sourcegraph Cloud"
                                        >
                                            Sign in
                                        </a>
                                    </li>
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <Link href="https://about.sourcegraph.com/get-started">
                                            <a
                                                title="Get started with Sourcegraph"
                                                className="btn btn-outline-primary me-2"
                                            >
                                                Get started
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}
