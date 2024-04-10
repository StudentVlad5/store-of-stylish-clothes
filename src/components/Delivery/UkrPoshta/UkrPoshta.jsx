import React, { useState, useEffect } from 'react';
import schemas from 'utils/schemas';
import { Box, SelectInput } from '../Delivery.styled';
import { getListOfCitiesUP, getListOfDepartmentsUP } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { PoshtaTitle } from 'components/CheckOut/Order/Order.styled';
import { getFromStorage } from 'services/localStorService';
import { useTranslation } from 'react-i18next';

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    color: '#2F2F2F',
    border: state.isFocused ? '2px solid  #754F23' : '1px solid  #754F23',
    boxShadow: state.isFocused ? 'none' : 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '2px solid #754F23',
    },
  }),
  option: (base, state) => ({
    ...base,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#754F23' : '#FCF9F2',
    color: state.isSelected ? '#FCF9F2' : '#2F2F2F',
    '&:hover': {
      backgroundColor: '#754F23',
      color: '#FCF9F2',
    },
  }),
};

export const UkrPoshta = ({
  setSelectedCity_UP_NAME,
  setSelectedDepartment_UP,
  selectedCity_UP_NAME,
  setSelectedCity_UP,
}) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [listOfCities, setListOfSities] = useState([]);
  const [cityRef, setCityRef] = useState('');

  const [cityNameUP, setCityNameUP] = useState(
    getFromStorage('selectedCity_UP') ? getFromStorage('selectedCity_UP') : '',
  );
  const [checkCityNameUP, setCheckCityNameUP] = useState(
    getFromStorage('selectedCity_UP_NAME')
      ? getFromStorage('selectedCity_UP_NAME')
      : '',
  );
  // const [listOfCitiesUP, setListOfSitiesUP] = useState([]);
  const [departmentNameUP, setDepartmentNameUP] = useState(
    getFromStorage('selectedDepartment_UP')
      ? getFromStorage('selectedDepartment_UP')
      : '',
  );
  const [cityIDUP, setCityIDUP] = useState('');
  const [listOfDepartmentUP, setListOfDepartmentUP] = useState([]);

  //  get cities for Ukr Poshta
  useEffect(() => {
    async function getData(cityNameUP) {
      // setCheckCityNameUP(cityNameUP);
      setIsLoading(true);
      try {
        const { data } = await getListOfCitiesUP('/cities/up', {
          filter: cityNameUP,
        });
        // setListOfSitiesUP(data);
        const options = [];
        if (data !== '' && data !== undefined) {
          const list = [...data];
          list
            .filter(key =>
              key.CITY_UA.toLowerCase().includes(cityNameUP.toLowerCase()),
            )
            .forEach(key => {
              const obj = {};
              if (key.CITY_UA) {
                obj.value = key.CITY_ID;
                obj.label = key.CITY_UA + ` ` + key.REGION_UA + ` область`;
                options.push(obj);
              }
            });
        }
        setListOfSities(options);
        if (!data) {
          return console.log(t('Whoops, something went wrong'));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (checkCityNameUP !== cityNameUP && cityNameUP.length > 2) {
      getData(cityNameUP);
    }
  }, [cityNameUP, checkCityNameUP]);

  // get departments for Ukr Poshta
  useEffect(() => {
    async function getData() {
      setCityIDUP(cityRef);
      setIsLoading(true);
      try {
        const { data } = await getListOfDepartmentsUP('/departments/up', {
          filter: cityRef,
        });
        setListOfDepartmentUP(data);
        if (!data) {
          return console.log(t('Whoops, something went wrong'));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (
      Number(cityRef) &&
      cityRef !== '' &&
      cityRef !== undefined &&
      cityRef !== cityIDUP
    ) {
      getData();
    }
  }, [selectedCity_UP_NAME, cityRef]);

  function oUP() {
    const options = [];
    if (listOfDepartmentUP) {
      const list = [...listOfDepartmentUP];
      list
        .filter(key => key.IS_SECURITY === '0')
        .forEach(key => {
          const obj = {};
          if (key.ID) {
            obj.value =
              key.PO_SHORT + ' ' + key.ADDRESS + ' код відділення: ' + key.ID;
            obj.label =
              key.PO_SHORT + ' ' + key.ADDRESS + ' код відділення: ' + key.ID;
            options.push(obj);
          }
        });
    }
    return options;
  }

  return (
    <>
      <Box>
        <PoshtaTitle>{t('City')}</PoshtaTitle>
        <SelectInput
          name="cityNameUP"
          type="text"
          className="basic-single"
          // classNamePrefix="select"
          onInputChange={e => setCityNameUP(e)}
          onChange={e => {
            if (e?.value) {
              setCityNameUP(e.value);
              setCityRef(e.value);
              setSelectedCity_UP_NAME(e.label);
              setSelectedCity_UP(e.label);
            }
          }}
          defaultValue={cityNameUP}
          isDisabled={false}
          isClearable={true}
          isSearchable={true}
          options={listOfCities}
          placeholder={
            selectedCity_UP_NAME === ''
              ? t('Select city please...')
              : selectedCity_UP_NAME
          }
          styles={customStyles}
          classNamePrefix="custom-select"
        />
      </Box>

      <Box>
        <PoshtaTitle>{t('Point office')}</PoshtaTitle>
        <SelectInput
          name="departmentNameUP"
          type="text"
          className="basic-single"
          // classNamePrefix="select"
          onInputChange={e => setDepartmentNameUP(e)}
          defaultValue={departmentNameUP}
          isDisabled={typeof +checkCityNameUP !== 'number'}
          isClearable={true}
          isSearchable={true}
          validate={schemas.checkDepartmentNP.department}
          options={oUP(departmentNameUP)}
          placeholder={
            departmentNameUP === ''
              ? t('Select department please...')
              : departmentNameUP
          }
          onChange={e => {
            if (e?.value) {
              setSelectedDepartment_UP(e.value);
            }
          }}
          styles={customStyles}
          classNamePrefix="custom-select"
        />
      </Box>
      {isLoading ? onLoading() : onLoaded()}
    </>
  );
};
