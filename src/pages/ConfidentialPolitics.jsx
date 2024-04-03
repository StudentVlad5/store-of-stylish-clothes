import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { Confidential } from '../components/Confidential/Confidential';

const ConfidentialPolitics = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);

  return (
    <>
      <SEO title="Confidential Politics" description="Confidential Politics" />
      <Confidential />
    </>
  );
};

export default ConfidentialPolitics;
