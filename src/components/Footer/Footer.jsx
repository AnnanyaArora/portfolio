import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Annanya Arora. All rights reserved.
        </p>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/AnnanyaArora"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/annanya-arora-1066a7269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:annanyaarora0711@gmail.com"
            className="hover:text-red-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
