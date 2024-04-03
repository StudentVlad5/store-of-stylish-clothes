import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { selectId } from 'redux/auth/selectors';
import { update } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import schemas from 'utils/schemas';
import { BtnContainer, BtnBrown, BtnLight } from '../UserData/UserData.styled';
import {
  Error,
  ProfileInput,
  ProfileLabel,
  ProfileName,
  ProfileList,
} from './Profile.styled';
import { useTranslation } from 'react-i18next';

export const Profile = ({ onClose }) => {
  const { t } = useTranslation();
  let { userIn } = useAuth();
  const [updateData, setUpdateData] = useState(userIn ?? []);
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        userName: updateData?.userName ? updateData.userName : '',
        surname: updateData?.surname ? updateData.surname : '',
        email: updateData?.email ? updateData.email : '',
        phone: updateData?.phone ? updateData.phone : '',
        birthday: updateData?.birthday ? updateData.birthday : '',
        location: updateData?.location ? updateData.location : '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(update({ ...values, id }));
        setSubmitting(false);
        onClose(false);
      }}
      enableReinitialize={true}
      validationSchema={schemas.updateSchema}
    >
      {({
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
      }) => (
        <ProfileList
          autoComplete="off"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <ProfileLabel htmlFor="userName">
            <ProfileName>{t('First name')}</ProfileName>
            <ProfileInput
              type="text"
              name="userName"
              id="userName"
              value={values.userName}
              required
            />
            {errors.userName && touched.userName ? (
              <Error>{errors.userName}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="surname">
            <ProfileName>{t('Last name')}</ProfileName>
            <ProfileInput
              type="text"
              name="surname"
              id="surname"
              value={values.surname}
            />
            {errors.surname && touched.surname ? (
              <Error>{errors.surname}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="email">
            <ProfileName>{t('Email')}</ProfileName>
            <ProfileInput
              type="email"
              name="email"
              id="email"
              value={values.email}
              required
            />
            {errors.email && touched.email ? (
              <Error>{errors.email}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="phone">
            <ProfileName>{t('Phone')}</ProfileName>
            <ProfileInput
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              required
            />
            {errors.phone && touched.phone ? (
              <Error>{errors.phone}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="birthday">
            <ProfileName>{t('Birthday')}</ProfileName>
            <ProfileInput
              type="date"
              name="birthday"
              id="birthday"
              value={values.birthday}
              // min={'1900-01-01'}
              // max={`${new Date().toISOString().split('T')[0]}`}
            />
            {errors.birthday && touched.birthday ? (
              <Error>{errors.birthday}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="location">
            <ProfileName>{t('City')}</ProfileName>
            <ProfileInput
              type="text"
              name="location"
              id="location"
              value={values.location}
            />
            {errors.location && touched.location ? (
              <Error>{errors.location}</Error>
            ) : null}
          </ProfileLabel>

          <BtnContainer>
            <BtnLight
              type="button"
              aria-label="Close"
              onClick={() => onClose(false)}
            >
              {t('CANCEL')}
            </BtnLight>
            <BtnBrown type="submit" disabled={isSubmitting} aria-label="Submit">
              {t('SAVE')}
            </BtnBrown>
          </BtnContainer>
        </ProfileList>
      )}
    </Formik>
  );
};

Profile.propTypes = {
  onClose: PropTypes.func,
};
