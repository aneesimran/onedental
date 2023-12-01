import React from "react";

const NavigationBar = () => {
    return (
        <>
            <div className="navbar bg-theme-light text-theme-dark-blue sticky top-0">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-60"
                        >
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Treatments</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Fresh Breath Service</a>
                                    </li>
                                    <li>
                                        <a>Teeth Whitening</a>
                                    </li>
                                    <li>
                                        <a>Invisalign</a>
                                    </li>
                                    <li>
                                        <a>Children</a>
                                    </li>
                                    <li>
                                        <a>Dental Shop</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Fees</a>
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
                        <p>
                            <span className="text-blue-500">one</span>
                            <span>dental</span>
                        </p>
                    </a>
                </div>
                <div className="navbar-end hidden xl:flex pr-10">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>About us</a>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Treatments</summary>
                                <ul className="p-2 w-48">
                                    <li>
                                        <a>Fresh Breath Service</a>
                                    </li>
                                    <li>
                                        <a>Teeth Whitening</a>
                                    </li>
                                    <li>
                                        <a>Invisalign</a>
                                    </li>
                                    <li>
                                        <a>Children</a>
                                    </li>
                                    <li>
                                        <a>Dental Shop</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Fees</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Advice</summary>
                                <ul className="p-2 w-48">
                                    <li>
                                        <a>Fees</a>
                                    </li>
                                    <li>
                                        <a>Testimonials</a>
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
