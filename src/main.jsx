/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import GetStarted from './Components/Pages/GetStarted.jsx';
import ErrorPage from './Components/Pages/404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <GetStarted />,
      errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
