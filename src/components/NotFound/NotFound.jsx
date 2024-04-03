import React from 'react';
import * as SC from './NotFound.styled';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SC.ErrorBox>
      <SC.ErrorBoxText>
        <SC.ErrorDiscr>{t('Page under development')}</SC.ErrorDiscr>
        <SC.ErrorBtn
          aria-label="switch to return to home page"
          onClick={() =>
            navigate(-1) !== undefined && navigate(-1) !== ''
              ? navigate(-1)
              : '/'
          }
        >
          {t('Back')}
        </SC.ErrorBtn>
      </SC.ErrorBoxText>
    </SC.ErrorBox>
  );
};
