import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../hooks/useWindowSize";
import { getLinkImage, SERVER } from "../util";
const TinTuc = () => {
  const { width } = useWindowSize();
  const [data, setData] = useState({
    title: "",
    data: [],
  });
  useEffect(() => {
    fetchData("tin-tuc-va-su-kien");
    return () => {};
  }, []);

  const fetchData = async (value) => {
    try {
      const url = "/get-data?name=" + value;
      const res = await SERVER.API?.post(url, { name: value });
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:py-30 py-16 select-none" style={{ backgroundImage: 'url("/images/background.png")' }}>
      <div className="container mx-auto p-4">
        <div className="font-bold text-4xl uppercase tracking-widest text-center ">{data?.title}</div>
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
            {data.data.map((item, idx) => (
              <SwiperSlide key={idx} className="relative  cursor-pointer">
                <div className="mb-3">{item?.tag}</div>
                <div className="h-16">
                  <div className="font-bold line-clamp-2 text-xl">{item?.title}</div>
                </div>
                <div className="mt-4 mb-12" style={{ borderBottom: "1px solid #dfdfdf" }}></div>
                <img src={getLinkImage(item?.image)} alt="" className="w-full h-80 rounded-2xl object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
