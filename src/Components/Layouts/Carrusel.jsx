import { useRef, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';





const Carrusel = () => {
  const navigate = useNavigate()
  const handleDragStart = (e) => e.preventDefault();

const items = [
//NEUROVENTAS PARA CHATMARKETING
  <img
    src="https://i.imgur.com/bKImjq9.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full cursor-pointer "
    onClick={() => navigate('/neuroventas-para-chat-marketing')}
  />,
  //YOUTALK TV
  <img
    src="https://i.imgur.com/JEpJZAF.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full cursor-pointer "
    onClick={() => navigate('/youtalkTVplus')}
  />,
  //IMPORTADOR DIGITAL 100K
  <img
    src="https://mentemestraoficial.com/wp-content/uploads/2023/06/6-Importador-Digital-100k.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full cursor-pointer "
    onClick={() => navigate('/importador-digital-100k')}
  />,
  <img
    src="https://i.imgur.com/fLj1N47.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full "
    onClick={() => navigate('/familias-concientes-mindvalley')}
  />,
  <img
    src="https://i.imgur.com/f2LHGLL.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full "
    onClick={() => navigate('/descubriendo-el-codigo-simbolico')}
  />,
];

  
    
   
  return (
    <div className=" ">
      <AliceCarousel
        mouseTracking
        autoPlay="true"
        infinite="true"
        responsive="true"
        autoPlayInterval="3000"
        animationDuration="3000"
        disableButtonsControls="true"
        items={items}
      />
    </div>
  );
  
}
  

export default Carrusel;