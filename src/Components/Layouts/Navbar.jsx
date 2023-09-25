import React, { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { FaUserPlus, FaShoppingCart } from "react-icons/fa";
import ShoppinCart from "../Shop/ShoppinCart";
import LocalStorage from "../LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  
  }



  return (
    <div>
      <div className="flex justify-between px-36 py-10 bg-gray-100">
        <div>
          <h1 className="text-4xl font-poppins">Todoa10</h1>
        </div>
        
          <form  onSubmit={handleSearch}
          className="flex place-content-center gap-1">
 
         
          <input
            type="search"
            className="border-[1px] rounded-lg  px-5 "
            placeholder="Buscar Curso"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-sky-300  px-2 rounded-lg font-poppins text-white font-bold border-[1px] border-black"
              
          >
            Buscar
          </button>
          </form>
        
        <div className="flex gap-2">
          <LocalStorage />
          <ShoppinCart />
        </div>
      </div>

      <div className="px-36">
        <div className="bg-gray-900  flex gap-2 py-2 ">
          <a className="text-gray-200 font-poppins border-r-[1px] px-2 hover:bg-gray-800">
            Inicio
          </a>
          <a className="text-gray-200 font-poppins border-r-[1px] px-2 hover:bg-gray-800">
            Preguntas Frecuentes
          </a>
          <a className="text-gray-200 font-poppins border-r-[1px] px-2 hover:bg-gray-800">
            Cómo Descargar Gratis
          </a>
          <a className="text-gray-200 font-poppins border-r-[1px] px-2 hover:bg-gray-800">
            Cómo Comprar con Paypal
          </a>
          <a className="text-gray-200 font-poppins border-r-[1px] px-2 hover:bg-gray-800">
            Medios de Pago
          </a>
          <a className="text-gray-200 font-poppins border-r-[1px] px-2 hover:bg-gray-800">
            Contactanós
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
