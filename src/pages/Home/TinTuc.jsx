import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../hooks/useWindowSize";
import { getLinkImage, SERVER } from "../../util";
import TinTucModal from "./TinTucModal";
import { Button, Modal } from "antd";
const TinTuc = ({ isLogin }) => {
  const { width } = useWindowSize();
  const [data, setData] = useState({
    title: "",
    data: [],
  });
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState(null)
  useEffect(() => {
    fetchData("tin-tuc-va-su-kien");
    return () => { };
  }, []);

  const fetchData = async (value) => {
    try {
      const url = "/api/get-data?name=" + value;
      const res = await SERVER.API?.get(url);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="lg:py-30 py-16 select-none" style={{ background: '#f5f5f5' }}>
      <div className="container mx-auto p-4">
        <div className="font-bold text-4xl uppercase tracking-widest text-center ">{data?.title}</div>
        {isLogin && showModal && (
          <TinTucModal
            isOpen={true}
            onClose={() => setShowModal(false)}
            data={itemSelected}
            fetchData={() => fetchData("tin-tuc-va-su-kien")}
          />

        )}
        <Modal
          title="Xác nhận xóa tin tức"
          open={open}
          onOk={async () => {
            const res = await SERVER.API.delete(`/api/tin-tuc-va-su-kien/${itemSelected.id}`);
            if (res.status === 200 || res.status === 201) {
              fetchData("tin-tuc-va-su-kien");
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
            <p className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: itemSelected?.title }}></p>
          </div>
        </Modal>
        {
          isLogin && <div className="mx-auto container mt-10">
            <Button block type="primary" onClick={() => {
              setItemSelected(null)
              setShowModal(true)
            }}>Thêm mới sản phẩm</Button>
          </div>
        }
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
            {data.data.reverse().map((item, idx) => (
              <SwiperSlide key={idx} className="relative  cursor-pointer">

                <div className="mb-3">{item?.tag}</div>
                <div className="h-16">
                  <div className="font-bold line-clamp-2 text-xl">{item?.title}</div>
                </div>
                <div className="mt-4 mb-12" style={{ borderBottom: "1px solid #dfdfdf" }}></div>
                <img src={getLinkImage(item?.image)} alt="" className="w-full h-80 rounded-2xl object-cover" />
                {
                  isLogin &&
                  <div className="flex gap-2 p-2">
                    <Button block
                      type="primary"
                      onClick={() => {
                        setItemSelected(item)
                        setShowModal(true)
                      }}
                    >Chỉnh sửa</Button>
                    <Button block type="primary" danger onClick={() => {
                      setItemSelected(item)
                      setOpen(true)
                    }}>Xóa</Button>
                  </div>
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
