import React from 'react'

const ComoDescargarGratis = () => {
  return (
    <div className="p-5">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
        <p className="font-bold text-3xl ">Como descargar Gratis?</p>
      </div>
      <hr className="border-gray-100 mt-2"></hr>
      <p className="font-poppins">Sigue los siguientes pasos:</p>
      <div className='py-5 flex flex-col gap-5'>

        <div>
        <p className='font-poppins'><strong>1.</strong> Click en el boton registrarme en la parte superior derecha,  ingresas tus datos y das click en el boton registrar</p>
        <img src='https://i.imgur.com/PAL1vhD.jpg' />
        </div>
        <div>
        <p className='font-poppins'><strong>2.</strong> Agrega el producto de tu interes al carrito, luego haz click en el icono del carrito en la parte superior y despues en descargar gratis!</p>
        <img src='https://i.imgur.com/up2WxZF.png' />
        </div>
        <div>
        <p className='font-poppins'><strong>3.</strong>Estado en la vista de confirmar pedido da click en confirmar y listo tu producto sera enviando al Email con el que te registrarte!  </p>
        <img src='https://i.imgur.com/PldweGc.png' />
        </div>
        <p className='font-poppins'><strong>4. </strong> Ve a tu bandeja de correo electronica y da click en el nombre que el producto, podras ver online o descargar para mas comodidad.</p>
      </div>
    </div>
  );
}

export default ComoDescargarGratis