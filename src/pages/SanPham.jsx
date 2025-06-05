import { useState } from "react";
import data from "../data/san-pham.json";
const SanPham = () => {
  // const { width } = useWindowSize();
  const [showMore, setshowMore] = useState(false);
  const data2 = showMore ? data : [...data].splice(0, 8);
  return (
    <div className="bg-[#f1f1f1] py-20">
      <div className="container mx-auto p-2">
        <div className="flex justify-between items-center  mb-4">
          <div className="font-bold text-2xl uppercase tracking-widest">Sản phẩm nổi bật</div>
          <button className="mt-4 bg-white px-4 py-1 rounded text-sm cursor-pointer" onClick={() => setshowMore(!showMore)}>
            {showMore ? "Ẩn bớt" : "Xem thêm"}
          </button>
        </div>
        {/* <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={width > 1320 ? 4 : width > 1030 ? 3 : width > 670 ? 2 : 1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // continues autoplay after interaction
          }}
          loop={true}
          className="overflow-hidden"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className="relative bg-white" style={{ border: "1px solid #00000017" }}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-72 object-cover select-none transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 text-center font-bold ">{item.name}</div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {data2.map((item, idx) => (
            <div key={idx} className="relative bg-white rounded cursor-pointer" style={{ border: "1px solid #00000017" }}>
              <div className="overflow-hidden rounded-lg">
                <img src={item.img} alt={`Slide ${idx + 1}`} className="w-full h-72 object-cover select-none transition-transform duration-300 ease-in-out transform hover:scale-105" />
              </div>
              <div className="px-4 py-4 text-center font-bold ">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanPham;
