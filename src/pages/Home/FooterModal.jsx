import { Input } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import { SERVER } from "../../util";
const FooterModal = ({ isOpen, onClose, data, fetchData }) => {
  const [formData, setFormData] = useState({
    ...data,
  });



  const onUpdate = async () => {
    console.log(formData);
    const res = await SERVER.API.put(`/api/footer`, formData);

    if (res.status === 200 || res.status === 201) {
      fetchData();
      onClose();
      toast.success(res.data.message);
    } else {
      toast("Error " + res.data.message);
    }
  };



  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#BA0000]">

        </h2>
        <div className="container mx-auto flex flex-col gap-2 p-4 text-black">

          <div className="flex flex-col gap-2">
            <b>Công cty</b>
            <Input value={formData?.cty} onChange={(e) => setFormData({
              ...formData,
              cty: e.target.value,
            })}></Input>
            <b>Địa chỉ</b>
            <Input value={formData?.address} onChange={(e) => setFormData({
              ...formData,
              address: e.target.value,
            })}></Input>
            <b>Phone 1</b>
            <Input value={formData?.phone} onChange={(e) => setFormData({
              ...formData,
              phone: e.target.value,
            })}></Input>
            <b>Phone 2</b>
            <Input value={formData?.call} onChange={(e) => setFormData({
              ...formData,
              call: e.target.value,
            })}></Input>
            <b>Email</b>
            <Input value={formData?.email} onChange={(e) => setFormData({
              ...formData,
              email: e.target.value,
            })}></Input>
            <b> Web</b>
            <Input value={formData?.web} onChange={(e) => setFormData({
              ...formData,
              web: e.target.value,
            })}></Input>
            <b> Title</b>
            <Input value={formData?.title} onChange={(e) => setFormData({
              ...formData,
              title: e.target.value,
            })}></Input>
            <b> Facebook</b>
            <Input value={formData?.facebook} onChange={(e) => setFormData({
              ...formData,
              facebook: e.target.value,
            })}></Input>
            <b> Youtube</b>
            <Input value={formData?.youtube} onChange={(e) => setFormData({
              ...formData,
              youtube: e.target.value,
            })}></Input>
            <b>Copyright</b>
            <Input value={formData?.copyright} onChange={(e) => setFormData({
              ...formData,
              copyright: e.target.value,
            })}></Input>
          </div>
        </div>
        <button className="w-full mt-4 py-2 bg-[var(--primary-color)] text-white" onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default FooterModal;
