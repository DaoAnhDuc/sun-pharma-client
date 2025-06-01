import Carousel from "./Carousel"
import Footer from "./Footer"
import GioiThieu from "./GioiThieu"
import SanPham from "./SanPham"
import TinTuc from "./TinTuc"

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <GioiThieu/>
      <SanPham/>
      <TinTuc/>
      <Footer/>
    </div>
  )
}

export default HomePage