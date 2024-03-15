import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CatalogSort } from './CatalogSort/CatalogSort';
import { CatalogFilter } from './CatalogFilter/CatalogFilter';
import { Benefits } from './Benefits/Benefits';
import { CatalogList } from './CatalogList/CatalogList';
import { Pagination } from 'utils/pagination';
import { fetchData } from 'services/APIservice';
import {
  saveToStorage,
  getFromStorage,
  removeItem,
} from 'services/localStorService';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

import * as SC from './Catalog.styled';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { ReactComponent as Close } from 'images/svg/icon_close.svg';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

let perPage = 12;

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterState, setFilterState] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1,
  );
  // const routeParams = useParams();
  let initialState;
  getFromStorage('filters')
    ? (initialState = getFromStorage('filters'))
    : (initialState = {
        man_woman: [],
        category: [],
        maxPrice: '5000',
        minPrice: '0',
        product: [],
        sizes: [],
        page: page,
        perPage: perPage,
      });

  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filters, setFilters] = useState(initialState);

  // const [filters, setFilters] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(
    getFromStorage('sort') ? getFromStorage('sort') : '',
  );
  const { t } = useTranslation();

  const setPage = toPage => {
    searchParams.set('page', toPage);
    saveToStorage('page', toPage);
    setPages(toPage);

    // setSearchParams(searchParams);
  };

  // useEffect(() => {
  //   setParams();
  //   saveToStorage('filters', filterState);
  // }, []);

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
    handleActiveLabel('sizes');
    // handleActiveLabel('minPrice');
    // handleActiveLabel('maxPrice');
  };

  // =================================================>

  useEffect(() => {
    const checkFilter = getFromStorage('filters');
    const param = {};
    searchParams.getAll('man_woman')
      ? (param.man_woman = searchParams.getAll('man_woman'))
      : checkFilter.man_woman
      ? (param.man_woman = checkFilter.man_woman)
      : (param.man_woman = []);
    searchParams.getAll('category')
      ? (param.category = searchParams.getAll('category'))
      : checkFilter?.category
      ? (param.category = checkFilter?.category)
      : (param.category = []);
    searchParams.getAll('product')
      ? (param.product = searchParams.get('product'))
      : checkFilter?.product
      ? (param.product = checkFilter?.product)
      : (param.product = []);
    searchParams.getAll('sizes')
      ? (param.sizes = searchParams.getAll('sizes'))
      : checkFilter?.sizes
      ? (param.sizes = checkFilter?.sizes)
      : (param.sizes = []);
    searchParams.get('minPrice')
      ? (param.minPrice = searchParams.get('minPrice'))
      : checkFilter?.minPrice
      ? (param.minPrice = checkFilter?.minPrice)
      : (param.minPrice = '');
    searchParams.get('maxPrice')
      ? (param.maxPrice = searchParams.get('maxPrice'))
      : checkFilter?.maxPrice
      ? (param.maxPrice = checkFilter?.maxPrice)
      : (param.maxPrice = '');
    searchParams.get('page')
      ? (param.page = searchParams.get('page'))
      : getFromStorage('page')
      ? (param.page = getFromStorage('page'))
      : (param.page = page);
    searchParams.get('perPage')
      ? (param.perPage = searchParams.get('perPage'))
      : (param.perPage = perPage);
    setSearchParams(param);
  }, [page]);

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page, perPage };
      setPages(1);
      setSearchParams(params);
    }

    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog?${searchParams}`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data.catalog);
        setTotalPage(Math.ceil(data.total / perPage));
        if (data.total / (perPage * page) < 1) {
          setPage(1);
        }
        getSelectedFilter();
        getActiveLabel();
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t, page, perPage, searchParams, sort]);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/category`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setFilterState(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // useEffect(() => {
  //   setFilters(getFromStorage('filters'));
  //   setSearch(searchParams.get('search'));
  //   setSort(searchParams.get('sort'));
  //   setParams();

  //   if (selectedFilter.length === 0) {
  //     setParams();
  //   }
  // }, [selectedFilter, search, sort]);

  // useEffect(() => {
  //   window.addEventListener('unload', removeLocalStor);
  //   return () => {
  //     window.removeEventListener('unload', removeLocalStor);
  //   };
  // }, []);

  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => {
    setShowSort(state => !state);
    setShowFilter(false);
  };

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(state => !state);
    setShowSort(false);
  };

  const handleClick = () => {
    setShowSort(false);
    setShowFilter(false);
  };

  const removeLocalStor = () => {
    // removeItem('category');
    removeItem('filters');
  };

  const getSelectedFilter = () => {
    const LS = getFromStorage('filters');
    const LSvalues = Object.values(LS);
    const concat = (...arrays) =>
      [].concat(...arrays).filter(item => item !== '');
    const concated = concat(...LSvalues);
    setSelectedFilter(concated);
  };

  const removeSelectedFilter = e => {
    const deletedFilter = e.currentTarget.dataset.key;
    const newFilters = selectedFilter.filter(item => item !== deletedFilter);
    setSelectedFilter(newFilters);

    const LS = getFromStorage('filters');
    const LSentries = Object.entries(LS);

    for (const [key, value] of LSentries) {
      const arr = [key, value];

      if (arr[1].length !== 0) {
        if (Array.isArray(arr[1])) {
          const index = arr[1].findIndex(item => item === deletedFilter);
          if (index > -1) {
            arr[1].splice(index, 1);
            saveToStorage('filters', { ...LS, [arr[0]]: arr[1] });
            setFilters(prevState => ({ ...prevState, [arr[0]]: arr[1] }));
            setParams();
          }
        }
        if (!Array.isArray(arr[1])) {
          if (arr[0] == 'minPrice') {
            saveToStorage('filters', { ...LS, ['minPrice']: '0' });
            setFilters(prevState => ({ ...prevState, ['minPrice']: '0' }));
            setParams();
          }
          if (arr[0] == 'maxPrice') {
            saveToStorage('filters', { ...LS, ['maxPrice']: '5000' });
            setFilters(prevState => ({ ...prevState, ['maxPrice']: '5000' }));
            setParams();
          }
        }
      }
    }

    const checkboxes = document.querySelectorAll(
      `label[data-key="${deletedFilter}"]`,
    );
    checkboxes?.forEach(checkbox => checkbox.classList.remove('active_label'));
  };

  const setParams = () => {
    let params = Object.fromEntries(searchParams);

    if (filters.man_woman !== '') {
      params.man_woman = filters.man_woman;
    }
    if (filters.category !== '') {
      params.category = filters.category;
    }
    if (filters.product !== '') {
      params.product = filters.product;
    }
    if (filters.sizes !== '') {
      params.sizes = filters.sizes;
    }
    if (filters.minPrice !== '') {
      params.minPrice = filters.minPrice;
    }
    if (filters.maxPrice !== '') {
      params.maxPrice = filters.maxPrice;
    }
    if (filters.page !== '') {
      params.page = page;
    }
    if (filters.perPage !== '') {
      params.perPage = perPage;
    }
    setSearchParams(params);
  };

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.HeadlineShop $primary>SHOP</SC.HeadlineShop>
        <SC.Heading>
          <SC.HeadingBtnBox>
            <SC.SortBox>
              <SC.Accord onClick={toggleSort}>
                <span>SORT BY</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open sort list"
                  aria-expanded="false"
                >
                  <Open />
                </SC.IconBtn>
              </SC.Accord>
              {showSort && <CatalogSort />}
            </SC.SortBox>
          </SC.HeadingBtnBox>
        </SC.Heading>
        {search && (
          <SC.SearchResults>
            <span>Search results:</span> {search}
            <Close
              data-key="search"
              onClick={() => {
                setSearch('');
                searchParams.delete('search');
              }}
            />
          </SC.SearchResults>
        )}
        <SC.SelectedFilters>
          {/* {selectedFilter.map((filter, i) => {
            return (
              <label key={i} data-key={filter}>
                <span>{filter}</span>
                <Close
                  data-key={filter}
                  onClick={e => removeSelectedFilter(e)}
                />
              </label>
            );
          })} */}
        </SC.SelectedFilters>
        <SC.GridContainer onClick={handleClick}>
          <SC.FiltersContainer>
            <CatalogFilter
              filterState={filterState}
              setParams={setParams}
              filters={filters}
              setFilters={setFilters}
            />
          </SC.FiltersContainer>
          <SC.GridWrapper>
            {isLoading ? onLoading() : onLoaded()}
            {error && onFetchError(t('Whoops, something went wrong'))}
            {products.length > 0 && !error && (
              <CatalogList products={products} />
            )}
            <Pagination
              totalPage={totalPage}
              changePage={setPage}
              page={page}
            />
            {products.length === 0 && !isLoading && !error && (
              <Headline>Nothing found for these parameters...</Headline>
            )}
          </SC.GridWrapper>
        </SC.GridContainer>
      </SC.CatalogSection>
      <Benefits />
    </SC.CatalogContainer>
  );
};
