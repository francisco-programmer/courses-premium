import products from "../Cursos/Abc";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import {BsFillCartPlusFill} from 'react-icons/bs'
import ShoppingCartContext from "../../../Context/ShoppingCartContext";
import { useContext } from "react";

const Search = () => {
  const {addToCart} = useContext(ShoppingCartContext)


  const { search } = useParams();
  const navigate = useNavigate();


  const handleProductClick = (product) => {
    navigate(`/${product.route}`);
  };
 

  // * functions filter & search for title,category and autor
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.autor.toLowerCase().includes(search.toLowerCase())
    );
  });

  // * function dinamycs routes

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
       <strong>{search}</strong>
      </p>

      {
        filteredProducts.length === 0 && (<p className="font-poppins text-center p-5 text-3xl  ">No hay resultados...</p>)
      }
      {
        filteredProducts === null && (<p>no escribiste nada</p>)
      }

<div className="grid lg:grid-cols-4 grid-cols-2 gap-4 ">
        {filteredProducts.map((product) => (
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
};

export default Search;
