import React from 'react';
import { UserComp } from 'components/UserComp/UserComp';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { useEffect } from 'react';

const UserPage = () => {
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
      <SEO title="Profile" description="User profile" />
      <UserComp />
    </>
  );
};

export default UserPage;
