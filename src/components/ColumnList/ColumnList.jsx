import ColumnItem from '../ColumnItem/ColumnItem';
import css from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSingleBoard } from '../../redux/boards/operationsBoards';
import { selectedBoard } from '../../redux/boards/selectors';
const ColumnsList = () => {
  const board = useSelector(selectedBoard);
  const params = useParams();
  const dispatch = useDispatch();
  const { title, columns, background } = board;
  const bgNumber = background || '1';

  useEffect(() => {
    dispatch(fetchSingleBoard(params.boardId));
  }, [dispatch, params.boardId]);

  const isRetina = () => {
    if (window.devicePixelRatio > 1) {
      return '@2x';
    } else {
      return '';
    }
  };

  const setDevice = () => {
    if (window.innerWidth <= 375) {
      return 'moblie';
    }
    if (window.innerWidth <= 768) {
      return 'tablet';
    }
    return 'desktop';
  };

  const device = setDevice();
  const ratio = isRetina();
  const bgurl = require(`../../assets/backgrounds/allBg/${device}_background_${
    bgNumber + ratio
  }.jpg`);

  return (
    <div
      className={css.task_list_container}
      style={{ backgroundImage: `url(${bgurl})` }}
    >
      <h4 className={css.board_title}>{title}</h4>
      {board.columns && board.columns[0]._id ? (
        <>
          <ul className={css.column_list}>
            {columns.map(el => {
              return <ColumnItem key={el._id} column={el} />;
            })}
            <li><button style={{width:335,height:56}}>add column</button></li>
          </ul>
          
        </>
      ) : (
        <button>addColumn</button>
      )}
    </div>
  );
};

export default ColumnsList;
