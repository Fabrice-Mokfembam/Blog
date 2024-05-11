import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import Author from './pages/Authors/Author';
import CreateBlog from './pages/createBlog/CreateBlog';

 function App() {
  
   const router = createBrowserRouter([
     {
       path: '/',
       element: <Layout/>,
       children: [
         {
           path: '/',
           element: <Home/>
         },
         {
           path: '/blogs',
           element: <Blogs/>
         }
         ,
         {
           path: '/authors',
           element: <Author/>
         }
         ,
         {
           path: '/create',
           element: <CreateBlog/>
         }
       ]
     }
   ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
