import React from 'react';
import profileImage from '../assets/profile.jpeg'

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-light-bg dark:bg-dark-bg text-center transition-all px-4"
    >
      <img
        src={profileImage}
        alt="Profile"
        style={{ borderRadius: '50%', width: '150px', marginTop: '20px' }}
      />
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Hey, I'm <span className="text-blue-600 dark:text-blue-400">Andrew!</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Welcome to my portfolio!
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/aanilgeo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        >
          LinkedIn
        </a>
        <a
          href="/resume"
          className="px-6 py-2 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;