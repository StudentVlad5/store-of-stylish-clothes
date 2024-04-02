import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
import {
  DataContainer,
  Btnwrapper,
  DeliveryInfoBlock,
  DataContainerText,
  DataContainerPensil,
  DataContainerCheckMark,
  DeliveryFormLableText,
  DeliveryFormBtnFinish,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormLable,
  DeliveryFormBtn,
  DeliveryFormLableTextSpan,
} from '../Order/Order.styled';
import { getUser } from 'redux/auth/selectors';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import { useAuth } from 'hooks/useAuth';
import { Formik } from 'formik';
import {
  Error,
  ProfileInput,
  ProfileLabel,
  ProfileList,
  ProfileName,
} from 'components/UserComp/Profile/Profile.styled';
import schemas from 'utils/schemas';

const Step2 = () => {
  const [isDisabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const auth = useSelector(getUser);
  const { userIn } = useAuth();

  let delivery = '';
  getFromStorage('selectedDeliveryOption')
    ? (delivery = getFromStorage('selectedDeliveryOption'))
    : (delivery = '');

  const [formData, setFormData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id
            ? userIn.address?.userName
              ? userIn.address.userName
              : userIn.userName
            : '',
          surname: auth._id
            ? userIn.address?.surname
              ? userIn.address.surname
              : userIn.surname
            : '',
          company: auth._id ? userIn.address.company : '',
          email: auth._id
            ? userIn.address.email
              ? userIn.address.email
              : userIn.email
            : '',
          phone: auth._id
            ? userIn.address.phone
              ? userIn.address.phone
              : userIn.phone
            : '',
          address1: auth._id ? userIn.address.address1 : '',
          address2: auth._id ? userIn.address.address2 : '',
          city: auth._id ? userIn.address.city : '',
          state: auth._id ? userIn.address.state : '',
          zipCode: auth._id ? userIn.address.zipCode : '',
        },
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    delivery === 'Courier delivery' &&
    formData.name !== '' &&
    formData.surname !== '' &&
    formData.email !== '' &&
    formData.phone !== '' &&
    formData.address1 !== '' &&
    formData.city !== '' &&
    formData.state !== '' &&
    formData.zipCode !== ''
      ? setDisabled(false)
      : setDisabled(true);
    if (
      delivery !== 'Courier delivery' &&
      formData.name !== '' &&
      formData.surname !== '' &&
      formData.email !== '' &&
      formData.phone !== '' &&
      formData.address1 !== '' &&
      formData.city !== '' &&
      formData.state !== '' &&
      formData.zipCode !== ''
    ) {
      setDisabled(false);
    }
  }, [formData, delivery]);

  useEffect(() => {
    const requiredFields = [
      'name',
      'surname',
      'address1',
      'city',
      'state',
      'zipCode',
      'email',
      'phone',
    ];

    const isFilled = requiredFields.every(field => !!formData[field]);
    setDisabled(!isFilled);
  }, [formData]);

  const handleInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });

    saveToStorage('formData', {
      ...formData,
      [inputName]: inputValue,
    });
  };

  const nextStep = () => {
    navigate('/checkout/step3', { replace: true });
    saveToStorage('step', '3');
  };

  const isAnyFieldEmpty = Object.values(formData).some(value => value === '');
  const [showAddAddress, setShowAddAddress] = useState(isAnyFieldEmpty);

  return (
    <DeliveryInfoBlock>
      {auth._id ? (
        <>
          <DataContainer>
            <DataContainerText>
              {formData.name} {formData.surname}
            </DataContainerText>
            <DataContainerText>{formData.company}</DataContainerText>
            <DataContainerText>{formData.city}</DataContainerText>
            <DataContainerText>{formData.state}</DataContainerText>
            <DataContainerText>{formData.zipCode}</DataContainerText>
            <DataContainerText>{formData.address1}</DataContainerText>
            <DataContainerText>{formData.address2}</DataContainerText>
            <DataContainerText>{formData.email}</DataContainerText>
            <DataContainerText>{formData.phone}</DataContainerText>
            <DataContainerPensil
              onClick={() => setShowAddAddress(!showAddAddress)}
            >
              {showAddAddress ? <PensilStyle /> : <DataContainerCheckMark />}
            </DataContainerPensil>
          </DataContainer>

          {!showAddAddress && (
            <DeliveryForm>
              <DeliveryFormLable>
                <ProfileName>
                  First name{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  Last name{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  required
                  // placeholder="Washington"
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>Company</ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="company"
                  value={formData.company}
                  name="company"
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  City <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  Address 1{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="address1"
                  value={formData.address1}
                  name="address1"
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>Address 2</ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  State <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  Zip code{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="number"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  Phone <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  required
                  // placeholder="+123456789"
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <ProfileName>
                  Email <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  // placeholder="george.washington@gmail.com"
                />
              </DeliveryFormLable>
            </DeliveryForm>
          )}
          <Btnwrapper>
            <Link to={`/checkout/step1`}>
              <DeliveryFormBtn type="button">Back</DeliveryFormBtn>
            </Link>
            <DeliveryFormBtnFinish
              type="button"
              onClick={nextStep}
              disabled={isDisabled}
            >
              Next
            </DeliveryFormBtnFinish>
          </Btnwrapper>
        </>
      ) : (
        <Formik
          initialValues={formData}
          onSubmit={(values, { setSubmitting }) => {
            // dispatch(update({ address: { ...values }, id }));
            setSubmitting(false);
            // onClose(false);
            nextStep();
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
              <DeliveryFormLable htmlFor="userName">
                <ProfileName>
                  First name{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.userName && touched.userName ? (
                  <Error>{errors.userName}</Error>
                ) : null}
              </DeliveryFormLable>
              <ProfileLabel htmlFor="surname">
                <ProfileName>
                  Last name{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="text"
                  name="surname"
                  id="surname"
                  value={values.surname}
                  onChange={handleInputChange}
                />
                {errors.surname && touched.surname ? (
                  <Error>{errors.surname}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="company">
                <ProfileName>Company</ProfileName>
                <ProfileInput
                  type="company"
                  name="company"
                  id="company"
                  value={values.company}
                  onChange={handleInputChange}
                />
                {errors.company && touched.company ? (
                  <Error>{errors.company}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="address1">
                <ProfileName>
                  Address 1{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="address1"
                  name="address1"
                  id="address1"
                  value={values.address1}
                  onChange={handleInputChange}
                />
                {errors.address1 && touched.address1 ? (
                  <Error>{errors.address1}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="address2">
                <ProfileName>Address 2</ProfileName>
                <ProfileInput
                  type="address2"
                  name="address2"
                  id="address2"
                  value={values.address2}
                  onChange={handleInputChange}
                />
                {errors.address2 && touched.address2 ? (
                  <Error>{errors.address2}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="city">
                <ProfileName>
                  City <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="text"
                  name="city"
                  id="city"
                  value={values.city}
                  onChange={handleInputChange}
                />
                {errors.city && touched.city ? (
                  <Error>{errors.city}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="state">
                <ProfileName>
                  State <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="text"
                  name="state"
                  id="state"
                  value={values.state}
                  onChange={handleInputChange}
                />
                {errors.state && touched.state ? (
                  <Error>{errors.state}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="zipCode">
                <ProfileName>
                  Zip code{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={values.zipCode}
                  onChange={handleInputChange}
                />
                {errors.zipCode && touched.zipCode ? (
                  <Error>{errors.zipCode}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="phone">
                <ProfileName>
                  Phone <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && touched.phone ? (
                  <Error>{errors.phone}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="email">
                <ProfileName>
                  Email <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </ProfileName>
                <ProfileInput
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}
              </ProfileLabel>

              <Btnwrapper>
                <Link to={`/checkout/step1`}>
                  <DeliveryFormBtn type="button">Back</DeliveryFormBtn>
                </Link>
                <DeliveryFormBtnFinish
                  type="button"
                  onClick={nextStep}
                  // disabled={isDisabled}
                  disabled={isDisabled || isSubmitting}
                  // disabled={isSubmitting}
                  aria-label="Submit"
                >
                  Next
                </DeliveryFormBtnFinish>
              </Btnwrapper>
            </ProfileList>
          )}
        </Formik>
      )}
      {/* 
      <Btnwrapper>
        <Link to={`/checkout/step1`}>
          <DeliveryFormBtn type="button">Back</DeliveryFormBtn>
        </Link>
        <DeliveryFormBtnFinish
          type="button"
          onClick={nextStep}
          disabled={isDisabled}
        >
          Next
        </DeliveryFormBtnFinish>
      </Btnwrapper> */}
    </DeliveryInfoBlock>
  );
};

export default Step2;