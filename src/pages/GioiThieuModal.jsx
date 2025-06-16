import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import SimpleEditor from "../components/SimpleEditor";
import { SERVER } from "../util";
import { toast } from "react-toastify";
const GioiThieuModal = ({ isOpen, onClose, data, fetchData }) => {
  const [formData, setFormData] = useState({
    ...data,
    background: null,
    backgroundSub: null,
  });

  const text3Ref = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChecklistChange = (index, value) => {
    const updated = [...formData.checkList];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, checkList: updated }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    console.log(files[0]);
    
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

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

    const res = await SERVER.API.post(`/api/ve-chung-toi`, formToSend);
    if (res.status === 200) {
      fetchData();
      onClose();
      toast.success(res.message)
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (text3Ref && text3Ref.current) {
      text3Ref.current.innerHTML = data.description;
    }
    return () => {};
  }, [data?.description]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#BA0000]">{data?.title}</h2>
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
          <div className="relative">
            <div className="flex flex-col gap-4">
              <div className="text-5xl font-bold">
                <Input value={formData?.year} style={{ width: 160 }} name="year" onChange={handleChange} />
              </div>
              <div>
                <Input value={formData?.yearSub} style={{ width: 160 }} name="yearSub" onChange={handleChange} />
              </div>
              <div>
                <b>Image Main</b>
                <input type="file" className="border px-6 py-2" al name="background" onChange={handleFileChange} />
              </div>
              <div>
                <b>Image Sub</b>
                <input type="file"  className="border px-6 py-2" name="backgroundSub" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="text-justify">
            <div className="font-bold tracking-widest mb-4 uppercase">
              <Input value={formData?.title} name="title" onChange={handleChange} />
            </div>
            <div className="font-bold mb-4 uppercase lg:text-4xl text-2xl text-left lg:leading-12 leading-8 text-[var(--primary-color)]">
              <Input value={formData?.name} name="name" onChange={handleChange} />
            </div>
            <div className="flex gap-6  items-center">
              <SimpleEditor
                editorRef={text3Ref}
                onChange={(v) => {
                  console.log(v);
                  setFormData({
                    ...formData,
                    description: v
                  })
                }}
              />
            </div>
            <div className="text-nowrap flex flex-col gap-3 mt-6">
              {formData?.checkList.map((i, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <Input value={i} onChange={(e) => handleChecklistChange(index, e.target.value)} />
                </div>
              ))}
            </div>
            <div className="flex items-center  mt-6 gap-10 text-nowrap flex-wrap">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <Input value={formData?.phoneText} name="phoneText" onChange={handleChange} />
                  </div>
                  <div className="font-bold text-lg">
                    <Input value={formData?.phoneNumber} name="phoneNumber" onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div style={{ borderLeft: "1px solid #dfdfdf", height: 56 }}></div>
              <div className="text-3xl " style={{ fontFamily: "'Great Vibes'" }}>
                <Input value={formData?.ceo} name="ceo" onChange={handleChange} />
              </div>
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

export default GioiThieuModal;
