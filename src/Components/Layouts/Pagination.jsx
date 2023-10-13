import React, {useState} from 'react'
import abc from '../Layouts/Cursos/Abc'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { useNavigate, useParams} from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'
import ShoppingCartContext from '../../Context/ShoppingCartContext'
import { useContext } from "react";

const Pagination = () => {
  const { addToCart } = useContext(ShoppingCartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageActual, setPageActual] = useState(false)
  const productsPerPage = 20;
  const navigate = useNavigate();

  // Calcular el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = abc.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcular el número total de páginas
  const totalPages = Math.ceil(abc.length / productsPerPage);

  const handleProductClick = (product) => {
    navigate(`/${product.route}`);
  };
  return (
    <div>
      {/* Mostrar los productos actuales */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-2 px-2">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border-[1px]  rounded-lg shadow-lg flex flex-col justify-between  items-center"
          >
            <div className="w-[100px] h-[100px] flex  ">
              <img
                onClick={() => handleProductClick(product)}
                src={product.link_poster}
                className="rounded-lg border-[1px] cursor-pointer hover:scale-95 transition-all duration-300"
              />
            </div>
            <div>
              <p
                onClick={() => handleProductClick(product)}
                className="hover:underline  cursor-pointer font-poppins font-bold text-xs text-center text-gray-900"
              >
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
                <button
                  onClick={() => addToCart(product)}
                  className="text-gray-100  flex  bg-gradient-to-r from-sky-500 to-indigo-500 px-2 py-2 rounded-lg gap-1 items-center
                    hover:scale-95 transition-all duration-300 "
                >
                  <div>
                    <BsFillCartPlusFill className="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar la paginación */}
      <div className="mt-10 flex justify-center gap-2">
        {/* Botón de página anterior */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="    bg-gradient-to-r from-sky-500 to-indigo-500 px-2 rounded-lg text-gray-100 font-poppins py-1"
        >
          Anterior
        </button>

        {/* Números de página */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          )
        )}

        {/* Botón de página siguiente */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Pagination