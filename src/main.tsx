import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';

import '@mantine/core/styles.css';
import { ProfileContextProvider } from './app/context';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider>
          <ProfileContextProvider>
            <App />
          </ProfileContextProvider>
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
