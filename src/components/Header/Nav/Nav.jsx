import React, { useContext, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MobileNavList,
  NavList,
  NavItem,
  NavSubContainerUp,
  NavSubContainerDown,
  MobileNavBox,
  NavItemBoxModal,
  IconFeather,
  LinkItem,
  NavItemCategory,
} from './Nav.styled';
import { useTranslation } from 'react-i18next';
import { ModalFirst } from './ModalFirst/ModalFirst';
import { ModalFirstOpen } from './ModalFirst/ModalFirst.styled';
import { homeProductLinks } from 'BASE_CONST/Base-const';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { saveToStorage } from 'services/localStorService';

export const MobileNav = ({ toggleMenu }) => {
  const { t } = useTranslation();
  const path = window.location.pathname;
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
  const init = {
    category: [],
    currency: selectedCurrency,
    man_woman: [],
    maxPrice: '5000',
    minPrice: '0',
    page: 1,
    perPage: 12,
    product: [],
    sizes: [],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const location = useLocation();
  return (
    <MobileNavList>
      <NavSubContainerUp>
        <NavItemCategory
          className={
            location.pathname.includes('shop') ||
            location.pathname.includes('discounts')
              ? 'changeStyle'
              : 'not-changeStyle'
          }
          to={`shop?man_woman=${homeProductLinks?.man[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
          onClick={() => {
            saveToStorage('filters', {
              ...init,
              man_woman: [homeProductLinks?.man[selectedLanguage]],
            });
            toggleMenu();
            setSearchParams({
              ...init,
              man_woman: [homeProductLinks?.man[selectedLanguage]],
            });
          }}
        >
          {t('Men')}
        </NavItemCategory>
        <NavItemCategory
          className={
            location.pathname.includes('shop') ||
            location.pathname.includes('discounts')
              ? 'changeStyle'
              : 'not-changeStyle'
          }
          to={`shop?man_woman=${homeProductLinks?.woman[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
          onClick={() => {
            saveToStorage('filters', {
              ...init,
              man_woman: [homeProductLinks?.woman[selectedLanguage]],
            });
            toggleMenu();
            setSearchParams({
              ...init,
              man_woman: [homeProductLinks?.woman[selectedLanguage]],
            });
          }}
        >
          {t('Women')}
        </NavItemCategory>
      </NavSubContainerUp>
      <MobileNavBox>
        <NavItem to={`/`} onClick={toggleMenu}>
          <IconFeather />
          {t('About us')}
        </NavItem>

        <NavItemBoxModal>
          <NavItem to={`shop`} onClick={toggleMenu}>
            <IconFeather />
            {t('Shop')}
          </NavItem>
          {/* <IconArrow onClick={toggleModal} /> */}
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

        <NavItem to={`gifts`} onClick={toggleMenu}>
          <IconFeather />
          {t('Gifts')}
        </NavItem>
        <NavItem to="discounts" onClick={toggleMenu}>
          <IconFeather />
          {t('Discounts')}
        </NavItem>
        <NavItem to="novetly" onClick={toggleMenu}>
          <IconFeather />
          {t('Novelty')}
        </NavItem>
      </MobileNavBox>
    </MobileNavList>
  );
};

export const Nav = () => {
  const { t } = useTranslation();
  const path = window.location.pathname;
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
  const init = {
    category: [],
    currency: selectedCurrency,
    man_woman: [],
    maxPrice: '5000',
    minPrice: '0',
    page: 1,
    perPage: 12,
    product: [],
    sizes: [],
  };
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <NavList>
      <NavSubContainerUp>
        <NavItem to={`/`}>
          {' '}
          <IconFeather />
          {t('About us')}
        </NavItem>
        <NavItem to={`shop`}>
          <IconFeather />
          {t('Shop')}
        </NavItem>
        <NavItem to={`gifts`}>
          <IconFeather />
          {t('Gifts')}
        </NavItem>
        <NavItem to="discounts">
          <IconFeather />
          {t('Discounts')}
        </NavItem>
        <NavItem to="novetly">
          <IconFeather />
          {t('Novelty')}
        </NavItem>
      </NavSubContainerUp>
      <NavSubContainerDown>
        <LinkItem
          className={
            location.pathname.includes('shop') ||
            location.pathname.includes('discounts')
              ? 'changeStyle'
              : 'not-changeStyle'
          }
          to={`shop?man_woman=${homeProductLinks?.man[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
          onClick={() => {
            saveToStorage('filters', {
              ...init,
              man_woman: [homeProductLinks?.man[selectedLanguage]],
            });
            setSearchParams({
              ...init,
              man_woman: [homeProductLinks?.man[selectedLanguage]],
            });
          }}
        >
          {t('Men')}
        </LinkItem>
        <LinkItem
          className={
            location.pathname.includes('shop') ||
            location.pathname.includes('discounts')
              ? 'changeStyle'
              : 'not-changeStyle'
          }
          to={`shop?man_woman=${homeProductLinks?.woman[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
          onClick={() => {
            saveToStorage('filters', {
              ...init,
              man_woman: [homeProductLinks?.woman[selectedLanguage]],
            });
            setSearchParams({
              ...init,
              man_woman: [homeProductLinks?.woman[selectedLanguage]],
            });
          }}
        >
          {t('Women')}
        </LinkItem>
      </NavSubContainerDown>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
