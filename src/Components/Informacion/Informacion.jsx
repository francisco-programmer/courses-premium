import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Informacion = () => {
  const navigate = useNavigate();

  const handleInfoClick = (item) => {
    navigate(`${item.route}`);
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
  return (
    <>
      <div className="flex  justify-center   rounded-lg ">
        {/* menu horizontal en pantalla laptop   */}
        <div className=" lg:flex hidden   px-16 rounded-lg justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg ">
          {info.map((item) => (
            <div className=" flex flex-wrap  py-2 rounded-lg   text-center ">
              <button
                className="text-white  font-poppins border-r-[1px] px-2  hover:underline cursor-pointer"
                onClick={() => handleInfoClick(item)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden  flex">
        <Menu
          menuButton={
            <MenuButton className="text-gray-100 font-poppins hover:text-sky-500">
              Informacion
            </MenuButton>
          }
          align="end"
          arrow
          transition
        >
          <button>
            <MenuItem>Preguntas Frecuentes</MenuItem>
          </button>
        </Menu>
      </div>
    </>
  );
};

export default Informacion;
