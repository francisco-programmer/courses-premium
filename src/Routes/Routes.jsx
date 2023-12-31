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
import Home from '../Components/Layouts/Home'
import ConfirmarDescargaGratuita from '../Components/Shop/ConfirmarDescargaGratuita'
import DownloadFree from '../Components/Shop/DownloadFree'
import TransaccionRealizada from '../Components/Shop/TransaccionRealizada'
import CheckDescargaGratuita from '../Components/Shop/CheckDescargaGratuita'


const router = createBrowserRouter([
  {
    path: "/",
    component: <App />,
    errorElement: <ErrorPage404 />,
    
  },
  {
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
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
        path: "/pago-confirmado/:total",
        element: <TransaccionRealizada />
      },
      {
        path: "/check-descarga-gratuita",
        element: <CheckDescargaGratuita />
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/confirmar-descarga-gratuita",
        element: <ConfirmarDescargaGratuita />,
      },

      {
        path: "/categoria/:categoria",
        element: <CategoryCourses />,
      },
    ],
  },
]);

export default router