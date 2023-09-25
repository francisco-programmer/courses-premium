import products from "../Cursos/Abc";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";

const Search = () => {
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
        Cursos Marketing Digital
      </p>

      {
        filteredProducts.length === 0 && (<p className="font-poppins text-center p-5 text-3xl  ">No hay resultados...</p>)
      }

      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border-[1px] p-2">
            <img src={product.link_poster} className="w-40 h-40" />
            <div className="border-b-[1px]  border-t-[1px] text-center">
              <p className="font-poppins font-bold text-xs text-gray-900">
                {product.title}
              </p>
              <p className="font-poppins  text-xs text-gray-900">
                {product.autor}
              </p>
            </div>

            <p className=" font-poppins  text-rojo text-center border-b-[1px] py-2 ">
              US$ {product.price}
            </p>
            <div className="p-2 justify-center flex">
              {" "}
              <button
                className="bg-gray-900 text-gray-100 flex products-center px-4 py-2 rounded-lg gap-1 text-xs"
                onClick={() => handleProductClick(product)}
              >
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
