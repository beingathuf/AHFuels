import React, { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <nav
        className={`${
          isScrolled
            ? "bg-slate-900/95 py-3 shadow-lg backdrop-blur-sm"
            : "bg-slate-900 py-5"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="AH AUTO KING Logo"
                className="h-11 w-auto mr-2 group-hover:scale-110 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/products"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 mt-2">
            <div className="flex flex-col space-y-4 py-4 px-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/products"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-white hover:text-red-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
