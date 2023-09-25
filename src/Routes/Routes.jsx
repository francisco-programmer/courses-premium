import React from 'react'
import App from '../App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage404 from '../Page/ErrorPage404'
import HomePage from '../Page/HomePage'
import MarketingDigital from '../Components/Layouts/Cursos/MarketingDigital'
import DescargasGratuitas from '../Components/Layouts/Cursos/DescargasGratuitas'
import ProductPage from '../Components/productPage/ProductPage'
import Programacion from '../Components/Layouts/Cursos/Programacion'
import Compras from '../Components/Layouts/Compras/Compras'
import Search from '../Components/Layouts/Cursos/Search'


const router = createBrowserRouter([
  {
    path: "/",
    component: <App />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <HomePage />,
    children: [
      {
        path: "marketing-digital",
        element: <MarketingDigital />,
      },
      {
        path:"/:nameproduct",
        element: <ProductPage />
      },
      {
        path: "descargas-gratuitas",
        element: <DescargasGratuitas />,
      },
      {
        path: "programacion",
        element: <Programacion/>,
      },
      {
        path: "compras",
        element: <Compras />,
      },
      {
        path: "/search/:search",
        element: <Search />,
      },
    ],
  },
]);

export default router