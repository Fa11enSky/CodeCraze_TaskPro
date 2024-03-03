import React, { useState } from 'react';
import { Container, List, ListItem, P } from './Header.styled';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import defaultAvatar from './user_Ligt.png';
// import { useSelector } from "react-redux";

const options = [
  { value: 'light', label: 'Ligh' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

const animatedComponents = makeAnimated();

const Header = () => {
  // const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  const [currentTheme, setcurrentTheme] = useState('Theme');

  const getValue = e => {
    return currentTheme ? options.find(e => e.value === currentTheme) : 'Theme';
  };

  const onCheng = newValue => {
    setcurrentTheme(newValue.value);
  };

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
                appearance: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }),
            }}
            onChenge={onCheng}
            value={getValue()}
            options={options}
            placeholder="Theme"
            components={{
              IndicatorSeparator: () => null,
              animatedComponents,
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
