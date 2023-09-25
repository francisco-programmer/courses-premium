import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

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
      // Renderizar el nombre 
      setName(JSON.parse(user).name);
      setLoggedIn(true)
    }
  }, [localStorage.getItem('user')]);
  

  return (
    <>
    {loggedIn === true ? (<h3 className="font-poppins flex  items-center gap-3 text-gray-900">Bienvenido, <strong>{name}</strong></h3>) : (<button
        className="flex justify-center  items-center px-2 py-2   border-[1px] border-gray-900 rounded-lg gap-2  hover:bg-gray-900 hover:text-white font-poppins"
        onClick={openModal}
      >
        <div>
          <FaUserPlus className="text-lg" />
        </div>
        Registrarme
      </button>)}
      

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
