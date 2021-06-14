import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img
                    className="me-2"
                    height="32"
                    role="img"
                    aria-label="Sourcegraph Learn"
                    src="/sourcegraph-mark.svg"
                />
                <span className="fs-4" style={{ fontFamily: 'PT Sans', fontWeight: 'bold' }}>
                    Sourcegraph Learn
                </span>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 mb-md-0">
                <li>
                    <Link href="/">
                        <a href="#" className="nav-link px-2 link-dark">
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts">
                        <a className="nav-link px-2 link-dark">Tutorials</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="nav-link px-2 link-dark">About</a>
                    </Link>
                </li>
            </ul>

            <div className="col-md-3 text-end">
                <a className="btn btn-outline-primary me-2" href="https://sourcegraph.com">
                    Go to Sourcegraph.com
                </a>
                {/* <button type="button" className="btn btn-primary">Sign-up</button> */}
            </div>
        </header>
    )
}
