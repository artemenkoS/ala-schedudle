import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { globalStyle } from './styles/global';
import { theme } from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles styles={globalStyle} />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
