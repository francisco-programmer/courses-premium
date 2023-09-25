import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ShoppingCartContext from "../../Context/ShoppingCartContext";

import { FaUserPlus, FaShoppingCart } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import PaypalButton from "./Paypal/PaypalButton";
import Checkout from "./Paypal/Checkout";

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

  //abrir modal
  const openModal = () => {
    setIsOpen(true);
  };
  //cerrar modal
  const closeModal = () => {
    setIsOpen(false);
  };

  //desestructuramos las variables del contexto
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
        <button
          className="flex justify-center  items-center px-2  py-2 border-[1px] border-gray-900  rounded-lg gap-2  hover:bg-gray-900 hover:text-white font-poppins"
          onClick={openModal}
        >
          <div>
            <FaShoppingCart className="text-lg" />
          </div>
          Carrito<p>{cartItems.length}</p>
        </button>
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
                    <li key={item.id} className="bg-gray-100 rounded-lg p-2 ">
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
          <div className="opacity-50 fixed inset-0 z-40 bg-black "></div>
        </div>
      )}
    </>
  );
};

export default ShoppinCart;
