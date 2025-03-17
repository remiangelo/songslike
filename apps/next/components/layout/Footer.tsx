import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-auto py-6 bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SongsLike. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 