import React, { useState } from 'react'

const ItemPreguntas = ({title, description}) => {
  const [showPreguntas, setShowPreguntas] = useState(false);
  return (
    <div>
      <div
        className="duration-300 transition ease-in-out  bg-gray-100 p-2 rounded-lg shadow-lg relative cursor-pointer mt-2
            "
      >
        <div onClick={() => setShowPreguntas(!showPreguntas)}  className="flex justify-between">
          <p className="font-poppins font-bold text-gray-900">{title}</p>
          <div>{showPreguntas ? "-" : "+"}</div>
        </div>

        {showPreguntas && (
          <p className="duration-[1000] transition-all font-poppins text-gray-900 ease-out mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ItemPreguntas