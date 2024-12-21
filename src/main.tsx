import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';

import '@mantine/core/styles.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider>
          <ModalsProvider>
            <App />
          </ModalsProvider>
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
