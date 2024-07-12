import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'


import Admin from './pages/Admin';
import Groove from './pages/Groove';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/admin',
        element: <Admin />
      }, {
        path: '/groove',
        element: <Groove />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/profile',
        element: <profile />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
