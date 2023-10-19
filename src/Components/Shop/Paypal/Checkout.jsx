// import { CLIENT_ID } from "../Config/Config";
import  { useState, useEffect, useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ShoppingCartContext from "../../../Context/ShoppingCartContext";
import DownloadFree from "../DownloadFree";
import Plunk from "@plunk/node";
import { useNavigate} from "react-router-dom";
import Email from "../../../Services/Email";
import { render } from "@react-email/components";

const Checkout = () => { 
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);
  const {cartItems, clearCart} = useContext(ShoppingCartContext)
  const navigate = useNavigate()  
  const plunk = new Plunk(import.meta.env.VITE_PLUNK_API_KEY);
  const emailHtml = render(<Email cartItems={cartItems} />);
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [total, setTotal] = useState(0)
  
 
//obtenemos los datos del usuario en el localstorage
const user = localStorage.getItem("user")

useEffect(()=> {  
  if(user) {
    setUserEmail(JSON.parse(user).email)
    setUserName(JSON.parse(user).name)    
  }
},[user])

useEffect(()=> {
  const caltotal= cartItems.reduce((acumulador, item) => {
    return acumulador + parseFloat(item.price);
  }, 0);
  setTotal(caltotal)

 },[cartItems])

  console.log("este es el total en checkout", total)

 



  const enviarEmail = () => {
    plunk.emails.send({
      to: `${userEmail}`,
      subject: `${userName} tu pedido de Cursos Baratos`,
      body: emailHtml,      
    })
  }

  // creates a paypal order
  let createOrder = (data, actions) => {    
    return actions.order
    .create({
      purchase_units: [
        {
          description: "productos",
          amount: {           
            currency: "USD",   
            value: `${total}`,
          },
        },
      ],
    })
    .then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
    }
console.log(orderID)
  
  

 
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      if (success) {
        window.close();      
      }
      
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      enviarEmail();
      setTimeout(function () {
        navigate(`/pago-confirmado/${total}`);
        clearCart();
      }, 1000);
      console.log("Order successful . Your order id is--", orderID);    }
  }, [success]);

  

  return (

    <>
    
    {
      total === 0 ? <DownloadFree /> : <div>
      <PayPalScriptProvider
        options={{
          clientId:
            "AeZ4xu9wrwLTJgQT431AxOvFOH6KjnUeP81SMkoZV3mkTm-Or4Qy1kSOML-HYY7Pz4FPMNHkJxczcpkY",
          
          
        }}
      >
        <div>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder }
            
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
