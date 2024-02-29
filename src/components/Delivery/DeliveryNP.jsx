import React, { useState, useEffect } from 'react';
import schemas from 'utils/schemas';
import { FormContainer, Div, SelectInput } from './Delivery.styled';
import { getListOfCities, getListOfDepartments } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { saveToStorage, getFromStorage } from 'services/localStorService';

const DeliveryNP = ({
  novaPoshta,
  department,
  setCityNameNovaPosta,
  setDepartmentNameNovaPosta,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkCityName, setCheckCityName] = useState('');
  const [listOfCities, setListOfSities] = useState([]);
  const [cityRef, setCityRef] = useState('');
  const [checkCityRef, setCheckCityRef] = useState('');
  const [listOfDepartment, setListOfDepartment] = useState([]);

  const [cityName, setCityName] = useState(
    getFromStorage('cityNameNP') ? getFromStorage('cityNameNP') : '',
  );
  const [departmentName, setDepartmentName] = useState(
    getFromStorage('departmentNameNP')
      ? getFromStorage('departmentNameNP')
      : '',
  );

  //  get cities for Nova Poshta
  useEffect(() => {
    async function getData(cityName) {
      setCheckCityName(cityName);
      setIsLoading(true);
      try {
        const { data } = await getListOfCities('/cities', { filter: cityName });
        setListOfSities(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (checkCityName !== cityName && cityName.length > 2) {
      getData(cityName);
    }
  }, [cityName, checkCityName]);

  let departmentCity;

  if (listOfCities) {
    departmentCity = listOfCities.filter(
      key => key.Description === checkCityName,
    )[0];
  }
  if (departmentCity && departmentCity.Ref !== cityRef) {
    setCityRef(departmentCity.Ref);
  }

  // get departments for Nova Poshta
  useEffect(() => {
    async function getData() {
      setCheckCityRef(cityRef);
      setIsLoading(true);
      try {
        const { data } = await getListOfDepartments('/departments', {
          filter: cityRef,
        });
        setListOfDepartment(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (cityRef !== checkCityRef) {
      getData();
    }
  }, [cityRef, checkCityRef]);

  // options for Nova Poshta

  function optionsNP(city) {
    const options = [];
    const list = [...listOfCities];
    list
      .filter(key =>
        key.Description.toLowerCase()
          .split('(')[0]
          .includes(city.toLowerCase()),
      )
      .forEach(key => {
        const obj = {};
        if (key.Description) {
          obj.value = key.Description;
          obj.label = key.Description;
          options.push(obj);
        }
      });
    return options;
  }

  function oNP(city) {
    const options = [];
    if (listOfDepartment) {
      const list = [...listOfDepartment];
      list
        .filter(key =>
          key.Description.toLowerCase().includes(city.toLowerCase()),
        )
        .forEach(key => {
          const obj = {};
          if (key.Description) {
            obj.value = key.Description;
            obj.label = key.Description;
            options.push(obj);
          }
        });
    }
    return options;
  }
  // console.log('cityName', cityName);

  // options for UKR Poshta

  return (
    <FormContainer>
      {novaPoshta && department && (
        <>
          <Div>
            <SelectInput
              name="cityName"
              type="text"
              className="basic-single"
              classNamePrefix="select"
              onInputChange={e => setCityName(e)}
              onChange={e => {
                if (e?.value) {
                  setCityName(e.value);
                  setCityNameNovaPosta(e.value);
                  saveToStorage('cityNameNP', e.value);
                }
              }}
              defaultValue={cityName}
              isDisabled={false}
              isClearable={true}
              isSearchable={true}
              validate={schemas.checkDepartmentNP.city}
              options={optionsNP(cityName)}
              placeholder={cityName !== '' ? cityName : 'Select city please...'}
            />
          </Div>
          <Div>
            <SelectInput
              name="departmentName"
              type="text"
              className="basic-single"
              classNamePrefix="select"
              onInputChange={e => setDepartmentName(e)}
              onChange={e => {
                if (e?.value) {
                  setDepartmentName(e.value);
                  setDepartmentNameNovaPosta(e.value);
                  saveToStorage('departmentNameNP', e.value);
                }
              }}
              defaultValue={departmentName}
              isDisabled={!checkCityRef}
              isClearable={true}
              isSearchable={true}
              validate={schemas.checkDepartmentNP.department}
              options={oNP(departmentName)}
              placeholder={
                departmentName === ''
                  ? 'Select department please...'
                  : departmentName
              }
            />
          </Div>
        </>
      )}
      {isLoading ? onLoading() : onLoaded()}
    </FormContainer>
  );
};

export default DeliveryNP;
