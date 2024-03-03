import LogoComponent from './LogoComponent/LogoComponent';
import CreateNewBoard from './CreateBoardButton/CreateBoardButton';
import CreateHelpButton from './HelpButton/HelpButton';
import LogOut from './LogOut/LogOut';
import ListBoards from './ListBoards/ListBoards';

import { StyledSidebar, SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarContainer>
        <LogoComponent />
      </SidebarContainer>
      <SidebarContainer>
        <CreateNewBoard />
      </SidebarContainer>
      <ListBoards />
      <SidebarContainer>
        <CreateHelpButton />
      </SidebarContainer>
      <SidebarContainer>
        <LogOut />
      </SidebarContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
