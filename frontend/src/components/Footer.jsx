import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-800 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Brand + Description + Socials */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-2xl font-bold text-green-700">CodeMind</h2>
          <p className="text-gray-600">
            AI-powered platform helping developers write clean, efficient, and maintainable code with detailed reviews and practical suggestions.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/"
              className="text-gray-600 hover:text-green-700 transition transform hover:-translate-y-1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://linkedin.com/"
              className="text-gray-600 hover:text-green-700 transition transform hover:-translate-y-1"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://twitter.com/"
              className="text-gray-600 hover:text-green-700 transition transform hover:-translate-y-1"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={26} />
            </a>
          </div>
        </div>

        {/* Right: Quick Links */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/review" className="hover:text-green-600 transition">Reviewer</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
        </div>
      </div>

      {/* Bottom Rights */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm space-y-1">
        <p>&copy; {new Date().getFullYear()} CodeMind. All rights reserved.</p>
        <p>
          Made with <span className="text-green-600 font-semibold">passion</span> for developers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
