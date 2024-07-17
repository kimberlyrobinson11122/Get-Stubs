import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'

import Admin from './pages/Admin';
import Groove from './pages/Groove';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import About from './pages/About';

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
        element: <Profile />
      }, {
        path: '/about',
        element: <About />
      },
    ],
  },
]);

// produce login page button in the navbar if user is not logged in


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
