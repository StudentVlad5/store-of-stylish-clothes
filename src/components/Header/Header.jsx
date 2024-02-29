import React from 'react';
import { Navigation } from 'components/Header/Navigation/Navigation';
import {
  HeaderContainer,
  HeaderUnderLine,
  HeaderSectionWrap,
} from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import { Menu } from './Elements/menu/Menu';
import { useState, useEffect } from 'react';
import { headerBottomComponent } from 'redux/header_bottom/selectors';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerBottom = useSelector(headerBottomComponent);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderSectionWrap isScrolled={isScrolled}>
      <HeaderContainer>
        <Menu />
        <Logo />
        <Navigation />
      </HeaderContainer>
      <HeaderUnderLine className={headerBottom.headerBottom} />
    </HeaderSectionWrap>
  );
};
