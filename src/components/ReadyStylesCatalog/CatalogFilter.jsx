import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import { saveToStorage } from 'services/localStorService';
import * as SC from '../Catalog/CatalogFilter/CatalogFilter.styled';
import { ReactComponent as Open } from 'images/svg/open.svg';
import debounce from 'lodash.debounce';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

export const CatalogFilter = ({
  filterState,
  setParams,
  filters,
  setFilters,
  searchParams,
  setSearchParams,
  selectedLanguage,
}) => {
  const { t } = useTranslation();
  const { selectedCurrency } = useContext(StatusContext);

  const min = 0;
  const max = 5000;

  // debounce
  const onChange = e => {
    setFilters({
      ...filters,
      ['minPrice']: e[0],
      ['maxPrice']: e[1],
    });
    setParams();
  };

  const debouncedOnChange = debounce(onChange, 500);

  // save to local stor selected filter elements
  useEffect(() => {
    saveToStorage('filters', filters);
    setParams();
  }, [filters]);

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

  function handleChange(e) {
    const { name, value } = e.target;
    toggleChecked(e);
    // if (name === 'man_woman') {
    const selectedFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(selectedFilters);
    saveToStorage('filters', selectedFilters);
    // setParams();
    const selectedFilter = filters[name];
    if (selectedFilter && selectedFilter.includes(value)) {
      const removeDuplicate = selectedFilter.filter(item => item !== value);
      const selectedFilters = {
        ...filters,
        [name]: [...removeDuplicate],
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      // setParams();
    } else {
      const selectedFilters = {
        ...filters,
        [name]: [...selectedFilter, value],
      };
      setFilters(selectedFilters);
      saveToStorage('filters', selectedFilters);
      // setParams();
    }
  }

  const handleClearAllFilters = () => {
    setFilters({
      man_woman: [],
      category: [],
      maxPrice: '5000',
      minPrice: '0',
      product: [],
      sizes: [],
      page: 1,
      perPage: 12,
    });
    saveToStorage('filters', {
      man_woman: [],
      category: [],
      maxPrice: '5000',
      minPrice: '0',
      product: [],
      sizes: [],
      page: 1,
      perPage: 12,
    });
    setSearchParams({
      man_woman: [],
      category: [],
      maxPrice: '5000',
      minPrice: '0',
      product: [],
      sizes: [],
      page: 1,
      perPage: 12,
    });

    const listOfLabel = document.querySelectorAll('.active_label');
    listOfLabel.forEach(item => item.classList.remove('active_label'));
    const button = document.querySelector('.filter-btn');
    button.classList.toggle('active');
  };

  return (
    <>
      <SC.Filters>
        {filterState[0]?.level_1[selectedLanguage] &&
          filterState[0]?.level_1[selectedLanguage].length > 0 && (
            <SC.Filter>
              <SC.FilterHeading
                className="active"
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
                  <Open className="openArrow" />
                </SC.IconBtn>
              </SC.FilterHeading>
              <SC.FilterInnerList>
                {filterState[0]?.level_1[selectedLanguage] &&
                  filterState[0]?.level_1[selectedLanguage].map((card, i) => {
                    return (
                      <label
                        key={searchParams?.size > 0 ? i + searchParams : i}
                        data-key={card}
                      >
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

        {/* {filterState[0]?.level_2[selectedLanguage] && filterState[0]?.level_2[selectedLanguage].length > 0 && (
          <SC.Filter>
            <SC.FilterHeading
              className="active"
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
              {filterState[0]?.level_2[selectedLanguage] &&
                filterState[0]?.level_2[selectedLanguage].map((card, i) => {
                  return (
                    <label
                      key={searchParams?.size > 0 ? i + searchParams : i}
                      data-key={card}
                    >
                      <SC.FilterInnerListItem
                        type="checkbox"
                        name="category"
                        value={card}
                        data-input={card}
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
        )} */}

        {/* {filters &&
          filterState[0]?.level_2[selectedLanguage] &&
          filterState[0]?.level_2[selectedLanguage].map((card, i) => {
            if (filters?.category.includes(card))
              return (
                <div style={{ width: '100%' }} key={i}>
                  <SC.Filter>
                    <SC.FilterHeading
                      className="active"
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
                      {filters?.category.includes(card) &&
                        filterState[0]?.level_3[selectedLanguage] &&
                        filterState[0]?.level_3[selectedLanguage][card].map((card, i) => {
                          return (
                            <label
                              key={
                                searchParams?.size > 0 ? i + searchParams : i
                              }
                              data-key={card}
                            >
                              <SC.FilterInnerListItem
                                type="checkbox"
                                name="product"
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
                        })
                      }
                    </SC.FilterInnerList>
                  </SC.Filter>
                  {filterState[0]?.level_4[selectedLanguage][card]?.length > 0 && (
                    <SC.Filter>
                      <SC.FilterHeading
                        data-key="sizes"
                        onClick={e => {
                          toggleFilterItem(e);
                        }}
                      >
                        <span>
                          {t('Size')} {card}
                        </span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                        >
                          <Open />
                        </SC.IconBtn>
                      </SC.FilterHeading>
                      <SC.FilterInnerList>
                        {filterState[0]?.level_4[selectedLanguage] &&
                          filterState[0]?.level_4[selectedLanguage][card]?.length > 0 &&
                          filterState[0]?.level_4[selectedLanguage][card].map((card, i) => {
                            return (
                              <label
                                key={
                                  searchParams?.size > 0 ? i + searchParams : i
                                }
                                data-key={card}
                              >
                                <SC.FilterInnerListItem
                                  type="checkbox"
                                  name="sizes"
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
                </div>
              );
          })} */}

        {/* <SC.Filter>
          <SC.FilterHeading
            data-key="price"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('Price')}</span>
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
                {t('From')}
                <SC.FilterInnerListItem
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  // disabled={filters.minPrice}
                  placeholder={min}
                  onChange={e => {
                    setFilters({ ...filters, ['minPrice']: e.target.value });
                    setParams();
                  }}
                />
                {selectedCurrency === 'ua' && '₴'}
                {selectedCurrency === 'usd' && '$'}
                {selectedCurrency === 'euro' && '€'}
              </label>
              <label>
                {t('To')}
                <SC.FilterInnerListItem
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  // disabled={filters.maxPrice}
                  placeholder={max}
                  onChange={e => {
                    setFilters({ ...filters, ['maxPrice']: e.target.value });
                    setParams();
                  }}
                />
                {selectedCurrency === 'ua' && '₴'}
                {selectedCurrency === 'usd' && '$'}
                {selectedCurrency === 'euro' && '€'}
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
                // disabled={filters.minPrice === 0}
                onChange={debouncedOnChange}
              />
            </SC.RangeLabel>
          </SC.FilterInnerList>
        </SC.Filter> */}
      </SC.Filters>
      <SC.FilterBtn
        className="filter-btn"
        type="button"
        onClick={handleClearAllFilters}
      >
        {t('CLEAR ALL')}
      </SC.FilterBtn>
    </>
  );
};
