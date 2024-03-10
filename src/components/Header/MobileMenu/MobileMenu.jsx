import React from 'react';
import PropTypes from 'prop-types';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { MobileHeader, IconClose, Text } from './MobileMenu.styled';
import { MobileAuthNav } from 'components/Header/AuthNav/AuthNav';
import { MobileUserNav } from 'components/Header/UserNav/UserNav';
import { MobileNav } from 'components/Header/Nav/Nav';
import { MobileNavigation } from '../Navigation/Navigation';

export const MobileMenu = ({ toggleMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <MobileHeader>
        <IconClose onClick={toggleMenu} />
        <Text to="/" onClick={toggleMenu}>
          Quillis
        </Text>
      </MobileHeader>

      {isLoggedIn ? (
        <MobileUserNav toggleMenu={toggleMenu} />
      ) : (
        <MobileAuthNav toggleMenu={toggleMenu} />
      )}
      <MobileNavigation toggleMobileMenu={toggleMenu} />
      <MobileNav toggleMenu={toggleMenu} />
    </>
  );
};

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
