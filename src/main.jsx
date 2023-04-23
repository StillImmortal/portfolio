import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Utility
import "./js/Utility.jsx"

// Styles
import "./index.css";

//Pages and Components
import App from './js/App.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={<App />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)