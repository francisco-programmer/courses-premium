import React,{}  from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { ShoppingCartProvider } from './Context/ShoppingCartContext.jsx'






ReactDOM.createRoot(document.getElementById("root")).render(
  <ShoppingCartProvider>
    <React.StrictMode>


      <RouterProvider router={router} />

    </React.StrictMode>
  </ShoppingCartProvider>
);
