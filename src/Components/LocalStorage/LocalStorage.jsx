import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
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
import { Link } from "react-router-dom";

const LocalStorage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)

//abrir modal
const openModal = () => {
  setIsOpen(true)
}
//cerrar modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //guardar los datos en el localstore en forma de Json
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        address,
      })
    );
    setLoggedIn(true);
    closeModal()
  };


  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      // Renderizar los datos del usuaria
      setName(JSON.parse(user).name);
      setEmail(JSON.parse(user).email)
      setAddress(JSON.parse(user).address)
      setLoggedIn(true)
    }
  }, [localStorage.getItem('user')]);
  

  return (
    <>
    {loggedIn === true ? (
    
    
    // <h3 className="font-poppins flex  items-center gap-3 ">Bienvenido, <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text"><p className="font-bold">{name}</p></div></h3>) 
    //menu que del navar informacion del usuario
    <Menu 
          menuButton={
            <MenuButton className="flex items-center gap-x-2   hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-6 h-6 object-cover rounded-full"
              />
             <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text"> <span className="font-bold font-poppins">{name}</span> </div>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent flex items-center gap-2 ">
            
              <img
                src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">{name}</span>
                <span className="text-xs text-gray-500">{email}</span>
              </div>
            
          </MenuItem>
          <hr className="my-4 border-gray-100" />
          <Link to="configuracion" className=" hover:bg-gray-100 ">
          <MenuItem className="p-0 hover:bg-transparent flex items-center gap-2">  
          
              <RiSettings3Line /> Configuración
            
          </MenuItem>
           </Link>
          
          
        </Menu>
        )
    : 
    


    
    (<Link to="registrarme">
    <button
        className="flex justify-center  items-center px-2 py-2 text-xs border-[1px]  rounded-lg gap-2  bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-poppins"
       
      >
        <div>
          <FaUserPlus className="md:text-lg" />
        </div>
        Registrarme
      </button></Link>)}
      

      {isOpen && (
        <div>
        <div className=" backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
         {/* contenido del modal */}
          <div className="relative w-auto my-6 mx-auto max-w-3xl border-[1px] border-gray-100 rounded-lg ">
          
          <div className="p-3 flex justify-end">
            <button onClick={closeModal}><div className=""><AiFillCloseCircle  className="text-gray-100 text-2xl "/></div></button>
          </div>

          <div>
            <div className="">
              <p className="font-poppins font-bold text-3xl text-center text-gray-100 py-5">
                Regristrarme
              </p>
              <form onSubmit={handleSubmit}  className="flex flex-col gap-4  justify-center items-center" >
              <input required
                type="text"
                placeholder="Nombre y Apellido"
                className="p-2 rounded-lg  "
                onChange={(e) => setName(e.target.value)}
              />
              <input required
                type="email"
                placeholder="Correo Electronico"
                className="p-2 rounded-lg  "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input required
                type="text"
                placeholder="Direccion de entrega"
                className="p-2 rounded-lg  "
                onChange={(e) => setAddress(e.target.value)}
              />
              <button
                className="bg-green-500 p-2 rounded-lg text-white font-poppins"
                type="submit"
              >
                Guardar
              </button>
              </form>
              <p className="text-xs p-5 font-poppins"><strong>Nota:</strong> A tu Email se enviaran tus Productos Digitales</p>
            </div>
          </div>
          </div>
          
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black "></div>
        </div>
      )}
    </>
  );
};

export default LocalStorage;
