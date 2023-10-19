import React, {Component } from 'react'
import { useEffect } from 'react';
import { BsCheckCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {BsCartPlus} from 'react-icons/bs'
const CheckDescargaGratuita = () => {
    const navigate = useNavigate()
 
  return (
    <div className="p-5">   
      <div>
        <p className="text-center font-bold text-3xl text-gray-900">
          ¡Su pago ha sido Realizado con éxito!
        </p>
        <p className='font-popons font-bold text-center text-gray-900 text-3xl'>0.00 USD</p>
  <div className='flex justify-center py-10'>

          <BsCheckCircleFill className='text-6xl text-green-500 ' />
        </div>
        <div className='font-poppins text-center text-gray-500'>
          <p>El pedido ha sido enviado, por favor revisa tu correo electronico!</p>
        </div>
      </div>
      <div className='text-white  flex justify-center  py-5'>
        <button className='bg-gradient-to-r p-2 rounded-lg shadow-lg text-white  flex justify-center items-center gap-2  border-[1px] border-gray-200 from-sky-500 to-indigo-500'
        onClick={() => navigate('/')}>
          Seguir Comprando<div><BsCartPlus /></div>
        </button>
      </div>
    </div>
  );
}

export default CheckDescargaGratuita