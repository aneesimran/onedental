import React from "react";
import Link from "next/link";

const NavigationBar = () => {
    return (
        <>
            <div
                className="navbar bg-theme-dark-blue text-white sticky top-0 z-20"
                data-theme="synthwave"
            >
                <div className="navbar-start xl:pl-9">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost xl:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow rounded-box w-60"
                            data-theme="light"
                        >
                            <li>
                                <Link href="/about-us">About us</Link>
                            </li>
                            <li>
                                <a>Treatments</a>
                                <ul className="p-2">
                                    <li>
                                        <Link href="/fresh-breath">
                                            Fresh Breath
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teeth-whitening">
                                            Teeth Whitening
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/invisalign">
                                            Invisalign
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/children">Children</Link>
                                    </li>
                                    <li>
                                        <Link href="/dental-shop">
                                            Dental Shop
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/fees">Fees</Link>
                            </li>
                            <li>
                                <a>Testimonials</a>
                            </li>
                            <li>
                                <a>Advice</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Links</a>
                                    </li>
                                    <li>
                                        <a>Privacy Policy</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <Link href="/">
                            <span className="text-blue-500">one</span>
                            <span>dental</span>
                        </Link>
                    </a>
                </div>
                <div className="navbar-end hidden xl:flex pr-10">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/about-us">About us</Link>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Treatments</summary>
                                <ul className="p-2 w-48" data-theme="light">
                                    <li>
                                        <Link href="/fresh-breath">
                                            Fresh Breath
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teeth-whitening">
                                            Teeth Whitening
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/invisalign">
                                            Invisalign
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/children">Children</Link>
                                    </li>
                                    <li>
                                        <Link href="/dental-shop">
                                            Dental Shop
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/fees">Fees</Link>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Advice</summary>
                                <ul className="p-2 w-48" data-theme="light">
                                    <li>
                                        <a>Links</a>
                                    </li>
                                    <li>
                                        <a>Privacy Policy</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export { NavigationBar };
