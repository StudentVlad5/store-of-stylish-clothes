import React, { useState } from 'react'; //, useEffect
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { SearchResult } from './SearchResult/SearchResult';
import * as SC from './Search.styled';

export const Search = ({ onClose, toggleMobileMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') ? searchParams.get('search') : '',
  );
  const { t } = useTranslation();

  const setParams = search => {
    const params = getParams();
    if (!search) {
      delete params.search;
      setSearchParams(params);
      return;
    }
    params.search = search;
    setSearchParams(params);
  };

  const getParams = () => {
    const params = Object.fromEntries(searchParams);
    return params;
  };

  return (
    <>
      <SC.Overlay onClick={onClose}></SC.Overlay>
      <SC.FormContainer
        name="form-search"
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          setParams(e.target.value);
          setSearchQuery(e.target.value);
        }}
      >
        <SC.Label aria-label="Search">
          <SC.Input
            id="search"
            type="text"
            name="search"
            placeholder={t('Search')}
            value={searchQuery}
            onChange={e => {
              setParams(e.target.value);
              setSearchQuery(e.target.value);
              if (e.target.value === '') {
                setParams('');
                setSearchQuery('');
              }
            }}
          />
        </SC.Label>
        <SC.ButtonSearch>
          <SC.IconSearch onClick={onClose} aria-label="Search" />
        </SC.ButtonSearch>
        {searchQuery !== '' && (
          <SC.ButtonClear
            type="button"
            onClick={e => {
              setParams('');
              setSearchQuery('');
            }}
            aria-label="Clear search"
          >
            <SC.IconClose />
          </SC.ButtonClear>
        )}
        <SearchResult
          onClose={onClose}
          searchQuery={searchQuery}
          toggleMobileMenu={toggleMobileMenu}
        />
      </SC.FormContainer>
    </>
  );
};

Search.propTypes = {
  onClose: PropTypes.func,
  toggleMobileMenu: PropTypes.func,
};
