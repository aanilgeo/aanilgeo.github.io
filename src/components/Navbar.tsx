import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiGithub, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 flex justify-between items-center px-8 py-4">
      <Link to="/" className="text-xl font-bold dark:text-white flex items-center space-x-2">
        <span>Andrew Anil George</span>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button onClick={toggleMenu} className="md:hidden text-2xl dark:text-white focus:outline-none">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Items */}
      <ul
        className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static bg-white dark:bg-gray-900 w-full md:w-auto left-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16' : 'top-[-490px]'
        } md:top-0`}
      >
        <li className="text-center transition duration-300">
          <Link
            to="/"
            className="font-medium block px-4 py-2 md:px-0 md:py-0 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li className="text-center transition duration-300">
          <Link
            to="/work-experience"
            className="font-medium block px-4 py-2 md:px-0 md:py-0 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
          >
            Work Experience
          </Link>
        </li>
        <li className="text-center transition duration-300">
          <Link
            to="/projects"
            className="font-medium block px-4 py-2 md:px-0 md:py-0 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
          >
            Projects
          </Link>
        </li>
        <li className="text-center transition duration-300">
          <Link
            to="/contact"
            className="font-medium block px-4 py-2 md:px-0 md:py-0 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
          >
            Contact
          </Link>
        </li>
        
        <div className="flex justify-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/aanilgeo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/aanilgeo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition"
          >
            <FiGithub />
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-gray-700 dark:text-white hover:text-yellow-500 transition"
          >
            {darkMode ? (
              <FiSun className="dark:hover:text-yellow-500 transition" />
            ) : (
              <FiMoon className="hover:text-blue-500 transition" />
            )}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;