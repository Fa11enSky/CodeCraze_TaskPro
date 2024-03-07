import ColumnItem from '../ColumnItem/ColumnItem';
import css from './styles.module.css';
import { board } from './board';
const ColumnsList = ({ boar }) => {
  const { title, columns, background } = board;
 
  return (
    <div
      className={css.task_list_container}
      style={{ backgroundImage: `url("${background}")` }}
    >
      <h4 className={css.board_title}>{title}</h4>

      <ul className={css.column_list}>
        {columns.map(el => {
          return <ColumnItem key={el.id} column={el} />;
        })}
      </ul>
    </div>
  );
};

export default ColumnsList;
