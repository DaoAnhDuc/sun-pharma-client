import Carousel from "./Carousel"
import Footer from "./Footer"
import GioiThieu from "./GioiThieu"
import LinhVucHoatDong from "./LinhVucHoatDong"
import SanPham from "./SanPham"
import TinTuc from "./TinTuc"

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <GioiThieu/>
      <SanPham/>
      <LinhVucHoatDong/>
      <TinTuc/>
      <Footer/>
    </div>
  )
}

export default HomePage