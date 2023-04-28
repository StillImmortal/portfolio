import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Provider } from "react-redux"

// Utility
import "./js/Utility.jsx"

// Styles
import "./index.scss";

//Pages and Components
import App from './js/App.jsx';
import store from './js/components/redux/index.js';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={<App />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)