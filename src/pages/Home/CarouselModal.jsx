import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import SimpleEditor from "../../components/SimpleEditor";
import { getLinkImage, SERVER } from "../../util";
const CarouselModal = ({ isOpen, onClose, data, fetchData }) => {
  const [formData, setFormData] = useState({
    ...data,
    image: null,
  });

  const text3Ref = useRef(null);
  const text1Ref = useRef(null);


  const onUpdate = async () => {
    const formToSend = new FormData();
    for (let key in formData) {
      if (formData[key] instanceof File) {
        formToSend.append(key, formData[key]);
      } else if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          formToSend.append(`${key}[${index}]`, item);
        });
      } else {
        formToSend.append(key, formData[key]);
      }
    }
    let res
    if (data) {
      res = await SERVER.API.put(`/api/banner`, formToSend);
    } else {
      res = await SERVER.API.post(`/api/banner`, formToSend);
    }
    if (res.status === 200 || res.status === 201) {
      fetchData();
      onClose();
      toast.success(res.data.message);
    } else {
      toast("Error " + res.data.message);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  useEffect(() => {
    if (text3Ref && text3Ref.current) {
      text3Ref.current.innerHTML = data?.description || '';
    }
    return () => { };
  }, [data?.description]);

  useEffect(() => {
    if (text1Ref && text1Ref.current) {
      text1Ref.current.innerHTML = data?.title || '';
    }
    return () => { };
  }, [data?.title]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#BA0000]">

        </h2>
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
          <div>
            {
              data?.image ? <>
                <b>Ảnh banner cũ</b>
                <img className="h-80" src={getLinkImage(data?.image)} alt="" />
              </> : <div className="font-bold text-2xl">Thêm mới banner</div>
            }
            <div className="h-10"></div>
            <b >Cập nhật ảnh mới</b>
            <input type="file" className="border px-6 py-2 w-full" name="image" onChange={handleFileChange} />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <b>Tiêu đề nhỏ</b>
              <Input value={formData?.subTitle} onChange={(e) => setFormData({
                ...formData,
                subTitle: e.target.value,
              })}></Input>
              <b>Tiêu đề lớn</b>
              <SimpleEditor
                editorRef={text1Ref}
                onChange={(v) => {
                  setFormData({
                    ...formData,
                    title: v,
                  });
                }}
              />
              <b>Mô tả</b>
              <SimpleEditor
                editorRef={text3Ref}
                onChange={(v) => {
                  setFormData({
                    ...formData,
                    description: v,
                  });
                }}
              />
              <b>Tên button</b>
              <Input value={formData?.button} onChange={(e) => setFormData({
                ...formData,
                button: e.target.value,
              })}></Input>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 py-2 bg-[var(--primary-color)] text-white" onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default CarouselModal;
