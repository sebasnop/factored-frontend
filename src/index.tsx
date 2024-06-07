import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';

import { RouterProvider } from "react-router-dom";
import { router } from './router/router';

import { AppProvider } from './context/AppContext';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </AppProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
