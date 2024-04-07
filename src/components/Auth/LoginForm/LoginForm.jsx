import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import schemas from 'utils/schemas';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as ImEye } from 'images/svg/eye-key-look-password-security-see-svgrepo-com.svg';
import { ReactComponent as ImEyeBlocked } from 'images/svg/eye-crossed-svgrepo-com.svg';

import { FormLogin, TitleLogin } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import {
  BoxText,
  Btn,
  BtnContainer,
  ErrorBox,
  FormContainer,
  FormSection,
  IconInValid,
  IconValid,
  Input,
  ShowPassword,
  Span,
  StyledLink,
} from '../AuthForm.styled';
import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const { t } = useTranslation();
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    setIsLoading(true);
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      }),
      hideForm(),
    );
    setIsLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schemas.schemasLogin,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    formik.values.email === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.red}`
      : `${theme.colors.brown4}`;
  };
  return (
    <FormSection>
      <FormContainer>
        <Formik validationSchema={schemas.schemasLogin}>
          <FormLogin onSubmit={formik.handleSubmit} autoComplete="off">
            <TitleLogin>{t('Login')}</TitleLogin>
            {isShown && (
              <div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.email,
                      formik.errors.email,
                    ),
                  }}
                  name="email"
                  type="email"
                  validate={schemas.schemasLogin.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {!formik.values.email ? null : !formik.errors.email ? (
                  <IconValid color={theme.colors.green} />
                ) : (
                  <IconInValid color={theme.colors.red} />
                )}
                {formik.errors.email || formik.touched.email ? (
                  <ErrorBox>{formik.errors.email}</ErrorBox>
                ) : null}
                <Span className="floating-label">{t('Email')}</Span>
              </div>
            )}

            {isShown && (
              <div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.password,
                      formik.errors.password,
                    ),
                  }}
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />

                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.password && formik.touched.password ? (
                  <ErrorBox>{formik.errors.password}</ErrorBox>
                ) : null}
                <Span className="floating-label">{t('Password')}</Span>
              </div>
            )}
            <BtnContainer>
              {isShown && (
                <Btn
                  type="submit"
                  disabled={isValid}
                  aria-label="submit sign in"
                >
                  {isLoading ? 'Loading' : t('Sign In')}
                </Btn>
              )}

              {!isShown && (
                <Btn type="submit">{isLoading ? 'Loading' : t('Sign In')}</Btn>
              )}
              <BoxText>
                <StyledLink to="/register">{t('Create account')}</StyledLink>
                <StyledLink to="/forgot_password">
                  {t('Forgot your password?')}
                </StyledLink>
              </BoxText>
            </BtnContainer>
          </FormLogin>
        </Formik>
      </FormContainer>
    </FormSection>
  );
};

export default LoginForm;
