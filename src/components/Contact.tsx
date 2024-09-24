import React from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center px-8 py-16 text-center bg-light-bg dark:bg-dark-bg transition-all"
    >
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        If you'd like to get in touch, feel free to reach out through any of the following methods:
      </p>
      <div className="flex justify-center space-x-5 mt-6">
        <a
          href="mailto:andrewpularickal@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        >
          <FiMail className="text-3xl hover:text-blue-500 dark:hover:text-gray-200 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/aanilgeo"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        >
          <FiLinkedin className="text-3xl hover:text-blue-500 dark:hover:text-gray-200 transition" />
        </a>
      </div>
    </div>
  );
};

export default Contact;