import { useRef, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';





const Carrusel = () => {
  const navigate = useNavigate()
  const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="https://i.imgur.com/JEpJZAF.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full "
    onClick={() => navigate('/youtalkTVplus')}
  />,
  <img
    src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full "
  />,
  <img
    src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    onDragStart={handleDragStart}
    role="presentation"
    className="h-40 lg:h-96 w-full "
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