import React, { useState } from 'react'
import ItemPreguntas from './ItemPreguntas'

const PreguntasFrecuentes = () => {
  const [question, setQuestion] = useState(0) 

   
 const handleClosed = (item) => {
      if(item === question) {
        setQuestion(0)
      }else {
        setQuestion(item)
      }
 }
 

  const arrayQuestion = [
    {
      id: 1,
      title: "¿Es necesario registrarme?",
      description:
        "Si, para realizar el envió de tus Productos Digitales es necesario que te registres, pero no te procupes el proceso es muy sencillo, solo necesitas un Email valido, tus nombre y la direccion de entrega.",
    },
    {
      id: 2,
      title: "¿Estos son productos físicos o digitales?",
      description:
        "Todos estos son productos digitales, el envío es como links de descarga de un servidor privado.   La descarga es inmediata, nada de capchas ni publicidad que causan incomodidad.    Te recomendamos descargar los archivos a tu disco duro local para que puedas tenerlos más seguros.",
    },
    {
      id: 3,
      title: "Por donde me envian los productos que compre?",
      description:
        "Se envian a tu Correo Electronico automaticamente, es muy importante que registres con un Email que este usando actualmente!.",
    },
    {
      id: 4,
      title: "¿Qué garantía tengo al comprar un producto aquí?",
      description: (
        <p>
          - Tu pago está garantizado en todo momento, si tienes cualquier
          reclamo u observación justificado escribe a soporte aquí y en caso de
          no llegar a un acuerdo te hacemos el reintegro de tu dinero sin
          problemas.<br></br>- La misión de esta web es apoyar a los
          emprendedores que se inician en los negocios online y cuentan con
          pocos recursos para invertir, por eso ofrecemos productos gratuitos al
          alcance de todos. Nos interesa más ayudar que unos cuantos dólares.{" "}
          <br></br>- Los productos pagos están a precio muy rebajado y ayudan a
          sostener este proyecto. - También hemos estado en tus zapatos y hemos
          padecido durante años abusos de otras webs/autores/vendedores. Sabemos
          lo que se siente ser estafado aunque sea por unos cuantos dólares.
        </p>
      ),
    },
    {
      id: 5, title: "¿Pueden recomendarme algún curso que sea efectivo ?",
      description: <p>Nuestra misión es sólo ofrecer algunos productos que salen a la luz en el internet.<br></br>

      No hemos visto todos los cursos ni verificado sus técnicas, en este aspecto no podemos darte alguna recomendación, comentario o sugerencia.<br></br>
      
      Te sugerimos buscar información especializada en internet (blogs, foros). Esto te ayudará a tener una mejor idea del producto que se adapte a tus necesidades, habilidades o nivel.</p>
    },
    {
      id:6, title: "¿Dan soporte?", description: "Claro que si, te brindaremos soporte en todo lo que necesites, solo escribemos por Email o Whatsapp!"
    }
  ];

  return (
    <div>
      <div className="p-5">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
          <p className="font-bold text-3xl ">Preguntas Frecuentes</p>
        </div>
        <hr className="border-gray-100 mt-2"></hr>

        <div className="flex flex-col gap-5">
          {arrayQuestion.map((item, index) => (
            <ItemPreguntas        
              key={index}             
              title={item.title}              
              description={item.description}              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreguntasFrecuentes