import React, { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { FaUserPlus, FaShoppingCart } from "react-icons/fa";
import ShoppinCart from "../Shop/ShoppinCart";
import LocalStorage from "../LocalStorage/LocalStorage";
import { useNavigate} from "react-router-dom";
import Informacion from '../Informacion/Informacion'
import Sidebar from "./Sidebar";
import logo from '../../../public/logo.png'


const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if(search) {
      e.preventDefault();
      navigate(`/search/${search}`);
    }
    
  e.preventDefault()
  }



  return (
    <div>
      <div className="flex justify-between  items-center md:px-36  px-2 bg-gray-100">
        <div>
          <img src={logo} alt="cursos baratos" className="lg:w-60 w-40 cursor-pointer" onClick={() => navigate('/')}/>
        </div>

        <form
          onSubmit={handleSearch}
          className="md:flex place-content-center gap-1 hidden "
        >
          <div>
            <input
              type="search"
              className="rounded-lg  px-5   focus:outline-none py-1 shadow-lg"
              placeholder="Buscar Curso"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-2 py-2 rounded-lg font-poppins text-white text-xs shadow-lg">
              Buscar
            </button>
          </div>
        </form>

        <div className="flex gap-2 items-center ">
          <ShoppinCart />
          <LocalStorage />
        </div>
      </div>

      {/* buscador de productos */}
      <form
        onSubmit={handleSearch}
        className="md:hidden place-content-center gap-1 flex "
      >
        <input
          type="search"
          className="border-[1px] rounded-lg  px-5   focus:outline-none shadow-lg"
          placeholder="Buscar Curso"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-2 rounded-lg font-poppins text-white shadow-lg p-2">
          Buscar
        </button>
      </form>

      <div className="lg:flex hidden justify-center">
        <Informacion />
      </div>

      <div className="lg:hidden  flex p-2 mt-2 justify-around bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg ">
        <Informacion />
        <p className="text-gray-100">|</p>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
