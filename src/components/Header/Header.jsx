import React, { useState, useContext, useLayoutEffect } from 'react';
import { ThemeContext } from '../../providers/themeProvider';
import { Container, List, ListItem, P } from './Header.styled';
import Select from 'react-select';
import defaultAvatar from './user_Ligt.png';
// import { useSelector } from "react-redux";

const options = [
  { value: 'light', label: 'Ligh' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];
const Header = () => {
  // const name = useSelector(authSelectors.getUsername);
  const [theme, setTheme] = useContext(ThemeContext);
  const avatar = defaultAvatar;

  return (
    <Container>
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
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </List>
        <List>
          <P>name</P>
          <img src={avatar} alt="" width="32" />
        </List>
      </ListItem>
    </Container>
  );
};

export default Header;
