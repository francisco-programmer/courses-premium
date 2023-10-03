import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import {AiFillAlert} from 'react-icons/ai'  



const Register = () => {

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
        //guardar los datos en el localstore en forma de Json
        localStorage.setItem(
          "user",
          JSON.stringify({
            name,
            email,
            address,
          })
        );
        
       navigate('/') 

       
      };
    

  return (
    <div className="p-5">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500   text-transparent bg-clip-text">
        <p className="font-bold text-3xl ">Registrame</p>
        
        
      </div>
      <hr className="border-gray-100 mt-2"></hr>
      <form   className='py-10  grid grid-cols-4 items-center gap-5'>
        <p className='font-poppins '>Nombre Completo <strong className='text-red-500'>*</strong></p>
        <input type="text" required placeholder='Nombre y Apellido' value={name} className='bg-gray-100 p-2 rounded-lg focus:outline-none col-span-3' onChange={(e) => setName(e.target.value)}/>
        <p className='font-poppins col-span-1 flex'>Correo Electronico <strong className='text-red-500'>*</strong><div>{emailError ? <AiFillAlert className='text-red-500 animate-pulse'/> : ""}</div></p>

         
        <input type="text" required placeholder='Email' value={email} className='bg-gray-100 p-2 rounded-lg focus:outline-none col-span-3' title='email erroneo' onChange={handleInputChange}/>
        
        <p className='font-poppins '>Direccion de entrega <strong className='text-red-500'>*</strong></p>
        <input type="text" required placeholder="Envios Gratuitos" value={address} className='bg-gray-100 p-2 rounded-lg focus:outline-none col-span-3'  onChange={(e) => setAddress(e.target.value)}/>
        <hr className="border-gray-100 mt-2 col-span-4"></hr>
        <p className="text-xs p-5 font-poppins col-span-3"><strong>Nota:</strong> A tu Email se enviaran tus Productos Digitales</p>

        <div className='flex justify-end mt-5 col-span-1'>

            <button disabled={isButtonDisabled} className='bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 text-white rounded-lg' onClick={handleSubmit}>
                Registrar
            </button>
        </div>
        </form>
       
    </div>
  );
}

export default Register