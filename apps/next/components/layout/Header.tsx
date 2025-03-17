import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md bg-black/30 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <FaMusic className="text-blue-500 text-2xl" />
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            SongsLike
          </Link>
        </motion.div>
        
        <div className="flex items-center space-x-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <button className="btn-primary flex items-center space-x-2">
              <FaSearch className="text-sm" />
              <span>Find Similar</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 