import React, { useEffect, useState } from "react";
import { getLinkImage, SERVER } from "../util";
import { toast } from "react-toastify";
const LinhVucHoatDong = () => {
  const [data, setData] = useState({
    title: "",
    data: [],
  });
  useEffect(() => {
    fetchData("linh-vuc-hoat-dong");
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
    <div className="lg:py-30 py-16">
      <div className="container mx-auto p-4">
        <div className="font-bold lg:text-4xl text-3xl uppercase tracking-widest text-center ">{data?.title}</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {data.data.map((i) => (
            <div className="relative rounded-xl" style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}>
              <img src={getLinkImage(i.image)} alt="" className="w-full h-96 rounded-xl object-cover" />
              <div className="absolute bottom-0 left-0 px-6 py-6 w-full">
                <div className="w-full bg-white max-w-80 py-4 px-6 rounded-xl" style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}>
                  <div className="font-semibold text-xl">{i.title}</div>
                  <div className="mt-1 text-gray-500">{i.description}</div>
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
