import React from 'react';
import NavBar from '@/components/NavBar';
import '@/assets/styles/global.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="it">
      <body>
        <NavBar />
        <main>{children}</main>;
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
