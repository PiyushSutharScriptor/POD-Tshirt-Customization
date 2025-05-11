import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-15 sm:mt-15 mx-auto text-gray-700 font-semibold flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
      <span>Made with ❤️ by Piyush Suthar</span>
      <div className="flex items-center gap-2 text-2xl">
        <a
          href="https://www.linkedin.com/in/piyush-suthar-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077b5] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/PiyushSutharScriptor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077b5] transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
