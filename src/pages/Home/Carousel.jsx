import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../hooks/useWindowSize";
import { toast } from "react-toastify";

import { getLinkImage, SERVER } from "../../util";
import { Button, Modal } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import CarouselModal from "./CarouselModal";


export default function Carousel({ isLogin }) {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const { width } = useWindowSize();
  const [slideSelected, setSlideSelected] = useState(null)
  const height = width / (1900 / 1000);

  useEffect(() => {
    fetchData("banner");
    return () => { };
  }, []);

  const fetchData = async () => {
    try {
      const url = "/api/banner";

      const res = await SERVER.API?.get(url);

      if (res.status === 200) {
        setData(res.data);
        setOpen(false)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  if (data.length === 0) return null;
  return (
    <div className="relative w-full">
      <Modal
        title="Xác nhận xóa banner"
        open={open}
        onOk={async () => {
          const res = await SERVER.API.delete(`/api/banner/${slideSelected.id}`);
          if (res.status === 200 || res.status === 201) {
            fetchData("banner");
            toast.success(res.data.message);
            setOpen(false)
          } else {
            toast("Error " + res.data.message);
          }
        }}
        onCancel={() => setOpen(false)}
        okText="Ok"
        cancelText="Cancel"
      >
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: slideSelected?.subTitle }}></p>
          <p className="font-bold text-3xl" dangerouslySetInnerHTML={{ __html: slideSelected?.title }}></p>
          <p dangerouslySetInnerHTML={{ __html: slideSelected?.description }}></p>
        </div>
      </Modal>

      {
        isLogin && <div className="container mx-auto mb-2">
          <Button
            icon={<PlusOutlined />}
            block
            type="primary"
            onClick={() => {
              setSlideSelected(null)
              setShowModal(true)
            }}
          >Thêm mới</Button>
        </div>
      }
      {isLogin && showModal && (
        <CarouselModal
          isOpen={true}
          onClose={() => setShowModal(false)}
          data={slideSelected}
          fetchData={() => fetchData("banner")}
        />

      )}
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
        className="overflow-hidden carousel"
      >
        {data.reverse().map((item, idx) => (
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

            <img
              src={getLinkImage(item?.image)}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover select-none"
            />
            <div
              className="absolute inset-0 flex flex-col lg:gap-10 md:gap-5 gap-1 justify-center items-center text-white lg:pb-20 pb-0"
              style={{ background: "#00000060" }}
            >
              {
                isLogin && <div className="flex gap-10">
                  <Button type="primary" icon={<EditOutlined />} size="large" onClick={() => {
                    setSlideSelected(item)
                    setShowModal(true)
                  }}>Chỉnh sửa banner</Button>
                  <Button type="primary" icon={<DeleteOutlined />} size="large" danger onClick={() => {
                    setSlideSelected(item)
                    setOpen(true)
                  }}>Xóa banner</Button>
                </div>
              }
              <div className="font-bold uppercase" dangerouslySetInnerHTML={{ __html: item?.subTitle }}></div>
              <div
                className="text-center lg:text-7xl md:text-4xl text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: item?.title }}
              ></div>
              <div className="text-center" dangerouslySetInnerHTML={{ __html: item.description }}></div>
              <div className="">
                <button className="bg-white text-black lg:px-8 lg:py-3 px-4 py-1 text-lg rounded-xl cursor-pointer hover:bg-[var(--primary-color)] hover:text-white">
                  {item?.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
