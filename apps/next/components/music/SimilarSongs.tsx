import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa';

interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  source: 'tiktok' | 'spotify' | 'youtube';
  url: string;
}

interface SimilarSongsProps {
  originalSong?: {
    title: string;
    artist: string;
    albumArt: string;
  };
  similarSongs: Song[];
  isLoading: boolean;
}

const SimilarSongs = ({ originalSong, similarSongs, isLoading }: SimilarSongsProps) => {
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="glass-card p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white/80">Finding similar songs...</p>
        </div>
      </div>
    );
  }

  if (!originalSong && similarSongs.length === 0) {
    return null;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'tiktok':
        return <FaTiktok className="text-pink-500" />;
      case 'spotify':
        return <FaSpotify className="text-green-500" />;
      case 'youtube':
        return <FaYoutube className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-12 w-full">
      {originalSong && (
        <motion.div 
          className="glass-card mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white/90">Original Song</h3>
          <div className="flex items-center space-x-4">
            <img 
              src={originalSong.albumArt} 
              alt={`${originalSong.title} by ${originalSong.artist}`} 
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h4 className="font-medium text-white">{originalSong.title}</h4>
              <p className="text-sm text-white/70">{originalSong.artist}</p>
            </div>
          </div>
        </motion.div>
      )}

      <h3 className="text-xl font-semibold mb-6 text-white/90">Similar Songs</h3>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {similarSongs.map((song) => (
          <motion.div 
            key={song.id} 
            className="glass-card hover:bg-white/5 transition-colors"
            variants={item}
          >
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <img 
                  src={song.albumArt} 
                  alt={`${song.title} by ${song.artist}`} 
                  className="w-16 h-16 rounded-md object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={song.url} target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaPlay />
                  </a>
                </motion.div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white truncate">{song.title}</h4>
                  <div className="ml-2 flex-shrink-0">
                    {getSourceIcon(song.source)}
                  </div>
                </div>
                <p className="text-sm text-white/70 truncate">{song.artist}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SimilarSongs; 