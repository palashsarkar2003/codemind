import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive
        ? "bg-green-50 text-green-700 font-semibold"
        : "text-gray-700 hover:text-green-700 hover:bg-gray-100"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 ${
      isActive
        ? "bg-green-50 text-green-700 font-semibold"
        : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={closeMenu}
              aria-label="Homepage"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-green-600 text-white">
                <FaCode className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Code<span className="text-green-600">Mind</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <Link
                to="/review"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-green-600 text-white font-semibold shadow-sm hover:bg-green-700 transition"
                tabIndex={0}
                aria-label="Reviewer"
              >
                Code Reviewer <FiArrowRight />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              aria-label="Close menu"
            >
              <HiX size={24} className="text-gray-700" />
            </button>
          </div>
          <div className="flex-grow px-4 py-6 flex flex-col gap-4">
            <NavLink to="/" className={mobileNavLinkClass} end onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <Link
              to="/review"
              onClick={closeMenu}
              className="mt-auto px-5 py-3 rounded-md bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition"
              tabIndex={0}
              aria-label="Start Reviewing"
            >
              Start Reviewing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
