import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/HttpCall';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },

  {
    path: "/about",
    element: <AboutPage/>,
  },

  {
    path: "/user/:id",
    element: <UserPage />,
  },

  {
    path: "/users",
    element: <UsersPage />,
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
