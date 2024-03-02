import React from 'react';
import PropTypes from 'prop-types';
import {
  MobileNavList,
  NavList,
  NavItem,
  NavSubContainerUp,
  NavSubContainerDown,
} from './Nav.styled';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();
  const path = window.location.pathname;

  return (
    <MobileNavList>
      <NavSubContainerUp>
        <NavItem
          to={`/catalog/men`}
          onClick={toggleMenu}
          className={
            path.includes(`/catalog/men`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Men')}
        </NavItem>
        <NavItem
          to={`/catalog/women`}
          onClick={toggleMenu}
          className={
            path.includes(`/catalog/women`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Women')}
        </NavItem>
      </NavSubContainerUp>
      <NavItem to={`/`} onClick={toggleMenu}>
        {t('About Us')}
      </NavItem>
      <NavItem to={`/catalog`} onClick={toggleMenu}>
        {t('Shop')}
      </NavItem>
      <NavItem to={`/gifts`} onClick={toggleMenu}>
        {t('Gifts')}
      </NavItem>
      <NavItem to="/discounts" onClick={toggleMenu}>
        {t('Discounts')}
      </NavItem>
      <NavItem to="/novetly" onClick={toggleMenu}>
        {t('Novetly')}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();
  const path = window.location.pathname;

  return (
    <NavList>
      <NavSubContainerUp>
        <NavItem
          to={`/catalog/men`}
          className={
            path.includes(`/catalog/men`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Men')}
        </NavItem>
        <NavItem
          to={`/catalog/women`}
          className={
            path.includes(`/catalog/women`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Women')}
        </NavItem>
      </NavSubContainerUp>
      <NavSubContainerDown>
        <NavItem to={`/?${searchParams}`}>{t('About Us')}</NavItem>
        <NavItem to={`/catalog?${searchParams}`}>{t('Shop')}</NavItem>
        <NavItem to={`/gifts?${searchParams}`}>{t('Gifts')}</NavItem>
        <NavItem to="/discounts">{t('Discounts')}</NavItem>
        <NavItem to="/novetly">{t('Novetly')}</NavItem>
      </NavSubContainerDown>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
