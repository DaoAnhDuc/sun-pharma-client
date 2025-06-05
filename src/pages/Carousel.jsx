import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../hooks/useWindowSize";

export default function Carousel() {
  const [data, _setData] = useState(["./images/banner.jpg", "./images/banner1.jpg", "./images/banner-05.jpg"]);
  const { width } = useWindowSize();
  const height = width / (1900 / 1000);

  if (data.length === 0) return null;
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
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
          <SwiperSlide
            key={idx}
            className="relative"
            style={{
              backgroundImage: "",
              width: "100%",
              height,
              minHeight: 240,
            }}
          >
            <img src={item} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover select-none" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white pb-40" style={{ background: "#00000060" }}>
              <div className="font-bold uppercase mb-4">Welcome! Start Growing Your Business Today</div>
              <div className="text-center text-7xl font-semibold my-6">
                Best Solutions <br /> Intro for Your Business
              </div>
              <div className="text-center">
                Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit <br /> Dui feugiat fusce conubia ridiculus tristique parturient
              </div>
              <div className="mt-8">
                <button className="bg-white text-black px-8 py-3 text-lg rounded-xl cursor-pointer hover:bg-[var(--primary-color)] hover:text-white">Get started</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
