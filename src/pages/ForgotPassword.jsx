import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SEO } from 'utils/SEO';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO
        title="Change Password"
        description="Change Password for your account"
      />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;
