import React from 'react';
import { getCompanyLogo } from '../utils/getCompanyLogo';

const WorkExperience: React.FC = () => {
  return (
    <div
      id="work-experience"
      className="flex flex-col items-center justify-center px-4 py-12 pb-20 bg-light-bg dark:bg-dark-bg text-center transition-all min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Work Experience</h1>
      <div className="grid gap-6 max-w-2xl w-full mb-10">
        {/* Experience 1: Software Engineer Co-op at Honeywell */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg flex items-center space-x-4 justify-start transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src={getCompanyLogo('honeywell.com')}
            alt="Honeywell Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Software Engineer Co-op
            </h2>
            <h3 className="text-gray-700 dark:text-gray-300">Honeywell</h3>
            <h4 className="text-gray-500 dark:text-gray-400">Mason, OH</h4>
            <p className="text-gray-500 dark:text-gray-400">January 2025 - Present</p>
          </div>
        </div>

        {/* Experience 2: Software Engineer Intern at Jacobs */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg flex items-center space-x-4 justify-start transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src={getCompanyLogo('jacobs.com')}
            alt="Jacobs Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Software Engineer Intern
            </h2>
            <h3 className="text-gray-700 dark:text-gray-300">Jacobs</h3>
            <h4 className="text-gray-500 dark:text-gray-400">Kennedy Space Center, FL</h4>
            <p className="text-gray-500 dark:text-gray-400">June 2024 - August 2024</p>
          </div>
        </div>

        {/* Experience 3: Generative AI Extern at Cognizant */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg flex items-center space-x-4 justify-start transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src={getCompanyLogo('cognizant.com')}
            alt="Cognizant Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Generative AI Extern
            </h2>
            <h3 className="text-gray-700 dark:text-gray-300">Cognizant</h3>
            <h4 className="text-gray-500 dark:text-gray-400">Remote</h4>
            <p className="text-gray-500 dark:text-gray-400">June 2024 - July 2024</p>
          </div>
        </div>

        {/* Experience 4: Student Technician at NJIT */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg flex items-center space-x-4 justify-start transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src={getCompanyLogo('njit.edu')}
            alt="NJIT Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Student Technician - Unified Communications & Networking
            </h2>
            <h3 className="text-gray-700 dark:text-gray-300">New Jersey Institute of Technology</h3>
            <h4 className="text-gray-500 dark:text-gray-400">Newark, NJ</h4>
            <p className="text-gray-500 dark:text-gray-400">September 2022 - January 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;