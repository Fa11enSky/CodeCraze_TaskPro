import React from 'react';
import css from './styles.module.css';
import svg from '../../assets/svgSprite/iconsSprite.svg';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/boards/filterSlice';
const FilterModal = ({ onClose }) => {

  const dispatch = useDispatch()

  const handleChange = ev => {
    dispatch(setFilter(ev.target.value))

  };

  const resetFilter = () => {
    dispatch(setFilter("all"))
  }

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
        <button onClick={resetFilter} className={css.show_all_btn}>Show all</button>
      </div>
      <label className={css.label}>
        <input
          onChange={handleChange}
          className={css.input}
          type="radio"
          name="label"
          value="without"
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
          name="label"
          value="low"
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
          name="label"
          value="medium"
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
          name="label"
          value="high"
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
