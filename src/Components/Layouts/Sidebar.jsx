import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
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

const Sidebar = () => {
  const categorias = [
    { name: "Descargas Gratuitas", route: "descargas-gratuitas" },
    { name: "Marketing", route: "marketing" },
    { name: "Programación", route: "programacion" },
    { name: "Dinero", route: "dinero" },
    {name: "Idiomas", route: "idiomas"},
    {name: "Diseño", route: "diseño"},
    {name: "Desarrollo Personal", route:"desarrollo personal"},
    {name: "Negocio", route: "negocio"}
  ];
  const navigate = useNavigate();
  const handleProductClick = (item) => {
    navigate(`/categoria/${item.route}`);
  };

  const hr = (
    <div className="px-2">
      <hr className="border-gray-100 "></hr>
    </div>
  );

  return (
    <div className="">
      <div className="bg-white rounded-lg  lg:mt-2 shadow-lg">
        <div className=" lg:flex hidden flex-col gap-1 pr-2   ">
          <div className=""></div>
          <p className=" text-sky-500  text-center  font-poppins bg-white rounded-lg  ">
            Categorias
          </p>
          {hr}
          {categorias.map((item) => (
            <div className="">
              <button
                onClick={() => handleProductClick(item)}
                className="font-poppins flex items-center gap-1 text-sm hover:underline hover:cursor-pointer"
              >
                <div>
                  <BiSolidRightArrow className="text-[8px]" />
                </div>

                {item.name}
              </button>
              {hr}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex">
        {/* menu movil */}
        <Menu
          menuButton={
            <MenuButton className="text-gray-200 font-poppins hover:underline">
              Categorias
            </MenuButton>
          }
          align="start"
          arrow
          transition
        >
          {categorias.map((item) => (
            <MenuItem >
              <button
                onClick={() => handleProductClick(item)}
                className="font-poppins flex items-center gap-1 hover:underline hover:cursor-pointer"
              >
                <div>
                  <BiSolidRightArrow className="text-[8px]" />
                </div>

                {item.name}
              </button>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
