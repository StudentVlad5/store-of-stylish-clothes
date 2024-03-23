import React, { useEffect, useContext } from 'react';
import {
  SelectContainerLanguage,
  SelectLanguage,
} from '../Language/language.styled';
import { currency } from 'BASE_CONST/Base-const';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

const Currency = () => {
  const { selectedCurrency, setSelectedCurrency } = useContext(StatusContext);

  useEffect(() => {
    const saveCurrency = localStorage.getItem('chosenCurrency');
    if (saveCurrency) {
      setSelectedCurrency(saveCurrency);
    } else {
      localStorage.setItem('chosenCurrency', 'ua');
      setSelectedCurrency('ua');
    }
  }, []);

  const changeCurrency = event => {
    const currency = event.target.value;
    localStorage.setItem('chosenCurrency', currency);
    setSelectedCurrency(currency);
  };

  return (
    <SelectContainerLanguage>
      <SelectLanguage onChange={changeCurrency} value={selectedCurrency}>
        {currency.map(it => (
          <option value={it.value} key={it.value}>
            {it.option}
          </option>
        ))}
      </SelectLanguage>
    </SelectContainerLanguage>
  );
};

export default Currency;
