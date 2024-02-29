import React, { useState, useEffect } from 'react';
import schemas from 'utils/schemas';
import { FormContainer, Div, SelectInput } from './Delivery.styled';
import { getListOfCitiesUP, getListOfDepartmentsUP } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { saveToStorage, getFromStorage } from 'services/localStorService';

const DeliveryUP = ({
  ukrPoshta,
  department,
  setСitytNameUPLabel,
  setDepartmentUPLabel,
}) => {
  const [cityNameUP, setCityNameUP] = useState(
    getFromStorage('cityNameUP') ? getFromStorage('cityNameUP') : '',
  );
  const [departmentNameUP, setDepartmentNameUP] = useState(
    getFromStorage('departmentNameUP')
      ? getFromStorage('departmentNameUP')
      : '',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [checkCityName, setCheckCityName] = useState('');
  const [listOfCities, setListOfSities] = useState([]);

  const [cityRef, setCityRef] = useState('');
  const [checkCityNameUP, setCheckCityNameUP] = useState('');
  const [listOfCitiesUP, setListOfSitiesUP] = useState([]);
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
    <FormContainer>
      {ukrPoshta && department && (
        <>
          <Div>
            <SelectInput
              name="cityNameUP"
              type="text"
              className="basic-single"
              classNamePrefix="select"
              onInputChange={e => setCityNameUP(e)}
              onChange={e => {
                if (e?.value) {
                  setCityNameUP(e.value);
                  saveToStorage('cityNameUP', e.label);
                  setСitytNameUPLabel(e.label);
                }
              }}
              defaultValue={cityNameUP}
              isDisabled={false}
              isClearable={true}
              isSearchable={true}
              options={optionsUP(cityNameUP)}
              placeholder={
                cityNameUP !== '' ? checkCityNameUP : 'Select city please...'
              }
            />
          </Div>
          <Div>
            <SelectInput
              name="departmentNameUP"
              type="text"
              className="basic-single"
              classNamePrefix="select"
              onInputChange={e => setDepartmentNameUP(e)}
              onChange={e => {
                if (e?.value) {
                  setDepartmentNameUP(e.value);
                  setDepartmentUPLabel(e.value);
                  saveToStorage('departmentNameUP', e.value);
                }
              }}
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
            />
          </Div>
        </>
      )}

      {isLoading ? onLoading() : onLoaded()}
    </FormContainer>
  );
};

export default DeliveryUP;
