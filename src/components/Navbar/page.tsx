"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Register from "@/app/register/page";
import Login from "@/app/login/page";

const Navbar: React.FC = () => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Track login state

    const openRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Set user as logged in
        setIsLoginOpen(false); // Close login modal
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Set user as logged out
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">MyWebsite</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-800 hover:text-blue-500">
                        Home
                    </Link>
                    <Link href="/pages/about" className="text-gray-800 hover:text-blue-500">
                        About
                    </Link>
                    <Link href="/pages/article" className="text-gray-800 hover:text-blue-500">
                        Article
                    </Link>
                    {/* Conditionally render Profile or Login */}
                    {isLoggedIn ? (
                        <Button onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Button onClick={() => setIsLoginOpen(true)}>Login</Button>
                    )}
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-blue-500 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-4 py-2">
                        <Link
                            href="/"
                            className="block text-gray-800 hover:text-blue-500 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/pages/about"
                            className="block text-gray-800 hover:text-blue-500 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/pages/article"
                            className="block text-gray-800 hover:text-blue-500 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Article
                        </Link>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false); // Close menu
                                setIsLoginOpen(true); // Open Login modal
                            }}
                            className="w-full text-left text-gray-800 hover:text-blue-500 py-2"
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}

            {isLoginOpen && (
                <Login
                    open={isLoginOpen}
                    onOpenChange={setIsLoginOpen}
                    onRegisterClick={openRegister}
                    onLoginSuccess={handleLoginSuccess} // Handle login success
                />
            )}

            {isRegisterOpen && (
                <Register open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
            )}
        </nav>
    );
};

export default Navbar;
