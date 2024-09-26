import React from 'react';
import Navbar from './Navbar'; 

const Resume: React.FC = () => {
  const googleDriveLink = 'https://drive.google.com/file/d/1qu1T2aCMzl5EDs7vtD0a2iC623vaqMDk/preview';
  return (
    <>
      <Navbar />
      <div
        id="resume"
        className="flex flex-col items-center justify-center px-8 py-16 text-center bg-light-bg dark:bg-dark-bg transition-all min-h-screen"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Resume</h1>
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex-grow">
          <iframe
            src={googleDriveLink}
            className="w-full h-[80vh] sm:h-[90vh] md:h-[85vh] lg:h-[80vh] rounded-lg"
            title="Andrew_Anil_George_Resume"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
