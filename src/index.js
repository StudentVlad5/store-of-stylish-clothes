import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { I18nextProvider } from 'react-i18next';
import { StatusProvider } from 'components/ContextStatus/ContextStatus';
import i18n from './utils/i18n';
import { getTemporaryToken } from 'token';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={'Loading'} persistor={persistor}>
      <BrowserRouter basename="/store-of-stylish-clothes">
        <StatusProvider>
          <I18nextProvider i18n={i18n}>
            <GlobalStyle />
            <App />
          </I18nextProvider>
        </StatusProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);

const storedToken = getTemporaryToken();

// console.log('Тимчасовий токен з локального сховища:', storedToken);
