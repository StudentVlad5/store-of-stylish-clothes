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
} from '../Profile/Profile.styled';
import { useTranslation } from 'react-i18next';

export const Address = ({ onClose }) => {
  const {t} = useTranslation();
  let { userIn } = useAuth();
  const [addressData, setAddressData] = useState(userIn.address ?? []);
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        userName: addressData?.userName ? addressData.userName : '',
        surname: addressData?.surname ? addressData.surname : '',
        company: addressData?.company ? addressData.company : '',
        address1: addressData?.address1 ? addressData.address1 : '',
        address2: addressData?.address2 ? addressData.address2 : '',
        city: addressData?.city ? addressData.city : '',
        state: addressData?.state ? addressData.state : '',
        zipCode: addressData?.zipCode ? addressData.zipCode : '',
        phone: addressData?.phone ? addressData.phone : '',
        email: addressData?.email ? addressData.email : '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(update({ address: { ...values }, id }));
        setSubmitting(false);
        onClose(false);
      }}
      enableReinitialize={true}
      validationSchema={schemas.addressSchema}
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
            <ProfileName>
              {t("First name")} <span style={{ color: 'red' }}>*</span>
            </ProfileName>
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
            <ProfileName>{t("Last name")} <span style={{ color: 'red' }}>*</span></ProfileName>
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
          <ProfileLabel htmlFor="company">
            <ProfileName>{t("Company")}</ProfileName>
            <ProfileInput
              type="company"
              name="company"
              id="company"
              value={values.company}
            />
            {errors.company && touched.company ? (
              <Error>{errors.company}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="address1">
            <ProfileName>{t("Address")} 1 <span style={{ color: 'red' }}>*</span></ProfileName>
            <ProfileInput
              type="address1"
              name="address1"
              id="address1"
              value={values.address1}
            />
            {errors.address1 && touched.address1 ? (
              <Error>{errors.address1}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="address2">
            <ProfileName>{t("Address")} 2</ProfileName>
            <ProfileInput
              type="address2"
              name="address2"
              id="address2"
              value={values.address2}
            />
            {errors.address2 && touched.address2 ? (
              <Error>{errors.address2}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="city">
            <ProfileName>{t("City")} <span style={{ color: 'red' }}>*</span></ProfileName>
            <ProfileInput
              type="text"
              name="city"
              id="city"
              value={values.city}
            />
            {errors.city && touched.city ? <Error>{errors.city}</Error> : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="state">
            <ProfileName>{t("State")} <span style={{ color: 'red' }}>*</span></ProfileName>
            <ProfileInput
              type="text"
              name="state"
              id="state"
              value={values.state}
            />
            {errors.state && touched.state ? (
              <Error>{errors.state}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="zipCode">
            <ProfileName>{t("Zip code")} <span style={{ color: 'red' }}>*</span></ProfileName>
            <ProfileInput
              type="text"
              name="zipCode"
              id="zipCode"
              value={values.zipCode}
            />
            {errors.zipCode && touched.zipCode ? (
              <Error>{errors.zipCode}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="phone">
            <ProfileName>{t("Phone")} <span style={{ color: 'red' }}>*</span></ProfileName>
            <ProfileInput
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
            />
            {errors.phone && touched.phone ? (
              <Error>{errors.phone}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="email">
            <ProfileName>{t("Email")} <span style={{ color: 'red' }}>*</span></ProfileName>
            <ProfileInput
              type="email"
              name="email"
              id="email"
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Error>{errors.email}</Error>
            ) : null}
          </ProfileLabel>

          <BtnContainer>
            <BtnLight
              type="button"
              aria-label="Close"
              onClick={() => onClose(false)}
            >
              {t("CANCEL")}
            </BtnLight>
            <BtnBrown type="submit" disabled={isSubmitting} aria-label="Submit">
              {t("SAVE")}
            </BtnBrown>
          </BtnContainer>
        </ProfileList>
      )}
    </Formik>
  );
};

Address.propTypes = {
  onClose: PropTypes.func,
};
