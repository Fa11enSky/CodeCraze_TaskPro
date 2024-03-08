import React from 'react';
import { Outlet } from 'react-router';
import css from './styles.module.css';
import Header from 'components/Header/Header';
// import ColumnListVoid from 'components/ColumnListVoid/ColumnListVoid'
const ScreensPageLayout = ({ windowSize, burgerClick }) => {
  // тут перевірка чи  є дошки
  return (
    <div className={css.screens_page_layout}>
      <Header size={windowSize} showSidebar={burgerClick} />
      {/* <ColumnListVoid /> */}
      <Outlet />
    </div>
  );
};

export default ScreensPageLayout;
