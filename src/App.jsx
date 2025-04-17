import React from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import FreeZoneBanner from './components/FreeZoneBanner';
import FlagGrid from './components/FlagGrid';
import ZoomControl from './components/ZoomControl';
import backgroundImage from './assets/images/background.png';
import './index.css';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-cairo">
      <div 
        className="fixed inset-0 -z-10 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative z-10">
        <Header />
        <LanguageSelector />
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <FreeZoneBanner />
          <FlagGrid />
        </div>
        <ZoomControl />
      </div>
    </div>
  );
};

export default App;