import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router-dom";
import router from './routes/BasicRoutes/BasicRoutes.jsx';

// Dynamic Website Title by React-Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';

// TanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>
);
