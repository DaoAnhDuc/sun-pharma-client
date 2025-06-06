import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../hooks/useWindowSize";
import data from "../data/trang-tintuc.json";
const TinTuc = () => {
  const { width } = useWindowSize();
  return (
    <div className="py-30 select-none" style={{ backgroundImage: 'url("https://png.pngtree.com/png-clipart/20240627/original/pngtree-grungy-off-white-textured-background-png-image_15427218.png")' }}>
      <div className="container mx-auto p-4">
        <div className="font-bold text-4xl uppercase tracking-widest text-center ">Tin tức và sự kiện</div>
        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={width < 414 ? 1 : width < 768 ? 1 : width < 1024 ? 2 : 3}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false, // continues autoplay after interaction
            }}
            loop={true}
            className="overflow-hidden swiper-tin-tuc-su-kien "
          >
            {data.tintucsukien.map((item, idx) => (
              <SwiperSlide key={idx} className="relative  cursor-pointer">
                <div className="mb-3">{item.tag}</div>
                <div className="h-16">
                  <div className="font-bold line-clamp-2 text-xl">{item.title}</div>
                </div>
                <div className="mt-4 mb-12" style={{ borderBottom: "1px solid #dfdfdf" }}></div>
                <img src={item.img} alt="" className="w-full h-80 rounded-2xl object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
