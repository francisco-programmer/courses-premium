import React from 'react'
import Navbar from '../Components/Layouts/Navbar'
import Sidebar from '../Components/Layouts/Sidebar'
import { Outlet } from "react-router-dom";
import Footer from '../Components/Layouts/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-100 ">
      <Navbar />
      <div className="grid md:grid-cols-12 grid-cols-1 xl:px-36    ">
        <div className="col-span-2  lg:flex hidden ">
          <Sidebar />
        </div>
        <div className="col-span-10 bg-white mt-2 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </div>
      <Footer />
      <div className="xl:pl-80 xl:pr-36">
        <div className="mt-2 bg-white  text-center font-poppins   rounded-lg shadow-lg">
          2023  Cursos Baratos 
        </div>
      </div>
    </div>
  );
}

export default HomePage