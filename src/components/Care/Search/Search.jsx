import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import * as SC from './Search.styled';

export const Search = ({ searchQuery, setSearchQuery }) => {
  const { t } = useTranslation();

  return (
    <>
      <SC.FormContainer>
        <SC.Label aria-label="Search">
          <SC.Input
            id="searchList"
            type="text"
            name="search"
            placeholder={t('Search')}
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
            }}
          />
        </SC.Label>
        {searchQuery !== '' && (
          <SC.ButtonClear
            type="button"
            onClick={() => {
              setSearchQuery('');
            }}
            aria-label="Clear search"
          >
            <SC.IconClose />
          </SC.ButtonClear>
        )}
      </SC.FormContainer>
    </>
  );
};

Search.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};
