import React, { useContext } from "react";

import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const Email = ({ cartItems }) => {
  

  console.log(cartItems);

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {},
            },
          },
        }}
      >
        <Section>
          <Text >Hola, Francisco Gracias por en comprar en <Link>Cursospremium10</Link></Text>
          <Text>Para acceder a tu Producto Haz Click!📍 sobre el nombre </Text>
          <Text className="bg-sky-500 font-bold font-poppins text-white">
            Detalles de tu pedido
          </Text>
        </Section>
        <Section className="table-auto">
          <Row >
          
            <Column>
              <Text className="bg-sky-500 text-white font-bold text-sm text-start font-poppins">
                {" "}
                Producto
              </Text>
            </Column>
            <Column>
              <Text className="bg-sky-500 text-white font-bold text-sm text-end font-poppins">
                Precio
              </Text>
            </Column>
          </Row>

          {cartItems.map((product) => (
            <Row className="boder-[1px] border-b-gray-900 bg-gray-900"  key={product.id}>
              <Column className="bg-gray-100">
              
              <Link
                  href={product.link_del_producto}
                  target="_blank"
                  className="bg-gray-100 text-gray-900 underline font-bold  text-xs "
                >
                   {product.title} 📍
                </Link>
              </Column>
              

              <Column className="bg-gray-100">
                <Text className="bg-gray-100 text-gray-900 font-bold text-end text-xs  ">
                  $US {product.price}
                </Text>
              </Column>
             
                
              
            </Row>

          ))}
          <Row>
            <Column className="bg-white"><Text className="text-end">Total: $US 0.00</Text></Column>
          </Row>
        </Section>

        <Hr />

        <Section>
          <Text></Text>
        </Section>
      </Tailwind>
    </Html>
  );
};

export default Email;
