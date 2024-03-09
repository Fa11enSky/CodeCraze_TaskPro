import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import css from './styles.module.css';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectAllBoards } from '../../redux/boards/selectors';
import ColumnListVoid from 'components/ColumnListVoid/ColumnListVoid'
import { useNavigate } from 'react-router-dom';
const ScreensPageLayout = ({ windowSize, burgerClick }) => {
  // тут перевірка чи  є дошки
  const isBoards = useSelector(selectAllBoards)
  const activeBoard = useSelector(state => state.auth.user.activeBoard)
  const navigate = useNavigate()
  useEffect(() => {
    if (activeBoard) {
      navigate(activeBoard);
    }
  },[activeBoard, navigate])

  return (
    <div className={css.screens_page_layout}>
      <Header size={windowSize} showSidebar={burgerClick} />

      {isBoards.length===0?<ColumnListVoid />:<Outlet />}
      {/* <ColumnListVoid/> */}
    </div>
  );
};

export default ScreensPageLayout;
