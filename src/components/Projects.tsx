import React from 'react';

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center px-8 py-20 pb-20 bg-light-bg dark:bg-dark-bg text-center transition-all min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">Projects</h1>
      <div className="space-y-8 max-w-2xl w-full mb-10">
        {/* Project 1: Portfolio Website */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Portfolio Website</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <strong>Technologies:</strong> TypeScript, React, Node.js, TailwindCSS
          </p>
          <a
            href="https://aanilgeo.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            View Live
          </a>
        </div>

        {/* Project 2: DataVizApp */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">DataVizApp</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <strong>Technologies:</strong> C++
          </p>
          <a
            href="https://github.com/aanilgeo/DataVizApp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3: Weather App */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Weather App</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <strong>Technologies:</strong> JavaScript, HTML/CSS
          </p>
          <a
            href="https://aanilgeo.github.io/Weather-App/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            View Live
          </a>
        </div>

        {/* Project 4: War Card Game */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">War Card Game</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <strong>Technologies:</strong> Swift, SwiftUI
          </p>
          <a
            href="https://github.com/aanilgeo/War-Card-Game"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 5: Lightweight Fine-Tuning Project */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Lightweight Fine-Tuning Project
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <strong>Technologies:</strong> Python, Generative AI, PyTorch, Hugging Face
          </p>
          <a
            href="https://github.com/aanilgeo/Lightweight-Fine-Tuning-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;