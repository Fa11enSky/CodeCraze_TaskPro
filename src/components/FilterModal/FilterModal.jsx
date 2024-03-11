import React, { useState } from 'react';
import css from './styles.module.css';
import svg from '../../assets/svgSprite/iconsSprite.svg';
const FilterModal = ({ onClose }) => {
  const [, setValue] = useState(1);
  const handleChange = ev => {
    setValue(ev.target.value);
  };
  return (
    <div className={css.filter}>
      <button onClick={onClose} className={css.close}>
        <svg className={css.close_svg} width={18} height={18}>
          <use xlinkHref={`${svg}#close`} />
        </svg>
      </button>
      <p className={css.title}>Filters</p>
      <hr className={css.hr} />
      <div className={css.title_wrapper}>
        <p className={css.label_title}>Label color</p>
        <button className={css.show_all_btn}>Show all</button>
      </div>
      <label className={css.label}>
        <input
          onChange={handleChange}
          className={css.input}
          type="radio"
          name="radio"
          value={1}
        />
        <div className={css.grey}>
          <span></span>
        </div>
        <span className={css.radioDescription}>Without priority</span>
      </label>
      <label className={css.label}>
        <input
          onChange={handleChange}
          className={css.input}
          type="radio"
          name="radio"
          value={2}
        />
        <div className={css.blue}>
          <span></span>
        </div>
        <span className={css.radioDescription}>Low</span>
      </label>
      <label className={css.label}>
        <input
          onChange={handleChange}
          className={css.input}
          type="radio"
          name="radio"
          value={3}
        />
        <div className={css.red}>
          <span></span>
        </div>
        <span className={css.radioDescription}>Medium</span>
      </label>
      <label className={css.label}>
        <input
          onChange={handleChange}
          className={css.input}
          type="radio"
          name="radio"
          value={4}
        />
        <div className={css.green}>
          <span></span>
        </div>
        <span className={css.radioDescription}>High</span>
      </label>
    </div>
  );
};
export default FilterModal;
