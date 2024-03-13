import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

// import { fetchData } from 'services/APIservice';
import { getFromStorage, saveToStorage } from 'services/localStorService';
// import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import * as SC from './CatalogFilter.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

export const CatalogFilter = ({
  filterState,
  setParams,
  filters,
  initialState,
  setFilters,
}) => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const routeParams = useParams();
  // const [error, setError] = useState(null);
  const { t } = useTranslation();

  const min = Math.min.apply(
    Math,
    products.flatMap(product => product.currentPrice),
  );
  const max = Math.max.apply(
    Math,
    products.flatMap(product => product.currentPrice),
  );

  // save to local stor selected filter elements
  useEffect(() => {
    saveToStorage('filters', filters);
    setParams();
  }, [filters]);

  // get selected filter elements after refresh
  const handleActiveLabel = key => {
    const filtersFromLS = getFromStorage('filters');
    const selectedFilters = filtersFromLS[key];
    if (selectedFilters) {
      selectedFilters.forEach(item => {
        const checkboxes = document.querySelectorAll(
          `label[data-key="${item}"]`,
        );
        checkboxes?.forEach(checkbox => checkbox.classList.add('active_label'));
      });
    }
  };

  const getActiveLabel = () => {
    handleActiveLabel('man_woman');
    handleActiveLabel('category');
    handleActiveLabel('product');
    handleActiveLabel('size');
    handleActiveLabel('minPrice');
    handleActiveLabel('maxPrice');
  };

  const toggleFilterItem = e => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('active');
  };

  const toggleChecked = e => {
    // e.preventDefault();
    const checked = document.querySelectorAll(
      `label[data-key="${e.currentTarget.dataset.input}"]`,
    );
    checked.forEach(check => {
      if (check.classList.contains('active_label')) {
        check.classList.remove('active_label');
        e.currentTarget.removeAttribute('checked');
      } else {
        check.classList.add('active_label');
        e.currentTarget.setAttribute('checked', 'true');
      }
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    toggleChecked(e);
    if (name === 'man_woman') {
      const selectedFilters = {
        ...filters,
        [name]: value,
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      setParams();
    }
    if (name === 'minPrice') {
      const selectedFilters = {
        ...filters,
        [name]: value,
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      setParams();
    }
    if (name === 'maxPrice') {
      const selectedFilters = {
        ...filters,
        [name]: value,
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      setParams();
    }

    const selectedFilter = filters[name];
    if (selectedFilter.includes(value)) {
      const removeDuplicate = selectedFilter.filter(item => item !== value);
      const selectedFilters = {
        ...filters,
        [name]: [...removeDuplicate],
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      setParams();
    } else {
      const selectedFilters = {
        ...filters,
        [name]: [...selectedFilter, value],
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      setParams();
    }
  };

  const handleClearAllFilters = () => {
    setFilters(initialState);
    saveToStorage('filters', initialState);
    setSearchParams({ page: 1, perPage: 12 });

    const listOfLabel = document.querySelectorAll('.active_label');
    listOfLabel.forEach(item => item.classList.remove('active_label'));
  };

  return (
    <>
      <SC.Filters>
        {filterState[0]?.level_1.length > 0 && (
          <SC.Filter>
            <SC.FilterHeading
              data-key="man_woman"
              onClick={e => {
                toggleFilterItem(e);
              }}
            >
              <span>{t('MAN OR WOMAN')}</span>
              <SC.IconBtn
                type="button"
                aria-label="switch to open filter"
                aria-expanded="false"
              >
                <Open />
              </SC.IconBtn>
            </SC.FilterHeading>
            <SC.FilterInnerList>
              {filterState[0]?.level_1.map((card, i) => {
                return (
                  <label key={i} data-key={card}>
                    <SC.FilterInnerListItem
                      type="checkbox"
                      name="man_woman"
                      value={card}
                      data-input={card}
                      // defaultChecked={filters['man_woman'].includes(card)}
                      onChange={e => {
                        handleChange(e);
                      }}
                    />
                    <span>{card}</span>
                  </label>
                );
              })}
            </SC.FilterInnerList>
          </SC.Filter>
        )}

        {filterState[0]?.level_2.length > 0 && (
          <SC.Filter>
            <SC.FilterHeading
              data-key="category"
              onClick={e => {
                toggleFilterItem(e);
              }}
            >
              <span>{t('CATEGORY')}</span>
              <SC.IconBtn
                type="button"
                aria-label="switch to open filter"
                aria-expanded="false"
              >
                <Open />
              </SC.IconBtn>
            </SC.FilterHeading>
            <SC.FilterInnerList>
              {filterState[0]?.level_2.map((card, i) => {
                return (
                  <label key={i} data-key={card}>
                    <SC.FilterInnerListItem
                      type="checkbox"
                      name="category"
                      value={card}
                      data-input={card}
                      // defaultChecked={filters['category'].includes(card)}
                      onChange={e => {
                        handleChange(e);
                      }}
                    />
                    <span>{card}</span>
                  </label>
                );
              })}
            </SC.FilterInnerList>
          </SC.Filter>
        )}

        {filterState[0]?.level_3.length > 0 && (
          <SC.Filter>
            <SC.FilterHeading
              data-key="product"
              onClick={e => {
                toggleFilterItem(e);
              }}
            >
              <span>{t('PRODUCT NAME')}</span>
              <SC.IconBtn
                type="button"
                aria-label="switch to open filter"
                aria-expanded="false"
              >
                <Open />
              </SC.IconBtn>
            </SC.FilterHeading>
            <SC.FilterInnerList>
              {filterState[0]?.level_3.map((card, i) => {
                return (
                  <label key={i} data-key={card}>
                    <SC.FilterInnerListItem
                      type="checkbox"
                      name="product"
                      value={card}
                      data-input={card}
                      // defaultChecked={filters['product'].includes(card)}
                      onChange={e => {
                        handleChange(e);
                      }}
                    />
                    <span>{card}</span>
                  </label>
                );
              })}
            </SC.FilterInnerList>
          </SC.Filter>
        )}

        {filterState[0]?.level_4.length > 0 && (
          <SC.Filter>
            <SC.FilterHeading
              data-key="size"
              onClick={e => {
                toggleFilterItem(e);
              }}
            >
              <span>{t('SIZE')}</span>
              <SC.IconBtn
                type="button"
                aria-label="switch to open filter"
                aria-expanded="false"
              >
                <Open />
              </SC.IconBtn>
            </SC.FilterHeading>
            <SC.FilterInnerList>
              {filterState[0]?.level_4.map((card, i) => {
                return (
                  <label key={i} data-key={card}>
                    <SC.FilterInnerListItem
                      type="checkbox"
                      name="size"
                      value={card}
                      data-input={card}
                      // defaultChecked={filters['size'].includes(card)}
                      onChange={e => {
                        handleChange(e);
                      }}
                    />
                    <span>{card}</span>
                  </label>
                );
              })}
            </SC.FilterInnerList>
          </SC.Filter>
        )}

        <SC.Filter>
          <SC.FilterHeading
            data-key="price"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('PRICE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            <SC.RangeWrapper>
              <label>
                From
                <SC.FilterInnerListItem
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  disabled={filters.minPrice === 0}
                  placeholder={min}
                  onChange={e => {
                    setFilters({ ...filters, ['minPrice']: e.target.value });
                    setParams();
                  }}
                />
                <>$</>
              </label>
              <label>
                To
                <SC.FilterInnerListItem
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice === 3000}
                  disabled={filters.maxPrice === 0}
                  placeholder={max}
                  onChange={e => {
                    setFilters({ ...filters, ['maxPrice']: e.target.value });
                    setParams();
                  }}
                />
                <>$</>
              </label>
            </SC.RangeWrapper>
            <SC.RangeLabel>
              <Range
                range
                // draggableTrack
                min={min}
                max={max}
                value={[filters.minPrice, filters.maxPrice]}
                defaultValue={[min, max]}
                step={1}
                pushable={(true, 1)}
                disabled={filters.minPrice === 0}
                onChange={value => {
                  setFilters({
                    ...filters,
                    ['minPrice']: value[0],
                    ['maxPrice']: value[1],
                  });
                  setParams();
                }}
              />
            </SC.RangeLabel>
          </SC.FilterInnerList>
        </SC.Filter>
      </SC.Filters>
      <SC.FilterBtn type="button" onClick={handleClearAllFilters}>
        {t('CLEAR ALL')}
      </SC.FilterBtn>
    </>
  );
};
