// import { CLIENT_ID } from "../Config/Config";
import React, { useState, useEffect, useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from "react-toastify";
import ShoppingCartContext from "../../../Context/ShoppingCartContext";
import DownloadFree from "../DownloadFree";

const Checkout = ({total}, {obtenerTitulos}) => {
  const CLIENT_ID = "";
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [titulos, setTitulos] = useState("");
  const {cartItems} = useContext(ShoppingCartContext)
  
 


  // creates a paypal order
  const createOrder = (data, actions) => {

    return actions.order
      .create({
        purchase_units: [
          {
            description: `${obtenerTitulos}`,
            amount: {
              
              value: `${total}`,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      if (success) {
        window.close();
        notify();

      }
      
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      
      setTimeout(function() {
        if(confirm('¡Gracias por su pago! Enviamos tu compra  a su Email!')){
          window.location.reload()
        }
      }, 1000);
      console.log("Order successful . Your order id is--", orderID);
      
    }

    
  }, [success]);

  return (

    <>
    {
      total === 0 ? <DownloadFree /> : <div>
      <PayPalScriptProvider
        options={{
          clientId:
            "Afy79kiEr4c9KcLzRSWRxddprRUP36IxHKPmNEhwpR25C18PhUaHHcjnoZ5eLmiIN2GAcC2ZrHKVikBi",
          
          currency: "USD",
        }}
      >
        <div>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </div>
      </PayPalScriptProvider>
    </div>
    }

    
    </>
  );
};

export default Checkout;
