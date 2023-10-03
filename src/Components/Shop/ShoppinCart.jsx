import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ShoppingCartContext from "../../Context/ShoppingCartContext";
import { FaUserPlus, FaShoppingCart } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import PaypalButton from "./Paypal/PaypalButton";
import Checkout from "./Paypal/Checkout";
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

const ShoppinCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // verificar si esta registrado en el localstore
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
  }, [localStorage.getItem("user")]);

  // abrir modal
  const openModal = () => {
    setIsOpen(true);
  };
  // cerrar modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // desestructuramos las variables del contexto
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(ShoppingCartContext);

  // sacar el total a pagar en el carrito de compra
  const total = cartItems.reduce((acumulador, item) => {
    return acumulador + parseFloat(item.price);
  }, 0);

  // se obtienen los titulos de cada producto en el carrito de compra
  const obtenerTitulos = cartItems.reduce(
    (accumulator, currentProduct, index) => {
      if (index === 0) {
        return currentProduct.title;
      } else {
        return `${accumulator}, ${currentProduct.title}`;
      }
    },
    ""
  );

  return (
    <>
      <div className="">
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2    p-2 rounded-lg transition-colors">
              <button className="flex justify-center relative  items-center px-2  py-2 border-[1px] border-gray-900  rounded-lg gap-2  hover:bg-gray-900 hover:text-white font-poppins shadow-lg">
                <div>
                  <FaShoppingCart className="text-lg" />
                </div> <span className="absolute -top-4 left-6 bg-gradient-to-r from-sky-500 to-indigo-500    px-2 text-gray-200  box-content  rounded-full text-xl font-bold">
              {cartItems.length}
              </span>
              </button>{" "}
             
            </MenuButton>
          }
          align="start"
          arrow
          arrowClassName=""
          transition
          menuClassName=""
        >
          <MenuItem className="hover:bg-transparent w-[370px] ">
            {cartItems.length === 0 ? (
              <p>El carrito esta vacio!</p>
            ) : (
              <ul className="flex flex-col gap-2 ">

                {/* aqui se muestras los productos del carrito */}
                {cartItems.map((item) => (
                  <li key={item.id} className=" border-[1px] p-2 rounded-xl ">
                    <div  className="flex  flex-col sm:flex-row gap-4  items-center">
                      <div className="flex items-center justify-start gap-5">
                        <img src={item.link_poster} className="h-10 rounded-lg" />
                        <p className="font-poppins lg:text-xs text-sm">{item.title}</p>
                      </div> 
                      
                      <div className="flex gap-5 justify-end">
                      <p className="font-bold font-poppins text-gray-500">${item.price}</p>
                      <button onClick={() => removeFromCart(item.id)} className="flex">
                        <div className="flex"> 
                          <BsFillTrash3Fill className="text-red-600  hover:text-red-500 text-xl" title="Eliminar" />
                        </div>
                      </button>
                      </div>
                        
                    </div>
                  </li>
                ))}
                <div className="flex flex-col gap-0">
                  <div className="grid grid-cols-7 p-2 items-center">
                    <p className="col-span-4 text-gray-900">Transporte </p>
                    <p className="p-2  col-span-3 text-gray-900 font-bold">
                      Envio Gratuito!
                    </p>
                    <p className="col-span-5 text-gray-900 ">Total a pagar </p>
                    <p className="p-2 col-span-2  text-gray-900 font-bold font-poppins">
                      ${total}.0
                    </p>
                  </div>
                </div>

                <div>
                  {loggedIn ? (
                    <Checkout total={total} obtenerTitulos={obtenerTitulos} />
                  ) : (
                    <p className="font-bold text-red-600 bg-white text-center">
                      Por favor registrate para continuar con la compra
                    </p>
                  )}
                </div>
              </ul>
            )}
          </MenuItem>
        </Menu>
      </div>
      {/* //! se muestra el modal y se dan los estilos al carrito de compra */}
      {isOpen && (
        <div className="">
          <div className="backdrop-blur-sm justify-center items-center flex  flex-col fixed  inset-0 z-50   overflow-y-auto  ">
            <div className=" relative w-auto my-6 mx-auto max-w-3xl border-[1px] border-gray-100 rounded-lg  overflow-x-hidden overflow-y-auto">
              <div className="flex justify-between  ">
                <div></div>
                <button
                  className="flex justify-center  items-center px-2  py-2  border-gray-900  rounded-lg gap-2 font-poppins"
                  onClick={openModal}
                >
                  <div>
                    <FaShoppingCart className="text-2xl text-gray-100" />
                  </div>
                  <p className="font-poppins text-gray-100 font-bold underline">
                    Tu Carrito {cartItems.length}
                  </p>
                </button>

                {/* //! ***cerrar el modal***** */}
                <div className="flex justify-end">
                  <button
                    className="text-gray-100 hover:text-black"
                    onClick={closeModal}
                  >
                    <AiFillCloseCircle className="text-2xl" />
                  </button>
                </div>
              </div>
              {cartItems.length === 0 ? (
                <p className="text-2xl font-bold text-gray-100">
                  No hay productos en el carrito
                </p>
              ) : (
                <ul className="flex flex-col gap-2 p-3">
                  {cartItems.map((item) => (
                    <li key={item.id} className=" rounded-lg p-2 ">
                      <div className="grid grid-cols-4">
                        <p className="col-span-4">{item.title}</p>
                        <div className="flex items-center">
                          <p>${item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>
                          <div>
                            <BsFillTrash3Fill className="text-red-600" />
                          </div>
                        </button>
                      </div>
                    </li>
                  ))}
                  <div className="flex flex-col gap-0">
                    <div className="grid grid-cols-7 p-2 items-center">
                      <p className="col-span-4 text-gray-100">Transporte </p>
                      <p className="p-2  col-span-3 text-gray-100 font-bold">
                        Envio Gratuito!
                      </p>
                      <p className="col-span-5 text-gray-100 ">
                        Total a pagar{" "}
                      </p>
                      <p className="p-2 col-span-2 font-poppins text-gray-100 font-semibold">
                        ${total}.00
                      </p>
                    </div>
                  </div>

                  <div>
                    {loggedIn ? (
                      <Checkout total={total} obtenerTitulos={obtenerTitulos} />
                    ) : (
                      <p className="font-bold text-red-600 bg-white text-center">
                        Por favor registrate para continuar con la compra
                      </p>
                    )}
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppinCart;
