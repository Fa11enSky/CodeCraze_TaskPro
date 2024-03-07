import React from 'react';
import css from './styles.module.css';
const ColumnListVoid = () => {
  return (
    <div className={css.void}>
      <div style={{ width: 64, height: 20 }}>btn</div>
      <p className={css.void_text}>
        Before starting your project, it is essential{' '}
        <button>to create a board</button> to visualize and track all the
        necessary tasks and milestones. This board serves as a powerful tool to
        organize the workflow and ensure effective collaboration among team
        members.
      </p>
    </div>
  );
};

export default ColumnListVoid;
