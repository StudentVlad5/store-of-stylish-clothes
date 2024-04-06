import PropTypes from 'prop-types';
import React from 'react';
// import { ButtonAuth } from '../Elements/button/ButtonAuth';
import { MobileContainer, Container, IconUser } from './AuthNav.styled';
import { Link } from 'react-router-dom';

export const MobileAuthNav = ({ toggleMenu }) => {
  return (
    <MobileContainer  style={{ marginRight: 20 }}>
      <Link to={'/login'}>
        <IconUser onClick={toggleMenu} />
      </Link>
    </MobileContainer>
  );
};

export const AuthNav = ({ toggleMenu }) => {
  return (
    <Container>
      <Link to={'/signin'}>
        <IconUser onClick={toggleMenu} />
      </Link>
    </Container>
  );
};

MobileAuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};

AuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};
