import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { getLinkImage, SERVER } from "../../util";
const LinhVucHoatDongModal = ({ isOpen, onClose, data, fetchData }) => {
  const [formData, setFormData] = useState({
    ...data,
  });

  const text3Ref = useRef(null);
  const text1Ref = useRef(null);


  const onUpdate = async () => {
    console.log(formData);

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
      res = await SERVER.API.put(`/api/linh-vuc-hoat-dong`, formToSend);
    } else {
      res = await SERVER.API.post(`/api/linh-vuc-hoat-dong`, formToSend);
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
        <div className="container mx-auto flex flex-col gap-10 p-4">
          <div>
            {
              data?.image ? <>
                <b>Ảnh cũ</b>
                <img className="h-80" src={getLinkImage(data?.image)} alt="" />
              </> : <div className="font-bold text-2xl">Thêm mới</div>
            }
            <div className="h-10"></div>
            <b >Cập nhật ảnh mới</b>
            <input type="file" className="border px-6 py-2 w-full" name="image" onChange={handleFileChange} />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-2">
              <b>Tên lĩnh vực</b>
              <Input value={formData?.title} onChange={(e) => setFormData({
                ...formData,
                title: e.target.value,
              })}></Input>
              <b>Mô tả </b>
              <Input value={formData?.description} onChange={(e) => setFormData({
                ...formData,
                description: e.target.value,
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

export default LinhVucHoatDongModal;
