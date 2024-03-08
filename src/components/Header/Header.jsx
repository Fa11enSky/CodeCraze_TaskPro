import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../providers/themeProvider';
import {
  Container,
  List,
  ListItem,
  NameUser,
  Button,
  Svg,
  BtnBurger,
  Burger,
  Wrapper,
} from './Header.styled';
import Select from 'react-select';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import EditProfile from '../EditProfile/EditProfile';
import { selectUser } from '../../redux/auth/selectors.js';
import Modal from 'components/Modal/Modal';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

const Header = ({ showSidebar, size }) => {
  const [, setTheme] = useContext(ThemeContext);

  // console.log(theme);
  // useEffect(() => {
  //   window.localStorage.setItem('theme', JSON.stringify(theme.value));
  // }, [theme]);

  // const currentTheme = JSON.parse(window.localStorage.getItem('theme'));
  // console.log(currentTheme);

  // setTheme(currentTheme);

  // const [theme, setTheme] = useState(
  //   return JSON.parse(window.localStorage.getItem('theme')) ?? 'Light'
  // );

  const [isShowModal, setIsShowModal] = useState(false);

  const handleClik = () => {
    setIsShowModal(true);
  };

  const user = useSelector(selectUser);

  return (
    <Container>
      <Wrapper>
        {size < 1440 && (
          <BtnBurger type="button" onClick={showSidebar}>
            <Burger width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-menu`} />
            </Burger>
          </BtnBurger>
        )}

        <ListItem>
          <List>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }),

                indicatorSeparator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: 'none',
                }),
                menuList: (baseStyles, state) => ({
                  ...baseStyles,
                  color: 'var(--main_text_color)',
                }),
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  color: 'var(--main_text_color)',
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: 'var(--main_text_color)',
                }),
                dropdownIndicator: (baseStyles, state) => ({
                  ...baseStyles,
                  color: 'var(--main_text_color)',
                }),
                menu: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: 'var(--background_header)',
                }),

                option: (baseStyles, state) => ({
                  ...baseStyles,
                  '&:active': {
                    color: 'var(--accent)',
                  },
                  '&:hover': {
                    color: 'var(--accent)',
                  },
                }),
              }}
              onChange={setTheme}
              options={options}
              placeholder="Theme"
            />
          </List>
          <List>
            {user && <NameUser>{user.name ?? 'Name'}</NameUser>}

            <Button type="button" onClick={handleClik}>
              <Svg width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-user_default`} />
              </Svg>
            </Button>

            {/* {user ? (
              <Button type="button" onClick={handleClik}>
                <Svg width={32} height={32}>
                  <use xlinkHref={`${sprite}#icon-user_default`} />
                </Svg>
              </Button>
            ) : (
              <img src={user.avatarURL} alt="img" />
            )} */}

            {isShowModal && (
              <Modal width={400} onClose={() => setIsShowModal(false)}>
                <EditProfile />
              </Modal>
            )}
          </List>
        </ListItem>
      </Wrapper>
    </Container>
  );
};

export default Header;
