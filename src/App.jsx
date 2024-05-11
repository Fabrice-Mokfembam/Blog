import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import Author from './pages/Authors/Author';
import CreateBlog from './pages/createBlog/CreateBlog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Profile from './pages/profile/Profile';
import BlogDetail from './pages/blogdetail/BlogDetail';

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
           path: '/blogdetail',
           element: <BlogDetail/>
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
         ,
         {
           path: '/profile',
           element: <Profile/>
         }
       ]
     }, {
       path: '/login',
       element:<Login/>
     }
     , {
       path: '/registration',
       element:<Registration/>
     }
   ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
