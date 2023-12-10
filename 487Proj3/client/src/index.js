import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import {store} from './store/store'
import {Provider} from 'react-redux'
import RootLayout from './layouts/RootLayout';
import Admin from './pages/Admin';
import Tenant from './pages/Tenant';
import Staff from './pages/Staff';
import Error from './pages/Error';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    (
      <Route path='/' element={ <RootLayout />}> 
        <Route path='/login' element={ <Login />} /> 
        <Route path='/admin' element={<Admin />} />
        <Route path='/tenant' element={<Tenant />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='*' element={<Error />} />
      </Route >

    )
  ))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

