import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import * as SC from './CatalogSort.styled';
import { useTranslation } from 'react-i18next';

export const CatalogSort = ({ sort, setSort }) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    saveToStorage('sort', sort);
    setParams();
  }, [sort]);

  const setParams = () => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  const handleClick = type => {
    setSort(type);
    saveToStorage('sort', type);
    setParams();
  };

  return (
    <SC.SortList>
      {/* <SC.SortItem>
        <input
          id="rating"
          type="radio"
          name="sort"
          value="rating"
          defaultChecked={sort === 'rating'}
          onClick={e => {
            handleClick(e.target.value);
          }}
        />
        <label htmlFor="rating">Most Popular</label>
      </SC.SortItem>
      <SC.SortItem>
        <input
          id="name"
          type="radio"
          name="sort"
          value="name"
          defaultChecked={sort === 'name'}
          onClick={e => {
            handleClick(e.target.value);
          }}
        />
        <label htmlFor="name">Name</label>
      </SC.SortItem> */}
      <SC.SortItem>
        <input
          id="minMaxPrice"
          type="radio"
          name="sort"
          value="minMaxPrice"
          defaultChecked={sort === 'minMaxPrice'}
          onClick={e => {
            handleClick(e.target.value);
          }}
        />
        <label htmlFor="minMaxPrice">{t("Lowest Price")}</label>
      </SC.SortItem>
      <SC.SortItem>
        <input
          id="maxMinPrice"
          type="radio"
          name="sort"
          value="maxMinPrice"
          defaultChecked={sort === 'maxMinPrice'}
          onClick={e => {
            handleClick(e.target.value);
          }}
        />
        <label htmlFor="maxMinPrice">{t("Highest Price")}</label>
      </SC.SortItem>
      {/* <SC.SortItem>
        <input
          id="discount"
          type="radio"
          name="sort"
          value="discount"
          defaultChecked={sort === 'discount'}
          onClick={e => {
            handleClick(e.target.value);
          }}
        />
        <label htmlFor="discount">% Off</label>
      </SC.SortItem> */}
    </SC.SortList>
  );
};
