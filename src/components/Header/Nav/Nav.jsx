import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem to={`/`} onClick={toggleMenu}>
        {t('About Us')}
      </NavItem>
      <NavItem to={`/catalog/plants`} onClick={toggleMenu}>
        {t('Shop')}
      </NavItem>
      <NavItem to={`/gifts`} onClick={toggleMenu}>
        {t('Gifts')}
      </NavItem>
      <NavItem to="/care" onClick={toggleMenu}>
        {t('Care')}
      </NavItem>
      <NavItem to="/addition/about_company" onClick={toggleMenu}>
        {t('Addition')}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <NavList>
      <NavItem to={`/?${searchParams}`}>{t('About Us')}</NavItem>
      <NavItem to={`/catalog?${searchParams}`}>{t('Shop')}</NavItem>
      <NavItem to={`/gifts?${searchParams}`}>{t('Gifts')}</NavItem>
      <NavItem to="/care">{t('Man')}</NavItem>
      <NavItem to="/addition/about_company">{t('Woman')}</NavItem>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
