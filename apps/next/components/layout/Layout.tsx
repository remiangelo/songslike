import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen gradient-bg">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 