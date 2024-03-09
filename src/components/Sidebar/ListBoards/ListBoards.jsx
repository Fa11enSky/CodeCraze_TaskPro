import { useState } from 'react';
import BoardItem from './BoardItem';
import { ListBoardStyle } from './ListBoards.styled';
// import { useSelector } from 'react-redux';
// import { selectedBoard } from 'redux/boards/selectors';
// import { useDispatch } from 'react-redux';

const ListBoards = ({ boards }) => {
  const [boardId, setBoardId] = useState(1);
  // const dispatch=useDispatch()
  // const test = useSelector(selectedBoard);
  // console.log(test);
  return (
    <ListBoardStyle>
      <ul>
        {boards.map(({ title, icon, id }) => (
          <li
            key={id}
            onClick={() => {
              setBoardId(id);
            }}
          >
            <BoardItem title={title} icon={icon} isActive={id === boardId} />
          </li>
        ))}
      </ul>
    </ListBoardStyle>
  );
};

export default ListBoards;
