import React, { createContext, useState } from 'react';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import uuid4 from 'uuid4';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [userAnonimusID, setUserAnonimusID] = useState(
    getFromStorage('userAnonimusID')
      ? getFromStorage('userAnonimusID')
      : uuid4(),
  );
  if (!getFromStorage('userAnonimusID')) {
    saveToStorage('userAnonimusID', userAnonimusID);
  }
  const [contextBasket, setContextBasket] = useState([]);
  const [currency, setCurrency] = useState('₴');
  const [language, setLanguage] = useState('ua');
  return (
    <StatusContext.Provider
      value={{
        userAnonimusID,
        setUserAnonimusID,
        contextBasket,
        setContextBasket,
        currency,
        setCurrency,
        language,
        setLanguage,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};
