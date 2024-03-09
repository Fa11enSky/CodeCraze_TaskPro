import LogoComponent from './LogoComponent/LogoComponent';
import CreateNewBoard from './CreateBoardButton/CreateBoardButton';
import CreateHelpButton from './HelpButton/HelpButton';
import LogOut from './LogOut/LogOut';
import ListBoards from './ListBoards/ListBoards';

import { StyledSidebar, SidebarContainer } from './Sidebar.styled';
// import { useSelector } from 'react-redux';
// import { selectAllBoards } from '../../redux/boards/selectors';

const boards = [
  {
    id: 1,
    title: 'project-1',
    icon: 'project',
  },
  {
    id: 2,
    title: 'project-2',
    icon: 'puzzle',
  },
  {
    id: 3,
    title: 'project-3',
    icon: 'icon-bell',
  },
  {
    id: 4,
    title: 'project-4',
    icon: 'colors',
  },
  {
    id: 5,
    title: 'project-5',
    icon: 'star',
  },
  {
    id: 6,
    title: 'project-6',
    icon: 'container',
  },
];

const Sidebar = () => {
  // const test = useSelector(selectAllBoards);
  // console.log(test);

  return (
    <StyledSidebar>
      <SidebarContainer>
        <LogoComponent />
      </SidebarContainer>
      <SidebarContainer>
        <CreateNewBoard />
      </SidebarContainer>
      <ListBoards boards={boards} />
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
