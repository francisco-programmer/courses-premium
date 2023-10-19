import React from 'react'

const ComoComprarConPaypal = () => {
  return (
    <div>
      <div className="p-5">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
        <p className="font-bold text-3xl ">Como comprar con Paypal?</p>
      </div>
      <hr className="border-gray-100 mt-2"></hr>
      <p className="font-poppins">Sigue los siguientes pasos:</p>
      <div className='py-5 flex flex-col gap-5'>

        <div>
        <p className='font-poppins'><strong>1.</strong> Click en el boton registrarme en la parte superior derecha,  ingresas tus datos y das click en el boton registrar</p>
        <img src='https://i.imgur.com/PAL1vhD.jpg' />
        </div>
        <div>
        <p className='font-poppins'><strong>2.</strong> Agrega el producto de tu interes al carrito, luego haz click en el icono del carrito en la parte superior y despues click en Paypal!</p>
        <img src='https://i.imgur.com/I6KN5wz.png' />
        </div>
        <div>
        <p className='font-poppins'><strong>3.</strong>Te aparecerá la ventana de Paypal, ingresas los datos de tu cuenta e inicias sessión</p>
        <img src='https://i.imgur.com/K4Vh2QN.png' />
        </div>
        <div>

        <p className='font-poppins'><strong>4. </strong> Puedes escoger si pagar con tu saldo de paypal o con tarjeta debito o credito, le das click en completar compra</p>
        <img src='https://i.imgur.com/IofUb4g.png' />
        </div>
        
        
      </div>
    </div>
    </div>
  )
}

export default ComoComprarConPaypal