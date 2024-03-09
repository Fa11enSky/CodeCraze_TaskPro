import React from 'react';
import TaskCard from 'components/TaskCard/TaskCard';
import css from './styles.module.css';
import iconSprite from 'assets/svgSprite/iconsSprite.svg';
import AddCardBtn from 'components/AddCardBtn/AddCardBtn';

const ColumnItem = ({ column }) => {
  const { title, cards } = column;

  return (
    <li className={css.column_item}>
      <div className={css.column_header_wrapper}>
        <h3 className={css.column_title}>{title}</h3>
        <div className={css.title_icons_wrapper}>
          <svg className={css.icon_el} width={16} height={16}>
            <use xlinkHref={`${iconSprite}#icon-pencil`} />
          </svg>
          <svg className={css.icon_el} width={16} height={16}>
            <use xlinkHref={`${iconSprite}#icon-trash`} />
          </svg>
        </div>
      </div>
      <ul className={css.task_list}>
        {cards.map(el => {
          return (
            <li key={el._id}>
              <TaskCard cardData={el} />
            </li>
          );
        })}
      </ul>
      <AddCardBtn />
    </li>
  );
};

export default ColumnItem;
