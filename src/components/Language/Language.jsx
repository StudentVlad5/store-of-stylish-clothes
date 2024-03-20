import i18next from 'i18next';
import React, { useEffect, useContext } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './language.styled';
import { language } from 'BASE_CONST/Base-const';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

const Language = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    const saveLanguage = localStorage.getItem('chosenLanguage');
    if (saveLanguage) {
      i18next.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
    }
  }, []);

  const changeLanguage = event => {
    const language = event.target.value;
    i18next.changeLanguage(language);
    localStorage.setItem('chosenLanguage', language);
    setSelectedLanguage(language);
  };

  return (
    <SelectContainerLanguage>
      <SelectLanguage onChange={changeLanguage} value={selectedLanguage}>
        {language.map(it => (
          <option value={it.value} key={it.value}>
            {it.option}
          </option>
        ))}
      </SelectLanguage>
    </SelectContainerLanguage>
  );
};

export default Language;
