import React from 'react'
import App from '../App'
import { createBrowserRouter, } from 'react-router-dom'
import ErrorPage404 from '../Page/ErrorPage404'
import HomePage from '../Page/HomePage'
import DescargasGratuitas from '../Components/Layouts/Cursos/DescargasGratuitas'
import ProductPage from '../Components/productPage/ProductPage'
import Search from '../Components/Layouts/Cursos/Search'
import Register from '../Register/Register'
import Configuration from '../Register/Configuration'
import PreguntasFrecuentes from '../Components/Informacion/PreguntasFrecuentes'
import ComoDescargarGratis from '../Components/Informacion/ComoDescargarGratis'
import ComoComprarConPaypal from '../Components/Informacion/ComoComprarConPaypal'
import MediosDePago from '../Components/Informacion/MediosDePago'
import Contacto from '../Components/Informacion/Contacto'
import CategoryCourses from '../Components/Layouts/Cursos/CategoryCourses'


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
        path: "/:nameproduct",
        element: <ProductPage />,
      },
      {
        path: "categoria/descargas-gratuitas",
        element: <DescargasGratuitas />,
      },

      {
        path: "/search/:search",
        element: <Search />,
      },
      {
        path: "/registrarme",
        element: <Register />,
      },
      {
        path: "/configuracion",
        element: <Configuration />,
      },
      {
        path: "/preguntas-frecuentes",
        element: <PreguntasFrecuentes />,
      },
      {
        path: "/como-descargar-gratis",
        element: <ComoDescargarGratis />,
      },
      {
        path: "/como-comprar-con-paypal",
        element: <ComoComprarConPaypal />,
      },
      {
        path: "/medios-de-pago",
        element: <MediosDePago />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },

      {
        path: "/categoria/:categoria",
        element: <CategoryCourses />,
      },
    ],
  },
]);

export default router