"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Register from "@/app/register/page";
import Login from "@/app/login/page";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

const Navbar: React.FC = () => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const openRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Set user as logged out
    };

    return (
        <nav id="nav-bar" className="bg-transparent">
            <div className="container fixed-top mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="font-bold text-gray-800 text-3xl">
                    <Link href="/">Get<span style={{ color: "#F95919" }}>Unity</span>Codes</Link>
                </div>

                {/* Desktop Links */}
                <div id="nav-link" className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-800 hover:text-blue-500">
                        Home
                    </Link>
                    <Link href="/pages/games/mobilegames" className="text-gray-800 hover:text-blue-500">
                        Mobile Games
                    </Link>
                    <Link href="/pages/games/pcgames" className="text-gray-800 hover:text-blue-500">
                        Pc Games
                    </Link>
                    <Link href="/pages/article" className="text-gray-800 hover:text-blue-500">
                        Article
                    </Link>
                    <span><MdOutlineFavoriteBorder /></span>
                    <span> <BsCart3 /></span>
                    {/* Conditionally render Login or Logout */}
                    {isLoggedIn ? (
                        <Button onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Button onClick={() => setIsLoginOpen(true)}>Get Started</Button>
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
                    <div className="px-4 py-2 flex flex-col space-y-2">
                        <Link
                            href="/"
                            className="text-gray-800 hover:text-blue-500"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            Home
                        </Link>
                        <Link
                            href="/pages/about"
                            className="text-gray-800 hover:text-blue-500"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            About
                        </Link>
                        <Link
                            href="/pages/article"
                            className="text-gray-800 hover:text-blue-500"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            Article
                        </Link>
                        {/* Login Button */}
                        {!isLoggedIn && (
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false); // Close menu
                                    setIsLoginOpen(true); // Open Login modal
                                }}
                                className="text-gray-800 hover:text-blue-500 text-left"
                            >
                                Login
                            </button>
                        )}
                        {isLoggedIn && (
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false); // Close menu
                                    handleLogout();
                                }}
                                className="text-gray-800 hover:text-blue-500 text-left"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Modals */}
            {isLoginOpen && (
                <Login
                    open={isLoginOpen}
                    onOpenChange={setIsLoginOpen}
                    onRegisterClick={openRegister}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
            {isRegisterOpen && (
                <Register open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
            )}
        </nav>
    );
};

export default Navbar;
