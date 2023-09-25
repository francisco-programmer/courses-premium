import React from 'react'
import { Link } from 'react-router-dom';
import {BiSolidRightArrow} from 'react-icons/bi'

const Sidebar = () => {
 
   return (
     <div>
       <div className="flex flex-col gap-1 pr-2 ">
        <div className=''>

        
         <p className="bg-gray-900 text-gray-200 font-bold font-poppins mt-2 p-2">
           Categorias
         </p>
        <div className='bg-white'>

        
         <button className="font-poppins flex items-center text-sm border-b hover:underline hover:cursor-pointer">
           <div>
             <BiSolidRightArrow />
           </div>

           <Link to="descargas-gratuitas">Descargas Gratuitas</Link>
         </button>
         <button className="font-poppins flex items-center text-sm border-b hover:underline hover:cursor-pointer border-lg">
           <div>
             <BiSolidRightArrow />
           </div>

           <Link to="programacion">Programación</Link>
         </button>
         
</div>
         </div>
       </div>
     </div>
   );
}

export default Sidebar