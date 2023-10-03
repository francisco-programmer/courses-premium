import React from 'react'

const MediosDePago = () => {
  return (
    <div className="p-5">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
        <p className="font-bold text-3xl ">Medio de Pago Manuales</p>
      </div>
      <hr className="border-gray-100 mt-2"></hr>

      <div className="flex-col gap-5 flex">
        <p className="font-poppins">
          Entendemos que muchas personas no usan paypal como metodo de pago
          frecuente, por este motivo se les hace difícil recargar sus cuentas
          paypal.
        </p>
        <p className="font-poppins">
          Por ese motivo habilitamos el pago manual el proceso es{" "}
          <strong>muy sencillo</strong> es el siguente:
        </p>
        <p className="font-poppins">
          <strong>1.</strong> Escribemos al Whatsapp y nos dice tu nombre, pais
          y el curso que deseas.
        </p>
        <p className="font-poppins">
          <strong>2.</strong> Una vez te respondamos con los datos de las
          cuentas realizas el pago y nos envias el capture de la transacción.
        </p>
        <p className="font-poppins">
          <strong>3.</strong> Te enviamos el Productos en el instante.
        </p>
      </div>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
        <p className="font-bold text-3xl ">Paises que se aceptan</p>
      </div>
      <hr className="border-gray-100 mt-2"></hr>
      <div>
        <p className="font-poppins ">
          <strong>Colombia: </strong> Transferencias a Cuenta Bancolombia.
        </p>
        <p className="font-poppins ">
          <strong>Estados Unidos: </strong> Transferencias Zelle.
        </p>
        <p className="font-poppins ">
          <strong>Venezuela: </strong> Pago Movíl.
        </p>
        <br></br>
        <p className="font-poppins">
          <strong>Nota: </strong> Puedes usar tu tarjeta debito o credito para
          pagar con Paypal, no es necesario que crees una cuenta Paypal, en el
          apartado de pagar con Paypal te enseñamos como hacerlo.
        </p>
        <br></br>
        <p className="font-poppins">
          ¿Tienes alguna sugerencia? No dudes en escribirnos...
        </p>
      </div>
    </div>
  );
}

export default MediosDePago