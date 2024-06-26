import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


function Layout() {
  return (
    <div>
      <Navbar/>
          <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
