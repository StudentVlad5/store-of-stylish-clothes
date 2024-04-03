import React from 'react';
import { lazy, useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom'; //Navigate
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import NotFoundPage from 'pages/NotFound';
import { UserData } from 'components/UserComp/UserData/UserData';
import Step1 from 'components/CheckOut/Step1/Step1';
import Step2 from 'components/CheckOut/Step2/Step2';
import Step3 from 'components/CheckOut/Step3/Step3';
import Step4 from 'components/CheckOut/Step4/Step4';
import { UserOrders } from 'components/UserComp/UserOrders/UserOrders';
import { BasketRoute } from 'routes/BasketRoute';
import { AboutUs } from 'components/Addition/AboutUs/AboutUs';
import { Faq } from 'components/Addition/FAQ/Faq';
import { Blog } from 'components/Addition/Blog/Blog';
import { Shipping } from 'components/Addition/Shipping/Shipping';
import { Guarantee } from 'components/Addition/Guarantee/Guarantee';
import { Courses } from 'components/Addition/Courses/Courses';
import { Rewards } from 'components/Addition/Rewards/Rewards';
import { Contact } from 'components/Addition/Contact/Contact';
import { Location } from 'components/Addition/Location/Location';
import { Careers } from 'components/Addition/Careers/Careers';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const ProductCardPage = lazy(() => import('pages/ProductCard'));
const FavoritePage = lazy(() => import('pages/Favorite'));
const GiftsPage = lazy(() => import('pages/Gifts'));
const CarePage = lazy(() => import('pages/Care'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const CheckOutPage = lazy(() => import('pages/CheckOut'));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPassword'));
const AdditionPage = lazy(() => import('pages/Addition'));
const BasketPage = lazy(() => import('pages/Basket'));
const DiscountsShop = lazy(() => import('pages/DiscountsCatalog'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  let basket = [];
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Suspense fallback={<div>{t('Loading...')}</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo={basket.length > 0 ? '/basket' : '/shop'}
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="signin"
              element={
                <RestrictedRoute
                  redirectTo={basket.length > 0 ? '/basket' : '/shop'}
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="forgot_password"
              element={
                <RestrictedRoute
                  redirectTo="/user/profile"
                  component={<ForgotPasswordPage />}
                />
              }
            />

            <Route path="shop" element={<CatalogPage />} />
            <Route path="shop/:category" element={<CatalogPage />} />
            <Route path="shop/byid/:id" element={<ProductCardPage />} />
            <Route
              path="shop/favorite"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<FavoritePage />}
                />
              }
            />
            <Route path="gifts" element={<GiftsPage />} />
            <Route path="discounts" element={<DiscountsShop />} />
            <Route path="care" element={<CarePage />} />

            <Route
              path="basket"
              element={
                <BasketRoute redirectTo="/shop" component={<BasketPage />} />
              }
            ></Route>

            <Route
              path="checkout"
              element={
                <BasketRoute
                  redirectTo="/shop"
                  component={<CheckOutPage />}
                  // <CheckOutPage />
                />
              }
            >
              <Route path="step1" element={<Step1 />} />
              <Route path="step2" element={<Step2 />} />
              <Route path="step3" element={<Step3 />} />
              <Route path="step4" element={<Step4 />} />
            </Route>

            <Route path="addition" element={<AdditionPage />}>
              <Route path="about_company" element={<AboutUs />} />
              <Route path="faq" element={<Faq />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="shipping" element={<Shipping />} />
              <Route path="guarantee" element={<Guarantee />} />
              <Route path="course" element={<Courses />} />
              <Route path="contact" element={<Contact />} />
              <Route path="careers" element={<Careers />} />
              <Route path="location" element={<Location />} />
              <Route path="rewards_program" element={<Rewards />} />
            </Route>

            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/signin" component={<UserPage />} />
              }
            >
              <Route
                path="profile"
                element={
                  <PrivateRoute redirectTo="/signin" component={<UserData />} />
                }
              />
              <Route
                path="orders"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<UserOrders />}
                  />
                }
              />
              <Route
                path="favorites"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<FavoritePage />}
                  />
                }
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
