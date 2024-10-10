import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#262626',
    yellow: '#F6B83D',
    rose: '#FFF4DF',
    white: '#FFFFFF',
    red: 'rgba(239, 36, 71, 1)',
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <BrowserRouter  basename="/Petlove">
          <ThemeProvider theme = {theme}>
             <App />
          </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>

);

