import React from 'react'
import {FaTiktok, FaFacebookSquare } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  const handleInfoClick = (item) => {
    navigate(`${item.route}`);
  };
  const handleCategoryClick = (item) => {
    navigate(`/categoria/${item.route}`);
  };

  const info = [
    {
      name: "Inicio",
      route: "/",
    },
    {
      name: "Preguntas Frecuentes",
      route: "preguntas-frecuentes",
    },
    {
      name: "Cómo Descargar Gratis",
      route: "como-descargar-gratis",
    },
    {
      name: "Cómo Comprar con Paypal",
      route: "como-comprar-con-paypal",
    },
    {
      name: "Medios de Pago",
      route: "medios-de-pago",
    },
    {
      name: "Contactanós",
      route: "contacto",
    },
  ];

  const categorias = [
    { name: "Descargas Gratuitas", route: "descargas-gratuitas" },
    { name: "Marketing", route: "marketing" },
    { name: "Programación", route: "programacion" },
    { name: "Dinero", route: "dinero" },
    {name: "Idiomas", route: "idiomas"},
    {name: "Diseño", route: "diseño"},
    {name: "Desarrollo Personal", route:"desarrollo personal"},
    {name: "Negocio", route: "negocio"},
    {name:"Ventas", route: "ventas"}
  ];
  return (
    <div className="xl:pl-80 xl:pr-36">
      <div className="mt-2 bg-white     rounded-lg shadow-lg grid xl:grid-cols-4 gap-5 grid-cols-2  px-5 ">
        <div>
          {" "}
          <img
            src="https://i.imgur.com/n7uUJV6.png"
            alt="cursos baratos"
            className="lg:w-60 w-40 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="pt-5">
          <p className="font-poppins font-bold text-gray-600">Síguenos</p>
          <div className="flex flex-col ">
            <button className='flex items-center font-poppins text-sm  gap-2 text-gray-500 hover:text-rose-500 '>
              <FaTiktok className=" " /> TikTok 
            </button>
            <button className='flex items-center font-poppins gap-2 text-sm  text-gray-500 hover:text-blue-500 '>
              <FaFacebookSquare className=" " /> Facebook
            </button>
            <button className='flex items-center font-poppins gap-2 text-sm  text-gray-500 hover:text-pink-500 '>
              <FiInstagram className=" " /> Instagram
            </button>
          </div>
        </div>
        <div className='pt-5 flex flex-col  items-start justify-start text-start gap-2'>
          <p className="font-poppins font-bold text-gray-600">Información</p>
          {info.map((item) => (
            <button className="font-poppins text-sm hover:underline hover:text-sky-500 text-start" onClick={() => handleInfoClick(item)}>
              {item.name}
            </button>
          ))}
        </div>
        <div className='pt-5'>
        <p className="font-poppins font-bold text-gray-600">Categorias</p>

        {categorias.map((item) => (
          <div>
            <button className="font-poppins text-sm hover:underline hover:text-sky-500 text-start" onClick={() => handleCategoryClick(item)}>
              {item.name}
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer