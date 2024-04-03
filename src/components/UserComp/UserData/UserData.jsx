import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { update } from 'redux/auth/operations';
import { selectId, getUserAvatar } from 'redux/auth/selectors';
// import {
//   EditBtn,
//   Input,
//   Label,
// } from '../DefaultDelivery/DefaultDelivery.styled';
import {
  BtnLight,
  EditCameraForm,
  EditPhotoInput,
  EditPhotoLabel,
  ProfileContainer,
  ProfileSpanName,
  ProfileSpanValues,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
  UserDataSection,
  UserPasswordList,
  PensilStyle,
  BtnBrown,
  TitleArticle,
  BtnContainer,
  IconBtn,
} from './UserData.styled';

import NotFoundImg from 'images/No-image-available.webp';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

import { Profile } from '../Profile/Profile';
import { ChangePassword } from '../ChangePassword/ChangePassword';
import { DefaultDelivery } from '../DefaultDelivery/DefaultDelivery';
import { Address } from '../Address/Address';
import { useTranslation } from 'react-i18next';

export const UserData = () => {
  const { t } = useTranslation();
  const [editProfileSettings, setEditProfileSettings] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showAddDelivery, setShowAddDelivery] = useState(false);
  const dispatch = useDispatch();

  let { userIn } = useAuth();
  const id = useSelector(selectId);
  const userAvatar = useSelector(getUserAvatar);
  let avatar = NotFoundImg;
  if (userAvatar !== '' && userAvatar !== undefined) {
    avatar =
      BASE_URL_IMG + userAvatar.split('/')[userAvatar.split('/').length - 1];
  }

  const changeAvatar = e => {
    const data = {};
    data['avatar'] = e.target.files[0];
    data['id'] = id;
    dispatch(update(data));
  };

  const birthday = userIn.birthday
    ? new Date(userIn.birthday).toLocaleDateString()
    : '';

  useEffect(() => {}, [userIn]);

  return (
    <UserDataSection>
      <UserDataContainer>
        {!editProfileSettings && (
          <>
            <UserDataImgWrapper>
              <UserDataImg alt="User" src={avatar} />
              <EditCameraForm>
                <EditPhotoLabel htmlFor="user_photo">
                  <PensilStyle />
                </EditPhotoLabel>
                <EditPhotoInput
                  type="file"
                  name="edit photo"
                  id="user_photo"
                  onChange={changeAvatar}
                  accept=".gif,.jpg,.jpeg,.webp,.png"
                />
              </EditCameraForm>
            </UserDataImgWrapper>
            <TitleArticle>{t('Profile')}</TitleArticle>
            <ProfileContainer>
              <IconBtn onClick={() => setEditProfileSettings(true)}>
                <PensilStyle />
              </IconBtn>
              <ProfileSpanName>
                {userIn.userName} {userIn.surname}
              </ProfileSpanName>
              <ProfileSpanValues>{userIn.email}</ProfileSpanValues>
              <ProfileSpanValues>{birthday}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.phone}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.location}</ProfileSpanValues>
            </ProfileContainer>
          </>
        )}
        {editProfileSettings && <Profile onClose={setEditProfileSettings} />}
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>{t('Change Password')}</TitleArticle>
        <ChangePassword />
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>{t('My addresses')}</TitleArticle>
        {userIn.address === '' && !showAddAddress && (
          <BtnLight onClick={() => setShowAddAddress(true)}>
            {t('add address')}
          </BtnLight>
        )}
        {showAddAddress && <Address onClose={setShowAddAddress} />}
        {userIn.address !== '' && (
          <ProfileContainer>
            <IconBtn onClick={() => setShowAddAddress(true)}>
              <PensilStyle />
            </IconBtn>
            <ProfileSpanValues>
              {userIn.address.userName} {userIn.address.surname}
            </ProfileSpanValues>
            {userIn.address.company && (
              <ProfileSpanValues>{userIn.address.company}</ProfileSpanValues>
            )}
            <ProfileSpanValues>
              {userIn?.address?.address1}, {userIn?.address?.address2}
            </ProfileSpanValues>{' '}
            <ProfileSpanValues>
              {userIn?.address?.city}, {userIn?.address?.state},{' '}
              {userIn?.address?.zipCode}
            </ProfileSpanValues>
            <ProfileSpanValues>{userIn?.address?.phone}</ProfileSpanValues>
            <ProfileSpanValues>{userIn?.address?.email}</ProfileSpanValues>
          </ProfileContainer>
        )}
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>{t('Default delivery')}</TitleArticle>
        <DefaultDelivery />
      </UserDataContainer>
    </UserDataSection>
  );
};
