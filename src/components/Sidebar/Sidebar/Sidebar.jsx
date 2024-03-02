import LogoComponent from '../LogoComponent/LogoComponent';
import CreateNewBoard from '../CreateBoardButton/CreateBoardButton';
import CreateHelpButton from '../HelpButton/HelpButton';
import LogOut from '../LogOut/LogOut';
import ListBoards from '../ListBoards/ListBoards';

import styled from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <section className={styled.sidebar}>
      <LogoComponent />
      <CreateNewBoard />
      <ListBoards />
      <CreateHelpButton />
      <LogOut />
    </section>
  );
};

export default Sidebar;
