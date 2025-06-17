import Carousel from "./Carousel";
import Footer from "./Footer";
import GioiThieu from "./GioiThieu";
import LinhVucHoatDong from "./LinhVucHoatDong";
import SanPham from "./SanPham";
import TinTuc from "./TinTuc";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoginModal from "../layout/LoginModal";
import { SERVER } from "../util";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const SERVER_URL = localStorage.getItem("SERVER");
    window.login = () => {
      setIsLogin(true);
    };
    window.logout = () => {
      setIsLogin(false);
    };
    if (SERVER_URL) {
      console.log(SERVER_URL);
      SERVER.URL = SERVER_URL;
      SERVER.API = axios.create({
        baseURL: SERVER_URL,
      });
    } else {
      window.location.reload();
    }
    setloading(false);
    const { pathname } = window.location;
    if (pathname === "/admin") {
      setIsOpen(true);
    }
    return () => {};
  }, []);
  if (loading) return null;

  return (
    <div>
      <Carousel />
      <GioiThieu isLogin={isLogin} />
      <SanPham />
      <LinhVucHoatDong />
      <TinTuc />
      <Footer />
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} setIsLogin={setIsLogin} />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
