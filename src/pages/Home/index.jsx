import "react-toastify/dist/ReactToastify.css";
import Carousel from "./Carousel";
import Footer from "./Footer";
import GioiThieu from "./GioiThieu";
import LienHe from "./LienHe";
import LinhVucHoatDong from "./LinhVucHoatDong";
import SanPham from "./SanPham";
import TinTuc from "./TinTuc";

const HomePage = ({ isLogin }) => {


  return (
    <div>
      <Carousel isLogin={isLogin} />
      <GioiThieu isLogin={isLogin} />
      <SanPham isLogin={isLogin} />
      <LinhVucHoatDong isLogin={isLogin} />
      {/* <TinTuc isLogin={isLogin} /> */}
      <LienHe isLogin={isLogin} />
      <Footer isLogin={isLogin} />

    </div>
  );
};

export default HomePage;
