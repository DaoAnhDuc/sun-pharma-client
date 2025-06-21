import React, { useEffect, useState } from "react";
import { getLinkImage, SERVER } from "../../util";
import { toast } from "react-toastify";
import { Button, Modal } from "antd";
import LinhVucHoatDongModal from "./LinhVucHoatDongModal";
const LinhVucHoatDong = ({ isLogin }) => {
  const [data, setData] = useState({
    title: "",
    data: [],
  });
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState(null)
  useEffect(() => {
    fetchData("linh-vuc-hoat-dong");
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
    <div className="lg:py-30 py-16">
      <div className="container mx-auto p-4">
        <div className="font-bold lg:text-4xl text-3xl uppercase tracking-widest text-center ">{data?.title}</div>
        {isLogin && showModal && (
          <LinhVucHoatDongModal
            isOpen={true}
            onClose={() => setShowModal(false)}
            data={itemSelected}
            fetchData={() => fetchData("linh-vuc-hoat-dong")}
          />

        )}
        <Modal
          title="Xác nhận xóa lĩnh vực hoạt động"
          open={open}
          onOk={async () => {
            const res = await SERVER.API.delete(`/api/linh-vuc-hoat-dong/${itemSelected.id}`);
            if (res.status === 200 || res.status === 201) {
              fetchData("linh-vuc-hoat-dong");
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {data.data.reverse().map((i) => (
            <div
              className="relative rounded-xl"
              style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}
            >
              <img src={getLinkImage(i.image)} alt="" className="w-full h-96 rounded-xl object-cover" />
              <div className="absolute bottom-0 left-0 px-6 py-6 w-full">
                <div
                  className="w-full bg-white max-w-80 py-4 px-6 rounded-xl"
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}
                >
                  <div className="font-semibold text-xl">{i.title}</div>
                  <div className="mt-1 text-gray-500">{i.description}</div>
                  {
                    isLogin &&
                    <div className="flex gap-2 p-2">
                      <Button block
                        type="primary"
                        onClick={() => {
                          setItemSelected(i)
                          setShowModal(true)
                        }}
                      >Chỉnh sửa</Button>
                      <Button block type="primary" danger onClick={() => {
                        setItemSelected(i)
                        setOpen(true)
                      }}>Xóa</Button>
                    </div>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinhVucHoatDong;
