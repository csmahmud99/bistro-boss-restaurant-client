import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router-dom";
import router from './routes/BasicRoutes/BasicRoutes.jsx';

// Dynamic Website Title by React-Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
