import React from 'react';
import { StyledHeader } from './StyledHeader';
import { BsSunFill, BsMoon } from 'react-icons/bs';

const Header = ({ theme, changeTheme }) => {
  return (
    <StyledHeader>
      <h1 className='header__title'>TODO</h1>
      <figure className='header__themeSwitch'>
        <BsSunFill
          className={`header__switchIcon ${
            theme === 'default' ? 'header__switchIcon--active' : ''
          }`}
          onClick={changeTheme}
        />
        <BsMoon
          className={`header__switchIcon ${
            theme !== 'default' ? 'header__switchIcon--active' : ''
          }`}
          onClick={changeTheme}
        />
      </figure>
    </StyledHeader>
  );
};

export { Header };
