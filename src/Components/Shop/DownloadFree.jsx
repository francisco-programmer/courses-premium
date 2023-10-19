import React, { useContext, useState } from "react";
import { render } from "@react-email/components";
import Plunk from "@plunk/node";
import Email from "../../Services/Email";
import ShoppingCartContext from "../../Context/ShoppingCartContext";
import {AiOutlineMail} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const DownloadFree = () => {
  

  const navigate  = useNavigate()

  return (
    <div className="flex justify-center">
      <button
        className="bg-green-500  hover:bg-green-400 p-2 rounded-lg text-white  font-poppins  shadow-md transition-all  border-green-600 "
        onClick={() => navigate('/confirmar-descarga-gratuita')}
      >
        Descarga Gratuita!
      </button>
     
    </div>
  );
};

export default DownloadFree;
