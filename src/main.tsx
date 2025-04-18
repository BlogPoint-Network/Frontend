import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ProfileContextProvider } from './app/context';
import { App } from './App.tsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import '@mantine/core/styles.css';
import { theme } from '@constants';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <ProfileContextProvider>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </ProfileContextProvider>
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);

// ✅ Регистрируем Service Worker
serviceWorkerRegistration.register();
