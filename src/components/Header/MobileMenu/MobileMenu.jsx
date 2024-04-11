import React from 'react';
import PropTypes from 'prop-types';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import {
  MobileHeader,
  IconClose,
  Text,
  MobileMenuBox,
} from './MobileMenu.styled';
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
        {/* <Logo onClick={toggleMenu} /> */}
      </MobileHeader>

      <MobileMenuBox>
        {isLoggedIn ? (
          <MobileUserNav toggleMenu={toggleMenu} />
        ) : (
          <MobileAuthNav toggleMenu={toggleMenu} />
        )}
        <MobileNavigation toggleMobileMenu={toggleMenu} />
      </MobileMenuBox>

      <MobileNav toggleMenu={toggleMenu} />
    </>
  );
};

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
