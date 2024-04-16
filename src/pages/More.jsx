import { More } from 'components/More/More';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { SEO } from 'utils/SEO';

const BasketPage = () => {
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
      <SEO title="More Links" description="Socila Medias" />
      <More />
    </>
  );
};

export default BasketPage;
