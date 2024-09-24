import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 flex justify-center items-center px-8 py-4">
      <p className="flex items-center space-x-1 text-sm text-gray-700 dark:text-white">
        <span>© {new Date().getFullYear()} Andrew Anil George. All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;

