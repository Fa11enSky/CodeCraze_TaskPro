import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import ScreensPage from './ScreensPage';
const HomePage = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <ScreensPage />
      </div>
    </div>
  );
};

export default HomePage;
