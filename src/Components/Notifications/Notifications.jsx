import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Notifications = () => {

    const notify = () => toast("Pago Realizado");
    
  return (
    <div>
         
        
        <ToastContainer />
    </div>
  )
}

export default Notifications