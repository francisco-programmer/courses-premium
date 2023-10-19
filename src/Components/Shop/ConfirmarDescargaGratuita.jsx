import React, { useContext, useState, useEffect } from "react";
import { render } from "@react-email/components";
import Plunk from "@plunk/node";
import Email from "../../Services/Email"
import ShoppingCartContext from "../../Context/ShoppingCartContext";
import {AiOutlineMail} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import {BsFillTrash3Fill} from 'react-icons/bs'
import { Toaster, toast } from 'sonner'



const ConfirmarDescargaGratuita = () => {   
  const { cartItems, removeFromCart, clearCart} = useContext(ShoppingCartContext); 
  const plunk = new Plunk(import.meta.env.VITE_PLUNK_API_KEY);
  const emailHtml = render(<Email cartItems={cartItems}  />);
  const navigate  = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')

  //obtenemos los datos del usuario en el localstorage
  useEffect(()=> {
    const user = localStorage.getItem("user")
    if(user) {
      setUserEmail(JSON.parse(user).email)
      setUserName(JSON.parse(user).name)
    }
  },[localStorage.getItem('user')])

  //funcion para el email de descarga del curso, mostrar la notificacion de enviado
  // limpiar el carrito y dirigir al usuario a la pagina principal.
  const enviarEmail = () => {
    plunk.emails.send({
      to: `${userEmail}`,
      subject: `${userName} tu pedido de Cursos Baratos`,
      body: emailHtml,      
    })

    
    clearCart()
    navigate("/check-descarga-gratuita");
    setTimeout(() => {
      
    }, 3000);  
  };

  const total = cartItems.reduce((acumulador, item) => {
    return acumulador + parseFloat(item.price);
  }, 0);
  return (
    <div>
      <Toaster richColors position="top"/>
      <div className="p-5">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
          <p className="font-bold text-3xl ">Confirma tu Pedido</p>
        </div>
        <hr className="border-gray-100 mt-2"></hr>
        <p className="font-poppins my-2">
          Enviaremos los productos a tu Correo Electronico!
        </p>
        <div>
          {cartItems.map((item) => (
            <ul>
              <li key={item.id} className=" border-[1px] p-2 rounded-xl ">
                <div className="flex  flex-col sm:flex-row gap-4  items-center">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      src={item.link_poster}
                      className="h-20 w-20 rounded-lg"
                    />
                    <p className="font-poppins lg:text-xs text-sm">
                      {item.title}
                    </p>
                  </div>

                  <div className="flex gap-5 justify-end">
                    <p className="font-bold font-poppins text-gray-500">
                      ${item.price}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex"
                    >
                      <div className="flex">
                        <BsFillTrash3Fill
                          className="text-red-600  hover:text-red-500 text-xl"
                          title="Eliminar"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </li>
              <div className="flex flex-col gap-0">
                
              </div>
            
            </ul> 
          ))}
          <div className="grid grid-cols-7 p-2 items-center">
                  <p className="col-span-4 text-gray-900">Transporte </p>
                  <p className="p-2  col-span-3 text-gray-900 font-bold text-end">
                    Envio Gratuito!
                  </p>
                  <p className="col-span-5 text-gray-900  ">Total a pagar </p>
                  <p className="p-2 col-span-2  text-gray-900 font-bold font-poppins text-end">
                    ${total}.0
                  </p>
                </div>
           <div className="flex justify-center items-center place-content-center">
               <button
                className="bg-green-500 hover:bg-green-400  p-2 rounded-lg text-white font-poppins  shadow-md transition-all  "
                onClick={enviarEmail}
              >
                Confirmar
              </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmarDescargaGratuita