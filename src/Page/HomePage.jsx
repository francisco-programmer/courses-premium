import React from 'react'
import Navbar from '../Components/Layouts/Navbar'
import Sidebar from '../Components/Layouts/Sidebar'
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className="grid grid-cols-12 px-36">
        <div className="col-span-2 ">
          <Sidebar />
        </div>
        <div className='col-span-10'>
          <Outlet />

        </div>
      </div>
    </div>
  );
}

export default HomePage