import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
const HomePage = () => {
  return (
    <div style={{ display: 'flex', width: "100vw", height: "100vh"}}>
      <Sidebar />
      <div style={{flexGrow:1,display:'flex',flexDirection:"column"}}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
