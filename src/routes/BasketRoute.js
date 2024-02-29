import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFromStorage } from 'services/localStorService';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

export const BasketRoute = ({ component: Component, redirectTo = '/' }) => {
  const [userAnonimusID, _] = useState(
    getFromStorage('userAnonimusID') ? getFromStorage('userAnonimusID') : '',
  );
  const { contextBasket, setContextBasket } = useContext(StatusContext);
  const shouldRedirect =
    !contextBasket || contextBasket[0]?.optionData?.length === 0;
  contextBasket[0]?.optionData?.length === undefined;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

BasketRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};
