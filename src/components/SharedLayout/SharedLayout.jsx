import React from 'react';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Main } from './SharedLayout.styled';
import { ScrollTop } from 'components/helpers/Scroll/ScrollToTop';
import { ModalAdvert } from 'components/ModalAdvert/ModalAdvert';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={null}> */}
      <ModalAdvert />
      <Main>
        <Outlet />
      </Main>
      {/* </Suspense> */}
      <Footer />
      <ScrollTop />
    </>
  );
};
