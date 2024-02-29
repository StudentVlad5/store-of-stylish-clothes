import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SEO } from 'utils/SEO';
import { LoginForm } from 'components/Auth/LoginForm/LoginForm';
import { addHeaderBottom } from 'redux/header_bottom/operation';

const Login = () => {
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
      <SEO title="LogIn" description="Log in to your account" />
      <LoginForm />
    </>
  );
};

export default Login;
