import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { SERVER } from "../../util";
import SimpleEditor from "../../components/SimpleEditor";
const LienHeModal = ({ isOpen, onClose, data, fetchData }) => {
  const [formData, setFormData] = useState({
    ...data,
  });

  const text3Ref = useRef(null);
  const text1Ref = useRef(null);


  const onUpdate = async () => {
    console.log(formData);
    const res = await SERVER.API.put(`/api/lien-he`, formData);

    if (res.status === 200 || res.status === 201) {
      fetchData();
      onClose();
      toast.success(res.data.message);
    } else {
      toast("Error " + res.data.message);
    }
  };

  useEffect(() => {
    if (text3Ref && text3Ref.current) {
      text3Ref.current.innerHTML = data?.address || '';
    }
    return () => { };
  }, [data?.address]);

  useEffect(() => {
    if (text1Ref && text1Ref.current) {
      text1Ref.current.innerHTML = data?.phone || '';
    }
    return () => { };
  }, [data?.phone]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#BA0000]">

        </h2>
        <div className="container mx-auto flex flex-col gap-4 p-4">

          <div className="flex flex-col gap-1">
            <b>Tiêu đề</b>
            <Input value={formData?.title} onChange={(e) => setFormData({
              ...formData,
              title: e.target.value,
            })}></Input>
            <b>PhoneTitle</b>
            <Input value={formData?.phoneTitle} onChange={(e) => setFormData({
              ...formData,
              phoneTitle: e.target.value,
            })}></Input>
            <b>Phone</b>
            <SimpleEditor
              editorRef={text1Ref}
              onChange={(v) => {
                setFormData({
                  ...formData,
                  phone: v,
                });
              }}
            />
            <b>EmailTitle</b>
            <Input value={formData?.emailTitle} onChange={(e) => setFormData({
              ...formData,
              emailTitle: e.target.value,
            })}></Input>
            <b>Email</b>
            <Input value={formData?.email} onChange={(e) => setFormData({
              ...formData,
              email: e.target.value,
            })}></Input>
            <b>AddressTitle</b>
            <Input value={formData?.addressTitle} onChange={(e) => setFormData({
              ...formData,
              addressTitle: e.target.value,
            })}></Input>
            <b>Address</b>
            <SimpleEditor
              editorRef={text3Ref}
              onChange={(v) => {
                setFormData({
                  ...formData,
                  address: v,
                });
              }}
            />
            <b>GoogleMap Share</b>

            <Input value={formData?.googleMap} onChange={(e) => setFormData({
              ...formData,
              googleMap: e.target.value,
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

export default LienHeModal;
