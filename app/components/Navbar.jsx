import React, { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-xl font-bold text-blue-600">
                            InnerHarbor
                        </a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/About" className="text-gray-700 hover:text-blue-600 transition">
                            About
                        </a>
                        <a href="/Services" className="text-gray-700 hover:text-blue-600 transition">
                            Services
                        </a>
                        <a href="/Contact" className="text-gray-700 hover:text-blue-600 transition">
                            Contact
                        </a>
                        <a
                            to="/signup"
                            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Book A Stay
                        </a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="/About"
                            className="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="/Services"
                            className="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="/Contact"
                            className="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>
                        <a
                            to="/signup"
                            className="block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={() => setOpen(false)}
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;