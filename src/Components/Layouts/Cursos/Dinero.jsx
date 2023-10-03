mport products from '../Cursos/Abc'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Dinero = () => {
    const navigate = useNavigate();
    const [productMarketing, setProductMarketing] = (products)
  
     // * function filter category 
    const filterMarketing = products.filter(product => product.category === "Dinero")
  
  
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
          Cursos Marketing Digital
        </p>
  
        <div className="grid grid-cols-4 gap-4">
          {filterMarketing.map((product) => (
              
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
                
                  <button className="bg-gray-900 text-gray-100 flex products-center px-4 py-2 rounded-lg gap-1 text-xs" onClick={() => handleProductClick(product)}>
                    Ver
                  </button>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Dinero