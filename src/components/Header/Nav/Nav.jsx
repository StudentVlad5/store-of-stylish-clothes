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
      <MobileNavBox>
        <NavItem to={`/`} onClick={toggleMenu}>
          {t('About Us')}
        </NavItem>

        <NavItemBoxModal>
          <NavItem to={`/catalog`} onClick={toggleMenu}>
            {t('Shop')}
          </NavItem>
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

        <NavItem to={`/gifts`} onClick={toggleMenu}>
          {t('Gifts')}
        </NavItem>
        <NavItem to="/discounts" onClick={toggleMenu}>
          {t('Discounts')}
        </NavItem>
        <NavItem to="/novetly" onClick={toggleMenu}>
          {t('Novetly')}
        </NavItem>
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
        <NavItem to={`/`}>
          {' '}
          <IconFeather />
          {t('About Us')}
        </NavItem>
        <NavItem to={`/catalog`}>{t('Shop')}</NavItem>
        <NavItem to={`/gifts`}>{t('Gifts')}</NavItem>
        <NavItem to="/discounts">{t('Discounts')}</NavItem>
        <NavItem to="/novetly">{t('Novetly')}</NavItem>
      </NavSubContainerDown>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
