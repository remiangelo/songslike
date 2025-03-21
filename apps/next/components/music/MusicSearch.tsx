import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSpotify, FaApple } from 'react-icons/fa';

const MusicSearch = ({ onSearch }: { onSearch: (query: string, platform: string) => void }) => {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState('spotify');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, platform);
    }
  };

  return (
    <motion.div 
      className="glass-card w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Find Similar Songs
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a song name or paste a link..."
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 rounded-full text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaSearch />
          </motion.button>
        </div>
        
        <div className="flex justify-center space-x-4">
          <motion.button
            type="button"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              platform === 'spotify' ? 'bg-green-600' : 'bg-black/30 border border-white/10'
            }`}
            onClick={() => setPlatform('spotify')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSpotify />
            <span>Spotify</span>
          </motion.button>
          
          <motion.button
            type="button"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              platform === 'apple' ? 'bg-pink-600' : 'bg-black/30 border border-white/10'
            }`}
            onClick={() => setPlatform('apple')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaApple />
            <span>Apple Music</span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default MusicSearch;
