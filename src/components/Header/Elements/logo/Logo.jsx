import { Link } from 'react-router-dom';
import { QuillisLogo, Text } from './Logo.styled';
import React from 'react';

export const Logo = () => {
  return (
    <Link to="/">
      <QuillisLogo />
    </Link>
  );
  // return <Text to="/">Quillis</Text>;
};
