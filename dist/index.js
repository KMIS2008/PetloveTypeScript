import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
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
    spacing: (value) => `${value * 5}px`,
};
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(PersistGate, { persistor: persistor, children: _jsx(BrowserRouter, { basename: "/Petlove-TypeScript", children: _jsx(ThemeProvider, { theme: theme, children: _jsx(App, {}) }) }) }) }) }));
//# sourceMappingURL=index.js.map