import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/san-pham.json";
import useWindowSize from "../hooks/useWindowSize";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// eslint-disable-next-line react-refresh/only-export-components
export const chunkArray = (array, chunkSize) => {
  if (!Array.isArray(array) || chunkSize <= 0) return [];

  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const SanPham = () => {
  const { width } = useWindowSize();
  const ITEM_IN_SLIDE = width < 414 ? 1 : width < 768 ? 2 : width < 1024 ? 3 : 4;
  const mapData = chunkArray(data, ITEM_IN_SLIDE);
  return (
    <div className="lg:py-30 py-16" style={{ backgroundImage: 'url("https://png.pngtree.com/png-clipart/20240627/original/pngtree-grungy-off-white-textured-background-png-image_15427218.png")' }}>
      <div className="container mx-auto p-4 ">
        <div className="font-bold lg:text-4xl text-3xl uppercase tracking-widest text-center ">Sản phẩm nổi bật</div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 3 seconds
            disableOnInteraction: false, // continues autoplay after interaction
          }}
          loop={true}
          grabCursor={true}
          className="overflow-hidden mt-6 swipper-product"
        >
          {mapData.map((item, idx) => (
            <SwiperSlide key={idx} className={`relative `}>
              <div className={`grid lg:grid-cols-4 grid-cols-${ITEM_IN_SLIDE} gap-4`}>
                {item.map((subItem, index) => (
                  <div className={`bg-white  rounded`} style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}>
                    <div className="overflow-hidden rounded-lg p-4">
                      <img src={subItem.img} alt={`Slide ${index + 1}`} className="rounded bg-white w-full h-72 object-contain select-none transition-transform duration-300 ease-in-out transform hover:scale-105" />
                    </div>
                    <div className="px-6 py-4 text-right">
                      <div className=" font-bold ">{subItem.name}</div>
                      <div className="">Liên hệ</div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SanPham;
