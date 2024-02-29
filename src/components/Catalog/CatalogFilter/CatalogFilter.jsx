import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

import { fetchData } from 'services/APIservice';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import * as SC from './CatalogFilter.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

const initialState = {
  typeOfPlants: [],
  rare: [],
  light: [],
  petFriendly: [],
  minPrice: '',
  maxPrice: '',
  hardToKill: [],
  potSize: [],
  waterSchedule: [],
};

export const CatalogFilter = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('plants');
  const [searchParams, setSearchParams] = useSearchParams();
  const filterState = {
    typeOfPlants:
      searchParams.getAll('typeOfPlants') !== undefined
        ? searchParams.getAll('typeOfPlants')
        : [],
    rare:
      searchParams.getAll('rare') !== undefined
        ? searchParams.getAll('rare')
        : [],
    light:
      searchParams.getAll('light') !== undefined
        ? searchParams.getAll('light')
        : [],
    petFriendly:
      searchParams.getAll('petFriendly') !== undefined
        ? searchParams.getAll('petFriendly')
        : [],
    minPrice:
      searchParams.get('minPrice') !== undefined &&
      searchParams.get('minPrice') !== null
        ? searchParams.get('minPrice')
        : '',
    maxPrice:
      searchParams.get('maxPrice') !== undefined &&
      searchParams.get('maxPrice') !== null
        ? searchParams.get('maxPrice')
        : '',
    hardToKill:
      searchParams.getAll('hardToKill') !== undefined
        ? searchParams.getAll('hardToKill')
        : [],
    potSize:
      searchParams.getAll('potSize') !== undefined
        ? searchParams.getAll('potSize')
        : [],
    waterSchedule:
      searchParams.getAll('waterSchedule') !== undefined
        ? searchParams.getAll('waterSchedule')
        : [],
  };
  const [filters, setFilters] = useState(
    getFromStorage('filters') ? getFromStorage('filters') : initialState,
    // filterState,
  );
  const routeParams = useParams();
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const min = Math.min.apply(
    Math,
    products.flatMap(product => product.currentPrice),
  );
  const max = Math.max.apply(
    Math,
    products.flatMap(product => product.currentPrice),
  );

  // get all filter elements
  useEffect(() => {
    (async function getData() {
      try {
        const { data } = await fetchData(`/catalog/${category}`);
        getActiveLabel();
        setCategory(routeParams.category);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data.catalog);
      } catch (error) {
        setError(error);
      }
    })();
  }, [t]);

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
    handleActiveLabel('typeOfPlants');
    handleActiveLabel('rare');
    handleActiveLabel('light');
    handleActiveLabel('petFriendly');
    handleActiveLabel('minPrice');
    handleActiveLabel('maxPrice');
    handleActiveLabel('hardToKill');
    handleActiveLabel('potSize');
    handleActiveLabel('waterSchedule');
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

  const getUniqueOptions = key => {
    if (key === 'potSize') {
      const uniqueSizes = [];
      const array = [
        ...new Set(
          products.map(item => item[key]).filter(item => item !== undefined),
        ),
      ];
      const unique = array
        .sort((a, b) => a.size - b.size)
        .filter(element => {
          const isDuplicate = uniqueSizes.includes(element.size);
          if (!isDuplicate) {
            uniqueSizes.push(element.size);
            return true;
          }
          return false;
        });
      return unique;
    }

    const unique = [
      ...new Set(
        products.map(item => item[key]).filter(item => item !== undefined),
      ),
    ];
    return unique.sort();
  };

  const setParams = () => {
    let params = Object.fromEntries(searchParams);

    if (filters.typeOfPlants !== '') {
      params.typeOfPlants = filters.typeOfPlants;
    }
    if (filters.rare !== '') {
      params.rare = filters.rare;
    }
    if (filters.light !== '') {
      params.light = filters.light;
    }
    if (filters.petFriendly !== '') {
      params.petFriendly = filters.petFriendly;
    }
    if (filters.minPrice !== '') {
      params.minPrice = filters.minPrice;
    }
    if (filters.maxPrice !== '') {
      params.maxPrice = filters.maxPrice;
    }
    if (filters.hardToKill !== '') {
      params.hardToKill = filters.hardToKill;
    }
    if (filters.potSize !== '') {
      params.potSize = filters.potSize;
    }
    if (filters.waterSchedule !== '') {
      params.waterSchedule = filters.waterSchedule;
    }

    setSearchParams(params);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    toggleChecked(e);

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
        <SC.Filter>
          <SC.FilterHeading
            data-key="typeOfPlants"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('TYPE OF PLANTS')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('typeOfPlants').map((card, i) => {
              return (
                <label key={i} data-key={card}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="typeOfPlants"
                    value={card}
                    data-input={card}
                    defaultChecked={filters['typeOfPlants'].includes(card)}
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
        <SC.Filter>
          <SC.FilterHeading
            data-key="rare"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('RARE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('rare').map((card, i) => {
              return (
                <label key={i} data-key={card}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="rare"
                    value={card}
                    data-input={card}
                    defaultChecked={filters['rare'].includes(card)}
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
        <SC.Filter>
          <SC.FilterHeading
            data-key="petFriendly"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('PET FRIENDLY')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('petFriendly').map((card, i) => {
              return (
                <label key={i} data-key={card}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="petFriendly"
                    value={card}
                    data-input={card}
                    defaultChecked={filters['petFriendly'].includes(card)}
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
        <SC.Filter>
          <SC.FilterHeading
            data-key="hardToKill"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('HARD TO KILL')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('hardToKill').map((card, i) => {
              return (
                <label key={i} data-key={card}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="hardToKill"
                    value={card}
                    data-input={card}
                    defaultChecked={filters['hardToKill'].includes(card)}
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
        <SC.Filter>
          <SC.FilterHeading
            data-key="light"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('LIGHT')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('light').map((card, i) => {
              return (
                <label key={i} data-key={card}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                    data-input={card}
                    defaultChecked={filters['light'].includes(card)}
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
        <SC.Filter>
          <SC.FilterHeading
            data-key="waterSchedule"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('WATER SCHEDULE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('waterSchedule').map((card, i) => {
              return (
                <label key={i} data-key={card}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="waterSchedule"
                    value={card}
                    data-input={card}
                    defaultChecked={filters['waterSchedule'].includes(card)}
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
        <SC.Filter>
          <SC.FilterHeading
            data-key="potSize"
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('POT SIZE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('potSize').map((card, i) => {
              return (
                <label key={i} data-key={card.size}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="potSize"
                    value={card.size}
                    data-input={card.size}
                    defaultChecked={filters['potSize'].includes(card.size)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>
                    {card.size} {card.unit}
                  </span>
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
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
                  value={filters.maxPrice}
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
