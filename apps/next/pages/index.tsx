import React from 'react';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>SongsLike - Find Similar Music</title>
        <meta name="description" content="Discover music similar to your favorite songs using AI and social media trends" />
      </Head>
      
      <div className="flex flex-col min-h-screen gradient-bg">
        <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-2xl">🎵</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                SongsLike
              </span>
            </div>
          </div>
        </header>
        
        <main className="flex-grow pt-24 pb-12 px-4">
          <div className="container mx-auto">
            <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Discover Music That</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Matches Your Vibe
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
                Find similar songs using AI and social media trends. Enter a song you love, and we'll find tracks with similar vibes from Spotify, TikTok, and more.
              </p>
              
              <div>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 font-medium">
                  <span>Get Started</span>
                </button>
              </div>
            </section>
          </div>
        </main>
        
        <footer className="mt-auto py-6 bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} SongsLike. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
