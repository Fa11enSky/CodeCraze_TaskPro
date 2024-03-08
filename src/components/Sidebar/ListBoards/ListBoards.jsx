import { useState } from 'react';
import BoardItem from './BoardItem';
import { ListBoardStyle } from './ListBoards.styled';

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

const ListBoards = () => {
  const [boardId] = useState(5);
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
