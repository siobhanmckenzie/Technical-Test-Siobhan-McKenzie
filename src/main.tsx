// built-ins
import { RouterProvider } from '@tanstack/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// styles
import './index.scss';

// configs
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '~configs/ErrorBoundary';
import router from '~configs/router';
import store from '~configs/store';
import theme from './theme';

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
