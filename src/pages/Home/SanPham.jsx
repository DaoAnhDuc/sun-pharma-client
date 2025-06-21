import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../hooks/useWindowSize";
import { getLinkImage, SERVER } from "../../util";
import SanPhamModal from "./SanPhamModal";
// eslint-disable-next-line react-refresh/only-export-components
export const chunkArray = (array, chunkSize) => {
  if (!Array.isArray(array) || chunkSize <= 0) return [];

  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const SanPham = ({ isLogin }) => {
  const { width } = useWindowSize();
  const ITEM_IN_SLIDE = width < 414 ? 1 : width < 768 ? 2 : width < 1024 ? 3 : 4;
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [productSelected, setProductSelected] = useState(null)
  const [data, setData] = useState({
    title: "",
    products: [],
  });
  const mapData = chunkArray(data.products.reverse(), ITEM_IN_SLIDE);

  useEffect(() => {
    fetchData("san-pham");
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

  console.log(mapData);


  return (
    <div className="lg:py-30 py-16" style={{ background: '#f5f5f5' }}>
      <div className="container mx-auto p-4 ">
        <div className="font-bold lg:text-4xl text-3xl uppercase tracking-widest text-center ">{data?.title}</div>
        <Modal
          title="Xác nhận xóa sản phẩm"
          open={open}
          onOk={async () => {
            const res = await SERVER.API.delete(`/api/san-pham/${productSelected.id}`);
            if (res.status === 200 || res.status === 201) {
              fetchData("san-pham");
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
            <p className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: productSelected?.name }}></p>
          </div>
        </Modal>
        {
          isLogin && <div className="mx-auto container mt-10">
            <Button block type="primary" onClick={() => {
              setProductSelected(null)
              setShowModal(true)
            }}>Thêm mới sản phẩm</Button>
          </div>
        }
        {isLogin && showModal && (
          <SanPhamModal
            isOpen={true}
            onClose={() => setShowModal(false)}
            data={productSelected}
            fetchData={() => fetchData("san-pham")}
          />

        )}
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
                  <div
                    className={`bg-white  rounded`}
                    style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}
                  >
                    <div className="overflow-hidden rounded-lg p-4">
                      <img
                        src={getLinkImage(subItem?.image)}
                        alt={`Slide ${index + 1}`}
                        className="rounded bg-white w-full h-72 object-contain select-none transition-transform duration-300 ease-in-out transform hover:scale-105"
                      />
                    </div>
                    <div className="px-6 py-4 text-right">
                      <div className=" font-bold ">{subItem?.name}</div>
                      <div className="">{subItem?.price}</div>

                      {
                        isLogin &&
                        <div className="flex gap-2 p-2">
                          <Button block
                            type="primary"
                            onClick={() => {
                              setProductSelected(subItem)
                              setShowModal(true)
                            }}
                          >Chỉnh sửa</Button>
                          <Button block type="primary" danger onClick={() => {
                            setProductSelected(subItem)
                            setOpen(true)
                          }}>Xóa</Button>
                        </div>
                      }
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
