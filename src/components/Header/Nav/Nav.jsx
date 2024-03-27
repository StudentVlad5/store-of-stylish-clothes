import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MobileNavList,
  NavList,
  NavItem,
  NavSubContainerUp,
  NavSubContainerDown,
  IconArrow,
  MobileNavBox,
  NavItemBoxModal,
  IconFeather,
} from './Nav.styled';
// import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ModalFirst } from './ModalFirst/ModalFirst';
import { MobileMenuSection } from '../Elements/menu/menu.styled';
import { ModalFirstOpen } from './ModalFirst/ModalFirst.styled';
import { CustomNavLink } from './CustomNavLink/CustomNavLink';

export const MobileNav = ({ toggleMenu }) => {
  // const [searchParams] = useSearchParams();
  // searchParams.set('perPage', 12);
  // searchParams.set('page', 1);
  const { t } = useTranslation();
  const path = window.location.pathname;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <MobileNavList>
      <NavSubContainerUp>
        <NavItem
          to={`/shop/men`}
          onClick={toggleMenu}
          className={
            path.includes(`/shop/men`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Men')}
        </NavItem>
        <NavItem
          to={`/shop/women`}
          onClick={toggleMenu}
          className={
            path.includes(`/shop/women`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Women')}
        </NavItem>
      </NavSubContainerUp>
      <MobileNavBox>
        <CustomNavLink to={`/`} onClick={toggleMenu}>
          {t('About Us')}
        </CustomNavLink>

        <NavItemBoxModal>
          <CustomNavLink to={`/shop`} onClick={toggleMenu}>
            {t('Shop')}
          </CustomNavLink>
          <IconArrow onClick={toggleModal} />
        </NavItemBoxModal>

        {isModalOpen && (
          <ModalFirstOpen
            className={`collapsed ${isModalOpen ? 'is-modal-open' : ''}`}
          >
            <ModalFirst
              toggleModal={toggleModal}
              onClose={() => setIsModalOpen(false)}
            />
          </ModalFirstOpen>
        )}

        <CustomNavLink to={`/gifts`} onClick={toggleMenu}>
          {t('Gifts')}
        </CustomNavLink>
        <CustomNavLink to="/discounts" onClick={toggleMenu}>
          {t('Discounts')}
        </CustomNavLink>
        <CustomNavLink to="/novetly" onClick={toggleMenu}>
          {t('Novetly')}
        </CustomNavLink>
      </MobileNavBox>
    </MobileNavList>
  );
};

export const Nav = () => {
  // const [searchParams] = useSearchParams();
  // searchParams.set('perPage', 12);
  // searchParams.set('page', 1);
  const { t } = useTranslation();
  const path = window.location.pathname;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NavList>
      <NavSubContainerUp>
        <NavItem
          to={`/shop/men`}
          className={
            path.includes(`/shop/men`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Men')}
        </NavItem>
        <NavItem
          to={`/shop/women`}
          className={
            path.includes(`/shop/women`) ? 'changeStyle' : ' not-changeStyle'
          }
        >
          {t('Women')}
        </NavItem>
      </NavSubContainerUp>
      <NavSubContainerDown>
        <CustomNavLink
          to={`/`}
        >
          {' '}
          {/* <IconFeather /> */}
          {t('About Us')}
        </CustomNavLink>
        <CustomNavLink to={`/shop`}>{t('Shop')}</CustomNavLink>
        <CustomNavLink to={`/gifts`}>{t('Gifts')}</CustomNavLink>
        <CustomNavLink to="/discounts">{t('Discounts')}</CustomNavLink>
        <CustomNavLink to="/novetly">{t('Novetly')}</CustomNavLink>
      </NavSubContainerDown>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
