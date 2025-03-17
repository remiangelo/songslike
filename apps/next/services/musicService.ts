import SpotifyWebApi from 'spotify-web-api-js';

// Mock data for similar songs
const mockSimilarSongs = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
    source: 'spotify' as const,
    url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
  },
  {
    id: '2',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
    source: 'spotify' as const,
    url: 'https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g',
  },
  {
    id: '3',
    title: 'Take My Breath',
    artist: 'The Weeknd',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273c088ea06091af5e899a28b3d',
    source: 'spotify' as const,
    url: 'https://open.spotify.com/track/6OGogr19zPTM4BALXuMQpF',
  },
  {
    id: '4',
    title: 'Starboy',
    artist: 'The Weeknd, Daft Punk',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a',
    source: 'tiktok' as const,
    url: 'https://www.tiktok.com/music/Starboy-6704854531572387841',
  },
  {
    id: '5',
    title: 'Die For You',
    artist: 'The Weeknd',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a',
    source: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=uPD0QOGTmMI',
  },
  {
    id: '6',
    title: 'After Hours',
    artist: 'The Weeknd',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
    source: 'tiktok' as const,
    url: 'https://www.tiktok.com/music/After-Hours-6803359131988395010',
  },
];

// Mock data for original song
const mockOriginalSong = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  albumArt: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
};

// Initialize Spotify API client
const spotifyApi = new SpotifyWebApi();

// In a real app, you would set the access token after user authentication
// spotifyApi.setAccessToken('your-access-token');

export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  source: 'tiktok' | 'spotify' | 'youtube';
  url: string;
}

export interface OriginalSong {
  title: string;
  artist: string;
  albumArt: string;
}

export const searchSong = async (query: string, platform: string): Promise<OriginalSong | null> => {
  try {
    // In a real app, this would make an actual API call to Spotify or Apple Music
    // For now, we'll just return mock data after a delay to simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockOriginalSong;
  } catch (error) {
    console.error('Error searching for song:', error);
    return null;
  }
};

export const findSimilarSongs = async (songId: string, platform: string): Promise<Song[]> => {
  try {
    // In a real app, this would make an actual API call to find similar songs
    // For now, we'll just return mock data after a delay to simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return mockSimilarSongs;
  } catch (error) {
    console.error('Error finding similar songs:', error);
    return [];
  }
}; 