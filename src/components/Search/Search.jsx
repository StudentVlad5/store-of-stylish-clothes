import React, { useMemo, useState } from 'react'; //, useEffect
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { SearchResult } from './SearchResult/SearchResult';
import * as SC from './Search.styled';
import debounce from 'lodash.debounce';

export const Search = ({ onClose, toggleMobileMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') ? searchParams.get('search') : '',
  );
  const { t } = useTranslation();
  const debounceFn = useMemo(() => debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(e) {
    setParams(e);
  }

  function handleChange(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
    debounceFn(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setParams(searchQuery);
  }

  const setParams = search => {
    const params = getParams();
    if (!search) {
      delete params.search;
      setSearchParams(params);
      return;
    }
    if (search) {
      params.search = search;
      setSearchParams(params);
    }
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
        onSubmit={handleSubmit}
      >
        <SC.Label aria-label="Search">
          <SC.Input
            id="search"
            type="text"
            name="search"
            placeholder={t('Search')}
            value={searchQuery}
            onChange={handleChange}
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
          searchParams={searchParams}
        />
      </SC.FormContainer>
    </>
  );
};

Search.propTypes = {
  onClose: PropTypes.func,
  toggleMobileMenu: PropTypes.func,
};
