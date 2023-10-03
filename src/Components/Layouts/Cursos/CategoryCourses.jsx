import React from 'react'
import products from '../Cursos/Abc'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate, useParams} from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'
import ShoppingCartContext from "../../../Context/ShoppingCartContext";
import { useContext } from "react";


const CategoryCourses = () => {
  const {addToCart} = useContext(ShoppingCartContext)
    const {categoria} = useParams()
  const navigate = useNavigate();
  



   // * function filter category 
   const filterMarketing = products.filter(product => {
    if(categoria == 'Descarga Gratuita') {
        return product.category.toLocaleLowerCase() === categoria.toLocaleLowerCase() && product.price === "0.00"
    }else {
        return product.category.toLocaleLowerCase() === categoria.toLocaleLowerCase()
    }
   })

const category = filterMarketing[0].category
   // * function dinamycs routes
     const handleProductClick = (product) => {
       navigate(`/${product.route}`);
     };
    
  return (
    <div className="p-2">
      <p className="font-poppins text-2xl flex products-center text-gray-900">
        {" "}
        <div>
          <AiFillHome />
        </div>
        <div>
          <MdOutlineKeyboardArrowRight />
        </div>
        <p className='text-lg'>{category}</p>
      </p>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-2">
        {filterMarketing.map((product) => (
          <div
            key={product.id}
            className="border-[1px]  rounded-lg shadow-lg flex flex-col justify-between  items-center" 
          >
            
              <div className="w-[100px] h-[100px] flex  ">
                <img onClick={() => handleProductClick(product)}
                  src={product.link_poster}
                  className="rounded-lg border-[1px] cursor-pointer hover:scale-95 transition-all duration-300"
                />
              </div>
              <div>
                <p onClick={() => handleProductClick(product)} className="hover:underline  cursor-pointer font-poppins font-bold text-xs text-center text-gray-900">
                  {product.title}
                </p>
                <p className="font-poppins text-center text-xs text-gray-900">
                  {product.autor}
                </p>
              </div>
              <div className="flex items-center">
                <p className=" font-poppins  text-gray-500 text-center  py-2 ">
                  US$ {product.price}
                </p>

                <div className="p-2 justify-center flex">
                  {" "}
                  <button onClick={() => addToCart(product)}
                    className="text-gray-100  flex  bg-gradient-to-r from-sky-500 to-indigo-500 px-2 py-2 rounded-lg gap-1 items-center
                    hover:scale-95 transition-all duration-300 "
                    
                  >
                    <div>

                    <BsFillCartPlusFill className='' />
                  </div>
                  </button>
                </div>
              </div>
            </div>
         
        ))}
      </div>
    </div>
  );
}

export default CategoryCourses