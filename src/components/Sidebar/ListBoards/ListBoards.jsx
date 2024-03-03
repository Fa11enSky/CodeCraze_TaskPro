import styled from './ListBoards.module.css';

const ListBoards = ({ boards }) => {
  if (!boards || boards.length === 0) {
    return <div className={styled.listBoard}></div>;
  }
  return (
    <div>
      {/* {boards.map((title, id) => (<div key={id}>{title}</div>))} */}
    </div>
  );
};
export default ListBoards;
