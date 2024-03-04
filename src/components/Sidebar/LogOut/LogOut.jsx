// import { useDispatch } from 'react-redux';
// Імпортуються змінні з react-redux

// import { logout } from "..........redux/auth/operations"
// Імпортуються змінні з "..........redux/auth/operations"
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import {
  LogOutContainer,
  LogoutButton,
  IconLogOut,
  LogOutText,
} from './LogOut.styled';

const LogOut = () => {
  // const dispatch = useDispatch();
  return (
    <LogOutContainer>
      <LogoutButton
        type="submit"
        aria-label="Help"
        // onClick={() => dispatch(logout())}
      >
        <IconLogOut>
          <use xlinkHref={`${iconsSprite}#icon-login`} />
        </IconLogOut>
      </LogoutButton>
      <LogOutText>Log out</LogOutText>
    </LogOutContainer>
  );
};
export default LogOut;
