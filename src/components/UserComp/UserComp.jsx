import React from 'react';
import { Logout } from 'components/UserComp/Logout/Logout';
import { Outlet } from 'react-router-dom';
import {
  UserSection,
  UserContainer,
  UserAboutWrapper,
  UserDataWrapper,
  FolderWrapper,
  LinkFolder,
} from './UserComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';

export const UserComp = () => {
  const { t } = useTranslation();

  return (
    <UserSection>
      <UserContainer>
        <Title as="h1" hidden>
          Profile
        </Title>
        <UserDataWrapper>
          <FolderWrapper>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/user/profile`}
            >
              {t('My account')}
            </LinkFolder>
            <LinkFolder className="linkFolder sideBar_menu" to={`/user/orders`}>
              {t('My orders')}
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/user/favorites`}
            >
              {t('My favorites')}
            </LinkFolder>
            <Logout />
          </FolderWrapper>
          <UserAboutWrapper>
            <Outlet />
          </UserAboutWrapper>
        </UserDataWrapper>
      </UserContainer>
    </UserSection>
  );
};
