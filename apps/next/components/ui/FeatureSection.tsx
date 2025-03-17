import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaTiktok, FaSpotify, FaYoutube } from 'react-icons/fa';

const features = [
  {
    icon: <FaMusic className="text-blue-500 text-3xl" />,
    title: 'AI-Powered Recommendations',
    description: 'Our advanced AI analyzes music patterns to find songs with similar vibes, beats, and energy.',
  },
  {
    icon: <FaTiktok className="text-pink-500 text-3xl" />,
    title: 'TikTok Trends',
    description: 'Discover trending songs from TikTok that match your music taste.',
  },
  {
    icon: <FaSpotify className="text-green-500 text-3xl" />,
    title: 'Spotify Integration',
    description: 'Seamlessly search and find songs from Spotify\'s vast library.',
  },
  {
    icon: <FaYoutube className="text-red-500 text-3xl" />,
    title: 'YouTube Discovery',
    description: 'Find hidden gems and similar tracks from YouTube\'s extensive collection.',
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p 
          className="text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          SongsLike uses AI and social media trends to find music that matches your taste
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="glass-card text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-white/70 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection; 