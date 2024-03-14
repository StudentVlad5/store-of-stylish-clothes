import React, { useState, useEffect } from 'react';
import schemas from 'utils/schemas';
import { Box, SelectInput } from '../Delivery.styled';
import { getListOfCitiesUP, getListOfDepartmentsUP } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { PoshtaTitle } from 'components/CheckOut/Order/Order.styled';
import { getFromStorage } from 'services/localStorService';

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    color:'#2F2F2F',
    border: state.isFocused ? '2px solid  #754F23' : '1px solid  #754F23',
    boxShadow: state.isFocused ? 'none' : 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '2px solid #754F23'
    }
  }),
  option: (base, state) => ({
    ...base,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#754F23' : '#FCF9F2',
    color: state.isSelected ? '#FCF9F2' : '#2F2F2F',
    '&:hover': {
      backgroundColor: '#754F23',
      color: '#FCF9F2'
    }
  })
};

export const UkrPoshta = ({
  setSelectedCity_UP_NAME,
  setSelectedCity,
  setSelectedDepartment,
  selectedCity_UP_NAME,
}) => {
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
  const [listOfCitiesUP, setListOfSitiesUP] = useState([]);

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
      setCheckCityNameUP(cityNameUP);
      setIsLoading(true);
      try {
        const { data } = await getListOfCitiesUP('/cities/up', {
          filter: cityNameUP,
        });
        setListOfSitiesUP(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (checkCityNameUP !== cityNameUP && cityNameUP.length > 2) {
      getData(cityNameUP);
    }
  }, [cityNameUP, checkCityNameUP]);

  let departmentCity;

  if (listOfCities) {
    departmentCity = listOfCities.filter(
      key => key.Description === checkCityName,
    )[0];
  }
  if (departmentCity && departmentCity.Ref !== cityRef) {
    setCityRef(departmentCity.Ref);
  }

  // get departments for Ukr Poshta
  useEffect(() => {
    async function getData() {
      setCityIDUP(checkCityNameUP);
      setIsLoading(true);
      try {
        const { data } = await getListOfDepartmentsUP('/departments/up', {
          filter: checkCityNameUP,
        });
        setListOfDepartmentUP(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (
      Number(checkCityNameUP) &&
      checkCityNameUP !== '' &&
      checkCityNameUP !== undefined
    ) {
      getData();
    }
  }, [checkCityNameUP]);

  // options for UKR Poshta

  function optionsUP(city) {
    const options = [];
    if (
      listOfCitiesUP !== '' &&
      listOfCitiesUP !== undefined &&
      Array.isArray(listOfCitiesUP)
    ) {
      const list = [...listOfCitiesUP];
      list
        .filter(key => key.CITY_UA.toLowerCase().includes(city.toLowerCase()))
        .forEach(key => {
          const obj = {};
          if (key.CITY_UA) {
            obj.value = key.CITY_ID;
            obj.label = key.CITY_UA + ` ` + key.REGION_UA + ` область`;
            options.push(obj);
          }
        });
    }

    return options;
  }

  function oUP(city) {
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
        <PoshtaTitle>City</PoshtaTitle>
        <SelectInput
          name="cityNameUP"
          type="text"
          className="basic-single"
          // classNamePrefix="select"
          onInputChange={e => setCityNameUP(e)}
          onChange={e => {
            if (e?.value) {
              setCityNameUP(e.value);
              setSelectedCity(e.value);
              setSelectedCity_UP_NAME(e.label);
            }
          }}
          defaultValue={cityNameUP}
          isDisabled={false}
          isClearable={true}
          isSearchable={true}
          options={optionsUP(cityNameUP)}
          placeholder={
            selectedCity_UP_NAME === ''
              ? 'Select city please...'
              : selectedCity_UP_NAME
          }
          styles={customStyles}
          classNamePrefix="custom-select"
        />
      </Box>

      <Box>
        <PoshtaTitle>Point office</PoshtaTitle>
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
              ? 'Select department please...'
              : departmentNameUP
          }
          onChange={e => {
            if (e?.value) {
              setSelectedDepartment(e.value);
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
