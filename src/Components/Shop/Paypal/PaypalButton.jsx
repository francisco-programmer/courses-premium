import React, { useContext, useState, useEffect } from "react";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import ShoppingCartContext from "../../../Context/ShoppingCartContext";
import { data } from "autoprefixer";

const PaypalButton = ({ cartItems }) => {
  const clientId =
    "AVjLZaY2GmUp-DMaIf8PAZdSDXRJdA7i4diBKcJjI59vnehweG75rnP23AggbagzyR_WNBQ-AUNFSSRL";
  // const { cartItems } = useContext(ShoppingCartContext);
  const style = { layout: "vertical" };
  const [total, setTotal] = useState(0);
  const [titulos, setTitulos] = useState("");

  useEffect(() => {
    const obtenerTitulos = () => {
      return cartItems.reduce((accumulator, currentProduct, index) => {
        if (index === 0) {
          return currentProduct.title;
        } else {
          return `${accumulator}, ${currentProduct.title}`;
        }
      }, "");
    };

    setTitulos(cartItems.length);

    const calcularTotal = () => {
      return cartItems.reduce((totall, producto) => {
        const precioDecimal = parseFloat(producto.price);
        return totall + precioDecimal;
      }, 0);
    };
    setTotal(calcularTotal);
  }, [cartItems]);

  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{ clientId: "test", components: "buttons", currency: "USD" }}
      >
        <PayPalButtons onC />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalButton;
