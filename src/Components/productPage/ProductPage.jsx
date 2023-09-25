import React,{useContext} from 'react'
import products from '../Layouts/Cursos/Abc'
import {FaUserPlus, FaShoppingCart} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ShoppingCartContext from '../../Context/ShoppingCartContext';


const ProductPage = () => {
    const { nameproduct } = useParams();
    const product = products.find(p => p.route === nameproduct);
    const { addToCart } = useContext(ShoppingCartContext);
    



  return (
    <div>
      {product.category} > {product.title}
      <div className="flex gap-5 py-5">
        <img src={product.link_poster} className="w-40 h-40" />
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-poppins font-bold text-2xl">{product.title}</p>
            <p className="font-poppins">
              <strong className="text-rojo">Autor: </strong> {product.autor}
            </p>
            <p className="font-poppins">
              <strong className="text-rojo">Formato: </strong> {product.formato}
            </p>

            <p className="font-poppins">
              <strong className="text-rojo">Peso Total:</strong> {product.peso}
            </p>
            <p className="text-green-500 font-bold">
              {product.price === 0 ? "Descarga Gratuita" : null}
            </p>

            <p className="pt-10 font-poppins font-bold text-rojo text-2xl">
              $US {product.price}
            </p>
            <button className="flex justify-center  items-center px-2 py-1 border-[1px] border-gray-900  rounded-lg gap-2  hover:bg-gray-900 hover:text-white font-poppins"
            onClick={() => addToCart(product)}>
              <div>
                <FaShoppingCart className="text-lg" />
              </div>
              <p>Añadir al Carrito</p>
            </button>
          </div>
        </div>
      </div>
      <p>
        Pagina de venta{" "}
        <button
          className="underline text-sky-500 "
          onClick={() => window.open(`${product.pagina_venta}`, "")}
        >
          aqui
        </button>
      </p>
      <div>
        <img src={product.image_pagina_venta} />
      </div>
    </div>
  );
}

export default ProductPage