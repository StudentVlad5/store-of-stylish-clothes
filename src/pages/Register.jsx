import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SEO } from 'utils/SEO';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import RegisterForm from 'components/Auth/RegisterForm/RegisterForm';

const Register = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO title="Register" description="Register your account" />
      <RegisterForm />
    </>
  );
};

export default Register;
