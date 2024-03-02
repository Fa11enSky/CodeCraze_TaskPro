// import { useDispatch } from 'react-redux';
// Імпортуються змінні з react-redux

// import { logout } from "..........redux/auth/operations"
// Імпортуються змінні з "..........redux/auth/operations"
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import styled from './LogOut.module.css';

const LogOut = () => {
  // const dispatch = useDispatch();
  return (
    <div className={styled.logOutContainer}>
      <button
        className={styled.logoutButton}
        type="submit"
        aria-label="Help"
        // onClick={() => dispatch(logout())}
      >
        <svg className={styled.iconLogOut}>
          <use xlinkHref={`${iconsSprite}#icon-login`} />
        </svg>
      </button>
      <p className={styled.logOutText}>Log out</p>
    </div>
  );
};
export default LogOut;
