import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Author from "./pages/Authors/Author";
import CreateBlog from "./pages/createBlog/CreateBlog";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import BlogDetail from "./pages/blogdetail/BlogDetail";

import { ID } from "./context/idContext";
import { UserContext } from "./context/UserContext";
import { blogContext } from "./context/blogsContext";
import axios from "axios";

function App() {
   const [id, setID] = useState(() => {
   
   const storedId = localStorage.getItem("userId");
      if (storedId) {
        return storedId;
      }
    return "";
  });
  const [authors, setAuthors] = useState([]);
  const [blogs, setBlogs] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: authorsData } = await axios.get(
          "http://localhost:5000/api/users/findAll"
        );
        setAuthors(authorsData);
        console.log("authors", authorsData);

        const { data: blogsData } = await axios.get(
          "http://localhost:5000/api/blogs/findAll"
        );
        setBlogs(blogsData);
        console.log("blogs", blogsData);
      } catch (error) {
        console.error(error);
      }
    };

    if (!id) {
      console.log('no user logged in');
      setID(""); 
    }
   console.log(id);
   
    fetchData(); 
  }, []);  

  async function getAllAuthors() {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/users/findAll"
      );
      setAuthors(data);
      console.log("authors", data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getAllBlogs() {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/blogs/findAll"
      );
      setBlogs(data);
      console.log("blogs", data);
    } catch (error) {
      console.error(error);
    }
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blogdetail/:id",
          element: <BlogDetail />,
        },
        {
          path: "/authors",
          element: <Author />,
        },
        {
          path: "/create",
          element: <CreateBlog />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
  ]);

  return (
    <blogContext.Provider  value={{blogs,setBlogs}}>
    <UserContext.Provider value={{authors}}>
      <ID.Provider value={{ id, setID }}>
        <RouterProvider router={router} />
      </ID.Provider>
      </UserContext.Provider>
      </blogContext.Provider>
  );
}

export default App;
