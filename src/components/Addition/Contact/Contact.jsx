import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { onSuccess } from 'components/helpers/Messages/NotifyMessages';
import {
  Error,
  ProfileInput,
  ProfileLabel,
  ProfileList,
  ProfileName,
} from 'components/UserComp/Profile/Profile.styled';
import { BtnLight } from 'components/UserComp/UserData/UserData.styled';
import {
  Container,
  Title,
  ContactsList,
  SubTitleLi,
  ProfileInputMessage,
  Wrapper,
} from './Contact.styled';

import { ReactComponent as Phone } from 'images/svg/phone_light.svg';
import { ReactComponent as Mail } from 'images/svg/message_light.svg';

export const Contact = () => {
  let { userIn } = useAuth();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Contact us</Title>
        <Formik
          initialValues={{
            userName: userIn?.userName ? userIn.userName : '',
            surname: userIn?.surname ? userIn.surname : '',
            phone: userIn?.phone ? userIn.phone : '',
            email: userIn?.email ? userIn.email : '',
            subject: '',
            message: '',
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            onSuccess('Your message sent');
            resetForm();
          }}
          enableReinitialize={true}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
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
                <ProfileName>First name*</ProfileName>
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
                <ProfileName>Last name</ProfileName>
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
              <ProfileLabel htmlFor="phone">
                <ProfileName>Phone*</ProfileName>
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
              <ProfileLabel htmlFor="email">
                <ProfileName>Email*</ProfileName>
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
              <ProfileLabel htmlFor="subject">
                <ProfileName>Subject*</ProfileName>
                <ProfileInput
                  type="text"
                  name="subject"
                  id="subject"
                  value={values.subject}
                  required
                />
                {errors.city && touched.city ? (
                  <Error>{errors.city}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="message">
                <ProfileName>Message*</ProfileName>
                <ProfileInputMessage
                  type="text"
                  name="message"
                  id="message"
                  value={values.message}
                  required
                  rows="6"
                  cols="25"
                  onChange={e => {
                    setFieldValue('message', e.target.value);
                  }}
                />
                {errors.state && touched.state ? (
                  <Error>{errors.state}</Error>
                ) : null}
              </ProfileLabel>
              <BtnLight
                type="submit"
                disabled={isSubmitting}
                aria-label="Submit"
                style={{ marginLeft: 'auto' }}
              >
                Send
              </BtnLight>
            </ProfileList>
          )}
        </Formik>
      </Wrapper>
      <Wrapper>
        <Title>Contacts</Title>
        <ContactsList>
          <SubTitleLi>
            <Phone />
            <a href="tel:+380959309876" aria-label="Ukrainian phone number">
              +38 095 930 98 76
            </a>
          </SubTitleLi>
          <SubTitleLi>
            <Phone />
            <a href="tel:+4368110541148" aria-label="Austrian phone number">
              +43 681 10541148
            </a>
          </SubTitleLi>
          <SubTitleLi>
            <Mail />
            <a href="mailto:contact@brand-maze.com" aria-label="email">
              contact@brand-maze.com
            </a>
          </SubTitleLi>
        </ContactsList>
      </Wrapper>
    </Container>
  );
};
