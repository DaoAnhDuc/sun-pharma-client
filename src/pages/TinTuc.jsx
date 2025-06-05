import React from "react";
import data from "../data/trang-tintuc.json";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const TinTuc = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="font-bold text-2xl mb-2 uppercase tracking-widest">Tin tức và sự kiện</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-2">
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false, // continues autoplay after interaction
              }}
              loop={true}
              className="overflow-hidden swiper-tin-tuc-su-kien"
            >
              {data.tintucsukien.map((item, idx) => (
                <SwiperSlide key={idx} className="relative  cursor-pointer" style={{ border: "1px solid #00000017" }}>
                  <div className="overflow-hidden">
                    <img src={item.img} alt={`Slide ${idx + 1}`} className="w-full h-100 object-cover select-none transition-transform duration-300 ease-in-out transform hover:scale-105" />
                  </div>
                  <div className="absolute w-52 h-full top-0 left-6 bg-[#0009] text-white  px-4 py-4 text-center flex items-center">
                    <div className="flex flex-col items-center max-h-full">
                      <div className="font-bold overflow-hidden">{item.title}</div>
                      <div>
                        <button className="border border-white px-4 py-1 mt-4">Xem thêm</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {data.tintucsukiensub.map((item, idx) => (
                <div className="relative cursor-pointer">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={`Slide ${idx + 1}`} className="w-full h-48 object-cover select-none transition-transform duration-300 ease-in-out transform hover:scale-105" />
                  </div>
                  <div className="absolute w-full bottom-0 left-0 bg-[#0009] text-white  px-2 py-2 font-bold">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
