import { useState } from 'react';
import BoardItem from './BoardItem';
import { ListBoardStyle } from './ListBoards.styled';

const boards = [
  {
    id: 1,
    title: 'project-ofice1',
    icon: 'project',
  },
  {
    id: 2,
    title: 'project-ofice2',
    icon: 'puzzle',
  },
  {
    id: 3,
    title: 'project-ofice3',
    icon: 'icon-bell',
  },
  {
    id: 4,
    title: 'project-ofice4',
    icon: 'colors',
  },
  {
    id: 5,
    title: 'project-ofice5',
    icon: 'star',
  },
  {
    id: 6,
    title: 'project-ofice6',
    icon: 'container',
  },
  {
    id: 7,
    title: 'project-ofice4',
    icon: 'colors',
  },
  {
    id: 8,
    title: 'project-ofice5',
    icon: 'star',
  },
  {
    id: 9,
    title: 'project-ofice6',
    icon: 'container',
  },
];

const ListBoards = () => {
  const [boardId, setBoardId] = useState(5);
  return (
    <ListBoardStyle>
      <ul>
        {boards.map(({ title, icon, id }) => (
          <li key={id}>
            <BoardItem
              title={title}
              icon={icon}
              isActive={id + 1 === boardId}
            />
          </li>
        ))}
      </ul>
    </ListBoardStyle>
  );
};

export default ListBoards;
