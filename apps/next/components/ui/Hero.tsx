import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSearch = () => {
    const searchElement = document.getElementById('search-section');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="block">Discover Music That</span>
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Matches Your Vibe
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Find similar songs using AI and social media trends. Enter a song you love, and we'll find tracks with similar vibes from Spotify, TikTok, and more.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.button
          onClick={scrollToSearch}
          className="btn-primary flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Started</span>
          <FaArrowDown className="text-sm" />
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="mt-16 relative w-full max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 rounded-xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Music Visualization" 
          className="w-full h-64 md:h-80 object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </motion.div>
            </div>
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: '0%' }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, delay: 1.2 }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 