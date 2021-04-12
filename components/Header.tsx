import React, { useState } from 'react'
import Link from 'next/link'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'

interface Props {
    className?: string
    minimal?: boolean
}

export default function Header(props: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <nav className={`header navbar navbar-expand-md py-3 ${props.className || 'navbar-light'}`}>
                <div className="container-lg px-0 px-lg-3">
                    <Link href="/">
                        <a className="site-title">Sourcegraph Learn</a>
                    </Link>
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
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <Link href="https://about.sourcegraph.com/pricing">
                                            <a className="header__nav-link nav-link">Pricing</a>
                                        </Link>
                                    </li>
                                    <li className="flex-1">&nbsp;</li>
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
                                                className="header__nav-link nav-link btn btn-outline-primary"
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
