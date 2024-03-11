import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import HomePageWrapper from 'components/HomePageWrapper/HomePageWrapper';
import ScreensPageLayout from 'components/ScreensPageLayout/ScreensPageLayout';
import BackDropToSidebar from 'components/BackDropToSidebar/BackDropToSidebar';
import ColumnsList from 'components/ColumnList/ColumnList';
import { fetchAllBoard } from '../redux/boards/operationsBoards';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  
  const sidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    dispatch(fetchAllBoard());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    if (size > 1440) {
      setIsSidebarOpen(false);
    }
    window.addEventListener('resize', handleResize);

    // Підписка на подію зміни розміру вікна
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return (
    <HomePageWrapper>
      {isSidebarOpen && (
        <BackDropToSidebar close={sidebarToggle}>
          <Sidebar />
        </BackDropToSidebar>
      )}
      {size >= 1440 && <Sidebar />}
      {/* <Link to="65ec5049fbc1f59b3d95acb2">dfdasfdadfa</Link> */}
      <ScreensPageLayout windowSize={size} burgerClick={sidebarToggle}>
        <ColumnsList />
      </ScreensPageLayout>
    </HomePageWrapper>
  );
};

export default HomePage;

// import React from 'react';
// import Sidebar from '../components/Sidebar/Sidebar';
// import Header from '../components/Header/Header';
// import ScreensPage from './ScreensPage';
// const HomePage = () => {
//   return (
//     <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
//       <Sidebar />
//       <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//         <Header />
//         <ScreensPage />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
