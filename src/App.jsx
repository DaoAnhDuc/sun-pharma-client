import { useEffect, useState } from "react";
import { SERVER } from "./util";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from './pages/Home/index'
import LayoutSunPharma from './layout/index'
import LoginModal from './layout/LoginModal'
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [loading, setloading] = useState(true);
  useEffect(() => {
    const SERVER_URL = localStorage.getItem(window.location.protocol === "https:" ? "SERVER_HTTPS" : "SERVER_HTTP");
    if (SERVER_URL) {
      console.log(SERVER_URL);
      SERVER.URL = SERVER_URL;
      SERVER.API = axios.create({
        baseURL: SERVER_URL,
      });
    } else {
      window.location.reload();
    }
    const { pathname } = window.location;
    if (pathname === "/admin") {
      setIsOpen(true);
    }
    setTimeout(() => {
      setloading(false);
    }, 200);
    return () => { };
  }, []);
  // Router Configuration
  const router = createBrowserRouter([

    {
      path: "/admin",
      element: <HomePage isLogin={isLogin} />,
    },

    {
      element: <LayoutSunPharma />,
      children: [
        {
          path: "/",
          element: <HomePage isLogin={isLogin} />,
        },
      ],
    },
  ]);
  if (loading) return null;
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} setIsLogin={setIsLogin} />
      <ToastContainer />
    </>
  );
};

export default App;
