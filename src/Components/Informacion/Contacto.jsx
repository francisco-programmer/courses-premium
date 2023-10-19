import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import {AiFillAlert} from 'react-icons/ai'  




const Contacto = () => {

 

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [address, setAddress] = useState('');



    const isButtonDisabled = !(name && email && address)


    const validateEmail = (value) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setEmailError("El email ingresado es incorrecto");
      } else {
        setEmailError("");
      }
    };
    const handleInputChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        validateEmail(value);

      };

    const handleSubmit = () => {          
      toast("Mensaje Enviado")               
      };
   

  return (
    <div className="p-5">

     

      <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
        <p className="font-bold text-3xl ">Contáctanos</p>      
        
      </div>
      <hr className="border-gray-100 mt-2"></hr>

      
      <div   className='py-10  grid grid-cols-4 items-center gap-5'>
        <p className='font-poppins '>Nombre Completo <strong className='text-red-500'>*</strong></p>
        <input type="text" required placeholder='Nombre y Apellido' value={name} className='bg-gray-100 p-2 rounded-lg focus:outline-none col-span-3' />
        <p className='font-poppins col-span-1 flex'>Correo Electronico <strong className='text-red-500'>*</strong><div>{emailError ? <AiFillAlert className='text-red-500 animate-pulse'/> : ""}</div></p>

         
        <input type="text" required placeholder='Email' value={email} className='bg-gray-100 p-2 rounded-lg focus:outline-none col-span-3' title='email erroneo' />
        
        <p className='font-poppins '>Mensaje <strong className='text-red-500'>*</strong></p>
        <input     type="text" required placeholder="Mensaje" value={address} className='bg-gray-100 p-2 rounded-lg focus:outline-none col-span-3'  />
        <hr className="border-gray-100 mt-2 col-span-4"></hr>
        <p className="text-xs p-5 font-poppins col-span-3">Prefieres Whatsapp ? click aqui</p>

        <div className='flex justify-end mt-5 col-span-1'>

            <button disabled={isButtonDisabled} className='bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 text-white rounded-lg' onClick={handleSubmit}>
                Enviar
            </button>
        </div>
        </div>
        
    </div>
  );
}

export default Contacto