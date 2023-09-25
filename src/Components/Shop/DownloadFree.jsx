import React, { useContext, useState } from "react";
import { render } from "@react-email/components";
import Plunk from "@plunk/node";
import Email from "../../Services/Email";
import ShoppingCartContext from "../../Context/ShoppingCartContext";
import {AiOutlineMail} from 'react-icons/ai'
import { Navigate } from "react-router-dom";

const DownloadFree = () => {
  const [sendEmailDownload, setSendEmailDownload] = useState(false);

  const { cartItems } = useContext(ShoppingCartContext);

  const [isOpen, setIsOpen] = useState(false);

  const plunk = new Plunk(import.meta.env.VITE_PLUNK_API_KEY);

  const emailHtml = render(<Email cartItems={cartItems} />);

  const enviarEmail = () => {
    plunk.emails.send({
      to: "franciscopalenciaa@gmail.com",
      subject: "Hello world probando plunk",
      body: emailHtml,
      
    })
    setSendEmailDownload(true)
  };
  return (
    <div className="flex justify-center">
      <button
        className="bg-green-500 p-2 rounded-lg text-white font-bold font-poppins  shadow-md transition-all border-[1px] hover:border-green-200 hover:bg-green-600 "
        onClick={() => setIsOpen(true)}
      >
        Descarga Gratuita!
      </button>
      {isOpen && (
        <div>
          <div className="backdrop-blur-sm justify-center items-center flex  flex-col fixed  inset-0 z-50   overflow-y-auto  ">
            <div className=" relative w-auto my-6 mx-auto max-w-3xl border-[1px] border-gray-100 rounded-lg  overflow-x-hidden overflow-y-auto p-5 ">
              <div className="flex flex-col gap-3">
                <p className="text-white text-center font-poppins text-xl">
                  Que facil es tener educación premium <strong>GRATIS!</strong>
                </p>
                <p className="bg-gray-100 text-gray-900 rounded-lg p-4 font-bold font-poppins">
                  Vacia tu bolsillo en tu mente y tu mente llenará tus bolsillos{" "}
                  <p>- Benjamin Franklin</p>
                </p>
                <p className="bg-gray-100 text-gray-900 rounded-lg p-4 font-bold font-poppins">
                  Haz click en descargar y luego ve la magia en tu correo
                  electronicó, <p>FELICIDADES!</p>{" "}
                </p>


{sendEmailDownload === false ? 
                
                <div className="flex gap-5 justify-center">
                  <button
                    className="bg-green-500 p-2 rounded-lg text-white font-bold font-poppins  shadow-md transition-all border-[1px] hover:border-green-200 hover:bg-green-600"
                    onClick={enviarEmail}
                  >
                    Descargar
                  </button>
                  <button
                    className="bg-red-500 p-2 rounded-lg text-white font-bold font-poppins  shadow-md transition-all border-[1px] hover:border-green-200 hover:bg-red-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Cerrar
                  </button>
                </div>
:
                <div className="flex justify-center">
                  <button className="bg-green-500 flex text-white font-bold  font-poppins p-4 rounded-lg " onClick={() => window.location.reload()  }>
                   <div><AiOutlineMail className="text-2xl" /></div>  Por favor Revisa tu badeja de entrada!
                  </button>                 
                </div>

}

              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black "></div>
        </div>
      )}
    </div>
  );
};

export default DownloadFree;
