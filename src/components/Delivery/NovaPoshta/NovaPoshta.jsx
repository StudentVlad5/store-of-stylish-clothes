import React, { useState, useEffect } from 'react';
import schemas from 'utils/schemas';
import { Box, SelectInput } from '../Delivery.styled';
import { getListOfCities, getListOfDepartments } from 'services/APIservice';
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

export const NovaPoshta = ({ setSelectedCity, setSelectedDepartment }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState(
    getFromStorage('selectedCity') ? getFromStorage('selectedCity') : '',
  );
  const [checkCityName, setCheckCityName] = useState('');
  const [listOfCities, setListOfSities] = useState([]);

  const [departmentName, setDepartmentName] = useState(
    getFromStorage('selectedDepartment')
      ? getFromStorage('selectedDepartment')
      : '',
  );
  const [cityRef, setCityRef] = useState('');
  const [checkCityRef, setCheckCityRef] = useState('');
  // const [listOfDepartment, setListOfDepartment] = useState([]);
  const [optionOfDepartment, setOptionOfDepartment] = useState([]);
  const [optionListOfCities, setOptionListOfCities] = useState([]);

  //  get cities for Nova Poshta
  useEffect(() => {
    async function getData(cityName) {
      setCheckCityName(cityName);
      setCityName(cityName);
      setIsLoading(true);
      try {
        const { data } = await getListOfCities('/cities', { filter: cityName });
        setListOfSities(data);
        const options = [];
        const list = [...data];
        list
          .filter(key =>
            key.Description.toLowerCase()
              .split('(')[0]
              .includes(cityName.toLowerCase()),
          )
          .forEach(key => {
            const obj = {};
            if (key.Description) {
              obj.value = key.Description;
              obj.label = key.Description + ', ' + key.AreaDescription;
              options.push(obj);
            }
          });
        setOptionListOfCities(options);
        let departmentCity;
        departmentCity = data.filter(
          key => key.Description === checkCityName,
        )[0];
        if (departmentCity && departmentCity.Ref !== cityRef) {
          setCityRef(departmentCity.Ref);
        }
        if (!data) {
          return console.log(t('Whoops, something went wrong'));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (checkCityName !== cityName && cityName.length > 2) {
      getData(cityName);
    } else if (checkCityName !== cityName && checkCityName.length > 2) {
      getData(checkCityName);
    }
  }, [cityName, checkCityName]);

  // get departments for Nova Poshta
  useEffect(() => {
    async function getData() {
      setCheckCityRef(cityRef);
      setIsLoading(true);
      try {
        const { data } = await getListOfDepartments('/departments', {
          filter: cityRef,
        });
        // setListOfDepartment(data);
        const options = [];
        data
          // .filter(key =>
          //   key.Description.toLowerCase().includes(city.toLowerCase()),
          // )
          .forEach(key => {
            const obj = {};
            if (key.Description) {
              obj.value = key.Description;
              obj.label = key.Description;
              options.push(obj);
            }
          });
        setOptionOfDepartment(options);
        if (!data) {
          return console.log(t('Whoops, something went wrong'));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (cityRef !== checkCityRef) {
      getData();
    }
  }, [cityRef, checkCityRef]);

  return (
    <>
      <Box>
        <PoshtaTitle>{t('City')}</PoshtaTitle>
        <SelectInput
          key={cityRef}
          name="cityName"
          type="text"
          className="basic-single"
          // classNamePrefix="select"
          onInputChange={e => setCityName(e)}
          onChange={e => {
            if (e?.value) {
              // setCityName(e.value)
              setSelectedCity(e.value);
              setCheckCityName(e.value);
            }
          }}
          defaultValue={cityName} //cityName
          isDisabled={false}
          isClearable={true}
          isSearchable={true}
          validate={schemas.checkDepartmentNP.city}
          options={optionListOfCities}
          placeholder={cityName === '' ? t('Select city please...') : cityName}
          styles={customStyles}
          classNamePrefix="custom-select"
        />
      </Box>
      <Box>
        <PoshtaTitle>{t('Point office')}</PoshtaTitle>

        <SelectInput
          key={cityRef}
          name="departmentName"
          type="text"
          className="basic-single"
          onInputChange={e => setDepartmentName(e)}
          defaultValue={departmentName}
          isDisabled={!cityRef}
          isClearable={true}
          isSearchable={true}
          validate={schemas.checkDepartmentNP.department}
          options={optionOfDepartment}
          placeholder={
            departmentName === ''
              ? t('Select department please...')
              : departmentName
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
