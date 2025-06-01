import React from "react";
import data from "../data/san-pham.json";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../hooks/useWindowSize";
const SanPham = () => {
  const { width } = useWindowSize();
  return (
    <div className="bg-[#f1f1f1] py-10">
      <div className="container mx-auto p-2">
        <div className="font-bold text-2xl mb-4">Sản phẩm nổi bật</div>
        <Swiper
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
        </Swiper>
      </div>
    </div>
  );
};

export default SanPham;
