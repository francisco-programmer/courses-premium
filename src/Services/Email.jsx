import React, {useState, useEffect} from "react";

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

const Email = ({ cartItems}) => {
//sacamos el total a pagar
  const total = cartItems.reduce((acumulador, item) => {
    return acumulador + parseFloat(item.price);
  }, 0);  

  return (
    <Html lang="en" className="font-poppins">
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
          <Img src="https://i.imgur.com/n7uUJV6.png"></Img>
          <Text >Hola,  Gracias por en comprar en <Link>Cursos Baratos</Link></Text>
          <Text>Haz Click!📍 sobre el nombre del productos para disfrutar!</Text>
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
            <Column className="bg-white"><Text className="text-end">Total: $US {total}.00</Text></Column>
          </Row>
        </Section>

        <Hr />

        <Section>
          <Text className="font-poppins">Estamos encantados de tenerte como parte de nuestra comunidad de estudiantes apasionados por el aprendizaje. Queremos agradecerte por tu reciente compra de nuestros cursos premium a precios increíblemente bajos. ¡Esperamos que estés disfrutando de tu experiencia de aprendizaje!</Text>
            <Text>Nos gustaría invitarte a compartir la emoción del aprendizaje con tus amigos y familiares. Creemos que todos merecen tener acceso a la educación de calidad a precios asequibles, y con tu ayuda, puedes hacer que eso suceda.</Text>
        </Section>
      </Tailwind>
    </Html>
  );
};

export default Email;
